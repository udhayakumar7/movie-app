import React, { useEffect, useState } from 'react'
import {FiMenu} from 'react-icons/fi'
import { selectUser } from '../features/userSlice'
import { useSelector } from 'react-redux'
import { signOut } from 'firebase/auth'
import { auth } from '../firebase'


const Navbar = () => {
  const user = useSelector(selectUser)
   
    const [nav, setNav] = useState(false)
    const [menu, setMenu] = useState(false)


    const transNavbar = () =>{
        if (window.scrollY  > 80){
            setNav(true)
        }
        else{
            setNav(false)
        }
    }

    useEffect(() => {
      
        window.addEventListener('scroll', transNavbar )
    
      return () => {
        window.removeEventListener('scroll', transNavbar )
      }
    }, [])
    

const logout = () =>{
  signOut(auth)
}

 const profile =()=> setMenu(!menu);



  return (
    <>
    <div className='fixed top-0 z-50 w-full' >
        <nav className={nav?'flex flex-row items-center justify-between py-5 px-5 transistion-colors  bg-slate-900': 'flex flex-row items-center justify-between py-5 px-5 bf  transition-colors bg-nav' } >
            <div className='flex flex-row items-center'>

                <span className='text-white text-xl mt-2'><FiMenu /></span>

                
                <div className='flex items-center'>
                <img className=' w-full ml-3' src="https://secure-media.hotstarext.com/web-assets/prod/images/brand-logos/disney-hotstar-logo-dark.svg" alt="" />
                <div className='lg:flex hidden flex-row'>
                <h2 className=' mt-2 px-6 text-white font-inter'>TV</h2>
                 <h2 className=' mt-2 px-6 text-white font-inter'>Movie</h2>
                 <h2 className=' mt-2 px-6 text-white Inter font-inter'>Sports</h2>
                </div>
               

                </div>
                

           
            </div>
            <div onClick={profile}>
              
                <img  className='rounded-full w-8' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStdv38zMp2McuOThlTfB2jnNuHaeBfI4mZE-daEksaMwcbC25YEtlq02U-pFW9KoMWA1I&usqp=CAU" alt="" />
<div className={menu ? 'box_profile    text-text-vs lg:text-xs text-white h-auto  px-6 right-6 fixed top-10 bg-slate-700': 'hidden ' }>
<p className='py-3 font-semibold'>{user.email}</p>
<p className='py-3 font-semibold text-white cursor-pointer' onClick={logout}>Signout</p>





</div>

            </div>
          


        </nav>
   

    </div>
    <div className=' h-20'></div>
  





    
    </>
  )
}

export default Navbar