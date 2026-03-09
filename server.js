const express =require("express")

const app = express()

app.use(express.json())


app.get("/", (req,res) => {
    res.send("API de Filmes")
})

const PORT = 3000

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta http://localhost:${PORT}`)

})

const series = [
    {
    id: 1,
    nome: "Bleach",
    genero: "Anime",
    subgenero: "Ação, Aventura, Shounen",
    duracao: 366 +" epsódios",
    },
    {
    id: 2,
    nome: "Naruto",
    genero: "Anime",
    subgenero: "Ação, Aventura, Shounen",
    duracao: 220 +" epsódios",
    },
    {
    id: 3,
    nome: "One Piece",
    image: "https://imgs.search.brave.com/Cz_i_q_a_qgwAuvtRkSNTK6pvdaYo0gQEkClgZP2YXw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zbS5p/Z24uY29tL2lnbl9i/ci9zY3JlZW5zaG90/L2RlZmF1bHQvYWxh/YmFzdGEtb25lLXBp/ZWNlX3d3engucG5n",
    genero: "Anime",
    subgenero: "Ação, Aventura, Shounen",
    duracao: 1500 +" epsódios",
    },
]

app.get("/series", (req, res) => {
    res.send(series)
})

app.post("/series", (req, res) => {
    const novaSerie = {
        id: series.length + 1,
        image: req.body.image,
        nome: req.body.nome,
        genero:req.body.genero,
        subgenero: req.body.subgenero,
        duracao: req.body.duracao,
    }

    series.push(novaSerie)

    res.send("Série Adicionada com Sucesso")
})

const filmes = [

    {id: 1,
     image: "https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/a01393ab-13bb-415b-a830-4188ec50fb31/compose?aspectRatio=1.78&format=webp&width=1200",
     nome: "Vingadores-Ultimato",
     duracao: 180,
     genero: "Ação",
     subgenero: "Super-herói"
    },

    {id: 2,
     image: "https://legadodamarvel.com.br/wp-content/uploads/2026/01/Vingadores-Doomsday-%E2%80%93-Vazam-todas-as-lutas-principais-do-filme-legadodamarvel.webp",
     nome: "Vingadores-Doomsday",
     duracao: "Indefinido",
     genero: "Ação",
     subgenero: "Super-herói"
    },

    {id: 3,
     image: "https://rollingstone.com.br/wp-content/uploads/2024/04/cavaleiro-da-lua-serie-da-marvel-com-oscar-isaac-tera-uma-2a-temporada-foto-divulgacaomarvel-studios.jpg",
     nome: "Cavaleiro da Lua",
     duracao: 297,
     genero: "Ação",
     subgenero: "Super-herói"
    },

    {id: 4,
     image: "https://imgs.search.brave.com/u-j5Kgv02gIVn1pYGVvlgofLcnYndMtaVkCj9R8NmoU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/c2hvd21ldGVjaC5j/b20uYnIvd3AtY29u/dGVudC91cGxvYWRz/Ly8yMDIzLzEwL2Nh/cGEtbWFydmVscy5w/bmc",
     nome: "Marvels",
     duracao: 112,
     genero: "Ação",
     subgenero: "Super-herói"
    },


]

app.get("/filmes", (req, res) => {
    res.json(filmes)
})




app.get('/filmes/:id', (req, res) => {

    const id = Number(req.params.id)

    const filmeEncontrado = filmes.find( filmes => filmes.id === id)

    res.json(filmeEncontrado)
})


//req: é a requisição
// params: são os parâmetros da rota
//id: é o nome que eu dei ao parâmetro (params) da rota

app.post("/filmes", (req, res) =>{

    const novoFilme = {
        id: filmes.length + 1,
        image: req.body.image,
        nome: req.body.nome,
        duracao: req.body.duracao,
        genero: req.body.genero,
        subgenero: req.body.subgenero,
    }

    filmes.push(novoFilme)

    res.send("Filme adicionado com sucesso")

    //filmes.push(req.body)


    //res.send("Filme adicionado com sucesso")
})

