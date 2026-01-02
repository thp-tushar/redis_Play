import { createClient } from 'redis';
async function main() {
    const client = createClient();
    await client.connect();
    while (true) {
        const resposnse = await client.brPop("published_messages", 0);
        //user code here 
        await new Promise((resolve) => setTimeout(resolve, 1000)); // simulate work by waiting for 1 second
        console.log("Processed message:");
    }
}
main();
//# sourceMappingURL=index.js.map