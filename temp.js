# DO NOT USE THIS - this will be deleted soon

server.listen(process.env.PORT || config.port, () => console.log(`${config.ssl ? 'https://' : 'http://'}0.0.0.0:${config.port}`))
