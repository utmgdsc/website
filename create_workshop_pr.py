import json
import os
import sys
from github import Github

# Define the file path
FILE_PATH = "./frontend/src/data/workshops.json"

# Get the workshop data from the environment variables
workshop_name = os.environ["INPUT_WORKSHOP_NAME"]
workshop_date = os.environ["INPUT_WORKSHOP_DATE"]
workshop_host = os.environ["INPUT_WORKSHOP_HOST"]
workshop_description = os.environ["INPUT_WORKSHOP_DESCRIPTION"]
workshop_slides = os.environ.get("INPUT_WORKSHOP_SLIDES")
workshop_recording = os.environ.get("INPUT_WORKSHOP_RECORDING")
workshop_code = os.environ.get("INPUT_WORKSHOP_CODE")

# Create the workshop object
workshop = {
    "name": workshop_name,
    "date": workshop_date,
    "host": [host.strip() for host in workshop_host.split(",")],
    "description": workshop_description,
}

if workshop_slides:
    workshop["slides"] = workshop_slides
if workshop_recording:
    workshop["recording"] = workshop_recording
if workshop_code:
    workshop["code"] = workshop_code

# Load the existing workshops JSON file
if os.path.exists(FILE_PATH):
    with open(FILE_PATH, "r") as file:
        workshops = json.load(file)
else:
    workshops = {}

# Add the new workshop to the appropriate category
category = workshop_name.split(" - ")[0].strip()
if category not in workshops:
    workshops[category] = []
workshops[category].append(workshop)

# Write the updated workshops JSON file
with open(FILE_PATH, "w") as file:
    json.dump(workshops, file, indent=4)

# Get the GitHub client and create the pull request
g = Github(os.environ["GITHUB_TOKEN"])
repo = g.get_repo(os.environ["GITHUB_REPOSITORY"])
BASe_BRANCH = "main"
new_branch = f"add-workshop-{workshop_name.lower().replace(' ', '-')}"
title = f"Add {workshop_name} workshop"
body = f"Add information for {workshop_name} workshop\n\n{workshop_description}"

try:
    branch = repo.get_branch(BASe_BRANCH)
    base = branch.commit.sha

    # Create a new branch from main
    repo.create_git_ref(f"refs/heads/{new_branch}", base)

    # Create the file with the workshop information
    content = {
        category: []
    }
    # Load the existing workshops JSON file
    if os.path.exists(FILE_PATH):
        with open(FILE_PATH, "r") as file:
            workshops = json.load(file)
    else:
        workshops = {}

    # Check if the new workshop already exists
    category = workshop_name.split(" - ")[0].strip()
    if category in workshops:
        existing_workshops = workshops[category]
        for existing_workshop in existing_workshops:
            if existing_workshop["name"] == workshop_name:
                print(f"Workshop {workshop_name} already exists. Skipping.")
                sys.exit()

    # Add the new workshop to the appropriate category
    if category not in workshops:
        workshops[category] = []
    workshops[category].append(workshop)

    # Write the updated workshops JSON file
    with open(FILE_PATH, "w") as file:
        json.dump(workshops, file, indent=4)


    # Commit the file to the new branch
    repo.create_file(
        path=FILE_PATH,
        title=f"Add {workshop_name} workshop",
        content=json.dumps(content, indent=4),
        branch=new_branch
    )

    # Open the pull request
    title = f"Add {workshop_name} workshop"
    body = f"Add information for {workshop_name} workshop\n\n{workshop_description}"
    pr = repo.create_pull(title=title, body=body, base="main", head=new_branch)
    print(f"Pull request {pr.number} created!")

except Exception as e:
    print(f"An error occurred: {e}")
