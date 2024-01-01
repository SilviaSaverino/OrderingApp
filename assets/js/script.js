import { menuArray } from "./data.js"

const pizzaBtn = document.getElementById("pizza-btn")
const completeMenuBtn = document.getElementById("complete-menu-btn")

completeMenuBtn.addEventListener("click", function(){
    document.getElementById('menu').innerHTML = renderMenu(menuArray)
})

pizzaBtn.addEventListener("click", function(){
    document.getElementById('pizzas').innerHTML = renderPizzas(menuArray)
})


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

function renderMenu(menuArray){
    return menuArray.map(menuDish => renderMenuItemHtml(menuDish)).join('');
   }

function renderPizzas(menuArray) {
    const getPizza = menuArray.filter(function (dish) {
        return dish.name.includes("Pizza");
    });

    return getPizza.map(pizza => renderMenuItemHtml(pizza)).join('');
}


   
