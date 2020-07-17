import React from 'react'
import { Grid } from '@material-ui/core'
import Welcome from './welcome'
import HotelList from './hotelList'
import SimplyDun from './simplydun'

export default function Home() {
    return (
        <Grid
            item container
            xs={10}
            spacing={2}
            direction='column'>
            <Welcome username='Pancho Novoa' />
            <SimplyDun />
            <HotelList />
        </Grid>
    )
}