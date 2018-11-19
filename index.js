const http = require('http')

const server = http.createServer((request, response)=>{
    console.log(request.url)
    response.write('Saca las chelas y las alitas')
    response.end()
})

server.listen(3000)