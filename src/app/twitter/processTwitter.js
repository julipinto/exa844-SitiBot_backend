const dynamoT = require("../amazon/DynamoT");

function push(event) {
  let text = event.text.toLowerCase();
  if (text.includes("uefs")) {
    console.log("Um Tweet com o nome UEFS foi encontrado: " + event.text);
    if (
      text.includes(
        "greve",
        "protesto",
        "protestam",
        "mobilização",
        "pórtico",
        "paralisar",
        "paralisação",
        "fecharam o acesso"
      )
    ) {
      console.log(
        "No tweet encontrado --- " +
          event.text +
          " --- há um indício de que as atividades da UEFS podem estar sendo comprometidas."
      );
      let { id_str, created_at, text, user } = event;
      dynamoT.Put(id_str, created_at, text, user.screen_name);
    }
    console.log("Processamento Twitter concluído: " + Date());
    console.log("---------------------------------------------------");
  }
}
module.exports = {
  push
};
