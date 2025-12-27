import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/clerk-react'
import React from 'react'
import HomePage from './pages/HomePage'
import { Navigate, Route, Routes } from 'react-router'
import AuthPage from './pages/AuthPage'
//import toast from 'react-hot-toast'
import * as Sentry from "@sentry/react";



const SentryRoutes = Sentry.withSentryReactRouterV7Routing(Routes);


const App = () => {

  ////adding here
  const {isSignedIn}=useAuth()///justadded

  return (
     <>         
            
            
            
            <SignedIn>
          <SentryRoutes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/auth" element={<Navigate to={"/"} replace />} />
        </SentryRoutes>
      </SignedIn>

      <SignedOut>
        <SentryRoutes>
         <Route path="/auth" element={<AuthPage/>} />
         <Route path="/*" element={<Navigate to={"/auth"} replace />} />
        </SentryRoutes>
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
