import { menuArray } from "./data.js"

const completeMenuBtn = document.getElementById("complete-menu-btn")
const pizzaBtn = document.getElementById("pizza-btn")
const burgerBtn = document.getElementById("burger-btn")
const beerBtn = document.getElementById("beer-btn")

/* -------------- event listeners --------------*/
completeMenuBtn.addEventListener("click", function(){
    document.getElementById('menu').innerHTML += renderCompleteMenu(menuArray)
})

pizzaBtn.addEventListener("click", function(){
    clearMenuSection()
    document.getElementById('menu').innerHTML += renderPizzas(menuArray)
})

burgerBtn.addEventListener("click", function(){
    clearMenuSection()
    document.getElementById("menu").innerHTML += renderBurgers(menuArray)
})

beerBtn.addEventListener("click", function(){
    clearMenuSection()
    document.getElementById("menu").innerHTML += renderBeers(menuArray)
    
})


/* -------------- functions --------------*/

function renderCompleteMenu(menuArray){
    return menuArray.map(menuDish => renderMenuItemHtml(menuDish)).join('');
   }

function renderPizzas(menuArray) {
    const getPizza = menuArray.filter(function(dish) {
        return dish.name.includes("Pizza");
    });

    return getPizza.map(pizza => renderMenuItemHtml(pizza)).join('');
}

function renderBurgers(menuArray) {
    const getBurger = menuArray.filter(function(burgerDish) {
        return burgerDish.name.includes("burger");
    });

    return getBurger.map(burger => renderMenuItemHtml(burger)).join('');
}

function renderBeers(menuArray) {
    const getBeer = menuArray.filter(function(beer) {
        return beer.name.includes("Beer");
    });

    return getBeer.map(beer => renderMenuItemHtml(beer)).join('');
}

function clearMenuSection(){
    document.getElementById("menu").innerHTML = ""
}
/* -------------- main function with literals --------------*/

function renderMenuItemHtml({ name, ingredients, image, price }) {

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
                        <button id="addToCart-btn"><i class="fa-solid fa-plus"></i></button>
                    </li>
                </ul>
                <p class="ingredients"><span>Ingredients:</span> ${ingredients}</p>
            </div>
        </section>
    `;
}




   
