import React, { useEffect, useState } from 'react'
import {FiMenu} from 'react-icons/fi'
import { selectUser } from '../features/userSlice'
import { useSelector } from 'react-redux'
import { signOut } from 'firebase/auth'
import { auth } from '../firebase'
import { Link } from 'react-router-dom'
import Searchbar from './Searchbar'
const Navbar = () => {
const user = useSelector(selectUser)
const [nav, setNav] = useState(false)
const [menu, setMenu] = useState(false)
const [ sidebar , setSidebar]= useState (false)
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
const profile =()=>{

  setSidebar(!sidebar);
  // setSidebar(true);
  // alert(sidebar)

} 
//  window.addEventListener('click', function(){
//   setSidebar(false);
//  })

// const closeProfile = () => {

//   if(sidebar === true){
//     setSidebar(false)

//   }
//   // alert('gfghjk')
// }
// const profile = ()=> {
  
//   setSidebar(sidebar)
// }


return (
<>
<div className='fixed top-0 z-50 w-full' >
   <nav className={nav?'flex flex-row items-center justify-between py-5 px-5 transistion-colors  bg-slate-900': 'flex flex-row items-center justify-between py-5 px-5 bf  transition-colors bg-nav' } >
   <div className='flex flex-row items-center'>
      {/* 
      <span className='text-white text-xl mt-2'>
         <FiMenu />
      </span>
      */}
      <div className='flex items-center'>
         <Link to='/'>
         <img className=' w-full ml-3' src="https://secure-media.hotstarext.com/web-assets/prod/images/brand-logos/disney-hotstar-logo-dark.svg" alt="" />
         </Link>
         <div className='lg:flex hidden flex-row'>
            <h2 className=' mt-2 px-6 text-white font-semibold font-inter'>TV</h2>
            <h2 className=' mt-2 px-6 text-white font-semibold font-inter'>Movie</h2>
            <h2 className=' mt-2 px-6 text-white font-semibold Inter font-inter'>Sports</h2>
         </div>
      </div>
   </div>
   <div className='flex  flex-row items-center' >
      <Searchbar />
      <img onClick={profile}  className='rounded-full w-8' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStdv38zMp2McuOThlTfB2jnNuHaeBfI4mZE-daEksaMwcbC25YEtlq02U-pFW9KoMWA1I&usqp=CAU" alt="" />

      {/* <img onClick={profile}  className='rounded-full w-8' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStdv38zMp2McuOThlTfB2jnNuHaeBfI4mZE-daEksaMwcbC25YEtlq02U-pFW9KoMWA1I&usqp=CAU" alt="" />
      <div className={menu ? 'box_profile    text-text-vs lg:text-xs text-white h-auto  px-6 right-6 fixed top-10 bg-slate-700': 'hidden ' }>
      <p className='py-3 font-semibold'>{user.email}</p>
      <p className='py-3 font-semibold text-white cursor-pointer' >Signout</p>
   </div> */}
   <button className='px-3 py-1 font-semibold font-inter hidden lg:inline text-white bg-blue-700 ml-3 rounded-lg' onClick={logout}>Logout</button>
</div>
</nav>

{/* sidebar */}

<div className='transistion' >
<div className={sidebar ? 'h-screen  lg:w-1/5   w-3/4 bg-slate-800 fixed z-50 right-0 ' : 'h-screen  transition-transform w-1/5 bg-slate-800 fixed z-50 -right-2/4 ' }>

  <div className='container p-9'>

    <div className=' flex flex-col'>
    <img className=' rounded-xl   w-14 lg:w-1/3' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStdv38zMp2McuOThlTfB2jnNuHaeBfI4mZE-daEksaMwcbC25YEtlq02U-pFW9KoMWA1I&usqp=CAU" alt="" />
    <p className='py-3 lg:text-lg text-xs font-semibold text-white'>{user.email}</p>
    <button className='px-3 py-1 lg:text-lg text-xs font-semibold font-inter  text-white bg-blue-700  rounded-lg' onClick={logout}>Logout</button>

      



    </div>

    {/* <h2 className=' text-2xl text-white font-inter font-medium'>Profile</h2> */}



  </div>






</div>
</div>



</div>
<div className=' h-20'></div>
</>
)
}
export default Navbar