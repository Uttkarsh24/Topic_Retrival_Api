import dotenv from "dotenv";
import app from "./app.js";

dotenv.config({
    path: './env',
});

console.log(process.env.PORT);


const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

