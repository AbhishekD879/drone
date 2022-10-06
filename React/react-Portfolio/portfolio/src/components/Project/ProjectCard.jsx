import React from 'react'

const ProjectCard = ({title,img}) => {
  return (
    <div data-aos-duration="2000" data-aos="fade-right" className="flex flex-col rounded bg-cards-what ml-5 mb-2 pb-5 ">
            <div className="card-img">
                <img src={img.default} alt="card"/>
            </div>
            <div className="mt-2 ml-2">
                <h3 className="font-semibold text-lg">{title}</h3>
            </div>
            <div className="mt-2 ml-2">
                <button className="bg-btn">View Demo</button>
            </div>
        </div>
  )
}

export default ProjectCard