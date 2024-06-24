const express = require('express')
const app = express()
const port = 3000

const clientId = "893c44cb53404a11bab16e27a8879c6e";



app.get('/', (req, res) => {
  res.sendFile("././static/index.html", {
		root: __dirname
	
  })

})

app.get('/styles.css', (req, res) => {
  res.sendFile("styles.css", { root: "./server/static" });
});

app.get('/src/gitlogo.svg', (req, res) => {
  res.sendFile("gitlogo.svg", { root: "./server/static/src" });
});

app.get('/callback', (req, res) => {
	res.send('hello world')
  })


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})