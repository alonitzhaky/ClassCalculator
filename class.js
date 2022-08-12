let cleanFlag = false
let numMem = 0
let operMem = ""
function doCalc() {
    console.log(numMem)
    console.log(operMem)
    console.log(result.value)
    operMem == "+" && (result.value = (+result.value + +numMem))
    operMem == "-" && (result.value = (+numMem - +result.value))
    operMem == "*" && (result.value *= numMem)
}

function doOper() {
    cleanFlag = true
    operMem = event.target.innerText
}

function addDigit () {
    if (result.value == "0" || cleanFlag) {
        if (cleanFlag) {
            numMem = result.value
            console.log(numMem)
            console.log(operMem)
        }
        cleanFlag = false
        result.value = ""
    }
    result.value += event.target.innerText
}