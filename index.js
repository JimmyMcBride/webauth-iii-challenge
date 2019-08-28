const server = require('./api/server.js')

require('dotenv/config')

const port = process.env.port

server.listen(port, () => console.log(`\n** Running on port ${port} **\n`))