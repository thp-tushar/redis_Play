const client = require('./client');

async function getAllItems() {
    try {
        await client.set("message:6", "Go ONNN"); //set key:value
        await client.expire("message:6", 20); //rate limiting
        const result1 = await client.get("message:6");

        await client.set("candies:3", "Snickers"); //list
        console.log("Result1:", result1);

        await client.rpush("candies", "Mars");  //list listname: value


        await client.sadd("fruits", "Apple"); //set
        await client.sadd("fruits", "Banana");
        await client.sadd("fruits", "Orange");
        await client.sadd("fruits", "Apple"); //duplicate, will not be added
        
    }

    catch (error) {
        throw error;    
     }
}  

getAllItems();
