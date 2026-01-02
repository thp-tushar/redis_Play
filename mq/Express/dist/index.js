import express from "express";
import { createClient } from "redis";
const app = express();
app.use(express.json());
const client = createClient();
client.connect();
app.post("/publish", async (req, res) => {
    const { channel, message } = req.body;
    client.lPush("published_messages", JSON.stringify({ channel, message }));
    res.json({ message: "Message published" });
});
app.listen(3000);
console.log("Express server listening on port 3000");
//# sourceMappingURL=index.js.map