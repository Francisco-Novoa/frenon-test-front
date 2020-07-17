import React from 'react'
import { Grid, Typography } from '@material-ui/core'

export default function Usuarios() {
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
                    Usuarios
                </Typography>
            </Grid>
            <Grid item>
                <img src={require('./usuarios.jpg')} alt='usuarios' />
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