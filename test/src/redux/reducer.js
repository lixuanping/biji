const defaultState = {
    collapsed: false
}
export default (state = defaultState, action) => {
    const newState = JSON.parse(JSON.stringify(state))
    if (action.type == 'SETCOLLAPSED') {
        newState.collapsed = action.value
        return newState;
    }
    return state
}