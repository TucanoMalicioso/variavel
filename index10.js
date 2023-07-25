let i=0;
let m=90000;
let c=60000;
let n=24;

i=(m/c)**(1/n)-1;
i=i*100;
i=i.toFixed(3);

console.log("O seu financiamento de R$"+c+" reais teve uma taxa de juros de "+i+"%, pois após "+n+" meses você teve que pagar R$"+m+ " reais")