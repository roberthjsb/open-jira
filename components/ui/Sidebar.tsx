import InboxOutlinedIcon from '@mui/icons-material/InboxOutlined'
import MailLockOutlinedIcon from '@mui/icons-material/MailLockOutlined'
import { Box, Divider, Drawer, List, ListItem, ListItemIcon, ListItemText, Typography } from '@mui/material'
import React from 'react'
import { useContext } from 'react'
import { UIContext } from '../../context/ui/UIContext'


const menuItems: String[] = ['Inbox', 'Starred', 'Send Email', 'Drafts']

export const Sidebar = () => {
   const {sidemenuOpen,closeSidemenu}= useContext(UIContext)
    return (
        <Drawer anchor='left'
            open={sidemenuOpen}
            onClose={()=>closeSidemenu() }
        >
            <Box sx={{
                width: 200
            }}>
                <Box
                    sx={{
                        padding: '5px 10px'
                    }}
                >
                    <Typography variant="h4">
                        Menu
                    </Typography>
                </Box>
                <List>
                    {
                        menuItems.map((text, index) => (
                            <ListItem button   key={index}>
                                <ListItemIcon>
                                    {
                                        index % 2 ? <InboxOutlinedIcon /> : <MailLockOutlinedIcon />
                                    }
                                </ListItemIcon>
                                <ListItemText primary={text}/>
                            </ListItem>
                        ))
                    }
                </List>
                <Divider/>
                <List>
                    {
                        menuItems.map((text, index) => (
                            <ListItem button   key={index}>
                                <ListItemIcon>
                                    {
                                        index % 2 ? <InboxOutlinedIcon /> : <MailLockOutlinedIcon />
                                    }
                                </ListItemIcon>
                                <ListItemText primary={text}/>
                            </ListItem>
                        ))
                    }
                </List>

                <Divider />
            </Box>
        </Drawer >
    )
}
