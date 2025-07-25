import Checkout from "@/components/checkout";
import { Wallet } from "lucide-react";

export default function Home() {
	return (
		<main className="my-20">
			<section className="flex flex-col items-center justify-center">
				<div className="flex flex-col items-center justify-center text-center w-full mb-10">
					<Wallet size={100} className="text-indigo-500" />
					<h2 className="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1">ROOF PARTY POLAROID</h2>
					<h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Master Cleanse Reliac Heirloom</h1>
					<p className="lg:w-2/3 mx-auto leading-relaxed text-base">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably heard of them man bun deep jianbing selfies heirloom prism food truck ugh squid celiac humblebrag.</p>
				</div>
				<a className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg" href="#checkout">Checkout</a>
			</section>
			<section className="text-gray-600 body-font">
				<div className="container px-5 py-24 mx-auto">
					<div className="flex flex-col">
						<div className="h-1 bg-gray-200 rounded overflow-hidden">
							<div className="w-24 h-full bg-indigo-500"></div>
						</div>
						<div className="flex flex-wrap sm:flex-row flex-col py-6 mb-12">
							<h1 className="sm:w-2/5 text-gray-900 font-medium title-font text-2xl mb-2 sm:mb-0">Space The Final Frontier</h1>
							<p className="sm:w-3/5 leading-relaxed text-base sm:pl-10 pl-0">Street art subway tile salvia four dollar toast bitters selfies quinoa yuccie synth meditation iPhone intelligentsia prism tofu. Viral gochujang bitters dreamcatcher.</p>
						</div>
					</div>
					<div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
						<div className="p-4 md:w-1/3 sm:mb-0 mb-6">
							<div className="rounded-lg h-64 overflow-hidden">
								<img alt="content" className="object-cover object-center h-full w-full" src="https://dummyimage.com/1203x503" />
							</div>
							<h2 className="text-xl font-medium title-font text-gray-900 mt-5">Shooting Stars</h2>
							<p className="text-base leading-relaxed mt-2">Swag shoivdigoitch literally meditation subway tile tumblr cold-pressed. Gastropub street art beard dreamcatcher neutra, ethical XOXO lumbersexual.</p>
							<a className="text-indigo-500 inline-flex items-center mt-3">Learn More
								<svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
									<path d="M5 12h14M12 5l7 7-7 7"></path>
								</svg>
							</a>
						</div>
						<div className="p-4 md:w-1/3 sm:mb-0 mb-6">
							<div className="rounded-lg h-64 overflow-hidden">
								<img alt="content" className="object-cover object-center h-full w-full" src="https://dummyimage.com/1204x504" />
							</div>
							<h2 className="text-xl font-medium title-font text-gray-900 mt-5">The Catalyzer</h2>
							<p className="text-base leading-relaxed mt-2">Swag shoivdigoitch literally meditation subway tile tumblr cold-pressed. Gastropub street art beard dreamcatcher neutra, ethical XOXO lumbersexual.</p>
							<a className="text-indigo-500 inline-flex items-center mt-3">Learn More
								<svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
									<path d="M5 12h14M12 5l7 7-7 7"></path>
								</svg>
							</a>
						</div>
						<div className="p-4 md:w-1/3 sm:mb-0 mb-6">
							<div className="rounded-lg h-64 overflow-hidden">
								<img alt="content" className="object-cover object-center h-full w-full" src="https://dummyimage.com/1205x505" />
							</div>
							<h2 className="text-xl font-medium title-font text-gray-900 mt-5">The 400 Blows</h2>
							<p className="text-base leading-relaxed mt-2">Swag shoivdigoitch literally meditation subway tile tumblr cold-pressed. Gastropub street art beard dreamcatcher neutra, ethical XOXO lumbersexual.</p>
							<a className="text-indigo-500 inline-flex items-center mt-3">Learn More
								<svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
									<path d="M5 12h14M12 5l7 7-7 7"></path>
								</svg>
							</a>
						</div>
					</div>
				</div>
			</section>
			<section id="checkout" className="w-full mx-auto">
				<Checkout />
			</section>
		</main>
	);
}
