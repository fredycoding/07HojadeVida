import ContactsIcon from '@mui/icons-material/Contacts';

export const Section5 = () => {
    return (
        <>

            <div className='bg-slate-900 bg-opacity-80 border-y-[0.09rem] border-white py-40 text-center backdrop-blur-md'>
                <h1 className=' text-4xl text-slate-100 text-center title-section'>
                    <ContactsIcon/> CONTACT
                </h1>
                <div className="flex flex-col justify-center mx-10 mt-20 md:mx-96">

                    <input className="input-contact bg-gray-50 border w-full  border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" type="text" name="name" placeholder="Your Name" required />
                    <input type="email" name="email" placeholder="Your Email" required className="input-contact bg-gray-50 mt-10 border w-full  border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />

                    <input type="text" name="subject" placeholder="Subject" required className="input-contact bg-gray-50 mt-10 border w-full  border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />

                    <textarea name="message" id="" cols="30" rows="10" placeholder="Message" className="input-contact mt-10 block p-2.5 w-full  text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"></textarea>
                    <a className=" hover:bg-[#4129bb] text-white font-bold py-2 px-4 rounded mt-10 ">Send Message</a>
                </div>
            </div>

        </>
    )
}
