/* eslint-disable prettier/prettier */
/* eslint-disable no-multi-assign */
import mongoose from 'mongoose';

/*
const { MONGODB_URI } =
  "mongodb+srv://abcracing:lwdXhYeTNzxzbV8v@cluster0.z0oxsg0.mongodb.net/?retryWrites=true&w=majority";

if (!MONGODB_URI) {
  throw new Error(
    'Please define the MONGODB_URI environment variable inside .env.local'
  );
}
*/
const MONGO_URL = process.env.MONGO_URI;

// const connectMongo = async () => mongoose.connect(process.env.MONGO_URI);

/**
 * Global is used here to maintain a cached connection across hot reloads
 * in development. This prevents connections growing exponentially
 * during API Route usage.
 */
let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

async function dbConnect() {
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    const opts = {
      bufferCommands: false,
    };

    cached.promise = mongoose.connect(MONGO_URL, opts).then((mongoose) => {
      return mongoose;
    });
  }
  cached.conn = await cached.promise;
  return cached.conn;
}

export default dbConnect;
