import express from "express";
import dotenv from "dotenv";
import cors from "cors"
import cookieParser from "cookie-parser";
import connectDB from "./database/db.js";
import userRoute from "./routes/userRoutes.js";

dotenv.config({
 quiet: true 
});

connectDB().catch((err) => {
  console.error("Database connection failed:", err.message);
});

const app = express();
const PORT = process.env.PORT || 3000;
//middleware
app.use(express.json());
app.use(cookieParser());
app.use(cors({
  origin:"http://localhost:5173",
  credentials:true
}))
//user Route
app.use("/user", userRoute);


app.get("/", (req, res) => {
  res.send("default route is working");
});
app.get("/home", (req, res) => {
  res.send("home route is working");
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`)
});



//this is my testing code 
// import express from "express";
// import dotenv from "dotenv"
// dotenv.config();
// const app=express();
// const PORT= process.env.PORT || 3000;
// app.get("/",(req,res)=>{
//   res.json({
//     success:true,
//     message:"i am coming form backend"
//   })
// })
// app.get("/home",(req,res)=>{
//   res.json({
//     success:true,
//     message:"i am coming form backend and i am home page"
//   })
// })

// app.listen(PORT,()=>{
//   console.log(`app is running port${PORT}`)
// })