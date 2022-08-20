import { EntriesActionType, EntriesState } from "../../types/Entry";

const entriesReducer = (state: EntriesState, action: EntriesActionType): EntriesState => {
  switch (action.type) {
    case '[Entries] - Add New Entry': {
      return {
        ...state,
        entries: [...state.entries, action.payload]
      }
    }
    case '[Entries] - Update Entry': {
      return {
        ...state,
        entries: state.entries.map(ent => {
          const { status, description, _id } = action.payload;
          if (ent._id === _id) {
            ent = { ...ent, description, status }
          }
          return ent;
        })
      }
    }
    case '[Entries] - Loading Entries': {
      debugger
      return {
        ...state,
        entries: [...action.payload]
      }
    }
    default:
      return state
  }
}


export default entriesReducer;