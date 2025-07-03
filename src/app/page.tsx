import Link from "next/link";

export default function Home() {
	return (
		<div>
			<main className="flex flex-col items-center justify-center">
				<div className="flex flex-col text-center w-full mb-10">
					<h2 className="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1">ROOF PARTY POLAROID</h2>
					<h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Master Cleanse Reliac Heirloom</h1>
					<p className="lg:w-2/3 mx-auto leading-relaxed text-base">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably heard of them man bun deep jianbing selfies heirloom prism food truck ugh squid celiac humblebrag.</p>
				</div>
				<Link className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg" href={"/checkout"}>Checkout</Link>
			</main>
		</div>
	);
}
