import { Inngest } from "inngest";
//import { connect } from "mongoose";
import { connectDB } from "./db.js";
import {User} from "../models/user.model.js";
// Create a client to send and receive events
export const inngest = new Inngest({ id: "slack-clone" });


const syncUser=inngest.createFunction(
    {id:"sync-user"},///name for this function
    {event:"clerk/user.created"},///kon event ei function ke trigger korbe
    async({event})=>{
        await connectDB();

        const{id,email_addresses,first_name,last_name,image_url}=event.data;

        const newUser={
            clerkId:id,
            email:email_addresses[0]?.email_address,
            name:`${first_name||""} ${last_name||""}`,
            image:image_url,

        }
        await User.create(newUser);
    }
);


const deleteUserFromDB=inngest.createFunction(
    {id:"delete-user-from-db"},
    {event:"clerk/user.deleted"},///this is comong from clerk
    async({event})=>{
        await connectDB();
        const {id}=event.data;
        await User.deleteOne({clerkId:id});
        //await deleteStreamUser(id.toString());
    }
);


// Create an empty array where we'll export future Inngest functions
export const functions = [syncUser,deleteUserFromDB];