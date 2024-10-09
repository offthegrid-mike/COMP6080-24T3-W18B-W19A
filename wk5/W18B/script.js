const fetchAPI = () => {
    fetch("https://api.sampleapis.com/coffee/hot")
    .then((response) => response.json())
    .then((data) => {
        data.map((item) => {
            const cardEle = document.querySelector("#card");
            const cloneEle = cardEle.cloneNode(true);
            cloneEle.classList.remove("d-none");
            cloneEle.querySelector(".card-title").textContent = item.title;
            cloneEle.querySelector(".card-description").textContent = item.description;
            cloneEle.querySelector(".card-image").src = item.image;

            item.ingredients.map((ingredient) => {
                const ingredientEle = document.createElement("span");
                ingredientEle.classList.add("badge", "badge-info", "me-2");
                ingredientEle.textContent = ingredient;
                cloneEle.querySelector(".card-ingredients").appendChild(ingredientEle)
            })

            document.querySelector("#container").appendChild(cloneEle);
        })
    })
}