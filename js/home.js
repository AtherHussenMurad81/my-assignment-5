function getElement(id) {
  const element = document.getElementById(id);
  return element;
}
// function getClass (class){
//   const className = document.getElementsByClassName(class)
//   return className
// }

// document.getElementById("btn-call-1").addEventListener("click", function () {
//   //   const idCard = getElement("id-card-1").innerText;
//   //   const CallNumber = getElement("call-num-1").innerText;
//   const cardTitle = getElement("card-title-1").innerText;
//   const callNumber = getElement("call-num-1").innerText;

//   const cardContainer = getElement("card-container");

//   const newCard = document.createElement("div");
//   newCard.innerHTML = `
//             <div
//               class="flex justify-between items-center bg-[#fafafa] p-4 rounded-lg mt-3 mb-4"
//             >
//               <div>
//                 <h1 class="font-semibold text-left text-lg">
//                ${cardTitle}
//                 </h1>
//                 <p class="text-[#5c5c5c]">${callNumber}</p>
//               </div>
//               <div>
//                 <time datetime="">11:34:58 AM</time>
//               </div>
//             </div>
//             `;
//   cardContainer.append(newCard);
// });
const now = new Date();

const localTimeString = now.toLocaleTimeString();

console.log(localTimeString);
getElement("card-box").addEventListener("click", function (e) {
  if (e.target.className.includes("call-btn")) {
    const cartButton = e.target;
    // alert("call btn");
    const cardTitle =
      cartButton.parentNode.parentNode.children[1].children[0].innerText;

    const callNumber =
      cartButton.parentNode.parentNode.children[1].children[2].innerText;
    console.log(cardTitle, callNumber);
    const cardContainer = getElement("card-container");

    const newCard = document.createElement("div");
    newCard.innerHTML = `
            <div
              class="flex justify-between items-center bg-[#fafafa] p-4 rounded-lg mt-3 mb-4"
            >
              <div>
                <h1 class="font-semibold text-left text-lg">
               ${cardTitle}
                </h1>
                <p class="text-[#5c5c5c]">${callNumber}</p>
              </div>
              <div>
                <time datetime="">${localTimeString}</time>
              </div>
            </div>
            `;
    cardContainer.append(newCard);
  }
});

// love reacts

getElement("card-box").addEventListener("click", function (event) {
  if (event.target.className.includes("love")) {
    const loveBtn = event.target;
    const countLove =
      loveBtn.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode
        .parentNode.parentNode.children[0].children[1].children[0].children[0]
        .innerText;
    console.log(countLove);
    const loveBtns = getElement("love-button").innerText;
    getElement("love-button").innerText = Number(loveBtns) + 1;
  }
});

getElement("clear-btn").addEventListener("click", function () {
  // alert("click");
  const cartContainer = getElement("card-container");
  cartContainer.innerHTML = "";
});

// //delegation

// getElement("product-box").addEventListener("click", function (e) {
//   if (e.target.className.includes("cart-btn")) {
//     // alert("card clicked");
//     const cartButton = e.target;
//     const productImg =
//       cartButton.parentNode.parentNode.children[0].children[0].src;

//     const productTitle =
//       cartButton.parentNode.parentNode.children[1].children[0].innerText;

//     // console.log(productTitle);
//     const productPrice =
//       cartButton.parentNode.parentNode.children[1].children[2].children[0]
//         .innerText;

//     const totalPrice = getElement("total-price").innerText;

//     const currentTotal = Number(productPrice) + Number(totalPrice);
//     getElement("total-price").innerText = currentTotal;

//     const cartContainer = getElement("cart-container");

//     const newCart = document.createElement("div");
//     newCart.innerHTML = `
//     <div class="bg-gray-200 rounded-xl flex justify-between p-4">
//                   <img src="${productImg}" alt="" class="w-10" />
//                   <div class="">
//                     <h2 class="font-bold">${productTitle}</h2>
//                     <h2 class="">${productPrice} Tk</h2>
//                   </div>
//             </div>
//     `;

//     cartContainer.append(newCart);

//     const quantity = getElement("total-quantity").innerText;
//     console.log(quantity);

//     const currentQuantity = Number(quantity) + 1;
//     getElement("total-quantity").innerText = currentQuantity;
//   }
// });

// document.getElementById("btn-clear").addEventListener("click", function () {
//   const cartContainer = getElement("cart-container");
//   cartContainer.innerHTML = "";
//   getElement("total-quantity").innerText = 0;
//   getElement("total-price").innerText = 0;
// });
