const pal = document.querySelector('input[type="text"]').value
const btn = document.querySelector('input[type="button"]')
const regex = /[a-zA-Z0-9]/
const para = document.querySelector('p')

const checkPal = () =>{
    let parr = []
    for(let x = 0; x < pal.lenght; x++){
        if(regex.test(pal[x])){
            parr.push(pal[x])
        }
    }
    let parr2 = parr.slice()
    para.textContent = parr2.reverse().join('') === parr.join('')

}

btn.addEventListener('click', checkPal)