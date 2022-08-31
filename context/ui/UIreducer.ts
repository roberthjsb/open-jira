export type UIActionType =
    | { type: 'UI - Open Sidebar' }
    | { type: 'UI - Close Sidebar' }
    | { type: 'UI - Star Dragging' }
    | { type: 'UI - End Dragging'}
export interface UIState {
    sidemenuOpen: boolean
    isDragging: boolean
}

export const UIReducer = (state: UIState, action: UIActionType): UIState => {
    console.log(action, state)
    switch (action.type) {
        case 'UI - Open Sidebar':
            return { ...state, sidemenuOpen: true }
        case 'UI - Close Sidebar':
            return { ...state, sidemenuOpen: false }
        case 'UI - Star Dragging':
            return { ...state, isDragging: true }
        case 'UI - End Dragging':
            return { ...state, isDragging: false }
        default:
            return state
    }
}
