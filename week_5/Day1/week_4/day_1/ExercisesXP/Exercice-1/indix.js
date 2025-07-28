
function funcOne() {
    let a1 = 5;
    if (a1 > 1) {
        a1 = 3;
    }
    alert(`inside the funcOne function ${a1}`);
}

let a2 = 0;
function funcTwo() {
    a2 = 5;
}

function funcThree() {
    alert(`inside the funcThree function ${a2}`);
}
funcThree(); 
funcTwo();
funcThree(); 



function funcFour() {
    window.a3 = "hello";
}
function funcFive() {
    alert(`inside the funcFive function ${a3}`);
}
funcFour();
funcFive();


let a4 = 1;
function funcSix() {
    let a4 = "test";
    alert(`inside the funcSix function ${a4}`);
}
funcSix(); 

let a5 = 2;
if (true) {
    let a5 = 5;
    alert(`in the if block ${a5}`);
}
alert(`outside of the if block ${a5}`);

