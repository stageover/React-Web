const initState = {
    modalIsOpen: false,
    modalMode: null,
    modalTitle: null
}

const modalReducer = (state = initState, action) => {
    switch(action.type) {
        case 'CONTROL_MODAL':
            return {
                ...state,
                modalIsOpen: action.behavior,
                modalMode: action.mode,
                modalTitle: action.title
            }
        case 'LOGIN_SUCCESS':
        case 'SIGNUP_SUCCESS':
        case 'SIGNUP_SUCCESS_CLOSE':
            return {
                ...state,
                modalIsOpen: false,
                modalMode: null,
                modalTitle: null
            }
        default:
            return state
    }
    
    
}

export default modalReducer;