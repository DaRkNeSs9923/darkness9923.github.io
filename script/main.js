//const meuCabecalho = document.querySelector('h1');
//meuCabecalho.textContent = 'Ola mundo!';
// para previnir que coloquem letras nos espaços
function validate(evt) {
    var theEvent = evt || window.event;
  
    // Handle paste
    if (theEvent.type === 'paste') {
        key = event.clipboardData.getData('text/plain');
    } else {
    // Handle key press
        var key = theEvent.keyCode || theEvent.which;
        key = String.fromCharCode(key);
    }
    var regex = /[0-9]|\./;
    if( !regex.test(key) ) {
      theEvent.returnValue = false;
      if(theEvent.preventDefault) theEvent.preventDefault();
    }
  }
//--------------
function calc1()
{
  num1 = parseFloat(document.getElementById("unidade1").value) || 0;
  num2 = parseFloat(document.getElementById("unidade2").value) || 0;
  media = ((num1 + num2) / 2)
  resultado = (12.5 - ((3/4)*(num1 + num2)));
  if (media >= 7) {
    document.getElementById("P1").innerHTML = "<pp id='pp'>Cara, se tu tem uma média 7, pra que tu vai fazer final?? wtf??</pp>";
  } else {
    document.getElementById("result1").innerHTML = (resultado).toFixed(2);
  }
  
}

function calc2() 
{
  num1 = parseFloat(document.getElementById("unidade11").value) || 0;
  num2 = parseFloat(document.getElementById("unidade22").value) || 0;
  final1 = parseFloat(document.getElementById("final11").value) || 0;
  resultado = ((num1 + num2) * 3 + final1 * 4) / 10;
  document.getElementById("result2").innerHTML = (resultado).toFixed(2);
  
}