const express = require('express')
const InsuranceRouter = require('./insurance/src/api/routes/InsuranceRouter')
const app = express().use(express.json())
const PORT = 3000
const VERSION = 'v1'

app.use(`/insurance/${VERSION}`, InsuranceRouter)
app.listen(PORT, () => console.log(`online and listening for localhost:${PORT}`))