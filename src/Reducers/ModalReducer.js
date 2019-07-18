const initState = {
    modalIsOpen: false,
    modalMode: null
}

const ModalReducer = (state = initState, action) => {
  console.log(action);
    if(action.type === 'CONTROL_MODAL') {
        return {
            ...state,
            modalIsOpen: action.behavior,
            modalMode: action.mode
        }
    }
    return state;
}

export default ModalReducer;