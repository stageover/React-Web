const initState = {
    modalIsOpen: false,
    modalMode: null,
    user: null
}

const modalReducer = (state = initState, action) => {
    console.log(action);
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
                modalIsOpen: false,
                user: action.user
            }
        case 'LOGIN_ERROR':
        case 'LOGIN':
                return {
                    ...state,
                    modalIsOpen: true
            }
        default:
            return {
               state
            }
    }
    
    
}

export default modalReducer;