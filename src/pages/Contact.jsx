import { motion } from 'framer-motion';
// import ContactDetails from '../components/contact/ContactDetails';
// import ContactForm from '../components/contact/ContactForm';
import { FiMap , FiPhone , FiMail , FiMapPin } from 'react-icons/fi';
import { useData } from '../context';

const Contact = () => {
    let {darkMood}= useData()
    const contacts = [
        {
            id: 1,
            name: 'Pakistan , tharparkar Sindh',
            icon: <FiMapPin />,
        },
        {
            id: 2,
            name: 'tariq@gmail.com',
            icon: <FiMail />,
        },
        {
            id: 3,
            name: '+92 34201908090',
            icon: <FiPhone />,
        },
    ];
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{
				ease: 'easeInOut',
				duration: 0.5,
				delay: 0.1,
			}}
			className="container mx-auto flex flex-col-reverse lg:flex-row py-5 lg:py-10 lg:mt-10"

>
<div className="w-full  flex flex-wrap-reverse gap-5">
			
            <form onSubmit={(e)=>e.preventDefault()} className={`md:w-1/3 shadow-md ${darkMood ? 'bg-slate-800' : 'bg-slate-100'} p-7 rounded`}>
            <div className="font-general-regular mb-4">
			<label
				className="block text-lg text-primary-dark dark:text-primary-light mb-1"
				htmlFor={'name'}
			>
				{'Name'}
			</label>
			<input
				className={`w-full px-5 py-2 border ${darkMood ? 'bg-slate-800' : 'bg-slate-100'} border-gray-300 dark:border-primary-dark border-opacity-50
                 text-primary-dark dark:text-secondary-light bg-ternary-light dark:bg-ternary-dark rounded-md shadow-sm text-md`}
				type='text'
				id={'name'}
				name='Name'
				placeholder='Type your Name here'
				required
			/>
            <label
				className="block text-lg text-primary-dark dark:text-primary-light mb-1"
				htmlFor={'email'}
			>
				{'Email'}
			</label>
			<input
				className={`w-full px-5 py-2 border ${darkMood ? 'bg-slate-800' : 'bg-slate-100'} border-gray-300 dark:border-primary-dark border-opacity-50
                 text-primary-dark dark:text-secondary-light bg-ternary-light dark:bg-ternary-dark rounded-md shadow-sm text-md`}
				type='text'
				id={'email'}
				name='Email'
				placeholder='Type your Email here'
				required
			/>
            <label htmlFor="message">Message</label>
           
            <textarea  id="message" cols="30" rows="10" className={`w-full px-5 py-2 border ${darkMood ? 'bg-slate-800' : 'bg-slate-100'} border-gray-300 
            dark:border-primary-dark border-opacity-50 text-primary-dark 
            dark:text-secondary-light bg-ternary-light dark:bg-ternary-dark rounded-md shadow-sm text-md`}></textarea>
		 <button type='submit' className='w-[150px] py-2 bg-blue-600 text-white text-xl font-semibold rounded'>Send</button>
        </div>
            </form>
            <div className="text-left max-w-xl px-6">
				<h2 className="font-general-medium text-2xl text-primary-dark dark:text-primary-light mt-12 mb-8">
					Contact details
				</h2>
				<ul className="font-general-regular">
					{contacts.map((contact) => (
						<li className="flex " key={contact.id}>
							<i className="text-2xl text-gray-500 dark:text-gray-400 mr-4">
								{contact.icon}
							</i>
							<span className="text-lg mb-4 text-ternary-dark dark:text-ternary-light">
								{contact.name}
							</span>
						</li>
					))}
				</ul>
			</div>
		</div>
		</motion.div>
	);
};

export default Contact;