const initState = {
    authError: null,
    loginStatus: false
}

const authReducer = (state = initState, action) => {

    switch(action.type) {
        case 'LOGIN_SUCCESS':
            console.log('Login Success');
            return {
                ...state,
                authError: null,
                loginStatus: true
            }
        case 'LOGIN_ERROR':
            console.log('Login Error');
            return {
                ...state,
                authError: action.error.message,
            }
        case 'SIGNOUT_SUCCESS':
            console.log('Signout Success');
            return {
                ...state,
                loginStatus: false
            }
        default:
            return state;
    }
}

export default authReducer;