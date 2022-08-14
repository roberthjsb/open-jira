export type EntriesActionType =
|{ type: '[Entries] - ActionName'}
|{ type: '[Entries] - Add New Entry'} & EntriesAction<Entry>
|{ type: '[Entries] - Update Entry'} & EntriesAction<Omit<Entry,'createAt '>>
export type EntriesAction<T> = { payload:T }
export type EntriesState = {
  entries: Entry[]
}

export type EntryStatus = 'pending'|'in-progress'|'finished'

export type Entry = {
    _id:string
    description:string
    createAt:number
    status:EntryStatus
}