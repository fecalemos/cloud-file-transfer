// const express = require("express")
// const bodyParser = require("body-parser")
// const routes = require("./routes")

function start() {
    console.log(`NODE_ENV: ${process.env.NODE_ENV}`)
    console.log(`PORT: ${process.env.PORT}`)
    if (!process.env.NODE_ENV || !process.env.PORT) {
        console.error('environment variables are missing', 'verify that you have set them directly or in .env file');
        process.exit(1)
    } else {
        console.log('Using environment variables')
    }
}

module.exports.start = start