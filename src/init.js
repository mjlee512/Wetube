import "./db";
import Video from "./models/Video";
import app from "./server";

const PORT = 15284;

const handleListening = () => 
    console.log(`Server listenting on port http://localhost:${PORT}`);

app.listen(PORT, handleListening);