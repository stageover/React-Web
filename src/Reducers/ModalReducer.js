const initState = {
    modalIsOpen: false,
    modalMode: null
}

const modalReducer = (state = initState, action) => {
    switch(action.type) {
        case 'CONTROL_MODAL':
            return {
                ...state,
                modalIsOpen: action.behavior,
                modalMode: action.mode
            }
        case 'LOGIN_SUCCESS':
            return {
                ...state,
                modalIsOpen: false
            }
        default:
            return {
               state
            }
    }
    
    
}

export default modalReducer;