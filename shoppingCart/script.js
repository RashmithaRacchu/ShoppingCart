const product = [
    {
        id:0,
        image: 'images/crocs.jpg',
        title:'Crocs',
        price:2000,
    },
    {
        id:1,
        image:'images/kurthas.webp',
        title:'Kurtha',
        price:650,
    },
    
    {
        id:2,
        image:'images/iphone.webp',
        title:'I phone',
        price:75000,
    },
    
    {
        id:3,
        image:'images/watch.webp',
        title:'Watch',
        price: 700 ,
    },
    {
        id:4,
        image:'images/makeup.jpg',
        title:'makeup',
        price: 230,
    },
    {
        id:5,
        image:'images/tieshhirt.jpg',
        title:'shirts',
        price: 300 ,
    },

    {
        id:6,
        image:'images/medicine.png',
        title:'medicine',
        price: 90,
    },
    {
        id:7,
        image:'images/jewelery.webp',
        title:'jewellery',
        price: 35000 ,
    },
    {
        id:8,
        image:'images/kids.jpg',
        title:'kids',
        price: 430,
    },
    {
        id:9,
        image:'images/airpods.jpg',
        title:'airpods',
        price: 2500 ,
    }
];

const categories=[...new Set(product.map((item)=>
    {return item}))]
    let i=0;
    document.getElementById('root').innerHTML=categories.map((item)=>
    {
        var{image,title,price}=item;
        return(
           ` <div class='box'>
                <div class='img-box' >
                    <img class='images' src=${image}> </img>
                </div>
<div class='bottom'>
    <p>${title}</p>
         <h2> ${price}.00</h2>` +
         "<button onclick='script("+(i++)+")'>ADD to Cart</button>"  +
         `</div>   
         </div>  `
        )
    }).join('')

var cart=[];

function script(a){

    cart.push({...categories[a]});
    displaycart();
}

function delElement(a){
    cart.splice(a,1);
    displaycart();
}

function redirectToPayment(){
//    window.location.href ='payment.html'
   
   

const totalValue = document.getElementById("total").innerText.trim();

    const encodedTotalValue = encodeURIComponent(totalValue);

    window.location.href = `payment.html?total=${encodedTotalValue}`;

}

// // Get the total value from the HTML element
//  const totalValue = document.getElementById("total").innerText.trim();
//   // Encode the total value and append it as a URL parameter
//    const encodedTotal = encodeURIComponent(totalValue); 
//    // Redirect to the payment page with the total as a parameter
//     window.location.href = `payment.html?total=${encodedTotal}`;
// }



function displaycart(a){
    let j=0,total=0;
    document.getElementById("count").innerHTML=cart.length;
    if(cart.length==0){
        document.getElementById('cartItem').innerHTML="Your cart is empty";
document.getElementById("total").innerHTML=" "+0+".00";
    }
    else{
        document.getElementById("cartItem").innerHTML=cart.map((items)=>
        {
            var{image,title,price}=items;
            total=total+price;
            document.getElementById("total").innerHTML=" "+total+".00";
            return(
                `<div class='cart-item'>
                <div class='row-img'>
               <img class='rowimg' src=${image}>
               </div>
               <p style='font-size:12px;'>${title} </p>
               <h2 style='font-size:15px;'>${price}.00</h2>`+
               "<i class='fa-solid fa-trash' onclick='delElement("+ (j++) +")'></i></div>"

                
            );
        }).join('');
    }
}