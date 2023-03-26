import React, {useState} from 'react'
import {createUserWithEmailAndPassword} from 'firebase/auth'

import {auth} from '../firebase'


const Login = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

const register = (e) =>{
e.preventDefault()
createUserWithEmailAndPassword(auth, email, password).then((authUser)=>{
  console.log(authUser)
}).catch((err)=>{
  console.log(err.message)
})



}



  return (
    <div>

<div className='  relative' >
        <nav className='  fixed top-0 w-full flex flex-row items-center justify-between py-5 px-5 transistion-colors bg_new ' >
            <div className='flex flex-row items-center'>

                

                
               
                <img className=' w-full ml-3' src="https://secure-media.hotstarext.com/web-assets/prod/images/brand-logos/disney-hotstar-logo-dark.svg" alt="" />
             
               

              
                

           
            </div>
            </nav>

            <div className='login_bg flex flex-row items-center justify-center'>
              
              <div className='input-form lg:w-2/5 w-full rounded-xl h-auto flex flex-col items-center justify-center'>

                <h1 className='text-white pt-2 font-inter font-bold text-xl'>Login</h1>

                <div className='py-4 w-full px-8'>
                  <form onSubmit={register}>
                    <div className=''>
                      <label  className='block text-white py-1' htmlFor="">Enter Email Address</label>
                    <input className='w-full h-10' type="email" required name="" value={email} onChange={e=>setEmail(e.target.value)}  />


                    </div>
                    <div className='py-2'>
                    <label  className='block text-white py-1' htmlFor="">Enter password</label>
                    <input className='w-full h-10' type="password" required name="" value={password}
                    onChange={e=>setPassword(e.target.value)}   />


                    </div>

                    <div className='py-2'>
                      <button className='w-full bg-slate-900 py-3 text-white font-inter font-bold text-lg ' type='submit'>Login</button>
                    </div>


                  





                  </form>

                </div>

                

              </div>




            </div>

            
   

    </div>
    </div>
  )
}

export default Login