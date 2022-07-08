import "./styles.css";

("use strict");
var res;
var count = 0;
var exp = "";
var onscrn = "";
var lstinp = "";
var dotcc = 0;
// NNUMBERS ON CALCULATOR
var nu7 = document.getElementById("nu7");
var nu8 = document.getElementById("nu8");
var nu9 = document.getElementById("nu9");
var nu4 = document.getElementById("nu4");
var nu5 = document.getElementById("nu5");
var nu6 = document.getElementById("nu6");
var nu1 = document.getElementById("nu1");
var nu2 = document.getElementById("nu2");
var nu3 = document.getElementById("nu3");
var nu0 = document.getElementById("nu0");

// OPERATORS
var ac = document.getElementById("ac");
var sign = document.getElementById("sign");
var per = document.getElementById("per");
var div = document.getElementById("div");
var mul = document.getElementById("mul");
var sub = document.getElementById("sub");
var plus = document.getElementById("plus");
var dot = document.getElementById("dot");
var eql = document.getElementById("eql");

function display() {
  var dsp = document.getElementById("res");
  onscrn = onscrn + "";
  console.log(onscrn[onscrn.length - 1], "check");
  if (
    onscrn[onscrn.length - 1] == "0" &&
    onscrn[onscrn.length - 2] == 0 &&
    onscrn[onscrn.length - 3] == 0 &&
    onscrn[onscrn.length - 4] == "."
  )
    onscrn = onscrn.slice(0, onscrn.length - 4);
  dsp.innerText = onscrn;
}

ac.addEventListener("click", acHlp);
function acHlp() {
  display();
  res = undefined;
  exp = "";
  dotcc = 0;
  onscrn = "";
  lstinp = "";
  count = 0;
}

dot.addEventListener("click", dotHlp);
function dotHlp() {
  if (exp == "") {
    exp = "0.";
    lstinp = "dot";
    onscrn = "0.";
  } else if (lstinp == "sn" || lstinp == "eql") {
    exp += "0.";
    onscrn = "0.";
    lstinp = "dot";
  } else {
    exp += ".";
    onscrn = onscrn + ".";
    lstinp = "dot";
  }
  display();
}

eql.addEventListener("click", eqlHlp);
function eqlHlp() {
  try {
    res = eval(exp);
    if (res == NaN || res == undefined) return;
    console.log(res);
    res = parseFloat(res);
    res = res.toFixed(3);
    onscrn = res;
    lstinp = "eql";
    count = 0;
    exp = res;
    display();
  } catch (err) {
    res = "ERROR";
    onscrn = "ERROR";
    exp = "ERROR";
    display();
  }
}

function errors() {
  var dsp = document.getElementById("res");
  dsp.innerText = "ERROR";
  res = undefined;
  exp = "";
  dotcc = 0;
  onscrn = "";
  lstinp = "";
  count = 0;
}
sign.addEventListener("click", signHlp);
function signHlp() {
  if (
    onscrn.length != 0 &&
    lstinp != "sn" &&
    lstinp != "per" &&
    lstinp != "sgn"
  ) {
    let sz = onscrn.length + 2;
    if (onscrn[0] == "-") onscrn = onscrn.slice(1);
    else onscrn = "-" + onscrn;
    display();
  } else {
    if (lstinp == "sgn" && onscrn == "-") onscrn = "";
    else onscrn = "-";
    exp = exp + " - ";
    display();
  }
  console.log(onscrn);
  lstinp = "sgn";
}
//division
div.addEventListener("click", divHlp);
function divHlp() {
  if (lstinp == "sn") {
    exp = exp.slice(0, exp.length - 3);
    count = count - 1;
  } else if (lstinp == "per") {
    exp = exp.slice(0, exp.length - 6);
    console.log(exp);
    count = count - 1;
  }
  count++;
  if (onscrn.length != 0 && onscrn != "ERROR") {
    if (count > 1) {
      //try
      count = 1;
      res = eval(exp);
      console.log(res, "here");
      exp = "";
      exp += res + "/";
      onscrn = res;
    } else exp = exp + " / ";
    lstinp = "sn";
  }
}
//percentage
per.addEventListener("click", perHlp);
function perHlp() {
  if (lstinp == "sn") {
    exp = exp.slice(0, exp.length - 3);
    count = count - 1;
  } else if (lstinp == "per") {
    exp = exp.slice(0, exp.length - 6);
    console.log(exp);
    count = count - 1;
  }
  count++;
  if (onscrn.length != 0 && onscrn != "ERROR") {
    if (count > 1) {
      //try
      count = 1;
      res = eval(exp);
      res = parseFloat(res);
      res = res.toFixed(3);
      console.log(res, "here");
      exp = "";
      exp += res + "/100*";
      onscrn = res;
    } else exp = exp + " /100*";
    lstinp = "per";
  }
}

//multiplication
mul.addEventListener("click", mulHlp);
function mulHlp() {
  // console.log(res);
  if (lstinp == "sn") {
    exp = exp.slice(0, exp.length - 3);
    count = count - 1;
  } else if (lstinp == "per") {
    exp = exp.slice(0, exp.length - 6);
    console.log(exp);
    count = count - 1;
  }
  count++;
  if (onscrn.length != 0 && onscrn != "ERROR") {
    if (count > 1) {
      count = 1;
      res = eval(exp);
      res = parseFloat(res);
      res = res.toFixed(3);
      console.log(res);
      exp = "";
      exp += res + "*";
      onscrn = res;
    } else exp = exp + " * ";
    lstinp = "sn";
  }
}

