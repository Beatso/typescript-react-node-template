import express from "express"

// express setup
const app = express()
app.use(express.json())
app.get("/ping", (req, res) => res.send("pong"))
// app.all("*", (req, res, next) => {
// 	res.header("access-control-allow-origin", "*")
// 	next()
// })

// ...

// listen express server
const port = process.env.PORT || 3000
app.listen(port, () => console.log(`Server running on port ${port}`))
