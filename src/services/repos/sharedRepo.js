import { store } from '../../redux/store'
import { setLoadingAction } from '../../redux/appActions'

export const setLoading = async (isLoading) => {
    store.dispatch(setLoadingAction(isLoading))    
}