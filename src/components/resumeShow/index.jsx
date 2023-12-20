import React, { useContext } from 'react'
import "./index.css"
import ResumeContext from '../../context/resumeContext';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


export default function ResumeShow() {

    const { formData, createPdf } = useContext(ResumeContext);

    return (

     
        <div>
            <div className="cv" id="resume-container" >
                <section className="profile container_fluid text-light d-flex align-items-center">
                    <div className="container d-flex">
                        <div className="header col-8 d-flex ">
                            {console.log(formData.image)}
                            <img src={formData.image} alt="" />
                            {/* {formData.image && (
                                <img
                                    src={URL.createObjectURL(formData.image)}
                                />
                            )} */}
                            <div className="name p-4">
                                <h2>{formData.fullName}</h2>
                            </div>
                        </div>

                    </div>
                </section>

                <section className="experience">
                    <div className="container d-flex">
                        <div className="experience_flex col-8 p-4 ">
                            <h2>EXPERIENCE</h2>
                            {formData.experience.map((exp, index) => (
                                <div key={index}>
                                    <div className="experience_box d-flex">
                                        <div className="header_experience text-center">
                                            <h4>{exp.companyName}</h4>
                                            <p>{exp.timeFrameCompany}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="education">
                    <div className="container d-flex">
                        <div className="education_flex col-12 p-5">
                            <h2>EDUCATION</h2>
                            {formData.education.map((edu, index) => (
                                <div key={index}>
                                    <div className="education_box d-flex">
                                        <div className="header_education text-center">
                                            <h4>{edu.learning}</h4>
                                            <p>{edu.timeFrameLearn}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </div>
            <button onClick={() => createPdf()}>Create PDF</button>
        </div>
    )
}
