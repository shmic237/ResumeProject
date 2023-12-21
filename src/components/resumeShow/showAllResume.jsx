import React, { useContext } from 'react'
import ResumeContext from '../../context/resumeContext'
import ResumeShow from '.';
import { useNavigate } from 'react-router-dom';

export default function ShowAllResume() {

    const { resumes, setFormData} = useContext(ResumeContext);

    const navigate = useNavigate();

    const selectedResume = (resume) => {
        // form data
        setFormData(resume)
        navigate("/showResume")
        // redirect to relevent page
    }

    return (
        <div>
            <h1 style={{color: '#2e6a91'}}>All Resumes:</h1>
            {resumes.map((resume, index) => {
                return <button onClick={() =>selectedResume(resume)}>{`Resume ${index + 1}`}</button>
            })}
        </div>
    )
}
