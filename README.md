<h1>
	<picture>
		<img alt="Google Developers Bracket" src="./src/assets/graphics/bracket.svg" height="34">
	</picture>
	GDSC Website
</h1>

Google Developer Student Clubs (GDSC) is a student-led community backed by Google Developers aimed at empowering undergraduate students from all disciplines to grow their knowledge in technology, build solutions for their local communities, and connect with other members from the Google community.

## About The Project

This is the official website for the University of Toronto Mississauga Google Developer Student Club (UTM GDSC). The frontend is built with [Next.js](https://nextjs.org/), React, and MUI.

Except where otherwise noted, the is project is licensed under the [LGPL 2.0 or later](https://www.gnu.org/licenses/gpl-2.0.html) license.

##  Getting Started

* install npm:
	```sh
	> npm install npm@latest -g
	```

* install dependencies:
	```sh
	> npm install
	```

* start the app:
	```sh
	> npm start
	```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.


## Access proprietary files
We use a submodule to access files not licensed under an open source license. To access these files, run the following commands:
```sh
git submodule sync
git submodule update --init
```

To update the submodule, run the following commands:
```sh
git submodule -q foreach git pull -q origin main
git submodule update --remote --merge
```

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Contact
You can contact us via [Discord](https://discord.gg/FMJNvhXJAa) or by [GitHub Issues](https://github.com/utmgdsc/website/issues/new/choose)
