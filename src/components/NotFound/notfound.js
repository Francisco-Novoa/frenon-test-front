import React from 'react'
import { Grid, Typography } from '@material-ui/core'

export default function NotFound() {
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
                    Not Found
                </Typography>
            </Grid>
            <Grid item>
                <img src={require('./404.jpg')} alt='too many' />
            </Grid>
            <Grid item>
                <Typography
                    align='center'
                    variant='h4'>
                    Something Went Wrong
                </Typography>
            </Grid>
        </Grid>
    )
}