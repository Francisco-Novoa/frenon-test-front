import React, { useContext, useState } from 'react'
import { Context } from '../store/appContext'
import { Link } from 'react-router-dom'

import { Grid, makeStyles, TextField, ListItem } from '@material-ui/core'
import { BsSearch, BsGear } from 'react-icons/bs'
import { FaRegEnvelope, FaRegChartBar } from 'react-icons/fa'
import palette from '../palette'

const useStyles = makeStyles(() => ({
    dashboard: {
        backgroundColor: palette.bodyBackground,
        padding: '40px',
        borderRadius: '4px',
        fontSize: '18px',
        color: palette.backtext,
        fontFamily: 'Raleway'
    },
}))

const Search = () => {
    const { store, actions } = useContext(Context)
    const [local, setLocal] = useState(false)
    return (
        <>
            {
                local ?
                    <TextField id='standard-basic' label={'Search'} name='search' value={store.search} onChange={(e) => actions.setSearch(e.target.value)} />
                    :
                    <BsSearch size={palette.iconSize} color={palette.backtext} onClick={() => setLocal(!local)} />
            }
        </>
    )
}

export default function Navbar() {
    const classes = useStyles()
    return (
        <Grid
            item
            container
            justify='space-between'
            className={classes.dashboard}>
            <Grid item >
                Dashboard
            </Grid>

            <Grid item>
                <Grid container>
                    {
                        [
                            { icon: <Search /> }
                            ,
                            {
                                icon: <FaRegEnvelope size={palette.iconSize} color={palette.backtext} />,
                                url: '/messages'
                            },
                            {
                                icon: <BsGear size={palette.iconSize} color={palette.backtext} />,
                                url: '/configuracion'
                            },
                            {
                                icon: < FaRegChartBar size={palette.iconSize} color={palette.backtext} />,
                                url: '/graficos'
                            }
                        ].map(({ icon, url }, index) => {
                            return (
                                url ?
                                    <Grid item>
                                        <ListItem component={Link} button to={url} key={`${index}/${url}`}>
                                            {icon}
                                        </ListItem>
                                    </Grid>
                                    :
                                    <Grid item>
                                        <ListItem button key={index}>
                                            {icon}
                                        </ListItem>
                                    </Grid>
                            )
                        })
                    }
                </Grid>
            </Grid>
        </Grid>
    )
}