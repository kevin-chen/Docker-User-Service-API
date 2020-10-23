const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.json([
        {
            name: 'Bob',
            email: 'bob@gmail.com'
        },
        {
            name: 'Alice',
            email: 'alice@gmail.com'
        },
        {
            name: 'Jake',
            email: 'jake@gmail.com'
        },
        {
            name: 'Maria',
            email: 'maria@gmail.com'
        },
        {
            name: 'Rich',
            email: 'rich@gmail.com'
        }
    ])
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})