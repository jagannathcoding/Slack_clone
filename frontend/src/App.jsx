import { useAuth } from '@clerk/clerk-react'
import { Navigate, Route, Routes } from 'react-router'
import AuthPage from './pages/AuthPage'
import HomePage from './pages/HomePage'
//import toast from 'react-hot-toast'
import * as Sentry from "@sentry/react"
import CallPage from './pages/CallPage'



const SentryRoutes = Sentry.withSentryReactRouterV7Routing(Routes);


const App = () => {

  ////adding here
  const {isSignedIn,isLoaded}=useAuth();///justadded

  if(!isLoaded) return null;

  return (
     <>         
     
          <SentryRoutes>
        <Route path="/" element={isSignedIn? <HomePage/>:<Navigate to={"/auth"} replace />}/>
        <Route path="/auth" element={!isSignedIn?<AuthPage/>:<Navigate to={"/"} replace />} />
        

         {/* to do add call page */}
        <Route 
        path="/call/:id" 
        element={isSignedIn?<CallPage/>:<Navigate to={"/auth"} replace />}/>
       
        
         <Route 
         path="/*"
         element={isSignedIn? <Navigate to={"/"} replace/>:<Navigate to={"/auth"} replace />} />
        </SentryRoutes>
      
      
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





//first version of routing
//  return (
//      <>         
            
            
            
//             <SignedIn>
//           <SentryRoutes>
//         <Route path="/" element={<HomePage/>} />
//         <Route path="/auth" element={<Navigate to={"/"} replace />} />
//         </SentryRoutes>
//       </SignedIn>

//       <SignedOut>
//         <SentryRoutes>
//          <Route path="/auth" element={<AuthPage/>} />
//          <Route path="/*" element={<Navigate to={"/auth"} replace />} />
//         </SentryRoutes>
//       </SignedOut>
      
//     </>
//   )