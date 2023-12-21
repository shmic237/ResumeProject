
import React, { useContext, useState } from 'react';
import ResumeContext from '../../context/resumeContext';
// import ResumeShow from '../resumeShow';
import html2pdf from 'html2pdf.js';
import ResumeShow from '../resumeShow';
import { getResume } from '../firebase/firebaseConfig';
import ShowAllResume from '../resumeShow/showAllResume';
import { Link } from 'react-router-dom';
import ImageUrl from '../imageUrl';
import { PhotoIcon, UserCircleIcon } from '@heroicons/react/24/solid'
import LogOut from '../logOut';



export default function ResumeForm() {

    const { formData, handleChange, handleEducationChange, handleExperienceChange, handleImageChange, submitHandler, setFormData, userLogin } = useContext(ResumeContext);




    return (
        <>
            <div style={{ display: 'flex', justifyContent: 'end'}}>
                <LogOut />
            </div>

            <h1 style={{ color: '#2e6a91' }}>Create Resume</h1>
            <form id="resume-container">
                <div className="space-y-12">

                    <div className="border-b border-gray-900/10 pb-12">
                        <div className="mt-10  grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 ">
                            <div className="sm:col-span-4">
                                <label htmlFor="fullName" className="block text-sm font-medium leading-6 text-gray-900">
                                    Full Name
                                </label>
                                <div className="mt-2">
                                    <input
                                        type="text"
                                        name="fullName"
                                        id="fullName"
                                        autoComplete="family-name"
                                        onChange={handleChange}
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>
                            <br />
                            {/* <h2 className="text-base font-semibold leading-7 text-gray-900">Education</h2> */}

                            <br />

                            {/* <h2>Experience</h2> */}
                            <h2 ><font size="5"><strong>Experience</strong></font></h2><br />
                            {formData.experience.map((exp, index) => (
                                <div className="sm:col-span-4">
                                    <br />
                                    <label htmlFor="companyName" className="block text-sm font-medium leading-6 text-gray-900">
                                        Company Name
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            id="companyName"
                                            name="companyName"
                                            type="text"
                                            autoComplete="companyName"
                                            defaultValue={exp.companyName}
                                            onChange={(e) => handleExperienceChange(e, index)}
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        />

                                    </div>
                                    <label htmlFor="timeFrameLearn" className="block text-sm font-medium leading-6 text-gray-900">
                                        Time Frame:
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            id="timeFrameCompany"
                                            name="timeFrameCompany"
                                            type="text"
                                            autoComplete="timeFrameCompany"
                                            defaultValue={exp.timeFrameCompany}
                                            onChange={(e) => handleExperienceChange(e, index)}
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        />

                                    </div>
                                </div>))}
                            <br />
                            <button
                                type="button"
                                className="rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                                onClick={() =>
                                    setFormData((prevData) => ({
                                        ...prevData,
                                        experience: [...prevData.experience, { companyName: '', timeFrameCompany: '' }],
                                    }))
                                }
                            >
                                Add Experience
                            </button>
                        </div>
                    </div>
                </div>
                <h2 ><font size="5"><strong>Educations</strong></font></h2>
                {formData.education.map((edu, index) => (
                    <div className="sm:col-span-4">
                        <label htmlFor="learning" className="block text-sm font-medium leading-6 text-gray-900">
                            Learning
                        </label>
                        <div className="mt-2">
                            <input
                                id="learning"
                                name="learning"
                                type="text"
                                autoComplete="learning"
                                defaultValue={edu.learning}
                                onChange={(e) => handleEducationChange(e, index)}
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />

                        </div>
                        <label htmlFor="timeFrameLearn" className="block text-sm font-medium leading-6 text-gray-900">
                            Time Frame:
                        </label>
                        <div className="mt-2">
                            <input
                                id="timeFrameLearn"
                                name="timeFrameLearn"
                                type="text"
                                autoComplete="timeFrameLearn"
                                defaultValue={edu.timeFrameLearn}
                                onChange={(e) => handleEducationChange(e, index)}
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />

                        </div>
                    </div>))}
                <br />
                <button
                    type="button"
                    className="rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                    onClick={() =>
                        setFormData((prevData) => ({
                            ...prevData,
                            education: [...prevData.education, { learning: '', timeFrameLearn: '' }],
                        }))
                    }
                >
                    Add Education
                </button>

                <div className="col-span-full">
                    <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                        <div className="text-center">
                            <PhotoIcon className="mx-auto h-12 w-12 text-gray-300" aria-hidden="true" />

                            <ImageUrl />
                        </div>
                    </div>
                </div>

            </form>
            <br />
            <button style={{ color: '#2e6a91' }} className="rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50" type="button" onClick={submitHandler}>
                <strong>
                    Show Resume
                </strong>
            </button>
            <br />
            <br />
            <Link to="/showAllResume">
                Get All Resumes
            </Link>
        </>
        //     <div style={{ maxWidth: '600px', margin: 'auto' }}>
        //         <h1 style={{ textAlign: 'center' }}>Resume Form</h1>
        //         <form style={{ marginBottom: '20px' }}>
        //             <label>
        //                 Full Name:
        //                 <input
        //                     type="text"
        //                     name="fullName"
        //                     defaultValue={formData.fullName}
        //                     onChange={handleChange}
        //                     style={{ width: '100%', padding: '8px', marginBottom: '10px' }}
        //                 />
        //             </label>

        //             <h2>Experience</h2>
        //             {formData.experience.map((exp, index) => (
        //                 <div key={index} style={{ marginBottom: '15px' }}>
        //                     <label>
        //                         Company Name:
        //                         <input
        //                             type="text"
        //                             name="companyName"
        //                             defaultValue={exp.companyName}
        //                             onChange={(e) => handleExperienceChange(e, index)}
        //                             style={{ width: '100%', padding: '8px', marginBottom: '5px' }}
        //                         />
        //                     </label>

        //                     <label>
        //                         Time Frame:
        //                         <input
        //                             type="text"
        //                             name="timeFrameCompany"
        //                             defaultValue={exp.timeFrameCompany}
        //                             onChange={(e) => handleExperienceChange(e, index)}
        //                             style={{ width: '100%', padding: '8px', marginBottom: '10px' }}
        //                         />
        //                     </label>
        //                 </div>
        //             ))}
        //             <button
        //                 type="button"
        //                 onClick={() =>
        //                     setFormData((prevData) => ({
        //                         ...prevData,
        //                         experience: [...prevData.experience, { companyName: '', timeFrameCompany: '' }],
        //                     }))
        //                 }
        //                 style={{ padding: '8px' }}
        //             >
        //                 Add Experience
        //             </button>

        //             <h2>Education</h2>
        //             {formData.education.map((edu, index) => (
        //                 <div key={index} style={{ marginBottom: '15px' }}>
        //                     <label>
        //                         Learning:
        //                         <input
        //                             type="text"
        //                             name="learning"
        //                             defaultValue={edu.learning}
        //                             onChange={(e) => handleEducationChange(e, index)}
        //                             style={{ width: '100%', padding: '8px', marginBottom: '5px' }}
        //                         />
        //                     </label>

        //                     <label>
        //                         Time Frame:
        //                         <input
        //                             type="text"
        //                             name="timeFrameLearn"
        //                             defaultValue={edu.timeFrameLearn}
        //                             onChange={(e) => handleEducationChange(e, index)}
        //                             style={{ width: '100%', padding: '8px', marginBottom: '10px' }}
        //                         />
        //                     </label>
        //                 </div>
        //             ))}
        //             <button
        //                 type="button"
        //                 onClick={() =>
        //                     setFormData((prevData) => ({
        //                         ...prevData,
        //                         education: [...prevData.education, { learning: '', timeFrameLearn: '' }],
        //                     }))
        //                 }
        //                 style={{ padding: '8px' }}
        //             >
        //                 Add Education
        //             </button>

        //             {/* <label>
        //       Image:
        //       <input type="file" name="image" onChange={handleImageChange} />
        //     </label> */}
        //             <ImageUrl />
        //             <br />

        //             <button type="button" onClick={submitHandler} style={{ padding: '8px' }}>
        //                 Show Resume
        //             </button>
        //         </form>
        //         <Link to="/showAllResume">
        //             Get All Resumes
        //         </Link>
        //         {/* <button onClick={() => getResume(userLogin?.uid)} style={{ padding: '8px' }}>
        //     Get Resume
        //   </button> */}
        //     </div>
    );
};



