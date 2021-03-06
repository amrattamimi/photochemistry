import { createReducer } from "../../common/utils/reducerUtils";
import { MODAL_OPEN, MODAL_CLOSE } from './modalConstants';


const initialState = null;

const openModal = (state, payload) => {
    const {modalType, modalProps} = payload;
    return {modalType, modalProps}
}

const closeModal = (state) => {
    return null
}

// using create reducer it can be added in the root reducer 
export default createReducer(initialState, {
    [MODAL_OPEN]: openModal,
    [MODAL_CLOSE]: closeModal
})
