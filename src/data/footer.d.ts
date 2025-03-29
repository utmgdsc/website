export interface FooterLinkData {
	/** The URL of the link. */
	URL: string;
	/** Whether the link is external or not. If `true`, the link will open in a new tab. */
	external?: boolean;
}

/** The type for footer.json, which contains the footer links. */
export interface FooterLinksData {
	/** The name of the section that contains the links. */
	[section: string]: {
		/** The name of the link. */
		[link: string]: FooterLinkData;
	};
}
