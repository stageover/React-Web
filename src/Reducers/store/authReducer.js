const initState = {
    authError: null,
    authSuccess: null,
    userAuth: null
}

const authReducer = (state = initState, action) => {
    console.log(action);
    switch(action.type) {
        case 'LOAD_USER_AUTH':
        case 'LOGIN_SUCCESS':
            return {
                ...state,
                authError: null,
                userAuth: action.userAuth
            }
        case 'SIGNUP_SUCCESS_START':
            return {
                ...state,
                authError: null,
                authSuccess: 'Successfully Registered'
            }
        case 'LOGIN_ERROR':
        case 'SIGNUP_ERROR':
            return {
                ...state,
                authError: action.error.message,
            }
        case 'SIGNOUT_SUCCESS':
            return {
                ...state,
                userAuth: null
            }
        default:
            return state;
    }
}

export default authReducer;