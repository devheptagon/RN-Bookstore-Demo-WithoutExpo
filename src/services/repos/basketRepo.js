import { store } from '../../redux/store'
import { updateBasketAction } from '../../redux/appActions'

export const getBasket = () => {
    const { appReducer } = store.getState()
    let basket = [...appReducer.basket]
    return basket
}

export const updateBasket = (basket) => store.dispatch(updateBasketAction(basket))

export const addItem = (item) => {
    let basket = getBasket()
    let existingItem = basket.filter(f => f.id === item.id)
    if (existingItem.length > 0) {       
        basket = basket.filter(f => f.id !== item.id)
        existingItem[0].count++
        basket.push(existingItem[0])        
    } else {
        basket.push({...item, count: 1})
    }
    updateBasket(basket)
}

export const removeItem = (item) => {
    let basket = getBasket()
    let existingItem = basket.filter(f => f.id === item.id)
    if (existingItem.length > 0) {
        existingItem[0].count--
        basket = basket.filter(f => f.id !== item.id)
        if(existingItem[0].count > 0) {
            basket.push(existingItem[0])
        }                
        updateBasket(basket)
    }
}
