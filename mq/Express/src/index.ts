import express from "express";
import { createClient } from "redis";

const app = express();
app.use(express.json());

const client = createClient(); 
client.connect();


//and always use async await with try/catch , i am here to just to learn the things

app.post("/publish", async (req, res) => {     //ideally push this to database
    const { channel, message } = req.body;

client.lPush("published_messages", JSON.stringify({ channel, message }));
res.json({ message: "Message recieved" });

});

app.listen(3000);
console.log("Express server listening on port 3000");