import { FC, PropsWithChildren, useReducer } from "react"
import { UIContext, UIContextProps } from "./UIContext"
import { UIReducer, UIState } from "./UIreducer"

const initialState: UIState = {
  sidemenuOpen: false,
  isDragging: false
}

export const UIProvider: FC<PropsWithChildren> = ({ children }) => {
  const [state, dispatch] = useReducer(UIReducer, initialState)
  const openSidemenu = () => {
    dispatch({ type: 'UI - Open Sidebar' })
  }
  const closeSidemenu = () => {
    dispatch({ type: 'UI - Close Sidebar' })
  }
  const startDragging = () => {
    dispatch({ type: 'UI - Star Dragging' })
  }
  const endDragging = () => {
    dispatch({ type: 'UI - End Dragging' })
  }

  return (
    <UIContext.Provider value={{
      ...state,
      openSidemenu,
      closeSidemenu,
      startDragging,
      endDragging

    }}>
      {children}
    </UIContext.Provider>
  )
}
