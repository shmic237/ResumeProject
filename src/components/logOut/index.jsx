import React from 'react'
import { getAuth, signOut } from "firebase/auth";


export default function LogOut() {

    const auth = getAuth();

    const submitHandle = () => {
        signOut(auth).then(() => {
            console.log('log out success');
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
