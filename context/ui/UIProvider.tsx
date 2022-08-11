import { FC, PropsWithChildren, useReducer } from "react"
import { UIContext, UIContextContextProps } from "./UIContext"
import { UIReducer, UIState } from "./UIreducer"

const initialState: UIState = {
  sidemenuOpen: false
}

export const UIProvider: FC<PropsWithChildren> = ({ children }) => {
  const [state, dispatch] = useReducer(UIReducer, initialState)
  const openSidemenu=()=>{
    dispatch({type:'UI - Open Sidebar'})
  }
  const closeSidemenu=()=>{
    dispatch({type:'UI - Close Sidebar'})
  }

  return (
    <UIContext.Provider value={{
      ...state,
      openSidemenu,
      closeSidemenu

    }}>
      {children}
    </UIContext.Provider>
  )
}
