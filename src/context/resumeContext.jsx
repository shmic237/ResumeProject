import { createContext, useEffect, useState } from "react";
import html2pdf from 'html2pdf.js';
import { addResumePdf, getResume } from "../components/firebase/firebaseConfig";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";



const ResumeContext = createContext();
const auth = getAuth();



const Provider = ({ children }) => {

    const navigate = useNavigate();

    const [resumes, setResumes] = useState([])

    const [userLogin, setUserLogin] = useState({});

    const [formData, setFormData] = useState({
        fullName: '',
        experience: [{
            companyName: '',
            timeFrameCompany: ''
        }],
        education: [{
            learning: '',
            timeFrameLearn: ''
        }],
        image: null
    });

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user?.uid) {
                setUserLogin(user);
            }
            else {
                console.log("user is not connected");
                setUserLogin(null)
            }
        })

        return () => {

        }
    }, [])

    useEffect(() => {
        const getAndShow = async () => {
            const getRes = await getResume(userLogin?.uid)
            setResumes(getRes)
        }
        getAndShow()
    }, [userLogin])



    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleExperienceChange = (e, index) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            experience: prevData.experience.map((experience, i) => i === index ? { ...experience, [name]: value } : experience)
        }));
    };

    const handleEducationChange = (e, index) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            education: prevData.education.map((education, i) => i === index ? { ...education, [name]: value } : education)
        }));
    };

    const submitHandler = (e) => {
        e.preventDefault();
        console.log(formData);
        console.log("submit");
        addResumePdf({ ...formData, ownerId: userLogin?.uid })
        navigate('/showResume')
    }

    const createPdf = () => {
        const element = document.getElementById('resume-container');

        const image = new Image();
        image.src = formData.image;

        html2pdf(element, {
            margin: 10,
            filename: 'resume.pdf',
            image: { type: 'jpeg', quality: 0.98 },
            html2canvas: { scale: 2 },
            jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
        });
    }


    const handleImageChange = (e) => {
        const file = e.target.files[0];
        setFormData((prevData) => ({
            ...prevData,
            image: file
        }));
    };



    const shared = { formData, setFormData, handleChange, handleEducationChange, handleExperienceChange, handleImageChange, submitHandler, userLogin, createPdf, resumes }

    return (
        <ResumeContext.Provider value={shared}>
            {children}
        </ResumeContext.Provider>
    )

}

export { Provider }
export default ResumeContext