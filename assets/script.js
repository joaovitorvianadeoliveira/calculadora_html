const display = document.querySelector("input")
let x = 1
let y = 3

console.log(eval("x+y"))
function digitar (valor){
    //display value = display.value + valor
    display.value += valor
}
function limpar (){
display.value = ""
}  
function calcular(){
    // eval() transforma strig em algoritimo javascript
    display.value = eval(display.value)
}
