import { createContext } from 'react';

export interface UIContextContextProps {
    sidemenuOpen:boolean,
    openSidemenu:()=>void
    closeSidemenu:()=>void
}

export const UIContext = createContext({} as UIContextContextProps)

