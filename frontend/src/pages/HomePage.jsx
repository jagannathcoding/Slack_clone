import { UserButton } from "@clerk/clerk-react"
import{useSearchParams} from "react-router"
import { useStreamChat } from "../hooks/useStreamChat";
import { useEffect, useState } from "react";
import PageLoader from "../components/PageLoader";
import  "../styles/stream-chat-theme.css"


import{Chat,Channel} from "stream-chat-react"

const HomePage = () => {

  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const[activeChannel, setActiveChannel]= useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
 
  const{chatClient,error,isLoading}=useStreamChat();
  useEffect(()=>{
    if(chatClient){
      const channelId=searchParams.get("channel");
      if(channelId){
        const channel=chatClient.channel("mesaging",channelId);
        setActiveChannel(channel);
      }
    }
  },[chatClient,searchParams]);

  if(error) return<p>Something went wrong...</p>
  if(isLoading||!chatClient) return<PageLoader/>

   return (
    <div className="chat-wrapper">
      <Chat client={chatClient}>

      </Chat>
    </div>
  )
}

export default HomePage