import { Box } from '@mui/material'
import Head from 'next/head'
import React, { FC, PropsWithChildren } from 'react'
import { Navbar } from '../ui/Navbar'
import { Sidebar } from '../ui/Sidebar'

export const Layout: FC<PropsWithChildren<{ title?: string }>> = ({ title = 'OpenJira', children }) => {
    return (
        <Box sx={{
            flexFlow: 1,
        }}>
            <Head>
                <title>{title}</title>
            </Head>
            <Navbar/>
            <Sidebar/>
            <Box sx={{ padding: '10px 20px' }}>
                {children}
            </Box>
        </Box>

    )
}
