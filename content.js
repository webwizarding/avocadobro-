async function getProductname() {
  var productNameElement = document.querySelector(
    "#titleSection #productTitle",
  );
  var productName = productNameElement
    ? productNameElement.innerText.trim()
    : "Product name not found on the webpage.";
  return productName;
}

function setInfoBox(nutrientInfo) {
  let glycaemicIndex = nutrientInfo.glycaemicIndex || "N/A";
  let glycaemicLoad = nutrientInfo.glycaemicLoad || "N/A";
  let caloriesToBurn = isNaN(nutrientInfo.energy / (1.225 * 7))
    ? "N/A"
    : nutrientInfo.energy / (1.225 * 7);

  var boxText = `This product has a <strong>glycaemic index</strong> of <strong>${glycaemicIndex}</strong> and a <strong>glycaemic load</strong> of <strong>${glycaemicLoad}</strong>. This may result in a <strong>${glycaemicIndex > 50 ? "high" : "mild"} blood sugar spike</strong>. You have to run for <strong>${caloriesToBurn} minutes</strong> to expend these calories.<br><br><em>Disclaimer:</em> We are not medical professionals. Please consult a doctor before making any dietary changes.`;

  var box = document.createElement("div");
  box.classList.add("info-box");
  box.style.cssText =
    "background-color: rgba(0,0,0,0); border-radius: 10px; padding: 10px; font-family: 'Roboto', sans-serif; font-size: 16px; box-shadow: 0 4px 4px -4px black; border: 2px solid rgba(237, 237, 158, 0.8);";

  var image = document.createElement("img");
  image.src =
    "https://github.com/vedoge/avocadobro/assets/95768353/bb228f66-8804-4c5d-b535-f2b2cbef08ab";
  image.style.cssText =
    "width: 50px; height: 50px; margin-right: 10px; float: left;";
  box.appendChild(image);

  var paragraph = document.createElement("p");
  paragraph.innerHTML = boxText;
  box.appendChild(paragraph);

  var titleSection = document.getElementById("titleSection");
  if (titleSection) {
    titleSection.appendChild(box);
  }
}
