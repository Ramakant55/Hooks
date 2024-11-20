import React from 'react'

const Contact = () => {
  return (
    <div>
     <section id="contact" className="container mx-auto py-16 px-4">
        <h3 className="text-3xl font-bold text-center mb-8">Contact Us</h3>
        <div className="flex flex-col md:flex-row md:justify-between md:space-x-8">
          <form className="bg-white p-8 rounded-lg shadow-md w-full md:w-1/2">
            <label className="block text-lg mb-2" htmlFor="name">Name</label>
            <input type="text" id="name" className="w-full p-2 mb-4 border rounded-lg" />

            <label className="block text-lg mb-2" htmlFor="email">Email</label>
            <input type="email" id="email" className="w-full p-2 mb-4 border rounded-lg" />

            <label className="block text-lg mb-2" htmlFor="message">Message</label>
            <textarea id="message" rows="4" className="w-full p-2 mb-4 border rounded-lg"></textarea>

            <button className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700">Send</button>
          </form>
          <div className="mt-8 md:mt-0 md:w-1/2 text-center">
            <p>Phone: (123) 456-7890</p>
            <p>Email: info@aoneelectronics.com</p>
            <p>Location: 123 Main St, Anytown</p>
          </div>
        </div>
      </section>   
    </div>
  )
}

export default Contact