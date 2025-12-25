const client = require('./client');

async function getAllItems() {
    try {
        await client.set("message:6", "Go ONNN");
        await client.expire("message:6", 20);
        const result1 = await client.get("message:6");
        console.log("Result1:", result1);
    }

    catch (error) {
        throw error;    
     }
}  

getAllItems();
