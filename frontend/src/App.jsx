import React, { useEffect } from 'react'
import Navbar from './components/Navbar'
import Homepage from './pages/Homepage'
import Moviepage from './pages/Moviepage'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import { Route, Routes, Navigate } from 'react-router'
import {Toaster} from 'react-hot-toast'
import { useAuthStore } from './store/AuthStore'
import AIRecommendations from './pages/AIRecommendations'

const App = () => {
  const {fetchUser, fetchingUser, user} = useAuthStore();

  useEffect(() => {fetchUser()}, [fetchUser]);
  if(fetchingUser){
    return <p>Loading...</p>
  }
  return (
    <div>
      <Toaster />
      <Navbar />

      <Routes>
        <Route path={"/"} element={user ? <Homepage /> : <Navigate to="/signin" />} />
        <Route path={"/movie/:id"} element={user ? <Moviepage /> : <Navigate to="/signin" />} />
        <Route path={"/ai-recommendations"} element={user ? <AIRecommendations /> : <Navigate to="/signin" />} />
        <Route path={"/signin"} element={!user ? <SignIn /> : <Navigate to="/" />} />
        <Route path={"/signup"} element={!user ? <SignUp /> : <Navigate to="/" />} />
      </Routes>
    </div>
  )
}

export default App