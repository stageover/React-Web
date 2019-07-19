export const loginAction = (credentials) =>{
    return {
        type: 'LOGIN',
        user: credentials
    }
}