
//* DOM ELEMENTS
const btnminusbag = document.querySelector(".buttonMinus1")
const btnminusshoes = document.querySelector(".buttonMinus2")
const btnminusclock = document.querySelector(".buttonMinus3")
const btnaddbag = document.querySelector(".buttonAdd1")
const btnaddshoes = document.querySelector(".buttonAdd2")
const btnaddclock = document.querySelector(".buttonAdd3")
const qntbag = document.querySelector(".quantity1")
const qntshoes = document.querySelector(".quantity2")
const qntclock = document.querySelector(".quantity3")
const removebag = document.getElementById("remove-1")
const removeshoes = document.getElementById("remove-2")
const removeclock = document.getElementById("remove-3")
const productbag = document.getElementById("product-1")
const productshoes = document.getElementById("product-2")
const productclock = document.getElementById("product-3")
const subsum = document.querySelector(".subsum")
const tax = document.querySelector(".tax")
const ship = document.querySelector(".ship")
const total = document.querySelector(".total")
const remove1 = document.querySelector("#remove-1")
const remove2 = document.querySelector("#remove-2")
const remove3 = document.querySelector("#remove-3")


// *VARIABLES

let price1 = 25.99, price2 = 45.99, price3 = 74.99
let shipping = 15 
let taxxing = 1
let counterbag = 1
let countershoes = 1
let counterclock = 1
let subtotal = 0
let totalling =0
let sayac = 3

// * functions
const calculate = function() {
    subtotal = price1 + price2 + price3;
    taxxing = subtotal * 0.18;
    totalling = subtotal + shipping + taxxing;
    subsum.innerText = `$${Number(subtotal.toFixed(2))}`;
    tax.innerText = `$${Number(taxxing.toFixed(2))}`;
    ship.innerText = `$${shipping}`;
    total.textContent = `$${totalling.toFixed(2)}`;
}

   

  // *EVENTS
  btnaddbag.addEventListener("click", () => {
    counterbag++;
    price1 = 25.99 * counterbag
    qntbag.textContent= counterbag
    productbag.innerText = `$${Number(price1.toFixed(2))}`
    calculate()
  });

  btnminusbag.addEventListener("click", () => {
    if(counterbag<=1) {
        counterbag = 1
    }else {
        counterbag--;
    }
    price1 = 25.99 * counterbag;
    qntbag.textContent = counterbag;
    productbag.innerText = `$${Number(price1.toFixed(2))}`;
    calculate();
         
  })
  remove1.addEventListener("click", () => {
    document.querySelector(".product1").setAttribute("class","hidden");
    price1 = 0;
    
    calculate();
    sayac--;
    if(!sayac) {
        shipping=0;
        totalling= 0;
       ship.textContent = `$0`;
       total.textContent = `$0`;
    }
  })

  btnaddshoes.addEventListener("click", () => {
    countershoes++;
    price2 = 45.99 * countershoes
    qntshoes.textContent= countershoes
    productshoes.innerText = `$${Number(price2.toFixed(2))}`
    calculate();
    
  })

  btnminusshoes.addEventListener("click", () => {
    if(countershoes<=1) {
        countershoes = 1
    } else {
        countershoes--
    }
     price2 = 45.99 * countershoes;
     qntshoes.textContent = countershoes;
     productshoes.innerText = `$${Number(price2.toFixed(2))}`;
    calculate();
    

  })
   remove2.addEventListener("click", () => {
     document.querySelector(".product2").setAttribute("class", "hidden");
     price2 = 0;
     calculate();
      sayac--;
      if (!sayac) {
        shipping = 0;
        totalling = 0;
        ship.textContent = `$0`;
        total.textContent = `$0`;
      }

   });

  btnaddclock.addEventListener("click", () => {
    counterclock++
    price3 = 74.99 * counterclock
    qntclock.textContent = counterclock
    productclock.innerText = `$${Number(price3.toFixed(2))}`
    calculate();

  })
  btnminusclock.addEventListener("click", () => {
    if(counterclock<=1) {
        counterclock = 1
    } else {
        counterclock--
    }
     price3 = 74.99 * counterclock;
     qntclock.textContent = counterclock;
     productclock.innerText = `$${Number(price3.toFixed(2))}`;
    calculate();    
  })
  remove3.addEventListener("click", () => {
    document.querySelector(".product3").setAttribute("class", "hidden");
    price3 = 0;
    calculate();
     sayac--;
     if (!sayac) {
       shipping = 0;
       totalling = 0;
       ship.textContent = `$0`;
       total.textContent = `$0`;
     }
    
  });








