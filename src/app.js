window.onload = function() {
  // Elemento HTML con el ID "excuse"
  var excuseElement = document.getElementById("excuse");

  // Arrays para generar excusas aleatorias
  var who = ["The dog", "My grandma", "His turtle", "My bird"];
  var action = ["ate", "peed", "crushed", "broke"];
  var what = ["my homework", "the keys", "the car"];
  var when = [
    "before the class",
    "right on time",
    "when I finished",
    "during my lunch",
    "while I was praying"
  ];

  // Función para generar una excusa aleatoria
  function generateExcuse() {
    var randomWho = who[Math.floor(Math.random() * who.length)];
    var randomAction = action[Math.floor(Math.random() * action.length)];
    var randomWhat = what[Math.floor(Math.random() * what.length)];
    var randomWhen = when[Math.floor(Math.random() * when.length)];

    // Concatenar elementos para formar la excusa
    var randomExcuse =
      randomWho + " " + randomAction + " " + randomWhat + " " + randomWhen;

    return randomExcuse;
  }

  // Establecer la excusa aleatoria en el innerHTML del elemento con ID "excuse"
  excuseElement.innerHTML = generateExcuse();
};
