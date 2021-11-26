import { MongoClient } from "mongodb";

require("dotenv").config();

export let dbClientTests: MongoClient;

export const dbTestsConnection = async (): Promise<void> => {
    try {
        dbClientTests = new MongoClient(String(process.env.DB_CNN_TEST));
        await dbClientTests.connect();
    } catch (error) {
        console.log("Db Connection Error: ", error);
    } 
}