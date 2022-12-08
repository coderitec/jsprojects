const an =  document.querySelector('input[id="six"]')
const sc =  document.querySelector('input[id="eight"]')
const pl =  document.querySelector('input[id="ten"]')

const btn =  document.querySelector('button')
const para =  document.querySelector('p')
para.style.display = 'none'

const generator = () =>{
    let chars1 = "abcdefghijklmnopqrstuvwxyz1234567890"
    let chars2 = chars1.toUpperCase()
    let chars3 = '!@#$%^&'
    let parr = new Array()
    let chars4 = ''
    para.style.display = 'block'


        if(sc.checked){
            for(let x = 0; x < pl.value; x++){
            chars4 = chars1.concat(chars2, chars3)
            parr.push(chars4[Math.floor(Math.random()*chars4.length)])
        }
    }
        else{
            for(let x = 0; x < pl.value; x++){
            chars4 = chars1.concat(chars2)
            parr.push(chars4[Math.floor(Math.random()*chars4.length)])
            }
        }

        para.textContent = parr.join('')
    
    console.log(parr.join(''))
}
btn.addEventListener('click', generator)

