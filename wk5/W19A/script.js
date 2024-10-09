const fetchAPI = () => {
    fetch("https://api.sampleapis.com/coffee/hot")
    .then(response => response.json())
    .then(data => {
        data.forEach((item, index) => {
            const cardEle = document.querySelector("#card")
            const cloneEle = cardEle.cloneNode(true)
            cloneEle.id = `card-${index}`
            document.querySelector("#container").appendChild(cloneEle);
            cloneEle.classList.remove("d-none")
            cloneEle.querySelector(".card-title").textContent = item.title
            cloneEle.querySelector(".card-description").textContent = item.description
            cloneEle.querySelector(".card-image").src = item.image

            item.ingredients.forEach((ingredient) => {
                const ingredientEle = document.createElement("span")
                ingredientEle.classList.add('badge', 'badge-info', 'me-1');
                ingredientEle.textContent = ingredient
                cloneEle.querySelector(".card-ingredients").appendChild(ingredientEle)
            })
        })
    })
}