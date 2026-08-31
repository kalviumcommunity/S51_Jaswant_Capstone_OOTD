import mongoose from 'mongoose';

const MONGODB_URI = process.env.DataBase_URI || process.env.MONGODB_URI;

let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

export async function connectToDatabase() {
  if (!MONGODB_URI) {
    console.warn("MongoDB URI not provided in environment variables. Operating with fallback data layer.");
    return null;
  }

  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    const opts = {
      bufferCommands: false,
    };

    cached.promise = mongoose.connect(MONGODB_URI, opts).then((mongoose) => {
      console.log("Connected to MongoDB successfully.");
      return mongoose;
    }).catch(err => {
      console.error("MongoDB connection error:", err.message);
      return null;
    });
  }
  
  cached.conn = await cached.promise;
  return cached.conn;
}
