import React, { useState,useRef } from 'react'
import { Axis3D, Eye, EyeOff } from 'lucide-react'
import axios from 'axios';
const Register = () => {
    const [hide, SetHide] = useState(true);
    const emailRef=useRef(null);
    const passwordRef1=useRef(null);
    const passwordRef2=useRef(null);
    const handleSubmit = () => {
        const Email = emailRef.current.value;
        const Password1 = passwordRef1.current.value;
        const Password2 = passwordRef2.current.value;
    
        if (!Email || !Password1 || !Password2) {
            alert("Please fill all the fields!");
            return;
        }
        if (!/\S+@\S+\.\S+/.test(Email)) {
            alert("Please enter a valid email address!");
            return;
        }
        if (Password1 !== Password2) {
            alert("Passwords do not match!");
            passwordRef1.current.value = "";
            passwordRef2.current.value = "";
            return;
        }
    
        const obj = { email: Email, password: Password1 };
        sendData(obj);
    };
    const sendData = async (obj) => {
        try {
            const res = await axios.post('http://localhost:1999/api/v1/register',obj);
            if (res.status === 201) {
                alert("Registered successfully!");
            }
        } catch (err) {
            console.error(err);
            alert("Registration failed. Please try again!");
        }
    };
    
    return (
        <>
            <div className='w-screen h-screen bg-[#121212] flex justify-center items-center'>
                <div className='w-[400px] h-auto pt-5 pb-5 pr-2 pl-2 bg-slate-400/10 rounded-lg flex flex-col space-y-4'>
                    <div className='text-2xl font-bold text-orange-300 flex justify-center'>
                        REGISTER
                    </div>
                    <div className='w-full flex flex-col space-y-5 justify-center items-center'>
                        <input ref={emailRef} className='w-[80%] rounded-lg p-2 text-left' placeholder='Email' type="email" name="" id="" />
                        <div className='flex w-full flex-col justify-center items-center space-y-4'>
                            <input ref={passwordRef1} placeholder='Enter Password' className='w-[80%] rounded-lg p-2 text-left' />
                            <input ref={passwordRef2} placeholder='Re-Enter Password' className='w-[80%] rounded-lg p-2 text-left' />
                        </div>
                       </div>
                    <div className='w-full flex flex-col justify-center items-center pt-3'>
                        <button onClick={handleSubmit} className='w-[80%] bg-green-500 text-white font-bold rounded-lg pl-3 pr-3 pt-2 pb-2'>REGISTER</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Register