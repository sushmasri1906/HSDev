const ServicesCard = ({
	title,
	description,
}: {
	title: string;
	description: string;
}) => {
	return (
		<div className="border p-5 rounded-lg shadow-md">
			<h3 className="text-xl font-bold">{title}</h3>
			<p className="mt-2">{description}</p>
		</div>
	);
};

export default ServicesCard;
