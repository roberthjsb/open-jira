import { createContext } from 'react';

export interface UIContextProps {
    sidemenuOpen: boolean
    isDragging:boolean
    openSidemenu: () => void
    closeSidemenu: () => void

    startDragging: () => void
    endDragging: () => void
}

export const UIContext = createContext({} as UIContextProps)

