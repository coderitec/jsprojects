function convertToRoman(num) {
    let units = ['','I','II','III','IV','V','VI','VII','VIII','IX'];
    let tens = ['','X','XX','XXX','XL','L','LX','LXX','LXXX','XC'];
    let hundreds = ['','C','CC','CCC','CD','D','DC','DCC','DCCC','CM'];
    let thousands = ['','M','MM','MMM','MV','V'];
    
    num = num.toString();
  
    if (num.length === 4) {
        let thtt = thousands[Number(num[0])];
        let hhhh = hundreds[Number(num[1])];
        let tttt = tens[Number(num[2])];
        let uuuu = units[Number(num[3])];
  
        num = thtt + hhhh + tttt + uuuu;
    }
    
   else if (num.length === 3) {
        let hhh = hundreds[Number(num[0])];
        let ttt = tens[Number(num[1])];
        let uuu = units[Number(num[2])];
        
        num = hhh + ttt + uuu;
      }
     else if (num.length === 2) {
        let tt = tens[Number(num[0])];
        let uu = units[Number(num[1])];
        
        num = tt + uu;
      }
  
    else{
      num = units[Number(num[0])];
    }
   return num;
  }