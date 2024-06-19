export interface Receiver {
	id: string;
	name: string;
	production: {
		ytpa: number;
		targetShare: number;
		boy: number;
		dom: number;
	};
	pedigree: {
		capital: number;
		film: number;
		declare: number;
		rivals: number;
		confrence: string;
	};
	physical: {
		height: number;
		weight: number;
		ras: number;
	};
};

// here I am creating a typescript interface (a template kind of that outlines the properties and types expected for each receiver) 