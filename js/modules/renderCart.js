import {carts} from "./array.js"

const renderCart = (cart) => {
    if (cart.type === 'image') {
        return `<div class="item">
                <img height = 250px width = 300px src="${cart.src}">
                <h3>${cart.title}</h3>
            </div>`
            
        } else if (cart.type === 'audio') { 
            return `<div class="item">
                    <audio controls="controls" height = 250px width = 300px src="${cart.src}"></audio>
                    <h3>${cart.title}</h3>
                </div>`

                } else if(cart.type === 'video'){
                    return `<div class="item">
                            <video controls="controls" height = 250px width = 300px src="${cart.src}"></video>
                            <h3>${cart.title}</h3>
                        </div>` 
                }
            
        

    };

const renderGal = list => {
    document.querySelector('.carts').innerHTML = list.map(cart => renderCart(cart)).join('')
};

renderGal(carts);
