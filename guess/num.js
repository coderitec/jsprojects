const num = document.getElementById('num')
const btn = document.getElementById('btn')
const para1 = document.querySelectorAll('p')[0]
const para2 = document.querySelectorAll('p')[1]


let arr = []
const random = Math.floor(Math.random()*100)

function guessNumber(){
    const val = Number(num.value)
    arr.push(val)
    if(arr.length === 11){
        num.disabled = true
        btn.disabled = true
    }

    else if(val > random){
        para1.textContent = arr.join(', ')
        para2.style.background = 'red'
        para2.style.padding = '2em'
        para2.textContent = 'Your guess is greater than number'
    }
    else if(val < random){
        para1.textContent = arr.join(', ')
        para2.style.background = 'red'
        para2.style.padding = '2em'
        para2.textContent = 'Your number is less than the random value'
    }

    else{
        para1.textContent = arr.join(', ')
        para2.textContent = 'Hurray, your guess is right'
        para2.style.background = 'green'
        para2.style.padding = '2em'
        num.disabled = true
        btn.disabled = true
    }
    console.log(arr)
}

btn.addEventListener('click', guessNumber)