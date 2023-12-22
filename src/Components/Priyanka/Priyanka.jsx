import React from 'react'
import './Priyanka.css'
import img from "../../Images/img.gif";
import ProjectData from '../ProjectData'

const Priyanka = () => {
    return (
        <section>
            <div className="container">
                {
                    ProjectData.map((item) => {
                        return (
                            <div className="card">
                                <h3 className="card-title">{item.title}</h3>
                                <p className="card-text">{item.description}</p>
                            </div>
                        )
                    })
                }
            </div>
        </section>
    )
}

export default Priyanka
