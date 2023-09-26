import { Suspense } from "react";
import { domAnimation, LazyMotion } from "framer-motion";
import { HeadingDivider, Loader } from "components";
import Error from "../../error";
import { ErrorBoundary } from "react-error-boundary";
import Image from "next/image";

export function ProjectsSection() {
	return (
		<LazyMotion features={domAnimation}>
			<section id="projects" className="section">
				<HeadingDivider title="Latest projects" />
				<div className="h-10 md:h-14" />

				<div className="flex flex-col items-center gap-8 md:gap-14">
					<Suspense
						fallback={
							<div className="flex-center">
								<Loader />
							</div>
						}
					>
						<ErrorBoundary FallbackComponent={Error}>
							<div class="max-w-6xl mx-auto lg:grid-cols-3 grid  gap-5">
								<div className="bg-white rounded-lg shadow-md">
						
						<Image
                          src="/project/sunhub.png"
                          alt="Sunhub"
                          width={400} // Adjust the width and height as needed
                          height={250}
                          className="rounded mb-4"
                        />
								<div className="p-4">
								<h2 className="text-xl font-semibold">Sunhub</h2>
									<p className="text-gray-600 mb-4">
									SunHub is a forward-thinking React-based e-commerce platform for solar products, facilitating seamless buying and selling experiences, including refurbished and used items. It introduces a specialized Trader module for renewable energy professionals to list and negotiate large-scale solar deals.</p>
									<a
										href="https://www.sunhub.com/"
										className="text-blue-600 hover:underline"
										target="_blank"
										rel="noopener noreferrer"
									>
										Live URL
									</a>
								</div>
								</div>
								<div className="bg-white rounded-lg shadow-md">
									
						<Image
                          src="/project/social27.png"
                          alt="Sunhub"
                          width={400} // Adjust the width and height as needed
                          height={250}
                          className="rounded mb-4"
                        />
								<div className="p-4">
								<h2 className="text-xl font-semibold">Social 27</h2>
									<p className="text-gray-600 mb-4">
                                      Social27 Event Platform offers AI-driven personalization, recommending agendas and relevant content for various event types. It excels in content delivery, networking, and sponsor exposure, enhancing attendee interactions and generating sponsor leads. It prioritizes accessibility and security for a seamless event experience.</p>
									<a
										href="https://www.social27.com/"
										className="text-blue-600 hover:underline"
										target="_blank"
										rel="noopener noreferrer"
									>
										Live URL
									</a>
								</div>
								</div>
								<div className="bg-white rounded-lg shadow-md">
									
									<Image
									  src="/project/cvcard.png"
									  alt="cvcard"
									  width={400} // Adjust the width and height as needed
									  height={250}
									  className="rounded mb-4"
									/>
											<div className="p-4">
											<h2 className="text-xl font-semibold">CV Card</h2>
												<p className="text-gray-600 mb-4">

												CVcard is a revolutionary platform for creating online business cards. It helps you establish a digital presence, making it easier for potential clients to connect with you. With a strong focus on marketing support, CVcard aims to quickly convert visitors into customers, offering consistent and customizable solutions for businesses and service providers.
												</p>
												<a
													href="https://cvcard.co.il/en/homepage-eng/"
													className="text-blue-600 hover:underline"
													target="_blank"
													rel="noopener noreferrer"
												>
													Live URL
												</a>
											</div>
											</div>

								
							</div>
						</ErrorBoundary>
					</Suspense>
				</div>
			</section>
		</LazyMotion>
	);
}
