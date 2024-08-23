//Mainpage
var topIndex = 2;
function moveToTop(picture) {
picture.style.zIndex = ++topIndex;
}
//Customize form
function myfunc(){
  document.getElementById("custform").reset();
}

function sizePizza(){
  if(document.getElementById("Small").checked){
  document.getElementById("disps").innerHTML=document.getElementById("Small").value;
  }
  if(document.getElementById("Medium").checked){
  document.getElementById("disps").innerHTML=document.getElementById("Medium").value;
  }
  if(document.getElementById("Large").checked){
  document.getElementById("disps").innerHTML=document.getElementById("Large").value;
  }
  }

function crustPizza(){
  if(document.getElementById("thin").checked){
  document.getElementById("disp").innerHTML=document.getElementById("thin").value;
  }
  if(document.getElementById("new").checked){
  document.getElementById("disp").innerHTML=document.getElementById("new").value;
  }
  if(document.getElementById("pan").checked){
  document.getElementById("disp").innerHTML=document.getElementById("pan").value;
  }
  if(document.getElementById("burst").checked){
  document.getElementById("disp").innerHTML=document.getElementById("burst").value;
  }
  if(document.getElementById("burst").checked==false && document.getElementById("thin").checked==false &&
  document.getElementById("pan").checked==false&&document.getElementById("new").checked==false){
  document.getElementById("error").innerHTML="Please select the crust!";
  }
  }
const collection = document.getElementsByName("topping");
  for (let i = 0; i < collection.length; i++) {
   if (collection[i].value == "cheese") {
    collection[i].checked = true;
    document.getElementById("dispt1").innerHTML=collection[i].value;
   }
  }
function topPizza(){
    if(document.getElementById("pepperoni").checked){
      document.getElementById("dispt2").innerHTML=document.getElementById("pepperoni").value;
      }
    if(document.getElementById("mushrooms").checked){
      document.getElementById("dispt3").innerHTML=document.getElementById("mushrooms").value;
      }
    if(document.getElementById("capsicum").checked){
      document.getElementById("dispt4").innerHTML=document.getElementById("capsicum").value;
      }
    if(document.getElementById("olives").checked){
      document.getElementById("dispt5").innerHTML=document.getElementById("olives").value;
      }
    if(document.getElementById("onion").checked){
      document.getElementById("dispt6").innerHTML=document.getElementById("onion").value;
      }
    if(document.getElementById("paneer").checked){
      document.getElementById("dispt7").innerHTML=document.getElementById("paneer").value;
      }
    if(document.getElementById("bbq").checked){
      document.getElementById("dispt8").innerHTML=document.getElementById("bbq").value;
      }
    if(document.getElementById("peri").checked){
      document.getElementById("dispt9").innerHTML=document.getElementById("peri").value;
      }
  }
function spiceLevel(){
  var sl=document.getElementById("spice");
  document.getElementById("spicylevel").innerHTML=sl.value;
}
function youraddress(){
  var yourAddress;
  yourAddress=document.getElementById("address");
  document.getElementById("youraddress").innerHTML=yourAddress.value;
}
let t=0;
function bill(){
  if(document.getElementById("Small").checked){
    t=t+50;
  }
  if(document.getElementById("Medium").checked){
    t=t+50;
  }
  if(document.getElementById("Large").checked){
    t=t+50;
  }
  if(document.getElementById("thin").checked){
    t=t+50;
  }
  if(document.getElementById("new").checked){
    t=t+50;
  }
  if(document.getElementById("pan").checked){
    t=t+50;
  }
  if(document.getElementById("burst").checked){
    t=t+50;
  }
  if(document.getElementById("pepperoni").checked){
    t=t+50;
  }
  if(document.getElementById("mushrooms").checked){
    t=t+50;
  }
  if(document.getElementById("capsicum").checked){
    t=t+50;
  }
  if(document.getElementById("olives").checked){
    t=t+50;
  }
  if(document.getElementById("onion").checked){
    t=t+50;
  }
  if(document.getElementById("paneer").checked){
    t=t+50;
  }
  if(document.getElementById("bbq").checked){
    t=t+50;
  }
  if(document.getElementById("peri").checked){
    t=t+50;
  }
  document.getElementById("ctotal").innerHTML=t;
  
}

function payorder(){
  alert("Payment Received! Your order will be delivered,THANK YOU!!");
}

//Menu page
let cart=[];
let p=[];
function addToCart(item,price){
  this.item=item;
  this.price=price;
  cart.push(item);
  p.push(price);
  alert("Item added")
  let total = 0;
  for(let i=0;i<p.length;i++){
    total+=price;
  }
  document.getElementById("total").innerHTML=`<h3>Total: ₹${total}</h3>`;
  displaycart();
}
function removeCart(item,price){
  this.item=item;
  this.price=price;
  cart.pop(item);
  cart.pop(price);
  p.pop(price);
  let total=0;
  for(let i=0;i<p.length;i++){
    total=price-total;
  }
  document.getElementById("total").innerHTML=`<h3>Total: ₹${total}</h3>`
  alert("Item removed!")
  displaycart();
}
function displaycart(){
  const cartElement = document.getElementById('cart');
  cartElement.innerHTML = '<br>'+'<p>Item added<p>'+cart+'<br>';
}
function resetcart(){
  document.getElementById("cart").reset();
}
//Menu address

function validateaddress(){
  var yourAddress;
  yourAddress=document.getElementById("address2");
  document.getElementById("youraddress").innerHTML=yourAddress.value;
}

//Feedback form
function myfocus(){
  document.getElementById("order").focus();
}
function validateform(){
  var n=document.getElementById("name").value;
  if(n==''){
    alert("please fill your name!");
  }
}