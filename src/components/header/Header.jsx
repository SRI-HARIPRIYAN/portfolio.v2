import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import "./Header.css";
const Header = () => {
	const [isOpen, setIsOpen] = useState(false);
	return (
		<div>
			<div className="relative text-black  flex justify-between items-center w-full dark:bg-black dark:text-white py-8 px-10">
				<div>
					<h2 className=" text-xl font-semibold">SRI</h2>
				</div>
				<div className="hidden nav_hover sm:flex gap-5 items-center font-semibold ">
					<a>About</a>
					<a>Projects</a>
					<a>Skills</a>
					<a>Contact</a>
					<a className="hover:translate-y-0.5 transition-all cursor-pointer bg-white text-black text-center rounded-md px-2 py-1">
						Resume
					</a>
				</div>
				<div className="relative sm:hidden right-0">
					{isOpen && (
						<IoClose className="cursor-pointer text-xl" onClick={() => setIsOpen(false)} />
					)}
					{!isOpen && (
						<GiHamburgerMenu className="cursor-pointer" onClick={() => setIsOpen(true)} />
					)}
					{isOpen && (
						<div className="w-[calc(100vw-20px)] absolute text-opacity right-0 top-7 rounded-md font-semibold text-left flex flex-col gap-1.5 bg-black text-lg p-4 sm:hidden text-shadow-lg/20 ">
							<a>About</a>
							<a>Projects</a>
							<a>Skills</a>
							<a>Contact</a>
							<a className="hover:translate-y-0.5 transition-all cursor-pointer bg-white text-black text-center rounded-md px-2 py-1">
								Resume
							</a>
						</div>
					)}
				</div>
			</div>
		</div>
	);
};

export default Header;
