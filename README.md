<h1>
	<picture>
		<img alt="Google Developers Bracket" src="./src/assets/graphics/bracket.svg" height="34">
	</picture>
	GDG Website
</h1>

[![Netlify Status](https://api.netlify.com/api/v1/badges/30870ebd-b4fa-4c6b-888e-da18cfb2f0b1/deploy-status)](https://app.netlify.com/sites/gdscutm/deploys) [![Maintainability](https://api.codeclimate.com/v1/badges/90a63eebb216f087e575/maintainability)](https://codeclimate.com/github/utmgdsc/website/maintainability)

Google Developer Groups (GDG) is a student-led community backed by Google Developers aimed at empowering undergraduate students from all disciplines to grow their knowledge in technology, build solutions for their local communities, and connect with other members from the Google community.

## About The Project

This is the official website for the University of Toronto Mississauga Google Developer GROUPS - UTM Chapter (GDG UTM). The frontend is built with [Next.js App Router](https://nextjs.org/docs/app) with Material UI installed.

Except where otherwise noted, the is project is licensed under the [LGPL 3.0 or later](https://www.gnu.org/licenses/lgpl-3.0.html) license. See the [License and Attribution](#license-and-attribution) section for more information.

## Getting Started

### Install dependencies:

```sh
> npm install
```

### Initialize the pre-commit hook:

> [!WARNING]
> Husky will error if you are using GitHub Desktop on Windows. You will need to add `cygpath.exe` to the bundled version of Git that GitHub Desktop uses.
> You can obtain it by downloading `cygwin-[...].tar.xz` from [a Cygwin releases mirror](https://mirror.csclub.uwaterloo.ca/cygwin/x86_64/release/cygwin/), extracting it, and copying `usr/bin/cygpath.exe` to the `resources/app/git/usr/bin` folder in GitHub desktop.

```sh
> npx husky install
```

### Start the app!

```sh
> npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Core Philosophy

The project core philosophy is a set of guidelines that should be followed when making changes to the project. These guidelines are not strict rules, but rather a set of principles that should be followed when making changes to the project. The project core philosophy is as follows:

### 1. Make it future-proof

This website should be easy to understand and maintain. Furthermore, it should not require maintenance beyond adding new workshops. When such changes are required, such as adding workshops or updating the team list, they should be as simple as possible, and well documented. Furthermore, new content that has an expiration date (for example, the team list) should be automatically removed from the website when the expiration date has passed. This ensures that the website never shows outdated information.

### 2. Keep it accessible

The project should be accessible to everyone. This means that [WCAG 2.0 AA](https://www.w3.org/WAI/WCAG22/quickref/?versions=2.1) standards should be followed as closely as possible.

### 3. Keep sensitive information private

For the privacy of our members, any information not licensed under the LGPL 3.0 or later license should be kept private. This includes the face and likenesses of our members and team.

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

Workshop information and slides are stored in the [workshop repository](https://github.com/utmgdsc/workshops), and are automatically fetched by the website. Please refer to the documentation linked there for adding a new workshop.

### Updating the Team List

> [!NOTE]
> You must have push access to [the private images repo](https://github.com/utmgdsc/website_proprietary) to update the team list on production. Otherwise, you may use your own by setting the `PROPRIETARY_IMAGES_HOSTNAME` environment variable to your own server.

1. Navigate to the private team list image repository and remove all images from the `team` folder.
2. Add the new team member images to the `team` folder.
3. Open your favourite text editor and navigate to the `team.json` file in the proprietary image repository.
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

## License and Attribution

Except where otherwise noted, the is project is licensed under the [LGPL 3.0 or later](https://www.gnu.org/licenses/lgpl-3.0.html) license. In addition, if you decide to use this project for your own GDSC chapter, please attribute us by linking to our website (https://gdscutm.com) in your footer! It would also be nice if you could let us know by [contacting us](#contact) so we can see what you've done with it! :smile:

## Contact

You can contact us via [Discord](https://discord.gg/FMJNvhXJAa) or by [GitHub Issues](https://github.com/utmgdsc/website/issues/new/choose)
