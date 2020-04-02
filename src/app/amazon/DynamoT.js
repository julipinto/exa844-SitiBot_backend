const AWS = require("./AWS");
const docClient = new AWS.DynamoDB.DocumentClient();

const TableName = "Twitter";

const mes = {
  Jan: "01",
  Feb: "02",
  Mar: "03",
  Apr: "04",
  May: "05",
  Jun: "06",
  Jul: "07",
  Aug: "08",
  Sep: "09",
  Oct: "10",
  Nov: "11",
  Dec: "12"
};

async function Put(id, created_at, text, user) {
  let date = created_at.split(" ");
  let mesAno = mes[date[1]] + "/" + date[5];

  var params = {
    TableName,
    Item: {
      id,
      created_at,
      text,
      user,
      mesAno
    }
  };

  console.log("Adding a new item on table Twitter: " + Date());

  const res = await docClient.put(params, function(err, data) {
    if (err) {
      console.error(
        "Unable to add item. Error JSON:",
        JSON.stringify(err, null, 2)
      );
    } else {
      console.log("Added item:", JSON.stringify(data.params, null, 2));
    }
  });
  console.log(res);

  return res;
}

module.exports = {
  Put
};
