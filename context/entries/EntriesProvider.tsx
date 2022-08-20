import { FC, PropsWithChildren, useEffect, useReducer } from "react"
import { EntriesState, Entry } from "../../types/Entry";
import { EntriesContext } from "./EntriesContext"
import entriesReducer from "./entriesReducer";
import { entriesApi } from "../../apis";


const initialState: EntriesState = {
  entries: []
};

export const EntriesProvider: FC<PropsWithChildren> = ({ children }) => {
  const [state, dispatch] = useReducer(entriesReducer, initialState)
  const addNewEntry = async (description: string) => {
    const { data } = await entriesApi.post<Entry>('/entries', { description })
    dispatch({ type: '[Entries] - Add New Entry', payload: data })

  }
  
  const updateEntry = async (entry: Entry) => {
    try {
      const { description, status, _id } = entry;
      const { data } = await entriesApi.put<Entry>(`/entries/${_id}`, { description, status })
      dispatch({ type: '[Entries] - Update Entry', payload: entry })
    } catch (error) {
      console.error(error)
    }
  }

  const refreshEntries = async () => {
    const { data } = await entriesApi.get<Entry[]>('/entries')
    console.log(data)
    dispatch({ type: '[Entries] - Loading Entries', payload: data })

  }
  useEffect(() => {
    refreshEntries()
  }, [])


  return (
    <EntriesContext.Provider value={{ ...state, addNewEntry, updateEntry }}>
      {children}
    </EntriesContext.Provider>
  )
}
