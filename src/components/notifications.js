import React, { useContext } from 'react'
import { Context } from '../store/appContext'

import { Typography, Grid, Paper, makeStyles } from '@material-ui/core'
import { BsEnvelopeOpen } from 'react-icons/bs'


const useStyles = makeStyles(() => ({
    notification: {
        padding: '1rem',
        width: '100%'
    },
    title: {
        textAlign: 'center'
    }
}))

const Notification = ({ name, text, date }) => {
    const classes = useStyles()
    const fecha = new Date(date)
    const useableDate = `${fecha.getDate()}- ${fecha.getMonth()}- ${fecha.getFullYear()}`
    return (
        <Grid
            item
            container
            direction='column'
            alignContent='center'>
            <Paper
                className={classes.notification}>

                <Grid
                    item container
                    justify='space-between'>
                    <BsEnvelopeOpen />
                    <Typography>
                        {useableDate}
                    </Typography>
                </Grid>

                <Typography>
                    {name}
                </Typography>

                <Typography variant='caption'>
                    {text}
                </Typography>
            </Paper>
        </Grid>
    )
}

export default function Notificaciones() {
    const { store } = useContext(Context)
    const classes = useStyles()
    return (
        <Grid
            item container
            direction='column'>

            <Grid item>
                <Typography
                    variant='h5'
                    className={classes.title}>
                    Notificaciones
                </Typography>
            </Grid>

            <Grid
                item container
                spacing={1}
                direction='column'>
                {!!store.alerts &&
                    store.alerts.map(({ name, text, date }, index) => {
                        return (
                            <Notification
                                name={name}
                                text={text}
                                date={date}
                                key={`${name}/${date}/${index}`} />
                        )
                    })
                }
            </Grid>
        </Grid>

    )
}