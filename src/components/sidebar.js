import React from 'react'
import { Link } from 'react-router-dom'
import { AppBar, Drawer, ListItem, Grid, makeStyles } from '@material-ui/core'
import { FaHeartbeat, FaRegChartBar } from 'react-icons/fa'
import { BsCalendar, BsPerson } from 'react-icons/bs'
import { RiLogoutBoxRLine } from 'react-icons/ri'
import { IoMdApps } from 'react-icons/io'
import { FiFileText } from 'react-icons/fi'

import palette from '../palette'

const useStyles = makeStyles(() => ({
    drawer: {
        height: '100%',
        backgroundColor: palette.primary,
        color: palette.text,
    },
    spacer: {
        height: '10px'
    },

}))

export default function Sidebar() {
    const classes = useStyles()
    return (
        <AppBar position='fixed'>
            <Drawer
                className={classes.drawer}
                variant='permanent'>

                <Grid
                    className={classes.drawer}
                    container
                    direction='column'
                    justify='space-between'>

                    <Grid item container direction='column'>
                        {
                            [
                                {
                                    icon: <FaHeartbeat size={palette.iconSize} />,
                                    url: '/'
                                },
                                {
                                    icon: <div className={classes.spacer}></div>,
                                }
                                ,
                                {
                                    icon: <BsCalendar size={palette.iconSize} />,
                                    url: '/calendario'
                                },
                                {
                                    icon: <IoMdApps size={palette.iconSize} />,
                                    url: '/'
                                },
                                {
                                    icon: <BsPerson size={palette.iconSize} />,
                                    url: '/usuarios'
                                },
                                {
                                    icon: <FiFileText size={palette.iconSize} />,
                                    url: '/informes'
                                },
                                {
                                    icon: <FaRegChartBar size={palette.iconSize} />,
                                    url: '/graficos'
                                }
                            ]
                                .map(({ url, icon }, index) => {
                                    return (
                                        <Grid item key={index}>
                                            {
                                                url ?
                                                    <ListItem component={Link} button to={url}>
                                                        {icon}
                                                    </ListItem>
                                                    :
                                                    <ListItem button>
                                                        {icon}
                                                    </ListItem>
                                            }

                                        </Grid>
                                    )
                                })
                        }
                    </Grid>

                    <Grid item>
                        <ListItem button>
                            <RiLogoutBoxRLine size={palette.iconSize} />
                        </ListItem>
                    </Grid>

                </Grid>
            </Drawer>
        </AppBar>
    )
}