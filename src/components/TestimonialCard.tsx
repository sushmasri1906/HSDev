const TestimonialCard = ({ name, text }: { name: string; text: string }) => {
	return (
		<div className="border p-5 rounded-lg shadow-md text-center">
			<p className="italic">"{text}"</p>
			<h4 className="font-bold mt-3">- {name}</h4>
		</div>
	);
};

export default TestimonialCard;
