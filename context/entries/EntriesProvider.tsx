import { FC, PropsWithChildren, useReducer } from "react"
import { EntriesState, Entry } from "../../types/Entry";
import { EntriesContext } from "./EntriesContext"
import entriesReducer from "./entriesReducer";
import { v4 as uuid4 } from 'uuid'
import { Description } from "@mui/icons-material";


const initialState: EntriesState = {
  entries: [
    {
      _id: uuid4(),
      description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non consequuntur ipsa molestias necessitatibus totam quam fuga sit provident.',
      status: 'pending',
      createAt: Date.now()
    },
    {
      _id: uuid4(),
      description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non consequuntur ipsa molestias necessitatibus totam quam fuga sit provident.',
      status: 'in-progress',
      createAt: Date.now() - 1000
    },
    {
      _id: uuid4(),
      description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non consequuntur ipsa molestias necessitatibus totam quam fuga sit provident.',
      status: 'finished',
      createAt: Date.now() - 100
    }
  ]
};

export const EntriesProvider: FC<PropsWithChildren> = ({ children }) => {
  const [state, dispatch] = useReducer(entriesReducer, initialState)
  const addNewEntry = (description: string) => {
    const newEntry:Entry ={
      _id: uuid4(),
      description: description,
      createAt: Date.now(),
      status: "pending"
    }
    dispatch({type:'[Entries] - Add New Entry',payload:newEntry})

  }
  const updateEntry = (entry:Entry)=>{
    dispatch({type:'[Entries] - Update Entry',payload:entry})
  }

  return (
    <EntriesContext.Provider value={{ ...state, addNewEntry ,updateEntry}}>
      {children}
    </EntriesContext.Provider>
  )
}
