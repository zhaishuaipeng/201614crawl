const request=require('request')
const iconv=require('iconv-lite')
const cheerio=require('cheerio')
const debug=require('debug')
let logger=debug('crawl:read')
let uri='http://top.baidu.com/buzz?b=26&c=1&fr=topcategory_c1'
module.exports=function (uri,callback) {
    request({uri,encoding:null},function (err,res,body) {
        body=iconv.decode(body,'gbk')
        let movies=[],$=cheerio.load(body);
        $('.keyword .list-title').each(function (index,item) {
            let $this=$(this)
            let movie={
                name:$this.text(),
                url:$this.attr('href')
            }
            logger(`读取调电影:${movie.name}`)
            movies.push(movie)
        })
        callback(err,movies)
    })
}
