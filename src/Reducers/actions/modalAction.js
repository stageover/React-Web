export const modalAction = (behavior, mode) => {
    return { 
        type: 'CONTROL_MODAL',
        behavior,
        mode
    }
}