import { menuArray } from "./data.js"

const pizzaBtn = document.getElementById("pizza-btn")

pizzaBtn.addEventListener("click", function(){
    console.log("pizza btn working")
})

function renderMenu(menuArray){
    return menuArray.map(menuDish => {
        const {name, 
            ingredients,
            id, 
            image, 
            price,
        } = menuDish
        return `
        <section class="menuItem">
            <img src="${image}">
            <div class="item-info">
                <h2>${name}<span> £${price}</span></h2>
                <h4>Ingredients: <span>${ingredients}<span></h4>
            </div>
        </section>
        `
    }).join('')
   }
   
document.getElementById('menu').innerHTML = renderMenu(menuArray)