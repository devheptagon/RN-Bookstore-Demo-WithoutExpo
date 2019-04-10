import { addItem, removeItem, getBasket, updateBasket } from '../basketRepo'
import rootReducer from '../../../redux/rootReducer'
import createStore from '../../../redux/store'

createStore(rootReducer)

describe('basket functions are tested', () => {
    beforeEach(() => {
        updateBasket([])    
    })

    test('adds item to basket when basket does not have the item', () => {
        const item1 = { id: 1, name: 'testproduct' }
        const item2 = { id: 2, name: 'testproduct2' }
        addItem(item1)
        addItem(item2)
        const newBasket = getBasket()
        
        const checkedItem1 = newBasket.filter(f => f.id === item1.id)
        const checkedItem2 = newBasket.filter(f => f.id === item2.id)
        expect(checkedItem1.length).toBe(1)
        expect(checkedItem2.length).toBe(1)
        expect(newBasket.length).toBe(2)
    })

    test('increase item count if basket has the item', () => {
        const item = { id: 1, name: 'testproduct' }                        
        addItem(item)        
        addItem(item)        
        addItem(item)

        const newBasket = getBasket()                
        const checkedItem = newBasket.filter(f => f.id === item.id)                
        expect(checkedItem.length).toBe(1)
        expect(checkedItem[0].count).toBe(3)
        expect(newBasket.length).toBe(1)
    })

    test('decrease item count if basket has the item', () => {
        const item = { id: 1, name: 'testproduct' }                        
        addItem(item) //item count = 1
        addItem(item) //item count = 2
        addItem(item) //item count = 3
        removeItem(item) //item count = decreased back to 2

        let newBasket = getBasket()                
        const checkedItem = newBasket.filter(f => f.id === item.id)                
        expect(checkedItem.length).toBe(1)
        expect(checkedItem[0].count).toBe(2)
        expect(newBasket.length).toBe(1)
    })

    test('remove item completely when item count is 0', () => {
        const item = { id: 1, name: 'testproduct' }                        
        addItem(item) //item count = 1
        addItem(item) //item count = 2        
        removeItem(item) //item count = decreased back to 1
        removeItem(item) //item count = decreased to 0

        let newBasket = getBasket()                
        const checkedItem = newBasket.filter(f => f.id === item.id)                
        expect(checkedItem.length).toBe(0)        
        expect(newBasket.length).toBe(0)
    })
})