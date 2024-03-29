import "dotenv/config"
import "./db";
import "./models/Video";
import "./models/User";
import app from "./server";

const PORT = 15284;

const handleListening = () => 
    console.log(`Server listenting on port http://localhost:${PORT}`);

app.listen(PORT, handleListening);