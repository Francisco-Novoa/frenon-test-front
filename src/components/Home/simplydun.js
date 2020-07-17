import React from 'react'
import { Grid, makeStyles, Typography, Paper } from '@material-ui/core'
import { BsEnvelopeOpen } from 'react-icons/bs'
import { IoIosBed } from 'react-icons/io'
import { FaRegCreditCard } from 'react-icons/fa'

import palette from '../../palette'


const useStyles = makeStyles(() => ({
    SimplyDun: {
        borderRadius: '4px',
        padding: '10px',
        width: '100%',
    },
    paper: {
        height: '100%'
    },
    text: {
        fontSize: '.8em',
        fontFamily: 'Raleway',
    },
    divider: {
        width: '100%',
        height: '1px',
        backgroundColor: palette.primary
    },
}))

export default function SimplyDun() {
    const classes = useStyles()
    return (
        <Grid item>
            <Paper className={classes.paper}>
                <Grid
                    className={classes.paper}
                    container
                    alignContent='center'>
                    <Grid
                        item
                        container
                        className={classes.SimplyDun}
                        justify='space-evenly'
                    >
                        {[
                            {
                                icon: <BsEnvelopeOpen
                                    color={palette.primary}
                                    size={palette.dunIcon} />,
                                text: 'Notificaciones'
                            },
                            {
                                icon: <IoIosBed
                                    color={palette.primary}
                                    size={palette.dunIcon} />,
                                text: 'Hoteles'
                            },
                            {
                                icon: <FaRegCreditCard
                                    color={palette.primary}
                                    size={palette.dunIcon} />,
                                text: 'Pagos recibidos'
                            }
                        ].map(({ icon, text }, index) => {
                            return (
                                <Grid
                                    key={index}
                                    container
                                    item xs={3}
                                    spacing={2}
                                    justify='space-around'>
                                    <Grid
                                        container
                                        item xs={4}
                                        justify='flex-end'
                                        alignContent='space-around'>
                                        {icon}
                                    </Grid>
                                    <Grid item xs={8}>
                                        <Grid
                                            container
                                            justify='flex-start'
                                            alignContent='center'>
                                            <Grid item container xs={12}>
                                                <Typography
                                                    className={classes.text}>
                                                    {text}
                                                </Typography>
                                            </Grid>
                                            <Grid item container xs={12}>
                                                <Typography
                                                    className={classes.text}>
                                                    is simply dum
                                                </Typography>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <div className={classes.divider}></div>
                                    </Grid>
                                </Grid>
                            )
                        })}
                    </Grid>
                </Grid>
            </Paper>
        </Grid>
    )
}