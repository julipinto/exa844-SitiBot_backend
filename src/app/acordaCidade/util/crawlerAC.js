const P = require("rss-parser");
const parser = new P();

const link = "https://www.acordacidade.com.br/rss";

module.exports = {
  async pull() {
    console.log("Fazendo o parse do site Acorda Cidade:  " + Date());
    return await parser.parseURL(link);
  }
};
