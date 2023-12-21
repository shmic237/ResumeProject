import React from 'react'
import { getAuth, signOut } from "firebase/auth";
import { useNavigate } from 'react-router-dom';


export default function LogOut() {

    const auth = getAuth();
    const navigate = useNavigate();

    const submitHandle = () => {
        signOut(auth).then(() => {
            console.log('log out success');
            navigate('/')
            // Sign-out successful.
        }).catch((error) => {
            // An error happened.
            console.log(error);
        });
    }
    return (
        <div>
            <button onClick={submitHandle}>LogOut</button>
        </div>
    )
}
