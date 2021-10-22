const letters = document.getElementById ("letters");
const numbers = document.getElementById ("numbers");

const a1 = document.getElementById ("a1");
const b2 = document.getElementById ("b2");
const c3 = document.getElementById ("c3");
const d4 = document.getElementById ("d4");
const e5 = document.getElementById ("e5");
const f6 = document.getElementById ("f6");
const g7 = document.getElementById ("g7");
const h8 = document.getElementById ("h8");
const i9 = document.getElementById ("i9");
const j0 = document.getElementById ("j0");
const cn = document.getElementById ("cn");
const cl = document.getElementById ("cl");


const fnA1 = () => {
    if (letters.innerHTML == "") {
        letters.innerHTML = "A";
    } else {
        numbers.innerHTML = "1";
    }
};
console.log(letters.innerHTML);
const fnB2 = () => {
    if (letters.innerHTML == "A") {
        letters.innerHTML += "B";
    }else if (numbers.innerHTML== "1"){
        numbers.innerHTML += "2"
    } else if(letters.innerHTML !== "A" || numbers.innerHTML !== "1") {
        alert ("faltan Datos")
    }
    };
const fnC3 = () => {
    if (letters.innerHTML == "A" + "B") {
        letters.innerHTML += "C";
    } else if (numbers.innerHTML== "1" + "2"){
        numbers.innerHTML += "3"
    } else if(letters.innerHTML == "A" + "B" || numbers.innerHTML !== "1" + "2") {
        alert ("faltan Datos")
    }
}
const fnD4 = () => {
    if (letters.innerHTML == "A" + "B" + "C") {
        letters.innerHTML += "D";
    } else if (numbers.innerHTML== "1" + "2" + "3"){
        numbers.innerHTML += "4"
    } else if(letters.innerHTML !== "A" + "B" + "C" || numbers.innerHTML !== "1" + "2" + "3") {
        alert ("faltan Datos")
    }
}
const fnE5 = () => {
    if (letters.innerHTML == "A" + "B" + "C" + "D") {
        letters.innerHTML += "E";
    } else if (numbers.innerHTML== "1" + "2" + "3" + "4"){
        numbers.innerHTML += "5"
    } else if(letters.innerHTML !== "A" + "B" + "C" + "D" || numbers.innerHTML !== "1" + "2" + "3" + "4") {
        alert ("faltan Datos")
    }
}
const fnF6 = () => {
    if (letters.innerHTML == "A" + "B" + "C" + "D" + "E") {
        letters.innerHTML += "F";
    } else if (numbers.innerHTML== "1" + "2" + "3" + "4" + "5"){
        numbers.innerHTML += "6"
    } else if(letters.innerHTML !== "A" + "B" + "C" + "D" + "E" || numbers.innerHTML !== "1" + "2" + "3" + "4" + "5") {
        alert ("faltan Datos")
    }
}
const fnG7 = () => {
    if (letters.innerHTML == "A" + "B" + "C" + "D" + "E" + "F") {
        letters.innerHTML += "G";
    } else if (numbers.innerHTML== "1" + "2" + "3" + "4" + "5" + "6"){
        numbers.innerHTML += "7"
    } else if(letters.innerHTML !== "A" + "B" + "C" + "D" + "E" + "F" || numbers.innerHTML !== "1" + "2" + "3" + "4" + "5" + "6"){
        alert ("faltan Datos")
    }
}

const fnH8 = () => {
    if (letters.innerHTML == "A" + "B" + "C" + "D" + "E" + "F" + "G") {
        letters.innerHTML += "H";
    } else if (numbers.innerHTML== "1" + "2" + "3" + "4" + "5" + "6" + "7"){
        numbers.innerHTML += "8"
    } else if(letters.innerHTML !== "A" + "B" + "C" + "D" + "E" + "F" + "G" || numbers.innerHTML !== "1" + "2" + "3" + "4" + "5" + "6" + "7") {
        alert ("faltan Datos")
    }
}
const fnI9 = () => {
    if (letters.innerHTML == "A" + "B" + "C" + "D" + "E" + "F" + "G" + "H"){
        letters.innerHTML += "I";
    } else if (numbers.innerHTML== "1" + "2" + "3" + "4" + "5" + "6" + "7" + "8"){
        numbers.innerHTML += "9"
    } else if(letters.innerHTML !== "A" + "B" + "C" + "D" + "E" + "F" + "G" + "H"|| numbers.innerHTML !== "1" + "2" + "3" + "4" + "5" + "6" + "7" + "8") {
        alert ("faltan Datos")
    }
}
const fnJ0 = () => {
    if (letters.innerHTML == "A" + "B" + "C" + "D" + "E" + "F" + "G" + "H" + "I"){
        letters.innerHTML += "J";
    } else if (numbers.innerHTML== "1" + "2" + "3" + "4" + "5" + "6" + "7" + "8" + "9"){
        numbers.innerHTML += "0"
    } else if(letters.innerHTML !== "A" + "B" + "C" + "D" + "E" + "F" + "G" + "H" + "I"|| numbers.innerHTML !== "1" + "2" + "3" + "4" + "5" + "6" + "7" + "8" + "9") {
        alert ("faltan Datos")
    }
}

const fnCL = () => {
    letters.innerHTML = "";
}
const fnCN = () => {
    numbers.innerHTML = "";
}
// numeros 


a1.onclick = () => {
   fnA1();
};
b2.onclick = () => {;
   fnB2();
};
c3.onclick = () => {;
   fnC3();
};
d4.onclick = () => {;
   fnD4();
};
e5.onclick = () => {;
   fnE5();
};
f6.onclick = () => {;
   fnF6();
};
g7.onclick = () => {;
   fnG7();
};
h8.onclick = () => {;
   fnH8();
};
i9.onclick = () => {;
fnI9();
};
j0.onclick = () => {;
   fnJ0();
};
cn.onclick = () => {;
   fnCN();
};
cl.onclick = () => {;
   fnCL();
};