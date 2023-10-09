<h1>
	<picture>
		<img alt="Google Developers Bracket" src="./src/assets/graphics/bracket.svg" height="34">
	</picture>
	GDSC Website
</h1>

[![Netlify Status](https://api.netlify.com/api/v1/badges/30870ebd-b4fa-4c6b-888e-da18cfb2f0b1/deploy-status)](https://app.netlify.com/sites/gdscutm/deploys)

Google Developer Student Clubs (GDSC) is a student-led community backed by Google Developers aimed at empowering undergraduate students from all disciplines to grow their knowledge in technology, build solutions for their local communities, and connect with other members from the Google community.

## About The Project

This is the official website for the University of Toronto Mississauga Google Developer Student Club (UTM GDSC). The frontend is built with [Next.js](https://nextjs.org) with Material UI installed.

Except where otherwise noted, the is project is licensed under the [LGPL 2.0 or later](https://www.gnu.org/licenses/gpl-2.0.html) license.

## Getting Started

* install dependencies:
	```sh
	> npm install
	```

* initialize the pre-commit hook:
	> **Note**: Husky will error if you are using GitHub Desktop on Windows. If this is the case, skip this step or uninstall the hook by running `npx husky uninstall` in the root project directory.
	```sh
	> npx husky install
	```

* start the app:
	```sh
	> npm run dev
	```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.


## Maintenance
### Adding Google Tag Manager (GTM) ID
To add the GTM ID, create a `.env.local` file or set the `NEXT_PUBLIC_GTM_ID` environment variable to the GTM ID.

For example, if the GTM ID is `GTM-XXXXXXX`, then the `.env.local` file should contain the following:
```sh
NEXT_PUBLIC_GTM_ID=GTM-XXXXXXX
```

### Updating the Navbar
When creating new pages, the navbar must be updated to include the new page if desired. As of commit [a414b04](https://github.com/utmgdsc/website/commit/a414b0440bb11440ceb96d05d8d7da0d856da6cd), the navbar is generated from a JS object and contains an array of paths and their corresponding labels. To update the navbar, edit [NavbarTabData.js](https://github.com/utmgdsc/website/blob/main/src/data/NavbarTabData.js) and read the comments for instructions.


### Adding a new Workshop
> **Note**: You must have GitHub action permissions to add a new workshop.

1. Navigate to the [Create Workshop](https://github.com/utmgdsc/website/actions/workflows/create-workshop-pull-request.yml) GitHub action.
2. Click the `Run workflow` button.
3. Select the `develop` branch. (Make sure the `develop` branch is up to date with the `main` branch first.)
4. Fill in the prompts as needed.
	* To add newlines in the description, use the `\n` escape sequence.
5. Click the `Run workflow` button.
6. [Create a pull request from the `develop` branch to the `main` branch](https://github.com/utmgdsc/website/compare/main...develop).
7. Merge, and you're done!

### Updating the Team List
> **Note**: You must have push access to [the private images repo](https://github.com/utmgdsc/website_proprietary) to update the team list on production. Otherwise, you may use your own by setting the `PROPRIETARY_IMAGES_HOSTNAME` environment variable to your own server.

1. Navigate to the private team list image repository and remove all images from the `team` folder.
2. Add the new team member images to the `team` folder.
3. Open your favourite text editor and navigate to the [`src/data/team.json`](https://github.com/utmgdsc/website/blob/main/src/data/team.json) file.
4. Follow the schema to replace the file with the new team members to the JSON file.
	- Note that the `image` field is the name of the image file in the private team list image repository, under the `team` folder.
	- Each key in the JSON object is the name of the team, which can be changed. The value is an array of team members.
5. Don't forget to update the component expiration date on the `ExpiryContainer` component in [`src/app/page.jsx`](https://github.com/utmgdsc/website/blob/main/src/app/page.jsx) to reflect the new team. Otherwise, the team list might not appear on the website.
   - After the expiration date has passed, the team list will be removed from the website. This ensures the team list never shows outdated information.
6. Commit and push the changes to the `develop` branch, then [open a PR](https://github.com/utmgdsc/website/compare/main...develop) and merge! ^-^

### Updating the FAQ on the Resources page
1. Open your favourite text editor and navigate to the [`src/data/faq.json`](https://github.com/utmgdsc/website/blob/main/src/data/faq.json) file.
2. Follow the schema to update the categories and/or the questions and answers within them.
3. Commit and push the changes to the `develop` branch, then [open a PR](https://github.com/utmgdsc/website/compare/main...develop) and merge! :yum:

## Learn More
To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
- [Customizing Material UI](https://mui.com/material-ui/customization/how-to-customize/) - approaches to customizing Material UI.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Contact
You can contact us via [Discord](https://discord.gg/FMJNvhXJAa) or by [GitHub Issues](https://github.com/utmgdsc/website/issues/new/choose)
