function dna (DNA)
{ 
let RNA="";
if (typeof DNA !== 'string') throw new TypeError("Данные некорректны");
else if (DNA.length == 0) return 'Введите последовательность ДНК';
for (i=0;i<DNA.length;i++)
  {
    switch (DNA[i])
      {
        case "g":
        case "G":RNA+="c" 
         break;
        case "c":
        case "C":RNA+="g"
         break;
        case "t":
        case "T":RNA+="a"
         break ;
        case "a":
        case "A":RNA+="u" 
         break;
        case "":return alert ('Введите знак')
         break; 
        default:
         return`Некорректный нуклиатид ${DNA[i]}`;
      }
  }
   return RNA ;
}
