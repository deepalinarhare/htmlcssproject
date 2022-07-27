const zero = document.getElementById("zero");
const one = document.getElementById("one");
const two = document.getElementById("two");
const three = document.getElementById("three");
const four = document.getElementById("four");
const five = document.getElementById("five");
const six = document.getElementById("six");
const seven = document.getElementById("seven");
const eight = document.getElementById("eight");
const nine = document.getElementById("nine");
const dot = document.getElementById("dot");
const equal = document.getElementById("equal");
const ac = document.getElementById("ac");
const add = document.getElementById("add");
const sub = document.getElementById("sub");
const mul = document.getElementById("mul");
const div = document.getElementById("div");
const del = document.getElementById("del");

zero.addEventListener("click", append);
one.addEventListener("click", append);
two.addEventListener("click", append);
three.addEventListener("click", append);
four.addEventListener("click", append);
five.addEventListener("click", append);
six.addEventListener("click", append);
seven.addEventListener("click", append);
eight.addEventListener("click", append);
nine.addEventListener("click", append);
add.addEventListener("click", append);
sub.addEventListener("click", append);
mul.addEventListener("click", append);
div.addEventListener("click", append);
ac.addEventListener("click", resetFn);
del.addEventListener("click", deletefn);
equal.addEventListener("click", ansFn);



function append() {
    input.value = input.value + this.value;
}

function ansFn() {
    input.value = eval(input.value);
}

function resetFn() {
    input.value = "0";

}

function deletefn() {
    input.value = "";
}