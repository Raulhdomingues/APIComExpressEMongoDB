import "dotenv/config"
import app from "./src/app.js";

const PORT = 3000;

app.listen(PORT, () => {
    console.log("servidor escutando!");
})





// import http from "http";

// const rotas = {
//     "/": "Curso Express API",
//     "/livros": "Entrei na rota livros",
//     "/autores": "Entrei na rota autores"
// };

// const server = http.createServer((req, res) => {
//     res.writeHead(200, { "Content-Type": "text/plain" });
//     res.end(rotas[req.url]);
// });