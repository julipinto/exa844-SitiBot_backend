const RSSFeed = require("./util/crawlerAC");
const procecessData = require("./util/processRSSAC");

async function run() {
  //Crawler do feed em rss com o parse-rss em JSON
  let rss = await RSSFeed.pull();
  //processando esse dado em JSON
  procecessData.parse(rss);
}

run();

module.exports = {
  run
};
