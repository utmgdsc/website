export interface WorkshopItem {
	/** The name of the workshop */
	name: string;
	/** The date of the workshop in YYYY-MM-DD format */
	date: string;
	/** The host of the workshop */
	host: string[];
	/** The description of the workshop */
	description: string;
	/** The link to the starter code */
	code?: string;
	/** The link to the slides */
	slides?: string;
	/** The link to the recording */
	recording?: string;
}

export interface WorkshopCategory {
	[categoryName: string]: WorkshopItem[];
}

export interface AllWorkshops {
	[year: string]: WorkshopCategory;
}
