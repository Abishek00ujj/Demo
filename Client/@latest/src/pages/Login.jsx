import React, { useState,useRef } from 'react'
import { Eye, EyeOff } from 'lucide-react'
import {Link} from 'react-router-dom'
const Login = () => {
    const [hide, SetHide] = useState(true);
    const emailRef=useRef(null);
    const passwordRef=useRef(null);

    const handleSubmit=()=>{
        const Email=emailRef.current.value;
        const Password=passwordRef.current.value;
        if(!Email||!Password)
            {
              alert("Please fill all the feilds!");
              return;
            }
        const obj={
            Email:Email,
            Password:Password
        };
        console.log(obj);
        sendData(obj);
    }
    const handleHide = () => {
        SetHide(!hide);
    }
    const sendData=async(obj)=>{
        const res=await axios.post('',obj);
        if(res.status==200)
            {
                alert("Login succuessfully!");
            } 
    }
    return (
        <>
            <div className='w-screen h-screen bg-[#121212] flex justify-center items-center'>
                <div className='w-[400px] h-auto pt-5 pb-5 pr-2 pl-2 bg-slate-400/10 rounded-lg flex flex-col space-y-4'>
                    <div className='text-2xl font-bold text-orange-300 flex justify-center'>
                        Login
                    </div>
                    <div className='w-full flex flex-col space-y-5 justify-center items-center'>
                        <input ref={emailRef} className='w-[80%] rounded-lg p-2 text-left' placeholder='Email' type="email" name="" id="" />
                        <div className='flex w-full justify-center items-center'>
                            <input ref={passwordRef} placeholder='Password' className='w-[80%] rounded-lg p-2 text-left' type={hide ? 'password' : 'text'} name="" id="" />{hide ? (<EyeOff fill='white' className='absolute right-24 m-2' onClick={handleHide} />) : (<Eye fill='white' className='absolute right-24 m-2' onClick={handleHide} />)}</div>
                    </div>
                    <div className='w-full flex flex-col justify-center items-center pt-3'>
                        <button onClick={handleSubmit} className='w-[80%] bg-green-500 text-white font-bold rounded-lg pl-3 pr-3 pt-2 pb-2'>LOGIN</button>
                        <div className='w-[80%] flex justify-end'>
                        <Link to='/register'><p className='text-white font-bold'>New user?</p></Link>
                    </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login