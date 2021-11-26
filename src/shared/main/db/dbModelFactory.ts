// Connections
import { dbClient } from "./dbConnections";
// DbModel - DO - DAO
import { DbModel } from './DbModel';

export const createModel = (collection: string) => {
    if(collection === "users") 
        return new DbModel(dbClient, collection);
}