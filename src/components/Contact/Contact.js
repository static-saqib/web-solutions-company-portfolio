import React from "react";

export default function Contact() {
  return (
    <>
      <section id="contact">
      <h1 className="text-black text-3xl font-bold my-14">REQUEST A QUOTE</h1>
        <div className="py-8 lg:py-15 px-4 mx-auto max-w-screen-md">
          <div className="bg-indigo-950 shadow-black shadow-2xl text-center rounded-lg lg:w-auto">
            <div className="p-6">
              <h2 className="p-4 mb-4 text-4xl tracking-tight font-extrabold text-center text-white">
                Contact Us
              </h2>
              <p className="mb-8 lg:mb-16 font-light text-center text-gray-300 sm:text-xl">
                We would be happy to hear from you, please fill in the form
                below or mail us your requirements on{" "}
                <span className="text-blue">info@edorotechnologies.com</span>
              </p>
              {/* creating contact form */}
              <form action="#contact" className="space-y-8" method="post">
                <div>
                  <label
                    for="email"
                    className="block mb-2 text-sm font-medium text-white">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                    placeholder="info@edorotechnologies.com"
                    required
                  />
                </div>
                <div>
                  <label
                    for="subject"
                    className="block mb-2 text-sm font-medium text-white">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                    placeholder="What can I help you with?"
                    required/>
                </div>
                <div className="sm:col-span-2">
                  <label
                    for="message"
                    className="block mb-2 text-sm font-medium text-white">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows="6"
                    className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="You can write your message herez."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="inline-block lg:mb-5 rounded-full shadow-2xl bg-blue-500 px-6 pb-2 pt-2.5 text-lg text-white transition duration-200 ease-in hover:bg-violet-950">
                  Send Your Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
