const heading = document.querySelector('.state')
const weight = document.querySelector('input[name="weight"]')
const height = document.querySelector('input[name="height"]')
const btn = document.querySelector('input[type="button"]')
const span = document.querySelector('.state span')
heading.style.display = 'none'

function selectme(){
    return alert('hello')
}
btn.addEventListener('click', ()=> {
    let val1 = Number(weight.value)
    let val2 = Number(height.value)
    let bmi = val1/(val2*val2)
    heading.style.display = 'block'
    span.textContent = bmi.toFixed(2)
}
)

