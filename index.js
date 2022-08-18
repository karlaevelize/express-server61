//import packages
const express = require("express")

//get data
const data = require("./data.json")

//express instance
const app = express()

//give a port/address
const port = 4000

//two arguments: path, function(request, response, next)
app.get("/", (request, response) => {
  response.send("Hello")
})

//message
app.get("/message/:name", (request, response) => {
  const { name } = request.params
  const message = `Welcome, ${name}`
  response.send(message)
})

//cat
app.get("/cat", (request, response) => {
  response.send("Cat")
})

//list of chars
app.get("/characters", (request, response) => {
  response.send(data)
})

//send a character by id
app.get("/characters/:id", (request, response) => {
  const id = request.params.id
  const charById = data.find((char) => char.id === parseInt(id))
  response.send(charById)
})

//send a character by id
app.get("/chars/:blood", (request, response) => {
  const blood = request.params.blood
  const charByBlood = data.filter((char) => char.blood.toLowerCase() === blood.toLowerCase())
  response.send(charByBlood)
})

//takes two arguments: path, function
app.listen(port, () => console.log(`Listening on ${port}`))