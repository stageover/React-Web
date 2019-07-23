export const modalAction = (behavior, mode, title) => {
    return { 
        type: 'CONTROL_MODAL',
        behavior,
        mode,
        title
    }
}