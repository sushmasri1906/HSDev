const Footer = () => {
	return (
		<footer className="bg-gray-900 text-white text-center py-4 mt-10">
			<p>© {new Date().getFullYear()} Our Portfolio. All rights reserved.</p>
			<div className="mt-2">
				<a href="https://twitter.com" className="mx-2">
					Twitter
				</a>
				<a href="https://linkedin.com" className="mx-2">
					LinkedIn
				</a>
				<a href="https://github.com" className="mx-2">
					GitHub
				</a>
			</div>
		</footer>
	);
};

export default Footer;
