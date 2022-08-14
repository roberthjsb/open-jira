import { Opacity } from '@mui/icons-material'
import { Card, CardActionArea, CardActions, CardContent, Typography } from '@mui/material'
import React, { FC ,DragEvent, useContext} from 'react'
import { UIContext } from '../../context/ui/UIContext'
import { Entry } from '../../types/Entry'

interface Props {
    entry:Entry
}
export const EntryCard:FC<Props> = ({entry}) => {
    const { startDragging,endDragging,isDragging } = useContext(UIContext)

    const onDragStart=(event:DragEvent)=>{
        event.dataTransfer.setData('text',entry._id)
        startDragging()
    }
    const onDragEnd=()=> endDragging()

  return (
    <Card sx={!isDragging ? {marginBottom:1}: {marginBottom:1, opacity:1}}
    draggable
    onDragStart={onDragStart}
    onDragEnd={onDragEnd}
    >
        <CardActionArea>
            <CardContent>
                <Typography sx={{whiteSpace:'pre-line'}}>{entry.description}</Typography>
            </CardContent>
            <CardActions sx={{display:'flex',justifyContent:'end',paddingRight:2}}>
                <Typography variant="body2">hace 30 min</Typography>
            </CardActions>
        </CardActionArea>
    </Card>
  )
}
