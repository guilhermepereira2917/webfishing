import os
import re
import shutil

sources_path = r"C:\\Users\\Guilherme\\Downloads\\webfishing"
fish_path = r"Resources\\Creatures_Fish_Freshwater"

name_pattern = re.compile(r'item_name\s*=\s*"(.+?)"')
desc_pattern = re.compile(r'item_description\s*=\s*"(.+?)"')
catch_blurb_pattern = re.compile(r'catch_blurb\s*=\s*"(.+?)"')
tier_pattern = re.compile(r'tier\s*=\s*(.+?)')
texture_pattern = re.compile(r'path="res://(.+?)" type="Texture"')

fish_data = []

fish_folder = os.path.join(sources_path, fish_path)
for filename in os.listdir(fish_folder):
  if filename.endswith(".tres"):
    file_path = os.path.join(fish_folder, filename)

    with open(file_path, "r", encoding="utf-8") as file:
      content = file.read()

      id = filename.rsplit(".", 1 )[0]

      name_match = name_pattern.search(content)
      desc_match = desc_pattern.search(content)
      catch_blurb_match = catch_blurb_pattern.search(content)
      tier_match = tier_pattern.search(content)

      texture_match = texture_pattern.search(content)
      texture_path = os.path.join(sources_path, texture_match.group(1))
      texture_save_path = os.path.join(os.path.dirname(__file__), "..", f"public\\img\\fish\\{id}.png")      
      shutil.copy2(texture_path, texture_save_path)

      if name_match and desc_match:
        fish_data.append({
          "id": id,
          "name": name_match.group(1),
          "description": desc_match.group(1),
          "catchBlurb": catch_blurb_match.group(1),
          "tier": int(tier_match.group(1)),
        })

import json

json_file = os.path.join(os.path.dirname(__file__), "..", "src\\assets\\fish\\freshwater.json")
with open(json_file, "w", newline="", encoding="utf-8") as f:
  json.dump(fish_data, f, ensure_ascii=False, indent=2)

print(f"Saved {len(fish_data)} fish to: {json_file}")
