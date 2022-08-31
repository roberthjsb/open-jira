import React, { ChangeEvent, FC, useMemo, useState , useContext} from 'react'
import { capitalize, Button, Card, CardActions, CardContent, CardHeader, FormControl, FormControlLabel, FormLabel, Grid, RadioGroup, TextField, Radio } from '@mui/material';
import { SaveOutlined } from '@mui/icons-material';
import { GetServerSideProps } from 'next'
import { Layout } from '../../components/layouts/Layout';
import { Entry, EntryStatus } from '../../types/Entry';
import { dbEntries } from '../../database/dbEntries';
import { EntriesContext } from '../../context/entries/EntriesContext';
import { useRouter } from 'next/router';


const validStatus: EntryStatus[] = ['pending', 'in-progress', 'finished']

const EntriesPage:FC<{entry: Entry}> = ({entry}) => {
    const {updateEntry} = useContext(EntriesContext)
    const router = useRouter();
    const [isTouched, setIsTouched] = useState(false)
    const [status, setStatus] = useState<EntryStatus>(entry.status)
    const [input, setInput] = useState(entry.description)
    const onBlur = () => setIsTouched(true)
    const onChange = (event: ChangeEvent<HTMLInputElement>) => {
        setInput(event.target.value);
        setIsTouched(true);
    }
    const onChangeStatus = (event: ChangeEvent<HTMLInputElement>) => {
        setStatus(event.target.value as EntryStatus);
    }
    const isInvalid = useMemo(() => (isTouched && input.length === 0), [isTouched,input])

    const saveEntry = ()=>{
      updateEntry({...entry,description:input,status })
      router.push('/')
    }



    return <Layout title={input.substring(0,15)+'...'}>
        <Grid container justifyContent='center' sx={{ marginTop: 2 }}>
            <Grid item xs={12} sm={8} md={6}>
                <Card>
                    <CardHeader
                        title="Entrada:"
                        subheader='Creada hace: N minutos' />
                    <CardContent>
                        <TextField
                            onBlur={onBlur}
                            onChange={onChange}
                            sx={{ marginTop: 2, marginBottom: 1 }}
                            fullWidth
                            placeholder='Nueva entrada'
                            autoFocus
                            multiline
                            value={input}
                            label='Nueva entrada'
                            error={isInvalid}
                            helperText={isInvalid && 'Ingrese un valor'}
                        />
                        <FormControl>
                            <FormLabel>Estado:</FormLabel>
                            <RadioGroup
                            value={status}
                            onChange={onChangeStatus}
                            row>
                                {
                                    validStatus.map(opt => (
                                        <FormControlLabel
                                            key={opt}
                                            value={opt}
                                            control={<Radio />}
                                            label={capitalize(opt)} />
                                    ))
                                }

                            </RadioGroup>
                        </FormControl>
                    </CardContent>
                    <CardActions>
                        <Button
                            disabled={!isTouched || isInvalid }
                            startIcon={<SaveOutlined />}
                            variant="contained"
                            fullWidth
                            onClick={()=>saveEntry()}
                        >
                            Save
                        </Button>
                    </CardActions>
                </Card>
            </Grid>
        </Grid>
    </Layout>
}


export const getServerSideProps: GetServerSideProps = async (ctx) => {
    const {id} = ctx.params as {id:string}
    const entry = await dbEntries(id)
    if(!entry){
        return {
            redirect:{
                destination:'/',
                permanent:false
            }
        }
    }

    return {
        props: {
            entry
        }
    }
}
export default EntriesPage;