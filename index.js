import app from './server.js' // import app that were previously created and exported in server.js.
import mongodb from 'mongodb' // access our database and dotenv to access our environment variable
import dotenv from 'dotenv'

// create an asynchronous function main() to connect to our MongoDB cluster.
async function main()
{
    // load in the environment variables.
    dotenv.config()

        // We create an instance of MongoClient and pass in the database URI.
        const client = new mongodb.MongoClient(process.env.MOVIEREVIEWS_DB_URI) // getting data from server.
        
        // we retrieve the port from our environment variable. if we can't access it, we
        // use port 8000.
        const port = process.env.PORT || 8000

        // call client.connect to connect to the database.client.connect() returns a promise.
        // Use the await keyword to indicate that we block further execution until that operation has completed
        try
        {
            // Connect to the MongoDB cluster
            await client.connect()
            
            // starts the server and listens via the specified port.
            // call function provided in the 2nd argument is executed when the server
            // starts listening.
            // when the server starts, it logs a message "server is running in port 5000" 
            app.listen(port, () => { // start web server
                console.log("server is running on port:"+port);
            })
            
        }
        
        catch(e)
        {
            console.error(0);
            process.exit(1)
        }
}
// main() function implemented, we then call it and send any errors to the console.
main().catch(console.error);
