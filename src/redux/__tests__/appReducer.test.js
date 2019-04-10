import { setLoadingAction, setRefreshingAction, setMainNavigatorAction, setFilterAction, 
        setPageAction, setProductsAction, setPageTitleAction, updateBasketAction } from '../appActions'
import { appReducer } from '../appReducer'

describe('reducer is being tested', () => {
    
    test('isLoading parameter should be set', () => {
        const initialState = {                
            isLoading: false
        }
        let result = appReducer(initialState, setLoadingAction(true))
        expect(result.isLoading).toBe(true)        
    })

    test('isRefreshing parameter should be set', () => {
        const initialState = {                
            isRefreshing: false
        }
        let result = appReducer(initialState, setRefreshingAction(true))
        expect(result.isRefreshing).toBe(true) 
    })

    test('mainNavigator parameter should be set', () => {
        const initialState = {                
            mainNavigator: null
        }
        let result = appReducer(initialState, setMainNavigatorAction({}))
        expect(result.mainNavigator).not.toBeNull()
    })

    test('filter parameter should be set', () => {
        const initialState = {                
            filter: ''
        }
        let result = appReducer(initialState, setFilterAction('hello'))
        expect(result.filter).not.toBe('')
    })

    test('page parameter should be set', () => {
        const initialState = {                
            page: 1
        }
        let result = appReducer(initialState, setPageAction(5))
        expect(result.page).toBe(5)
    })

    test('products parameter should be set', () => {
        const initialState = {                
            products: []
        }
        let result = appReducer(initialState, setProductsAction([{ id: 1, name: 'test product'}]))
        expect(result.products.length).toBe(1)
    })

    test('basket parameter should be set', () => {
        const initialState = {                
            basket: []
        }
        let result = appReducer(initialState, updateBasketAction([{ id: 1, name: 'test product'}]))
        expect(result.basket.length).toBe(1)
    })

    test('page parameter should be set', () => {
        const initialState = {                
            pageTitle: ''
        }
        let result = appReducer(initialState, setPageTitleAction('title'))
        expect(result.pageTitle).not.toBe('')
    })
})