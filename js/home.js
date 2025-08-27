function getElement(id) {
  const element = document.getElementById(id);
  return element;
}

document.getElementById("btn-call-1").addEventListener("click", function () {
  //   const idCard = getElement("id-card-1").innerText;
  //   const CallNumber = getElement("call-num-1").innerText;
  const cardTitle = getElement("card-title-1").innerText;
  const callNumber = getElement("call-num-1").innerText;

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
                <time datetime="">11:34:58 AM</time>
              </div>
            </div>
            `;
  cardContainer.append(newCard);
});
