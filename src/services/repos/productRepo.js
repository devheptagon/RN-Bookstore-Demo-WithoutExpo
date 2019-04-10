import Proxy from '../../utils/proxy'
import { store } from '../../redux/store'
import { setFilterAction, setPageAction, setProductsAction } from '../../redux/appActions'
import { setLoading } from './sharedRepo'
import { buildQueryUrl, buildDTOList } from '../../utils/helper'
import mock from '../mock.json'

const getProducts = async () => {
    setLoading(true)
    const { appReducer } = store.getState()    
    const url = buildQueryUrl(appReducer.filter, appReducer.page)    
    const response = await Proxy.get(url, {})        
    // const response = { items: mock.items }
    setLoading(false)

    if (response) {                
        return response.items        
    }
    return []
}

const appendToProducts = async () => {
    const products = await getProducts()
    const dtoProducts = buildDTOList(products)
    store.dispatch(setProductsAction(dtoProducts))
}

export const fetchPage = async (page) => {
    store.dispatch(setPageAction(page))        
    appendToProducts()
}

export const refresh = async (page) => {
    store.dispatch(setPageAction(1))    
    store.dispatch(setProductsAction(null))
    appendToProducts()
}

export const setFilter = async (filter) => {     
    store.dispatch(setFilterAction(filter))
    refresh()
}



