import React, { useState, useContext } from 'react'
import { Typography, Grid, makeStyles, Paper, Button, Modal } from '@material-ui/core'
import palette from '../../palette'
import { Context } from '../../store/appContext'



const useStyles = makeStyles((theme) => ({
    card: {
        padding: '0.25rem',
        minHeight: '200px'
    },
    paper: {
        height: '100%'
    },
    layoutCard: {
        height: '100%',
        width: '100%',
        padding: '1rem'
    },
    name: {
        color: palette.text,
        textAlign: 'center'
    },
    button: {
        borderRadius: '2em',
        backgroundColor: palette.primary,
        color: '#FFF'
    },
    modal: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
    },
    modalPaper: {
        minHeight: '30vh',
        minWidth: '30vw',
    }
}))

const HotelCard = ({ name, img, index }) => {
    const classes = useStyles()
    const [open, setOpen] = useState(false)
    const handleOpen = () => {
        setOpen(true)
    }
    const handleClose = () => {
        setOpen(false)
    }
    return (
        <Grid
            item
            className={classes.card}
            md={index % 5 === 0 || index % 5 === 1 || index % 5 === 2 ? 4 : 6}
            sm={index % 3 === 0 || index % 3 === 1 ? 6 : 12}
            xs={12}>
            <Paper
                className={classes.paper}
                style={{
                    backgroundImage: `url(${img})`,
                    backgroundRepeat: 'round'
                }}>
                <Grid
                    container
                    justify='space-between'
                    alignContent='center'
                    direction='column'
                    className={classes.layoutCard} >

                    <Grid item>
                        <Typography
                            className={classes.name}
                            variant='h4'>
                            {name}
                        </Typography>
                    </Grid>

                    <Grid
                        item
                        container
                        justify='center'>
                        <Button
                            onClick={handleOpen}
                            className={classes.button}
                            variant='contained'>
                            Reservar
                        </Button>
                    </Grid>
                </Grid>
            </Paper>

            <Modal
                open={open}>
                <Grid container
                    justify='center'
                    alignContent='center'
                    className={classes.modal}>
                    <Grid item
                        className={classes.modalPaper}>
                        <Paper
                            style={{
                                backgroundImage: `url(${img})`,
                                height: '100%',
                                width: '100%',
                                padding: '0.5rem',
                                backgroundRepeat: 'round'
                            }}>
                            <Grid
                                style={{ height: '100%' }}
                                container
                                direction='column'
                                justify='space-between'>
                                <Grid
                                    item
                                    container
                                    justify='flex-start'>
                                    <Typography
                                        className={classes.name}
                                        variant='h4'>
                                        {name}
                                    </Typography>
                                </Grid>
                                <Grid
                                    item
                                    container
                                    justify='flex-end'>
                                    <Button
                                        className={classes.button}
                                        variant='contained'
                                        onClick={handleClose}>
                                        Cerrar
                                    </Button>
                                </Grid>
                            </Grid>
                        </Paper>
                    </Grid>
                </Grid>
            </Modal>
        </Grid>
    )
}

export default function HotelList() {
    const { store } = useContext(Context)
    return (
        <Grid
            item
            container
            direction='column'>
            <Grid item>
                <Typography variant='h4'>
                    Hoteles Disponibles
                </Typography>
            </Grid>
            <Grid item >
                <Grid
                    container
                    justify='center'
                    alignItems='stretch'>
                    {!!store.hotels &&
                        store.hotels
                            .filter(elem => elem.name.toLowerCase().includes(store.search.toLowerCase()))
                            .map(({ name, img }, index) => {
                                return (
                                    <HotelCard
                                        name={name}
                                        img={img}
                                        index={index}
                                        key={`${img}/${name}`} />
                                )
                            })
                    }
                </Grid>
            </Grid>
        </Grid>
    )
}