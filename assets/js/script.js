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
const modalCloseBtn = document.getElementById("modal-close-btn")
const totalAmount = document.getElementById("total")



/* -------------- NAV event listeners --------------*/
completeMenuBtn.addEventListener("click", function () {
    handleNavBarMenuClick(completeMenuBtn);
});
pizzaBtn.addEventListener("click", function () {
    handleNavBarMenuClick(pizzaBtn);
});
burgerBtn.addEventListener("click", function () {
    handleNavBarMenuClick(burgerBtn);
});
beerBtn.addEventListener("click", function () {
    handleNavBarMenuClick(beerBtn);
});

/* -------------- Order button event listeners --------------*/
yourOrderBtn.addEventListener("click", function () {
    renderOrderHtml(selectedDishes)
    renderTotalPrice()
});

/* -------------- Modal event listeners --------------*/
modalCloseBtn.addEventListener("click", function(){
    modalSection.classList.add("hide")
})

/* -------------- functions --------------*/
function handleNavBarMenuClick(btn){
    clearMenuSection();

    if (btn === completeMenuBtn){
        menuSectionParent.innerHTML += renderCompleteMenu(menuArray)
    } else if (btn === pizzaBtn){
        menuSectionParent.innerHTML += renderPizzas(menuArray)
    } else if (btn === burgerBtn) {
        menuSectionParent.innerHTML += renderBurgers(menuArray)
    } else if (btn === beerBtn) {
        menuSectionParent.innerHTML += renderBeers(menuArray)
    }

    introParagraph.classList.add("hide")
}

function clearMenuSection() {
    document.getElementById("menu-section").innerHTML = ""
}

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

/* -------------- functions for rendering orders --------------*/

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

function renderOrderHtml(selectedDishes){
    modalSection.classList.remove("hide")
    renderOrderSection.innerHTML = ""
    if (selectedDishes.length > 0) {
        selectedDishes.forEach(selectedDish => {
            const menuDetailsDiv = document.createElement('div');
            menuDetailsDiv.innerHTML = `
               
            <ul class="order-item-info">
                <li>
                    <h3><span>${selectedDish.name}</span></h3>
                </li>
                <li>
                    <h3 class="selected-dish-price">£${selectedDish.price}</h3>
                </li>
            </ul>
       
            `;
            
            renderOrderSection.appendChild(menuDetailsDiv);
        });
    } else {
        renderOrderSection.innerHTML = "<p>No items in your order.</p>";
    }
}

function getPrice(selectedDishes){
    return selectedDishes.reduce((sum, selectedDish) => sum + selectedDish.price, 0)     
}

function renderTotalPrice(){
    const totalPrice = getPrice(selectedDishes)
    totalAmount.innerHTML = `
    <span>Total:</span> £${totalPrice}
    ` 
}