//subtraction
sub.addEventListener("click", subHlp);
function subHlp() {
  if (lstinp == "sn") {
    exp = exp.slice(0, exp.length - 3);
    count = count - 1;
  } else if (lstinp == "per") {
    exp = exp.slice(0, exp.length - 6);
    console.log(exp);
    count = count - 1;
  }
  count++;
  if (onscrn.length != 0 && onscrn != "ERROR") {
    if (count > 1) {
      count = 1;
      res = eval(exp);
      res = parseFloat(res);
      res = res.toFixed(3);
      console.log(res, "here");
      exp = "";
      exp += res + "-";
      onscrn = res;
    } else exp = exp + " - ";
    lstinp = "sn";
  }
}

//addition
plus.addEventListener("click", plusHelp);
function plusHelp() {
  if (lstinp == "sn") {
    exp = exp.slice(0, exp.length - 3);
    count = count - 1;
  } else if (lstinp == "per") {
    exp = exp.slice(0, exp.length - 6);
    console.log(exp);
    count = count - 1;
  }
  count++;
  if (onscrn.length != 0 && onscrn != "ERROR") {
    if (count > 1) {
      count = 1;
      res = eval(exp);
      res = parseFloat(res);
      res = res.toFixed(3);
      console.log(res, "here");
      exp = "";
      exp += res + "+";
      onscrn = res;
    } else exp = exp + " + ";
    lstinp = "sn";
  }
}

//NUMBERS
nu7.addEventListener("click", num7);
function num7() {
  if (lstinp.lenght == 0 || lstinp == "sn" || lstinp == "per") onscrn = "7";
  else if (lstinp == "eql") {
    acHlp();
    onscrn = "7";
  } else onscrn = onscrn + "7";
  exp += "7";
  console.log(onscrn);
  console.log(exp);
  lstinp = "7";
  display();
}

nu8.addEventListener("click", num8);
function num8() {
  if (lstinp.lenght == 0 || lstinp == "sn" || lstinp == "per") onscrn = "8";
  else if (lstinp == "eql") {
    acHlp();
    onscrn = "8";
  } else onscrn = onscrn + "8";
  exp += "8";
  console.log(onscrn);
  console.log(exp);
  lstinp = "7";
  display();
}
nu9.addEventListener("click", num9);
function num9() {
  if (lstinp.lenght == 0 || lstinp == "sn" || lstinp == "per") onscrn = "9";
  else if (lstinp == "eql") {
    acHlp();
    onscrn = "9";
  } else onscrn = onscrn + "9";
  exp += "9";
  console.log(onscrn);
  console.log(exp);
  lstinp = "7";
  display();
}
nu4.addEventListener("click", num4);
function num4() {
  if (lstinp.lenght == 0 || lstinp == "sn" || lstinp == "per") onscrn = "4";
  else if (lstinp == "eql") {
    acHlp();
    onscrn = "4";
  } else onscrn = onscrn + "4";
  exp += "4";
  console.log(onscrn);
  console.log(exp);
  lstinp = "7";
  display();
}
nu5.addEventListener("click", num5);
function num5() {
  if (lstinp.lenght == 0 || lstinp == "sn" || lstinp == "per") onscrn = "5";
  else if (lstinp == "eql") {
    acHlp();
    onscrn = "5";
  } else onscrn = onscrn + "5";
  exp += "5";
  console.log(onscrn);
  console.log(exp);
  lstinp = "7";
  display();
}
nu6.addEventListener("click", num6);
function num6() {
  if (lstinp.lenght == 0 || lstinp == "sn" || lstinp == "per") onscrn = "6";
  else if (lstinp == "eql") {
    acHlp();
    onscrn = "6";
  } else onscrn = onscrn + "6";
  exp += "6";
  console.log(onscrn);
  console.log(exp);
  lstinp = "7";
  display();
}
nu1.addEventListener("click", num1);
function num1() {
  if (lstinp.lenght == 0 || lstinp == "sn" || lstinp == "per") onscrn = "1";
  else if (lstinp == "eql") {
    acHlp();
    onscrn = "1";
  } else onscrn = onscrn + "1";
  exp += "1";
  console.log(onscrn);
  console.log(exp);
  lstinp = "7";
  display();
}
nu2.addEventListener("click", num2);
function num2() {
  if (lstinp.lenght == 0 || lstinp == "sn" || lstinp == "per") onscrn = "2";
  else if (lstinp == "eql") {
    acHlp();
    onscrn = "2";
  } else onscrn = onscrn + "2";
  exp += "2";
  console.log(onscrn);
  console.log(exp);
  lstinp = "7";
  display();
}
nu3.addEventListener("click", num3);
function num3() {
  if (lstinp.lenght == 0 || lstinp == "sn" || lstinp == "per") onscrn = "3";
  else if (lstinp == "eql") {
    acHlp();
    onscrn = "3";
  } else onscrn = onscrn + "3";
  exp += "3";
  console.log(onscrn);
  console.log(exp);
  lstinp = "7";
  display();
}
nu0.addEventListener("click", num0);
function num0() {
  if (lstinp.lenght == 0 || lstinp == "sn" || lstinp == "per") onscrn = "0";
  else if (lstinp == "eql") {
    acHlp();
    onscrn = "0";
  } else onscrn = onscrn + "0";
  exp += "0";
  console.log(onscrn);
  console.log(exp);
  lstinp = "7";
  display();
}
