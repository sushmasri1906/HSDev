import Image from "next/image";
import Link from "next/link";
import { blogPosts } from "../blog/BlogPosts";

export default function BlogCard({
	post,
}: {
	post: (typeof blogPosts)[number];
}) {
	return (
		<Link href={`/blog/${post.slug}`} className="block group">
			<div className="rounded-2xl overflow-hidden bg-[#121212] border border-[#1c00d3] shadow-lg transition hover:scale-[1.02]">
				<div className="relative h-48 w-full">
					<Image
						src={post.image}
						alt={post.title}
						fill
						className="object-cover group-hover:opacity-80 transition"
					/>
				</div>
				<div className="p-5 space-y-2">
					<h3 className="text-xl font-semibold text-white">{post.title}</h3>
					<p className="text-gray-400 text-sm">{post.excerpt}</p>
					<div className="text-sm text-[#1c00d3] mt-2">
						{post.tags.map((tag) => (
							<span key={tag} className="mr-2">
								#{tag}
							</span>
						))}
					</div>
				</div>
			</div>
		</Link>
	);
}
