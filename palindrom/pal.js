const btn = document.querySelector('input[type="button"]')
const checkPal = () =>{
let pal = document.querySelector('input[type="text"]')
const regex = /[a-zA-Z0-9]/
const para = document.querySelectorAll('p')[1]
pal = pal.value
pal = pal.toLowerCase()

    let parr = []
    for(let x = 0; x < pal.length; x++){
        if(regex.test(pal[x])){
            parr.push(pal[x])
        }
    }
    let parr2 = parr.slice()
    console.log(parr)
    para.textContent = parr2.reverse().join('') === parr.join('')

}

btn.addEventListener('click', checkPal)