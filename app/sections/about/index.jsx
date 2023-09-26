"use client";

import { useRef } from "react";
import { LazyMotion, domAnimation, useInView } from "framer-motion";
import { HeadingDivider } from "components";
import { TimeLine } from "./TimeLine";

export function AboutSection() {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true });

	return (
		<LazyMotion features={domAnimation}>
			<section id="about" className="section">
				<HeadingDivider title="About me" />
				<div className="pt-10 pb-16 max-w-5xl flex flex-col gap-3">
					<div
						tabIndex="0"
						ref={ref}
						className="text-xl font-light leading-relaxed"
						style={{
							transform: isInView ? "none" : "translateX(-200px)",
							opacity: isInView ? 1 : 0,
							transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
						}}
					>
						<p>
							My name is Ramzan Arif Sheikh. I successfully graduated from Comsats in computer
							science faculty.
						</p>
						<p>
							During my university years, I developed a deep passion for web programming, and I
							consistently engaged in learning new concepts and techniques in this field.
						</p>
						<p>So, officially, my programming journey began in 2018 as a web developer.</p>
						<p className="my-3.5">
							I enjoy learning technologies that interest me, which is why I dedicated a significant
							amount of time to working with web applications.
						</p>
						<p>
						Web Developer with a demonstrated history of working in the information technology and services industry. Skilled in JavaScript, TypeScript, Databases, HTML ,React, Angular, Node, Next JS and Nest JS.<br/>
                        ▪ 3+ years of professional experience in Stack Development using Angular, React JS and Node JS including JavaScript, Next JS, and Nest JS.<br/>
                        ▪ Actively involved in researching and improving code structure and code quality using React Hooks.<br/>
                        ▪ Experience in essential Libraries such as React Router, Axios, API Sauce, JWT, Redux, Redux Toolkit, and more.<br/>
                        ▪ Expertise in taking over existing applications and making the end-to-end development lifecycle from development to production after working closely with both internal and external stakeholders.<br/>
                        ▪ MultiLingual, MultiTimeZones, and MultiCurrency systems using i18n, intl js.<br/>
                        ▪ Experience in backend technologies and Node Frameworks including NodeJS, ExpressJs, MongoDB, and NestJS.
						</p>
						
					</div>
				</div>

				<TimeLine />
			</section>
		</LazyMotion>
	);
}
