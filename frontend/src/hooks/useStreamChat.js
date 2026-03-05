// need to add files here

import { useState,useEffect } from "react";
import { StreamChat } from "stream-chat";
import { useUser } from "@clerk/clerk-react";
import { useQuery } from "@tanstack/react-query";
import { getStreamToken } from "../lib/api";
import * as Sentry from "@sentry/react";

const STREAM_API_KEY=import.meta.env.VITE_STREAM_API_KEY;


export const useStreamChat=()=>{
    const {user}=useUser();
    const [chatClient,setChatClient]=useState(null);

    //fetching stream token using react query
    const {
        data:tokenData,
        isLoading:tokenLoading,
        error:tokenError,
    }=useQuery({
        queryKey:["streamToken"],
        queryFn:getStreamToken,
        enabled:!!user?.id,
    });
    //init stream chat client
    useEffect(()=>{
        const initChat=async ()=>{
            if(!tokenData?.token||!user) return ;

            try{
                const client=StreamChat.getInstance(STREAM_API_KEY);
                await client.connectUser({
                    id:user.id,
                    name:user.fullName,
                    image:user.imageUrl,
                });
                //////here anything?'
                //need to check
                setChatClient(client);
            }
            catch(error){
                console.log("Error conecting to stream",error)
                Sentry.captureException(error,{
                    tags:{component:"useStreamChat"},
                    extra:{
                        context:"stream_chat_connection",
                        userId:user?.id,
                        streamApiKey:STREAM_API_KEY?"present":"missing",
                    },
                });   
            }
        };

    initChat();

    //cleanup
    return()=>{
        if(chatClient){
            chatClient.disconnectUser();
           
        }
    }


    },[tokenData,user,chatClient]);///now to do code here

    return {chatClient,isLoading:tokenLoading,error:tokenError}
};