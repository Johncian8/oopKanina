let abutton = document.querySelector("#add")

class add{
    
    #sum
    
    constructor(firstNum, secondNum){
        
        this.#sum = firstNum + secondNum
    }
    
    get sum(){
        
        return this.#sum
    }
}
function addNum(){
    let firstNum = document.querySelector("#firstNum")
    let secondNum = document.querySelector("#secondNum")

    firstNum = parseInt(firstNum.value)
    secondNum = parseInt(secondNum.value)

    const adds = new add(firstNum, secondNum)

    let h1 = document.querySelector('h1')

    h1.innerHTML = "Calculating the input..."
    setTimeout(()=>{
    h1.innerHTML = "Processing the data..."
    }, 1000);

    setTimeout(()=>{

        h1.innerHTML = `The sum is ${adds.sum}`
    }, 2000)

}

abutton.addEventListener('click', addNum)


let sbutton = document.querySelector("#sub")

class sub{
    
    #dif
    
    constructor(firstNum, secondNum){
        
        this.#dif = firstNum - secondNum
    }
    
    get dif(){
        
        return this.#dif
    }
}
function subNum(){
    let firstNum = document.querySelector("#firstNum")
    let secondNum = document.querySelector("#secondNum")

    firstNum = parseInt(firstNum.value)
    secondNum = parseInt(secondNum.value)

    const adds = new sub(firstNum, secondNum)

    let h1 = document.querySelector('h1')

    h1.innerHTML = "Calculating the input..."
    setTimeout(()=>{
    h1.innerHTML = "Processing the data..."
    }, 1000);

    setTimeout(()=>{

        h1.innerHTML = `The difference is ${adds.dif}`
    }, 2000)
}

sbutton.addEventListener('click', subNum)


let mbutton = document.querySelector("#multi")

class multi{
    
    #mult
    
    constructor(firstNum, secondNum){
        
        this.#mult = firstNum * secondNum
    }
    
    get mult(){
        
        return this.#mult
    }
}

function multiNum(){
    let firstNum = document.querySelector("#firstNum")
    let secondNum = document.querySelector("#secondNum")

    firstNum = parseInt(firstNum.value)
    secondNum = parseInt(secondNum.value)

    const mults = new multi(firstNum, secondNum)

    let h1 = document.querySelector('h1')

    h1.innerHTML = "Calculating the input..."
    setTimeout(()=>{
    h1.innerHTML = "Processing the data..."
    }, 1000);

    setTimeout(()=>{

        h1.innerHTML = `The product is ${mults.mult}`
    }, 2000)


}

mbutton.addEventListener('click', multiNum)

let dbutton = document.querySelector("#div")

class div{

    #qou

    constructor(firstNum, secondNum){

        this.#qou = firstNum / secondNum
    }

    get qou(){
        return this.#qou
    }
}

function divide(){

    let firstNum = parseInt(document.querySelector("#firstNum").value)
    let secondNum = parseInt(document.querySelector("#secondNum").value)

    const divs = new div(firstNum, secondNum)

    let h1 = document.querySelector("h1")

    h1.innerHTML = "Calculating the input..."
    setTimeout(()=>{
    h1.innerHTML = "Processing the data..."
    }, 1000);

    setTimeout(()=>{

        h1.innerHTML = `The qoutient is ${divs.qou.toFixed(2)}`
    }, 2000)

}

dbutton.addEventListener('click', divide)

let firstNum = document.querySelector("#firstNum")
let secondNum = document.querySelector("#secondNum")

firstNum.addEventListener('mouseenter', ()=>{

    firstNum.focus()
    firstNum.style.width = '250px'
})
secondNum.addEventListener('mouseenter', ()=>{

    secondNum.focus()
    secondNum.style.width = '220px'
})
