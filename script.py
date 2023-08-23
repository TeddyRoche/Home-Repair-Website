import os

# Define the path to the folder you want to open
folder_path = "C:\Users\Theodore Roche\Desktop\Home-Repair-Website\Webpages"

# Get a list of all files and folders in the specified directory
folder_contents = os.listdir(folder_path)

# Filter the list to include only folder names
folder_names = [item for item in folder_contents if os.path.isdir(os.path.join(folder_path, item))]

# Print the folder names
for folder_name in folder_names:
    print(folder_name)