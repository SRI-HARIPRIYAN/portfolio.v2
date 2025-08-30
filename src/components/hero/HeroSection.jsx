import React from "react";
import { techStacks } from "../../data/techStack.js";
import "./heroSection.css";
const HeroSection = () => {
	return (
		<div className=" bg-black text-white min-h-[calc(100vh-50px)]">
			<div className=" flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-10 pt-22">
				<div className="text-sm bg-slate-850 text-opacity rounded-4xl px-2 py-1 border-2 border-slate-700 hover:scale-105">
					Full-Stack Developer
				</div>
				{/* <div className="text-sm bg-slate-950 text-opacity rounded-4xl px-2 py-1 border-2 border-slate-700 hover:scale-105">
					Gen-AI Developer
				</div> */}
			</div>
			<div className="mt-5 flex justify-center typewriter">
				<h1 className="text-6xl px-4  text-white font-bold text-center">
					Hi, I'm Sri Haripriyan{" "}
				</h1>
				<div className="w-1 bg-blue-400 rounded-2xl"></div>
			</div>
			<section className="text-center font-bold mt-5 leading-8 text-lg ">
				<p>
					<span className="bg-gradient-to-r from-blue-500 via-blue-300 to-black rounded-l-2xl px-2 py-0.5">
						Full Stack Developer
					</span>{" "}
					| crafting scalable and user-focused solutions
				</p>
				<p>Turning ideas into clean, functional, and impactful code.</p>
			</section>
			<section className="mt-12">
				<h2 className=" text-center border-2 font-semibold border-gray-600 text-gray-500 w-fit mx-auto px-2 rounded-2xl  py-0.5">
					Tech Stack
				</h2>
				<div className="flex justify-center flex-wrap gap-2 sm:gap-4 lg:gap-8 mt-10">
					{techStacks.map((tech, index) => (
						<div
							key={index}
							className="border-2 w-fit flex items-center gap-1 border-gray-800 text-gray-300 text-xs rounded-2xl px-2 py-1"
						>
							<img src={tech.icon} alt="" className="w-5" />
							<p>{tech.name}</p>
						</div>
					))}
				</div>
			</section>
		</div>
	);
};

export default HeroSection;
