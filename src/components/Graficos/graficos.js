import React from 'react'
import { Grid, Typography } from '@material-ui/core'

export default function Graficos() {
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
                    Graficos
                </Typography>
            </Grid>
            <Grid item>
                <img src={require('./self_description.png')} alt='xkcd comics' />
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