import os
import re
import shutil
import json

sources_path = r"C:\\Users\\Guilherme\\Downloads\\webfishing"
freshwater_fish_path = r"Resources\\Creatures_Fish_Freshwater"
saltwater_fish_path = r"Resources\\Creatures_Fish_Ocean"
rain_special_fish_path = r"Resources\\Creatures_Fish_RainSpecial"
void_fish_path = r"Resources\\Creatures_Fish_Void"
alien_fish_path = r"Resources\\Creatures_Fish_Alien"
junk_fish_path = r"Resources\\Creatures_WaterTrash"

fish_folders = [
  freshwater_fish_path,
  saltwater_fish_path,
  rain_special_fish_path,
  void_fish_path,
  alien_fish_path,
  junk_fish_path,
]

save_names = [
  "freshwater",
  "saltwater",
  "rain",
  "void",
  "alien",
  "junk",
]

name_pattern = re.compile(r'item_name\s*=\s*"(.+?)"')
desc_pattern = re.compile(r'item_description\s*=\s*"(.+?)"')
catch_blurb_pattern = re.compile(r'catch_blurb\s*=\s*"(.+?)"')
tier_pattern = re.compile(r'tier\s*=\s*(.+?)')
average_size_pattern = re.compile(r'average_size\s*=\s*(.+?)')
sell_value_pattern = re.compile(r'sell_value\s*=\s*(.+?)')

texture_pattern = re.compile(r'path="res://(.+?)" type="Texture"')

textures_to_ignore = ["fish_void_voidfish"]

for index, folder in enumerate(fish_folders):
  fish_folder = os.path.join(sources_path, folder)
  fish_data = []

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
        average_size_match = average_size_pattern.search(content)
        sell_value_match = sell_value_pattern.search(content)

        if id not in textures_to_ignore:
          texture_match = texture_pattern.search(content)
          texture_path = os.path.join(sources_path, texture_match.group(1))
          texture_name = f"{id}.png"
          texture_save_path = os.path.join(os.path.dirname(__file__), "..", f"public\\img\\fish\\{texture_name}")
          shutil.copy2(texture_path, texture_save_path)

        if name_match and desc_match:
          fish_data.append({
            "id": id,
            "name": name_match.group(1),
            "description": desc_match.group(1),
            "catchBlurb": catch_blurb_match.group(1),
            "tier": int(tier_match.group(1)),
            "averageSize": float(average_size_match.group(1)),
            "sellValue": float(sell_value_match.group(1)),
            "textureName": texture_name,
          })
    
  json_file = os.path.join(os.path.dirname(__file__), "..", f"src\\assets\\fish\\{save_names[index]}.json")
  with open(json_file, "w", newline="", encoding="utf-8") as f:
    json.dump(fish_data, f, ensure_ascii=False, indent=2)

  print(f"Saved {len(fish_data)} fish to: {json_file}")