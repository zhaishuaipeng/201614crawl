const async=require('async')
const read=require('./read')
const write=require('./write')
const debug=require('debug')
let logger=debug('crawl:main')
logger('=>=>=>=>=>=>开始执行!<=<=<=<=<=<=')
let uri='http://top.baidu.com/buzz?b=26&c=1&fr=topcategory_c1'
async.waterfall([
    function (callback) {
        read(uri,callback)
    },
    function (data,callback) {
        write(data,callback)
    }
],function (err,res) {
    logger('=>=>=>=>=>=>完成!<=<=<=<=<=<=')
})