import { config } from "dotenv";

config();

export const MONGODB_URI = process.env.MONGODB_URI || 'mongodb+srv://BDSM52:fldsmdfr@clusterdbsm52.tcenq.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'