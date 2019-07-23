export const watchUserAuth = () => {
    return {
        type: 'WATCH_USER_AUTH'
    }
}

export const loginAction = (credentials) => {
    return {
        type: 'LOGIN_START',
        user: credentials
    }
}

export const signupAction = (userdetails) => {
    return {
        type: 'SIGNUP_START',
        user: userdetails
    }
}

export const signOutAction = () => {
    return {
        type: 'SIGNOUT_START'
    }
}

