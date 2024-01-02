import { menuArray } from "./data.js"

/* MENU SECTION */
const completeMenuBtn = document.getElementById("complete-menu-btn")
const pizzaBtn = document.getElementById("pizza-btn")
const burgerBtn = document.getElementById("burger-btn")
const beerBtn = document.getElementById("beer-btn")
const menuSectionParent = document.getElementById('menu-section')

/* ORDER SECTION */
const yourOrderBtn = document.getElementById("your-order-btn")
const introParagraph = document.getElementById("intro")
const renderOrderSection = document.getElementById("render-order")

/* MODAL SECTION */
const modalSection = document.getElementById("modal")


/* -------------- NAV event listeners --------------*/
completeMenuBtn.addEventListener("click", function () {
    clearMenuSection()
    menuSectionParent.innerHTML += renderCompleteMenu(menuArray)
    introParagraph.classList.add("hide")
})

pizzaBtn.addEventListener("click", function () {
    clearMenuSection()
    menuSectionParent.innerHTML += renderPizzas(menuArray)
    introParagraph.classList.add("hide")
})

burgerBtn.addEventListener("click", function () {
    clearMenuSection()
    menuSectionParent.innerHTML += renderBurgers(menuArray)
    introParagraph.classList.add("hide")
})

beerBtn.addEventListener("click", function () {
    clearMenuSection()
    menuSectionParent.innerHTML += renderBeers(menuArray)
    introParagraph.classList.add("hide")

})


/* -------------- functions --------------*/


function renderCompleteMenu(menuArray) {
    return menuArray.map(menuDish => renderMenuItemHtml(menuDish)).join('');
}

function renderPizzas(menuArray) {
    const getPizza = menuArray.filter(function (pizzaDish) {
        return pizzaDish.name.includes("Pizza");
    });

    return getPizza.map(pizza => renderMenuItemHtml(pizza)).join('');
}

function renderBurgers(menuArray) {
    const getBurger = menuArray.filter(function (burgerDish) {
        return burgerDish.name.includes("burger");
    });

    return getBurger.map(burger => renderMenuItemHtml(burger)).join('');
}

function renderBeers(menuArray) {
    const getBeer = menuArray.filter(function (beer) {
        return beer.name.includes("beer");
    });

    return getBeer.map(beer => renderMenuItemHtml(beer)).join('');
}

function clearMenuSection() {
    document.getElementById("menu-section").innerHTML = ""
}

/* -------------- main function rendering menu --------------*/

function renderMenuItemHtml(menuDish) {
    const { name, ingredients, id, image, price } = menuDish;

    return `
        <section>
            <div class="menu">
                <ul class="menu-item-info">
                    <li>
                        <img src="${image}">
                    </li>
                    <li class="name">
                        <h2><span>${name}</span></h2>
                    </li>
                    <li>
                        <h2>£${price}</h2>
                    </li>
                    <li>
                        <button class="add-to-cart-btn" id="${id}">+</i></button>
                    </li>
                </ul>
                <p class="ingredients"><span>Ingredients:</span> ${ingredients}</p>
            </div>
        </section>
    `;
}

/* -------------- function for rendering orders --------------*/

let selectedDishes = [];

menuSectionParent.addEventListener("click", handleMenuClick);

function handleMenuClick(e) {
    if (e.target.classList.contains('add-to-cart-btn')) {
        const dishId = parseInt(e.target.id);
        const selectedDish = menuArray.find(dish => dish.id === dishId);

        if (selectedDish) {
            selectedDishes.push(selectedDish);
        }
    }
}

yourOrderBtn.addEventListener("click", function () {
    renderOrderSection.innerHTML = "";

    if (selectedDishes.length > 0) {
        selectedDishes.forEach(selectedDish => {
            const menuDetailsDiv = document.createElement('div');
            menuDetailsDiv.innerHTML = `
                <div class="menu">
                    <ul class="menu-item-info">
                        <li>
                            <img src="${selectedDish.image}">
                        </li>
                        <li class="name">
                            <h2><span>${selectedDish.name}</span></h2>
                        </li>
                        <li>
                            <h2>£${selectedDish.price}</h2>
                        </li>
                    </ul>
                </div>
            `;
            renderOrderSection.appendChild(menuDetailsDiv);
        });
    } else {
        renderOrderSection.innerHTML = "<p>THIS WILL BE A POP UP No items in your order.</p>";
    }
});

