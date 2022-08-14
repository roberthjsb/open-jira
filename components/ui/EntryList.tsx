import { List, Paper } from '@mui/material'
import React, { FC, useContext, useMemo, DragEvent } from 'react'
import { EntriesContext } from '../../context/entries/EntriesContext'
import { UIContext } from '../../context/ui/UIContext'
import { EntryStatus } from '../../types/Entry'
import { EntryCard } from './EntryCard'

interface Props {
    status: EntryStatus
}



export const EntryList: FC<Props> = ({ status }) => {
    const { entries,updateEntry } = useContext(EntriesContext)
    const { isDragging , endDragging} = useContext(UIContext)
    const entriesByStatus = useMemo(
        () => entries
            .filter(entry => entry.status === status)
        , [entries, status])

    const onDropEntry = (event: DragEvent<HTMLDivElement>) => {
        const id = event.dataTransfer.getData('text')
        const entry = entries.find(ent=>ent._id=== id)!
        entry.status=status;
        updateEntry(entry);
        endDragging()

    }
    const allowDrop = (event: DragEvent<HTMLDivElement>) => {
        event.preventDefault()
    }

    return (
        <div style={
            isDragging ? {
                backgroundColor:'#2515151a',
                border: '1px dashed #f9f8f9'
            }:{}
        }
            onDrop={onDropEntry}
            onDragOver={allowDrop}
        >
            <Paper sx={{ height: 'calc(100vh - 200px)', overflow: 'auto', backgroundColor: 'transparent', padding: '1px 5px' }}>
                <List sx={{ opacity: isDragging ? 0.2 : 1, transition: 'all .3s' }}>
                    {
                        entriesByStatus
                            .map(entry => (<EntryCard key={entry._id} entry={entry} />))
                    }
                </List>
            </Paper>
        </div>
    )
}
