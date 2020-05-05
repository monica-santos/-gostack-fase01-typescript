import express from 'express'

const app = express()

let teste: object

teste = {
  teste: {
    nest: true
  }
}

app.get('/', (request, response) => {
  return response.json({ message: 'Hello' })
})

app.listen(3333)
