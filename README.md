<div id="top"></div>

<br />
<div align="center">
	<h3 align="center">Google Developer Student Club Website</h3>
	<p align="center">
		<div>Full-Stack Web Application Project</div>
		<br />
		<a href="https://github.com/utmgdsc/website/issues">Report Bug</a>
		<a href="https://github.com/utmgdsc/website/issues">Request Feature</a>
		<br/>
		<br/>
		<div>This project is still <strong>In Progress</strong> and <strong>Not Deployed</strong>.</div>
	</p>
	<hr>
</div>

<details open>
	<summary>Table of Contents</summary>
	<ul>
		<li>
			<a href="#about-the-project">About The Project</a>
			<ul>
				<li><a href="#motivation">Motivation</a></li>
			</ul>
		</li>
		<li>
			<a href="#getting-started">Getting Started</a>
			<ul>
				<li><a href="#prerequisites">Prerequisites</a></li>
				<li><a href="#run-app-npm">Run App (npm)</a></li>
				<li><a href="#run-app-docker">Run App (docker)</a></li>
				<li><a href="#built-with">Built With</a></li>
			</ul>
		</li>
		<li><a href="#contribution">Contribution</a></li>
		<li><a href="#contact">Contact</a></li>
		<li><a href="#reference">Reference</a></li>
	</ul>
</details>

## About The Project

This is a semester-long final project for CSC301 in University of Toronto Mississauga.

The project owner is [Google Developer Student Club](https://gdscutm.com/) in UTM.

Our team is responsible for developing a full-stack website for the club from scratch, with the help from TAs and GDSC members.

### Motivation

The purpose of CSC301 is to let us get used to the agile development cycle and experience the engineering process in a practical environment, so we decided to collaborate with GDSC, in order to fully simulate a real-world environment. In this case, we have to push ourselves to learn new technologies and satisfy stakeholders' requirements in a timely manner.

Learning new knowledge and turning the knowledge into our tangible asset is what we are all passionated about, which both can be done in this course. Beside our gain from this course, we sincerely hope GDSC can take benefits from our collaboration as well. So our ultimate goal is to build a fully functional, user-friendly and easy manipulating web application, which can be deployed with minimal modifications required, for GDSC to use our product.

<p align="right">(<a href="#top">back to top</a>)</p>

## Getting Started

While this product is still in development, these following steps are recommended to be done in a virtual environment

### Prerequisites

* npm
	```sh
	> npm install npm@latest -g
	```

### Run App (npm)

Run the following command to clean up the `node_modules` and install dependencies in `root`, `backend` and `frontend`,

```sh
> chmod +x build.sh
> ./build.sh
```

Or manually run npm install in `root`, backend` and `frontend` respectively.

To run the app as a whole after installing dependencies, make sure you are in the root directory,

```sh
> npm start
```

To run the frontend only or backend only, make sure you are in the specific directory,

then run,

```sh
> npm start
```

### Run App (docker)

Detailed instructions are in [docker-walkthrough.md](https://github.com/UTSCCSCC01/finalprojectw22-GDSC2.0/tree/master/docker-walkthrough.md).

### Built With

<details open>
	<summary><strong>MERN Stack</strong></summary>
	<ul>
		<li><a href="https://www.mongodb.com">MongoDB</a></li>
		<li><a href="https://expressjs.com">Express</a></li>
		<li><a href="https://reactjs.org">React</a></li>
		<li><a href="https://nodejs.org/en/docs/">Node.js</a></li>
	</ul>
</details>
<br>
<details open>
	<summary><strong>Others</strong></summary>
	<ul>
		<li><a href="https://github.com/axios/axios">Axios</a> (Front-End Request Framework)</li>
		<li><a href="https://mui.com">React-Bootstrap</a> (Front-end Styling Framework)</li>
		<li><a href="https://formik.org">Formik</a> (Front-End Form Shortcut)</li>
		<li><a href="https://github.com/auth0/node-jsonwebtoken">Node.js JWT</a> (Token Authentication)</li>
	</ul>
</details>

<p align="right">(<a href="#top">back to top</a>)</p>

## Contribution

All of our teammembers agreed on using git flow during development.

We name our branches based on the content we are working in the specific branch:
	<ul>
		<li>If the content is <strong>less</strong> likely be re-visited in later sprints, we will name it as same as the file name or its functionality.</li>
		<li>If the content is <strong>most</strong> likely be re-visited in later sprints, we will name it as same as the file name or its functionality <strong>with a prefix of sprint number</strong>.</li>
	</ul>

Our github issues feature is designated for users who are not in our team. We mainly communicate via discord about bugs or issues, as well as the comments in pull request, because pull request is mandatory for each update in development and main branch.

<p align="right">(<a href="#top">back to top</a>)</p>

## Contact

<p align="right">(<a href="#top">back to top</a>)</p>

## Reference

<p align="right">(<a href="#top">back to top</a>)</p>

<hr>

###### All rights reserved to UTM CSC301 course
