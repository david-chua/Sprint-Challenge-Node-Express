const server = require('./server.js');

const PORT = process.env.PORT || 9090;
server.listen(PORT, () => {
  console.log(`listening to ${PORT}`)
})
