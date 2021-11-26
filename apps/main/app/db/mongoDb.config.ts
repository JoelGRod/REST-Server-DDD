import { MongoClient } from "mongodb";

export let dbClient: MongoClient;

const dbConnection = async (): Promise<void> => {
    try {
        dbClient = new MongoClient(String(process.env.DB_CNN));
        await dbClient.connect();
        console.log("DB Online");
    } catch (error) {
        console.log("Db Connection Error: ", error);
    } 
}

const listDatabases = async (client: MongoClient) => {
    const databasesList = await client.db().admin().listDatabases();

    console.log("Databases:");
    databasesList.databases.forEach(db => console.log(` - ${db.name}`));
};

export default dbConnection;