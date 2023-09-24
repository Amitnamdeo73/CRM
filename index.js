const express = require("express");
const cors = require("cors");
const { default: mongoose } = require("mongoose");
const dotenv = require("dotenv");
const userRoute = require("./routes/user");
const authRoute = require("./routes/auth");


dotenv.config()
mongoose.connect( process.env.MONGO_URL).then(()=>console.log("DB connection success")).catch((err)=>{console.log(err)});
//connectTodatabase();

const app = express();
app.use(express.json());

app.use(
  cors({
    origin: "*", // Allow requests from this origin
    methods: "GET, POST, PUT, DELETE", // Allowed HTTP methods
  })

);

//API
app.use("/api/auth",authRoute);
app.use("/api/users",userRoute);



app.listen(process.env.PORT  || 5000,()=>{
  console.log("Backend server is running");
});