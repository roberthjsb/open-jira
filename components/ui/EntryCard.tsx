import { Opacity } from '@mui/icons-material'
import { Card, CardActionArea, CardActions, CardContent, CircularProgress, Grid, Typography } from '@mui/material'
import { flexbox } from '@mui/system'
import { useRouter } from 'next/router'
import React, { FC, DragEvent, useContext, useState } from 'react'
import { UIContext } from '../../context/ui/UIContext'
import { Entry } from '../../types/Entry'
import { getFormatDistanceToNow } from '../../utils/date-functions'

interface Props {
    entry: Entry
}
export const EntryCard: FC<Props> = ({ entry }) => {
    const { startDragging, endDragging, isDragging } = useContext(UIContext)
    const [loading, setLoading] = useState(false)
    const router = useRouter();

    const onDragStart = (event: DragEvent) => {
        event.dataTransfer.setData('text', entry._id)
        startDragging()
    }
    const onDragEnd = () => endDragging()
    const onClick = () => {
        setLoading(true)
        router.push(`/entries/${entry._id}`)
    }

    return (<Card
                onClick={onClick}
                sx={!isDragging ? { marginBottom: 1 } : { marginBottom: 1, opacity: 1 }}
                draggable
                onDragStart={onDragStart}
                onDragEnd={onDragEnd}
            >
             {       loading ?
           ( <Grid container sx={{ display: 'flex', justifyContent: 'center', marginBlock:4}} >
                <CircularProgress />
            </Grid>)
            : ( <CardActionArea>
                    <CardContent>
                        <Typography sx={{ whiteSpace: 'pre-line' }}>{entry.description}</Typography>
                    </CardContent>
                    <CardActions sx={{ display: 'flex', justifyContent: 'end', paddingRight: 2 }}>
                        <Typography variant="body2">hace {getFormatDistanceToNow(entry.createAt)}</Typography>
                    </CardActions>
                </CardActionArea>)}
            </Card>)

}
