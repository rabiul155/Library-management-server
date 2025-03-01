import dotenv from "dotenv";
import path from "path";
dotenv.config({ path: path.join((process.cwd(), ".env")) });

import app from "./app";
const PORT = process.env.PORT || 5000;

async function server() {
  const server = app.listen(process.env.PORT, () => {
    console.log("Library management server running");
    console.log(process.env.NODE_ENV);
    console.log(process.env.PORT);
  });
}

server();
