const stringXor = (s, key) => {
    var output = '';
    for (let c of s) output += String.fromCharCode(key ^ c.charCodeAt(0));
    return output;
}
const rickroll = () => window.location.href = stringXor("ǌǐǐǔǗƞƋƋǝǋǑǐǑƊǆǁƋǑǽǧǱǪǱǨǔƜƒƜ", 420);
const genPhoneElem = ({name, cost}) => {
    mainDiv = document.createElement("div");
    mainDiv.classList.add("phone");

    img = document.createElement("img");
    img.classList.add("phone-image");
    img.src = "phones/images/" + name + ".jpg";
    img.onclick = rickroll;

    costSpan = document.createElement("span");
    costSpan.classList.add("phone-cost");
    costSpan.innerText = "Starting from " + cost;

    nameSpan = document.createElement("span");
    nameSpan.classList.add("phone-name");
    nameSpan.innerText = name;

    buyButton = document.createElement("button");
    buyButton.classList.add("phone-button");
    buyButton.innerText = "Buy";
    buyButton.onclick = rickroll;

    mainDiv.appendChild(img);
    mainDiv.appendChild(costSpan);
    mainDiv.appendChild(nameSpan);
    mainDiv.appendChild(buyButton);
    return mainDiv;
}
const phoneList = [
    { name: "RickPhone 4", cost: "$1099" },
    { name: "RickPhone 3s", cost: "$999" },
    { name: "RickPhone 3", cost: "$799" },
    { name: "RickPhone 2", cost: "$599" },
];
const p = document.getElementById("phones-list");
phoneList.map(genPhoneElem).forEach(p.appendChild.bind(p));
