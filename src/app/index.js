const twitterStream = require("./twitter/Stream");
const crawlerAcordaCidade = require("./acordaCidade/facadeCrawler");//

console.log("running");
//1° connect with twitter api
twitterStream.streaming();

setInterval(()=> {
    crawlerAcordaCidade.run();
}, 1000 * 60 * 30)

setInterval(()=> {
	console.log('reconnecting the twitter api')
	twitterStream.streaming();
}, 1000 * 60 * 60 * 12)
