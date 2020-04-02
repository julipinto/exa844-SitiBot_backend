const dynamoAC = require("../../amazon/DynamoAC");

module.exports = {
  parse: async feed => {
    const items = feed.items;
    console.log(
      "Tratando as informações recebidas do Acorda Cidade: " + Date()
    );
    for (let i = 0; i < items.length; i++) {
      let item = items[i];
      let string = (item.title + " | " + item.content).toLowerCase();
      if (string.includes("uefs")) {
        console.log(
          "Uma matéria com o nome 'UEFS' foi encontrada: " + item.title
        );
        if (
          string.includes("greve") ||
          string.includes("protesto") ||
          string.includes("protestam") ||
          string.includes("mobilização") ||
          string.includes("pórtico") ||
          string.includes("paralisar") ||
          string.includes("paralisação")
        ) {
          console.log(
            "Na matéria encontrada --- " +
              item.title +
              " --- há um indício de que as atividades da UEFS podem estar sendo comprometidas."
          );
          console.log("Salvando a matéria no DynamoDB: " + Date());
          let { title, link, pubDate, content, categories } = item;
          dynamoAC.Put(title, link, pubDate, content, categories);
        }
      }
    }
    console.log("Processamento Acorda Cidade concluído");
    console.log("---------------------------------------------------");
  }
};
