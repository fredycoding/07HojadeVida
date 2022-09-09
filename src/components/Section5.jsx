

export const Section5 = () => {
    return (
        <>

            <div className='bg-slate-900 bg-opacity-80 border-y-[0.09rem] border-white py-40 text-center'>
                <h1 className=' text-4xl font-bold text-slate-100 text-center'>
                    CONTACT
                </h1>
                <div className="flex flex-col justify-center mx-10 md:mx-96">

                    <input className="bg-gray-50 border w-full  border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" type="text" name="name" placeholder="Your Name" required />
                    <input type="email" name="email" placeholder="Your Email" required className="bg-gray-50 mt-10 border w-full  border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />

                    <input type="text" name="subject" placeholder="Subject" required className="bg-gray-50 mt-10 border w-full  border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />

                    <textarea name="message" id="" cols="30" rows="10" placeholder="Message" className="mt-10 block p-2.5 w-full  text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"></textarea>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-10 ">Send Message</button>
                </div>
            </div>

        </>
    )
}