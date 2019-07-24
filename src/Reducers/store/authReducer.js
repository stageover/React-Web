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
        case 'LOGIN_SOCIAL_SUCCESS':
            return {
                ...state,
                userAuth: action.userAuth
            }

        case 'SIGNUP_SUCCESS':
            return {
                ...state,
                authSuccess: 'Successfully Registered!'
            }

        case 'LOGIN_ERROR':
        case 'SIGNUP_ERROR':
             
            return {
                ...state,
                authError: action.error.message,
                userAuth: null
            }
            
        case 'SIGNOUT_SUCCESS':
            return {
                ...state,
                userAuth: null
            }

        case 'SEND_PASSWORD_RESET_EMAIL_SUCCESS':
            return {
                ...state,
                authSuccess: 'Successfully Sent! Please check your inbox.'
            }

        case 'REMORE_ALERTS_ON_CHANGE' :
        case 'MODAL_CLOSE':
            return {
                ...state,
                authError: null,
                authSuccess: null
            }
            
        default:
            return state;
    }
}

export default authReducer;