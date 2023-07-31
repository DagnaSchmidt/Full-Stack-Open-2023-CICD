const express = require("express")
const app = express()

const PORT = process.env.PORT || 8080 // eslint-disable-line

app.use(express.static("dist"))

app.listen(PORT, () => {
  console.log("server started on port 8080")
})

app.get('/health', (req, res) => {
  res.send('ok')
})
