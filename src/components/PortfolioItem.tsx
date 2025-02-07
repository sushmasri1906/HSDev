const PortfolioItem = ({
	image,
	title,
	link,
}: {
	image: string;
	title: string;
	link: string;
}) => {
	return (
		<div className="shadow-md rounded-lg overflow-hidden">
			<img src={image} alt={title} className="w-full h-40 object-cover" />
			<div className="p-4">
				<h3 className="text-lg font-bold">{title}</h3>
				<a href={link} className="text-blue-600 mt-2 block">
					View Project
				</a>
			</div>
		</div>
	);
};

export default PortfolioItem;
