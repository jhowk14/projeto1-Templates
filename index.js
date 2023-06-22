const app = require('express')()
const path = require('path')
const porta = '3200'
//Sctring com o caminho do diretório base + /templates
const baseDir = path.join(__dirname, 'templates')
app.get('/', (req, res)=>res.sendFile(`${baseDir}/index.html`))
app.get('/cadastrar', (req, res)=>res.sendFile(`${baseDir}/cadastrar.html`))
app.get('/consultar', (req, res)=>res.sendFile(`${baseDir}/consultar.html`))
app.use((req, res)=>res.sendFile(`${baseDir}/404.html`))//Rota padrão - Importante ficar por ultimo
app.listen(porta, ()=>console.log(`Servidor rodando em: http://localhost:${porta}`))