// NOTE: The variable "shirts" is defined in the shirts.js file as the full list of shirt offerings
//       You can access this variable here, and should use this variable here to build your webpages

let initProducts = () => {
    const productsContainer = document.getElementById('products');

    for (let i = 0; i < shirts.length; i++) {
        const shirt = shirts[i];
        const productCard = document.createElement("div");
        productCard.classList.add("product_card")

        const image = document.createElement("img");
        image.src = shirt.colors.white.front;
        image.alt = shirt.name;
        image.classList.add("product_image");
        productCard.append(image);

        const name = document.createElement("h3");
        name.innerText = shirt.name;
        name.classList.add("product_name");
        productCard.append(name);

        const colorCount = document.createElement("h4");
        let count = Object.keys(shirt.colors).length;
        colorCount.innerText = `Available in ${count} colors`
        colorCount.classList.add("product_color_info");
        productCard.append(colorCount);

        const productCardFooter = document.createElement("div");
        productCardFooter.classList.add("product_card_footer")

        const quickViewButton = document.createElement("button");
        quickViewButton.textContent = "Quick View";
        const seePageButton = document.createElement("button");
        seePageButton.textContent = "See Page";
        const pageLink = document.createElement("a");
        pageLink.href = `details.html?id=${i}`;
        pageLink.appendChild(seePageButton);
        productCardFooter.appendChild(pageLink);
        productCardFooter.appendChild(quickViewButton);
        productCard.append(productCardFooter);

        productsContainer.appendChild(productCard);
    }
};

let initDetails = () => {

    var shirtColor = "white";
    var shirtSide = "front";

    const id = new URLSearchParams(window.location.search).get('id');
    var shirt = shirts[id];

    const name = document.getElementById("tshirt_name");
    name.textContent = shirt.name;

    const img = document.getElementById("tshirt_img");
    img.src = shirt.colors[shirtColor][shirtSide];
    img.alt = shirt.name;

    const price = document.getElementById("tshirt_prc");
    price.innerText = shirt.price;
    const description = document.getElementById("tshirt-desc");
    description.innerText = shirt.description;

    const frontBtn = document.getElementById("front_btn");
    frontBtn.addEventListener('click', () => {
        shirtSide = "front";
        img.src = shirt.colors[shirtColor][shirtSide];
    });

    const backBtn = document.getElementById("back_btn");
    backBtn.addEventListener('click', () => {
        shirtSide = "back";
        img.src = shirt.colors[shirtColor][shirtSide];
    });

    const colorMenu = document.getElementById("clr_menu");
    const colors = Object.keys(shirt.colors);
    for (let i = 0; i < colors.length; i++) {
        const color = colors[i];
        const colorBtn = document.createElement("button");
        colorBtn.textContent = color;
        colorBtn.style.backgroundColor = color;
        colorBtn.addEventListener('click', () => {
            shirtColor = color;
            img.src = shirt.colors[shirtColor][shirtSide];
        })

        colorMenu.appendChild(colorBtn)
    }
};