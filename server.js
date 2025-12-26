const express = require('express');
const axios = require('axios');
const client = require('./client');

const app = express();

app.get('/', async (req, res) => {
    try {
        const cacheValue = await client.get('todos');

        if (cacheValue) {
            console.log('Cache hit');
            return res.json(JSON.parse(cacheValue));
        }

        console.log('Cache miss');
        const response = await axios.get('https://jsonplaceholder.typicode.com/todos');

        //only store actual JSON data
        await client.set("todos", JSON.stringify(response.data), {
            EX: 30 // expire in 30 seconds
        });

        return res.json(response.data);

    } catch (err) {
        console.error(err);
        return res.status(500).json({ error: "Internal Server Error" });
    }
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
