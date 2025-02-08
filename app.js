import express from "express"
import expressEjsLayouts from "express-ejs-layouts";
import path from "path";
import { fileURLToPath } from "url";
import  getTawanan  from "./api/data/route.js";
import  getorang  from "./api/isi/route.js";

const app = express();
app.set("view engine", "ejs");
app.use(expressEjsLayouts);
app.set("layout", "template/app")

const __dirname = path.dirname(fileURLToPath(import.meta.url));
app.use(express.static(path.join(__dirname, "public")));

app.use("/dashboard", getTawanan);
app.use("/lamjau", getorang)

app.listen(3100, () =>{
    console.log("server berhasil dijalankan ......!!!");
    
})
