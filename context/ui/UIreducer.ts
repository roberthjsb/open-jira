export type UIActionType =
    | { type: 'UI - Open Sidebar' }
    | { type: 'UI - Close Sidebar' }
export interface UIState {
    sidemenuOpen: boolean
}

export const UIReducer = (state: UIState, action: UIActionType): UIState => {
    debugger
    console.log(action,state)
    switch (action.type) {
        case 'UI - Open Sidebar':
            return { ...state, sidemenuOpen: true }
        case 'UI - Close Sidebar':
            return { ...state, sidemenuOpen: false }
        default:
            return state
    }
}
