import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/clerk-react'
import React from 'react'
import HomePage from './pages/HomePage'
import { Navigate, Route, Routes } from 'react-router'
import AuthPage from './pages/AuthPage'

const App = () => {
  return (
     <>

        <SignedIn>
          <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/auth" element={<Navigate to={"/"} replace />} />
        </Routes>
      </SignedIn>

      <SignedOut>
        <Routes>
         <Route path="/auth" element={<AuthPage/>} />
         <Route path="/*" element={<Navigate to={"/auth"} replace />} />
        </Routes>
      </SignedOut>
      
    </>
  )
}

export default App




/*
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/clerk-react'
import React from 'react'

const App = () => {
  return (
     <>
     
     <SignedIn>
        <UserButton />
      </SignedIn>
     
           <SignedOut>
        <SignInButton mode="modal"/>
      </SignedOut>
      
    </>
  )
}

export default App*/
