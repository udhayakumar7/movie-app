import React, {useState} from 'react'
import { signInWithCredential, createUserWithEmailAndPassword} from 'firebase/auth'
import {auth} from '../firebase'
import { Link, useNavigate } from 'react-router-dom'
import { toast, ToastContainer } from 'react-toastify';
  import "react-toastify/dist/ReactToastify.css";
const SignIn = () => {
    const [email, setEmail] = useState('')
const [password, setPassword] = useState('')

const navigate = useNavigate()

const register = (e) =>{
    e.preventDefault()
    createUserWithEmailAndPassword(auth, email, password).then((authUser)=>{
    console.log(authUser)

    navigate('/')
    
    }).catch((err)=>{
        toast.error("User Alreay Exists", {
            position: toast.POSITION.TOP_RIGHT
          });
    console.log(err.message)
    })
    }
    





  return (
    <div>
    <div className='relative' >
       <nav className='  fixed top-0 w-full flex flex-row items-center justify-between py-5 px-5 transistion-colors bg_new ' >
          <div className='flex flex-row items-center'>
             <img className=' w-full ml-3' src="https://secure-media.hotstarext.com/web-assets/prod/images/brand-logos/disney-hotstar-logo-dark.svg" alt="" />
          </div>
       </nav>
 
       
 
 
 
 
       <div className='login_bg flex flex-row items-center justify-center'>
          <div className='input-form lg:w-2/5 w-full rounded-xl h-auto flex flex-col items-center justify-center'>
             {/* 
             <h1 className='text-white pt-2 font-inter font-bold text-xl'>Login</h1>
             */}
            
             <img className=' w-20 rounded-xl mt-5 ml-3' src="https://akm-img-a-in.tosshub.com/businesstoday/images/story/202003/disneyhotstar_660_110320034428.jpg" alt="" />
            <h2 className='text-white font-inter text-lg'>Sign In</h2>
             
             <div className='py-4 w-full px-8'>
                <form onSubmit={register}>
                   <div className=''>
                      <label  className='block font-normal text-xl text-white py-3' htmlFor="">Enter Email Address</label>
                      <input className='w-full h-12 rounded-lg  pl-2' type="email" required name="" value={email} onChange={e=>setEmail(e.target.value)}  />
                   </div>
                   <div className='py-2'>
                      <label  className='block font-normal text-xl text-white py-3' htmlFor="">Create password</label>
                      <input className='w-full h-12 pl-2 rounded-lg' type="password" required name="" value={password}
                         onChange={e=>setPassword(e.target.value)}   />
                   </div>
                   <div className='py-2'>
                      <button className='w-full mt-3 rounded-lg bg-slate-900 py-3 text-white font-inter font-bold text-lg ' type='submit'>Sign In</button>
                   </div>
                   <div>
                      
                     <h3 className='text-base text-white'> Already Have An Account <span 
                      className='inline border-b-2 border-b-white cursor-pointer'>
                       <Link to= '/' >
                       Login here
                       </Link>
                       </span> </h3> 
                     
                   </div>
                </form>
             </div>
          </div>
       </div>
       
       {/* asdfg */}
 
       
 
 
 
 
    </div>
    <ToastContainer />

 </div>
  )
}

export default SignIn