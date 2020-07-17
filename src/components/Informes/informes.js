import React from 'react'
import { Grid, Typography } from '@material-ui/core'

export default function Informes() {
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
                    Informes
                </Typography>
            </Grid>
            <Grid item>
                <img src={require('./paperwork.gif')} alt='too many' />
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