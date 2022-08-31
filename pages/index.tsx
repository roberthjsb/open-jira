import { Grid, CardHeader, Card } from '@mui/material'
import type { NextPage } from 'next'
import { Layout } from '../components/layouts/Layout'
import { EntryList } from '../components/ui/EntryList'
import { NewEntry } from '../components/ui/NewEntry'


const Home: NextPage = () => (

  <Layout title='Home - OpenJira'>
    <Grid container spacing={2}>
      <Grid item xs={12} sm={4}>
        <Card sx={{ height: 'calc(100vh - 100px)' }}>
          <CardHeader
            title="Pendientes" />
          <NewEntry />
          <EntryList status='pending' />
        </Card>
      </Grid>

      <Grid item xs={12} sm={4}>
        <Card sx={{ height: 'calc(100vh - 100px)' }}>
          <CardHeader
            title="En Progreso" />
          <EntryList status='in-progress' />
        </Card>
      </Grid>

      <Grid item xs={12} sm={4}>
        <Card sx={{ height: 'calc(100vh - 100px)' }}>
          <CardHeader
            title="Completadas" />
          <EntryList status='finished' />
        </Card>
      </Grid>

    </Grid>

  </Layout>
)

export default Home
function EntriesContext(EntriesContext: any) {
  throw new Error('Function not implemented.')
}

