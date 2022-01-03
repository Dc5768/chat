var query = require('samp-query')

var options = {
    host: '51.79.216.86'
}

query(options, function (error, response) {
    if(error)
        console.log(error)
    else 
        console.log(response)
})