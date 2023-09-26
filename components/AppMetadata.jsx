const author = "Ramzan Arif Sheikh";
const description =
	"Software developer from Lahore, Republic of Pakistan, who loves to develop beautiful websites, single page applications, customer relationship management or code from scratch using React and Next.js";
	const url = "https://portfolio-jade-kappa-38.vercel.app/";
	export const AppMetadata = {
		metadataBase: new URL("https://portfolio-jade-kappa-38.vercel.app/"),

	title: {
		default: `Portfolio | ${author}`,
		template: `%s | ${author}`
	},
	description: description,
	icons: {
		icon: "/favicon.png"
	},
	keywords: [
		"Ramzan Sheikh",
		"Ramzan Arif Sheikh",
		"Ramzan Sheikh - software developer",
		"Frontend developer",
		"React developer",
		"Next JS developer",
		"Node developer",
		"Angular developer",
		"Portfolio website",
		"Frontend Developer Portfolio"
	],
	creator: author,
	authors: [{ name: author, url: url }],
	colorScheme: "dark",
	openGraph: {
		title: `${author} | Portfolio`,
		description: description,
		url: url,
		siteName: `${author} | Portfolio`,
		images: [
			{
				url: "https://portfolio-jade-kappa-38.vercel.app/",
				width: 800,
				height: 600,
				alt: "My personal portfolio website"
			},
			{
				url: "https://portfolio-jade-kappa-38.vercel.app/",
				width: 1800,
				height: 1600,
				alt: "My personal portfolio website"
			}
		],
		locale: "en-US",
		type: "website"
	}
};
