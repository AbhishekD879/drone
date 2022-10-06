import React from 'react'

const Contact = () => {
  return (
    <section id="contact" className="flex flex-col justify-center  items-center px-10 mt-28 rounded bg-cards-what mx-28">
    <div className="flex flex-col items-center justify-center px-10 py-10">
        <h1 className="text-4xl font-semibold text-white mb-5">Have any project in mind ?</h1>
        <div className="mt-2 ml-2">
            <button className="bg-btn"><a href="mailto:abhishekdiwate879@gmail.com">Contact Me</a></button>
        </div>
    </div>
    </section>
  )
}

export default Contact