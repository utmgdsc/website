# **Documentation**

## Frontend

The main file in our frontend is App.js which contains all the components of the website. Based on the chosen endpoint this file routes to the appropriate component in our program.

### Components
About:
This page gives some information about GDSC and the goal of the community 

Admin:
An admin page that allows admins to see all the students and mentors part of GDSC along with information about resources, events, and past projects

Application:
This page allows students and mentors to submit applications in order to join GDSC projects. The forms for students and mentors are separate forms

Homepage:
The GDSC logo appears at the top of the navbar and clicking it will take the user back to the homepage

NavbarMenu:
An interactive navigation bar that allows users to easily transition to different parts of the website

Login:
A login in screen that prompts users for their username, email, and password

Register:
A register page for new users that do not have an account and want to create one

Bug Report:
A page that allows users of the site to report bugs to admins

Page Not Found:
This page deals with incorrect url requests or pages that do not exist

Dark Mode:
This is a feature of our frontend that allows users to view the page in dark mode

## Backend

The main file in the backend is server.js which receives API requests and forwards those requests to the appropriate file

### Routes
Login:
This route handles a login action by checking the user credentials with the database

Register:
This route handles a register action by storing the necessary information in the database

Applications:
This route handles the backend work regarding applications that are created by users on the frontend

Answers:
This route deals with the answers given by potential candidates through the application form. This information is also stored in the database

Resources:
This route handles request that deal with the resources page.

Send Mail:
This route handles any error or bug requests reported by users

Team:
This route deals with requests from the frontend dealing with teams.

Past Projects:
This route allows admins to make changes to the past projects page in the frontend.

### Models
Users:
This file outlines the required information needed to create a user in the database. This includes a Firstname, lastname, username, email, password, student #

Answer:
This file outlines the format of the answers provided from the application form and how they will look in the database.

Resource:
This model outlines the needed attributes a user could have for the resources page. Fields include: Name, link, description, section


Activity Log:
This model keeps track of activity on the website such as user log in\log out, admin actions etc. Fields include: User, action, date


Admin Table:
This model is used to represent all users that have admin status. Fields include: Firstname, lastname, username, email, password


Project:
This file is used to outline how the website keeps track of projects posted on the website. Fields include: Name, image path, link, description

Teams:
This model represents how the database wil store the different teams. This includes the team name, project description, and the teams elevator pitch

Team Member Model:
This model represents the users in each of the teams. Fields include: Student_num ,team (team_id), role



### Database

Mongo DB is the database framework chosen to store information that the website gathers and needs to function correclty. MongoDB is a NoSQL DBMS where data is stored in collections consisting of documents
