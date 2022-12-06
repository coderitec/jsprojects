const heading = document.querySelector('.state')
const weight = document.querySelector('input[name="weight"]')
const height = document.querySelector('input[name="height"]')
const btn = document.querySelector('input[type="button"]')


function selectme(){
    return alert('hello')
}
btn.addEventListener('click', ()=> {
    let val1 = Number(weight.value)
    let val2 = Number(height.value)
    let bmi = val1/(val2*val2)

    alert(bmi)
}
)

heading.textContent = 'obesity'