const express = require('express')
const InsuranceRouter = require('./insurance/src/api/routes/InsuranceRouter')
const app = express().use(express.json())
const PORT = 3000

app.use('/insurance', InsuranceRouter)
app.listen(PORT, () => console.log(`online and listening for localhost:${PORT}`))