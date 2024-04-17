import {
	FiGithub,
	FiLinkedin,
	FiGlobe,
	FiYoutube,
} from 'react-icons/fi';
import { IoLogoInstagram } from "react-icons/io5";
import { useData } from '../context';
const socialLinks = [
	{
		id: 1,
		icon: <FiGlobe />,
		url: '#',
	},
	{
		id: 2,
		icon: <FiGithub />,
		url: 'https://github.com/tariqahmed56',
	},
	{
		id: 3,
		icon: <IoLogoInstagram />,
		url: '#',
	},
	{
		id: 4,
		icon: <FiLinkedin />,
		url: '#',
	},
	
];

const Footer = () => {
    let {darkMood, setDarkMood} = useData();
	return (
		<div className="container mx-auto">
			<div className={`pt-20 sm:pt-30 pb-8 mt-20 border-t-2  ${darkMood ? 'border-[#435564]' : ' border-primary-light'}`}>
				{/* Footer social links */}
				<div className="font-general-regular flex flex-col justify-center items-center mb-12 sm:mb-28">
					<p className="text-3xl sm:text-4xl mb-5">
						Follow me
					</p>
					<ul className="flex gap-4 sm:gap-8">
						{socialLinks.map((link) => (
							<a
								href={link.url}
								target="__blank"
								key={link.id}
								className={`text-gray-400 hover:text-indigo-500
                                 dark:hover:text-indigo-400 cursor-pointer rounded-lg ${darkMood ? 'bg-[#1b364ef1]' : 'bg-gray-50'} hover:bg-gray-100 shadow-sm p-4
                                  duration-300`}
							>
								<i className="text-xl sm:text-2xl md:text-3xl">
									{link.icon}
								</i>
							</a>
						))}
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Footer;