const AWS = require("./AWS");
const docClient = new AWS.DynamoDB.DocumentClient();

const TableName = "AcordaCidade";

async function Put(title, link, pubDate, content, categories) {
  console.log("Iniciando o armazenamento no DynamoDB: " + Date());

  let id = link.split("/")[4];

  let date = pubDate.split(",")[0].split("-");
  let mesAno = date[1] + "/" + date[2];

  var params = {
    TableName,
    Item: {
      id,
      title,
      link,
      pubDate,
      content,
      categories,
      mesAno
    }
  };

  console.log("Adding a new item on table Acorda Cidade");

  const res = await docClient.put(params, function(err, data) {
    if (err) {
      console.error(
        "Unable to add item. Error JSON:",
        JSON.stringify(err, null, 2)
      );
    } else {
      console.log("o parametro foi: " + data.params.item);
    }
  });

  return res;
}

module.exports = {
  Put
};
