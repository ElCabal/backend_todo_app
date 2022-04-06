import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const connection = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    const URL = `${connection.connection.host}:${connection.connection.port}`;
    console.log("MongoDB conectado en:", URL);
  } catch (error) {
    console.log("Error:", error);
    process.exit(1);
  }
};

export default connectDB;
