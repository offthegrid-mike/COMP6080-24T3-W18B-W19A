function changeName() {
    const nameEle = document.getElementById("name");
    const nameValue = nameEle.value;
    const outputEle = document.getElementById("output");
    outputEle.innerText = nameValue;
}