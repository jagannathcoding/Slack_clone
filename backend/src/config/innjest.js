import { Inngest } from "inngest";
import { connect } from "mongoose";
import { connectDB } from "./db.js";

// Create a client to send and receive events
export const inngest = new Inngest({ id: "slack-clone" });


const syncUser=inngest.createFunction(
    {id:"sync-user"},
    {event:"clerk/user.created"},
    async({event})=>{
        await connectDB();

        const{id,email_addresses,first_name,last_name,image_url}=event.data;
    }
)



// Create an empty array where we'll export future Inngest functions
export const functions = [];