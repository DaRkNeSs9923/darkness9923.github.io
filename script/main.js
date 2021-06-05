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
  if (!regex.test(key)) {
    theEvent.returnValue = false;
    if (theEvent.preventDefault) theEvent.preventDefault();
  }
}
//--------------

function calc1() {
  num1 = parseFloat(document.getElementById("unidade1").value) || 0;
  num2 = parseFloat(document.getElementById("unidade2").value) || 0;
  media = ((num1 + num2) / 2)
  resultado = (12.5 - ((3 / 4) * (num1 + num2)));


  if (resultado > 10) {
    document.getElementById("P1").innerHTML = "<pp id='pp'>Cara, tu precisa tirar mais de 10 na final, acho que você ja entendeu...</pp>";
  }
  else if (media >= 7) {
    document.getElementById("P1").innerHTML = "<pp id='pp'>Cara, se tu tem uma média maior ou igual a 7, pra que tu vai fazer final?? wtf??</pp>";
  } else {
    if ((document.getElementById("pp")) === null) {
      document.getElementById("result1").innerHTML = (resultado).toFixed(2);

    } else {
      document.getElementById('pp').innerHTML = "<p1 id='P1'> você precisa tirar <span id='result1'></span> na final para ser aprovado.</p1>";
      document.getElementById("result1").innerHTML = (resultado).toFixed(2);
    }

  }

}

function calc2() {
  num1 = parseFloat(document.getElementById("unidade11").value) || 0;
  num2 = parseFloat(document.getElementById("unidade22").value) || 0;
  final1 = parseFloat(document.getElementById("final11").value) || 0;
  resultado = ((num1 + num2) * 3 + final1 * 4) / 10;

  if (resultado < 5) {
    if ((document.getElementById("F2")) === null) {
      document.getElementById("result2").innerHTML = "<p1 id='F1'>Infelizmente, não foi dessa vez, você ficou com média final de <span id='result22'></span></p1> ";
      document.getElementById("result22").innerHTML = (resultado).toFixed(2);
    } else {
      document.getElementById("F2").innerHTML = "<span1 id='result2'></span1>";
      document.getElementById("result2").innerHTML = "<p1 id='F1'>Infelizmente, não foi dessa vez, você ficou com média final de <span id='result22'></span></p1> ";
      document.getElementById("result22").innerHTML = (resultado).toFixed(2);
    }

  } else if (resultado >= 5) {
    if ((document.getElementById("F1")) === null) {
      document.getElementById("result2").innerHTML = "<p1 id='F2'> Parabéns, sua média final ficou <span id='result22'></span></p2>";
      document.getElementById("result22").innerHTML = (resultado).toFixed(2);
    } else {
      document.getElementById("F1").innerHTML = "<span1 id='result2'></span1>";
      document.getElementById("result2").innerHTML = "<p1 id='F2'> Parabéns, sua média final ficou <span id='result22'></span></p2>";
      document.getElementById("result22").innerHTML = (resultado).toFixed(2);
    }
  }

}