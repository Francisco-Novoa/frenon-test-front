import React from 'react'
import { Grid, Typography } from '@material-ui/core'

export default function Configuracion() {
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
                    Configuracion
                </Typography>
            </Grid>
            <Grid item>
                <img src={require('./Gears.jpg')} alt='xkcd comics' />
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