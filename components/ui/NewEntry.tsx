import { Box, Button, TextField } from '@mui/material'
import AddIcon from '@mui/icons-material/AddCircleOutlineOutlined'
import SaveOutlinedIcon from '@mui/icons-material/SaveOutlined'
import React, { ChangeEvent, useContext, useState } from 'react'
import { EntriesContext } from '../../context/entries/EntriesContext'

export const NewEntry = () => {

    const [isAdding, setIsAdding] = useState(false)
    const [isTouched, setIsTouched] = useState(false)
    const [inputTextArea, setInputTextArea] = useState('')

    const { addNewEntry } = useContext(EntriesContext)

    const addEntry = () => {
        setIsAdding(true);
    }
    const cancelEntry = () => {
        setIsAdding(false);
        setInputTextArea('');
        setIsTouched(false)
    }
    const saveEntry = () => {
        if (inputTextArea.length === 0) return;
        addNewEntry(inputTextArea)
        setIsAdding(false)
        setInputTextArea('');
        setIsTouched(false)
    }
    const changeInput = (event: ChangeEvent<HTMLInputElement>) => {
        setInputTextArea(event.target.value)
        setIsTouched(true)
    }

    return (
        <Box sx={{ marginBottom: 2, paddingX: 1 }}>
            {isAdding
                ? (<>
                    <TextField
                        fullWidth
                        sx={{ marginTop: 2, marginBottom: 1 }}
                        placeholder='Nueva entrada'
                        autoFocus
                        multiline
                        error={isTouched && inputTextArea.length <= 0}
                        label='Nueva entrada'
                        helperText={isTouched && inputTextArea.length <= 0 ? 'es requerido' : 'Ingrese un valor'}
                        onChange={changeInput}
                        value={inputTextArea}
                    />
                    <Box display='flex' justifyContent='space-between'>
                        <Button onClick={() => cancelEntry()}
                            variant='text'>
                            Cancelar
                        </Button>

                        <Button variant='outlined' color='secondary'
                            onClick={() => saveEntry()}
                            endIcon={<SaveOutlinedIcon />}
                        >
                            Guardar
                        </Button>
                    </Box>
                </>)

                : (<Button
                    startIcon={<AddIcon />}
                    fullWidth
                    variant='outlined'
                    onClick={() => addEntry()}
                >
                    Agregar Tarea
                </Button>)}
        </Box>
    )
}
