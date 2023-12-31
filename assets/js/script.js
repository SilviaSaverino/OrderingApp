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
        
        `
    }).join('')
   }
   
document.getElementById('menu').innerHTML = renderMenu(menuArray)