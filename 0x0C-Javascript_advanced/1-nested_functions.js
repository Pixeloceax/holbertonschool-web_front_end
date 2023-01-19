globalVariable = "Welcome";
function outer() {
  alert(globalVariable);
  cousrse = "Holberton";

  function inner() {
    alert(globalVariable + cousrse);
    let exclamation = "!";

    function inception() {
      alert(globalVariable + cousrse + exclamation);
    }
    inception();
  }
  inner();
}
outer();
