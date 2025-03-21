import json
import os

with open("data\\all_catch_chances.json", "r") as file:
  catch_chances = json.load(file)

fish_files_path = os.path.join(os.path.dirname(__file__), "..", r"src\\data\\fishes\\")
fish_files = os.listdir(fish_files_path)

for file_name in fish_files:
  file_path = os.path.join(fish_files_path, file_name)
  
  with open(file_path, "r") as file:
    fishes = json.load(file)
          
  for fish in fishes:
    fish_name = fish["name"]
    
    if fish_name in catch_chances:
      fish["catchChances"] = catch_chances[fish_name]["chances"]
    else:
      print(f"{fish_name} catch rates not found")
          
  with open(file_path, "w", newline="", encoding="utf-8") as f:
    json.dump(fishes, f, ensure_ascii=False, indent=2)