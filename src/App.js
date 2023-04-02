import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Login from './components/Login';
import Home from './pages/Home';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, selectUser } from './features/userSlice';
import { useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase';
import SignIn from './components/SignIn';
import MovieDetailPage from './pages/MovieDetailPage';
function App() {
//   const user = {
// id: 1,
// name: 'jeeva',
// password : '123456'
//   }
const user = useSelector(selectUser)
const dispatch = useDispatch()
useEffect(() => {
const unsubcribe = onAuthStateChanged(auth, (userAuth) => {
if (userAuth) {
dispatch(login({
uid: userAuth.uid,
email: userAuth.email
}))
}
else {
dispatch(logout())
}
})
return unsubcribe;
}, [dispatch])
return (
<div >
   {/* {
   !user ? 
   <Login />
   <Routes>
      :
      <Route path='/' element={
      <Home />
      } />
   </Routes>
   } */}
   {
   !user ? (
   <>
   <Routes>
      <Route path='/' element={
      <Login />
      } />
      <Route path='/signin' element={
      <SignIn />
      } />
   </Routes>
   </>
   ) : (
   <Routes>
      <Route path='/' element={
      <Home />
      } />
      <Route path='/video/:id' element={
      <MovieDetailPage />
      } />
   </Routes>
   )
   }
</div>
);
}
export default App;