const fs=require('fs')
const async=require('async')
const Movie=require('../model')
const debug=require('debug')
let logger=debug('crawl:write')
module.exports=function (movies,callback) {
    async.forEach(movies,function (movie,cb) {
        Movie.create(movie,cb)
        logger(`写入电影:${movie.name}`)
    },callback)
}