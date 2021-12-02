export function reducer(state = { num: 0 }, action) {
    switch (action.type) {
        case 'add':
            return {
                ...state,
                num: state.num + 1
            }
        default:
            return {
                ...state
            }
    }
}
