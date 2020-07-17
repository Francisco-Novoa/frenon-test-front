import React from 'react'
import { Grid, Typography } from '@material-ui/core'

export default function Calendario() {
    return (
        <Grid
            item
            container
            xs={10}
            alignContent='center'
            direction='column'
            style={{ paddingTop: '10px' }}>
            <Grid item>
                <Typography
                    align='center'
                    variant='h3'>
                    Calendario
                </Typography>
            </Grid>
            <Grid item>
                <img src={require('./calendar.png')} alt='calendario' />
            </Grid>
            <Grid item>
                <Typography
                    align='center'
                    variant='h4'>
                    Pagina en construccion
                </Typography>
            </Grid>
        </Grid>
    )
}