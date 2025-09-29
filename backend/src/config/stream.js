/*import {StreamChat} from "stream-chat";
import {ENV} from "../config/env.js";

const streamClient= StreamChat.getInstance(ENV.STREAM_API_KEY,ENV.STREAM_API_SECRET);

export const upsertStreamUser=async(userData)=>{
    try{
        await streamClient.upsertUser(userData);
        console.log("Stream user insereted successfully");
        return userData;
    }
    catch(error){
        console.log("Error in inserting stream user ",error);
    }
};


/*export const deleteStreamUser=async(userId)=>{
    try{
        await streamClient.deleteUser(userId);
        console.log("Stream user delted successfully");
    }
    catch(error){
        console.error("Error in deleting Stream user: ",error);
    }
};
*/

/*
export const deleteStreamUser = async (userId) => {
  try {
    await streamClient.deleteUser(userId);
    console.log("Stream user deleted successfully:", userId);
  } catch (error) {
    console.error("Error deleting Stream user:", error);
  }
};



export const generateStreamToken=async(userId)=>{
    try{
        const userIdString=userId.toString();
        return streamClient.createToken(userIdString);
    }
    catch(error)
    {

    console.log("Error generating Stream token:", error);
    return null;
  }
};

/*
export const addUserToPublicChannels = async (newUserId) => {
  const publicChannels = await streamClient.queryChannels({ discoverable: true });

  for (const channel of publicChannels) {
    await channel.addMembers([newUserId]);
  }
};*/


import {StreamChat} from "stream-chat";
import {ENV} from "../config/env.js";

const streamClient= StreamChat.getInstance(ENV.STREAM_API_KEY,ENV.STREAM_API_SECRET);

export const upsertStreamUser=async(userData)=>{
    try{
        await streamClient.upsertUser(userData);
        console.log("Stream user insereted successfully");
        return userData;
    }
    catch(error){
        console.log("Error in inserting stream user ",error);
    }
};

export const deleteStreamUser=async(userId)=>{
    try{
        await streamClient.deleteUser(userId);
        console.log("Stream user delted successfully");
    }
    catch(error){
        console.error("Error in deleting Stream user: ",error);
    }
};

export const generateStreamToken=async(userId)=>{
    try{
        const userIdString=userId.toString();
        return streamClient.createToken(userIdString);
    }
    catch(error)
    {

    console.log("Error generating Stream token:", error);
    return null;
  }
};

/*
export const addUserToPublicChannels = async (newUserId) => {
  const publicChannels = await streamClient.queryChannels({ discoverable: true });

  for (const channel of publicChannels) {
    await channel.addMembers([newUserId]);
  }
};*/