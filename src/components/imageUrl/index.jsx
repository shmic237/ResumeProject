import React, { useContext, useState } from 'react'
import { v4 } from 'uuid';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { storage } from '../firebase/firebaseConfig';
import ResumeContext from '../../context/resumeContext';

export default function ImageUrl() {

    const { formData, setFormData } = useContext(ResumeContext)

    const [imageUpload, setImageUpload] = useState(null);

    const uploadImage = async (e) => {
        e.preventDefault();
        try {
            if (imageUpload === null) return;

            const imageRef = ref(storage, `images/${imageUpload.name + v4()}`);
            await uploadBytes(imageRef, imageUpload);


            const imageUrl = await getDownloadURL(imageRef);
            setFormData({ ...formData, image: imageUrl })

            alert(`Image uploaded successfully! URL: ${imageUrl}`);
        } catch (error) {
            console.error('Error uploading image:', error);
        }
    };

    const handleImageChange = (e) => {
        const selectedImage = e.target.files[0];
        setImageUpload(selectedImage);
    };

    return (
        <div className="col-span-full">
            <div>
                <label htmlFor="file-upload" className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500">
                    <span>Upload a file</span>
                    <input id="file-upload" name="file-upload" type="file" className="sr-only" onChange={handleImageChange} />
                </label>

                {imageUpload && (
                    <div className="mt-4 flex text-sm leading-6 text-gray-600">
                        <img
                            src={URL.createObjectURL(imageUpload)}
                            alt="Selected Image"
                            className="mx-auto h-12 w-12 text-gray-300"
                        />
                        <p className="pl-1">or drag and drop</p>
                    </div>
                )}

                <p className="text-xs leading-5 text-gray-600">PNG, JPG, GIF up to 10MB</p>

                {/* ... (קוד נוסף) */}
                <button onClick={uploadImage}>Upload Image</button>
            </div>
        </div >

        // <div>
        //   <input type="file" name='image' onChange={handleImageChange} />
        //   <button onClick={uploadImage}>Upload Image</button>
        // </div>
    );
}
