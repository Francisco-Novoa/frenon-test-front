import React from 'react'
import { Paper, Typography, makeStyles, Grid } from '@material-ui/core'
import palette from '../../palette'


const useStyles = makeStyles(() => ({
    welcome: {
        background: 'linear-gradient(to right, rgba(120,100,218,0.53) 0%, rgba(148,189,244,1) 100%)',
        padding: '40px',
        margin: 0,
    },
    top: {
        fontSize: '1em',
        color: palette.text,
        fontFamily: 'Raleway'

    },
    middle: {
        fontSize: '1.3em',
        color: palette.text,
        fontFamily: 'Raleway',
        fontWeight: 600
    },
    divider: {
        width: '100%',
        height: '2px',
        backgroundColor: palette.divider
    },
    bottom: {
        fontSize: '.8em',
        color: palette.text,
        fontFamily: 'Raleway',
        marginTop: '15px',
    },

}))

export default function Welcome({ username }) {
    const classes = useStyles()
    return (
        <Grid item>
            <Paper className={classes.welcome}>
                <Grid container spacing={1} direction='column'>
                    <Grid item>
                        <Typography
                            variant='h6'
                            className={classes.top}>
                            Bienvenido
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Typography
                            variant='h4'
                            className={classes.middle}>
                            {username}
                        </Typography>
                    </Grid>
                    <Grid item>
                        <div className={classes.divider}></div>
                    </Grid>
                    <Grid item>
                        <Typography
                            variant='caption'
                            className={classes.bottom}>
                            is simply dum text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dum text ever since the 1500s, when
                        </Typography>
                    </Grid>
                </Grid>
            </Paper>
        </Grid>
    )
}