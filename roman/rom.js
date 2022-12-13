const num = document.getElementById('num')
const btn = document.querySelector('input[type="button"]')
const para = document.querySelector('p')

function convertToRoman() {
    let val = num.value 
    let un = ['','I','II','III','IV','V','VI','VII','VIII','IX'];
    let te = ['','X','XX','XXX','XL','L','LX','LXX','LXXX','XC'];
    let hu = ['','C','CC','CCC','CD','D','DC','DCC','DCCC','CM'];
    let th = ['','M','MM','MMM'];

    val.length === 4 && Number(val[0])<= 3 ? val = th[val[0]]+hu[val[1]]+te[val[2]]+un[val[3]]:
    val.length === 3 ? val = hu[val[0]]+te[val[1]]+un[val[2]]:
    val.length === 2 ? val = te[val[0]]+un[val[1]]:val = un[val]
  
   para.textContent = val
  }
btn.addEventListener('click', convertToRoman)

