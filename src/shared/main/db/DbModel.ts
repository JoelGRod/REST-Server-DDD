import { 
    ObjectId, 
    Document, 
    MongoClient, 
    Collection, 
    FindCursor
} from "mongodb";

export class DbModel {
  private _db: Collection;

  public constructor(dbClient: MongoClient, col: string) {
    this._db = dbClient.db().collection(col);
  }

  public get db() {
    return this._db;
  }

  public saveDocument = async (data: any): Promise<Document | null> => {
    try {
      const response = await this._db.insertOne({ ...data });
      return await this.findById(String(response.insertedId));
    } catch (error) {
      throw new Error(`Error saving user: ${error}`);
    }
  };

  public findById = async (id: string): Promise<Document | null> => {
    try {
      const objectId = new ObjectId(id);
      return await this._db.findOne({ _id: objectId });
    } catch (error) {
      throw new Error(`Invalid ID: ${error}`);
    }
  };

  public findByIdAndUpdate = async (id: string, data: any): Promise<Document | null> => {
    try {
      const objectId = new ObjectId(id);
      await this._db.updateOne(
          { _id: objectId }, 
          { $set: { ...data } }
      );
      return await this.findById(id);
    } catch (error) {
      throw new Error(`Error updating user: ${error}`);
    }
  };

  // Extra - Strict Query
  public findOne = async ({ ...data }): Promise<Document | null> => {
    try {
      return await this._db.findOne({ ...data });
    } catch (error) {
      throw new Error(`Invalid data: ${error}`);
    } 
  }

  // Extra - Strict Query
  public count = async ({ ...data }): Promise<Number> => {
      try {
        return await this._db.count({ ...data });
      } catch (error) {
        throw new Error(`Invalid data: ${error}`);
      }
  }

  // Extra - Simple searches
  public find = async ({ ...data }): Promise<FindCursor<Document>> => {
      try {
        return await this._db.find({ ...data });
      } catch (error) {
        throw new Error(`Invalid data: ${error}`);
      }
  }

}
