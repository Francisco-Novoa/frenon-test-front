import React, { useContext, useEffect } from "react"
import { Context } from "../../store/appContext"
import { Grid, Paper, Typography, makeStyles } from "@material-ui/core"

const useStyles = makeStyles(() => ({
    messagecard: {
        padding: '1rem',
        width: "100%"
    },
    title: {
        textAlign: 'center'
    }
}))

export default function Messages({ history, location, match }) {
    const { store, actions } = useContext(Context)
    const classes = useStyles()
    useEffect(() => {
        actions.saveMessageId(match.params.id, history)
    }, [])
    return (
        <Grid
            xs={10}
            spacing={2}
            container
            justify="center"
            alignContent="flex-start">
                <Grid item container xs={12} justify="center">
                    <Typography variant="h3" >
                        {
                            store.message?
                            "Mensaje"
                            :
                            "Mensajes"
                        }
                    </Typography>
                </Grid>
            {
                store.message ?
                    store.messages
                        .filter((elem) => elem.id === store.message)
                        .map(({ createdAt, id, sender, message }) => {
                            const fecha = new Date(createdAt)
                            const useableDate = `${fecha.getDate()}-${fecha.getMonth()}-${fecha.getFullYear()}`
                            return (
                                <Grid
                                    item
                                    container
                                    xs={8}
                                    key={`${id}/${sender}`} >
                                    <Grid item>
                                        <Paper className={classes.messagecard}>
                                            <Grid container >
                                                <Grid
                                                    container
                                                    justify="space-between"
                                                    item>
                                                    <Typography variant="h6">
                                                        {sender}
                                                    </Typography>
                                                    <Typography>
                                                        {useableDate}
                                                    </Typography>
                                                </Grid>
                                                <Grid item>
                                                    <Typography variant="caption">
                                                        {message}
                                                    </Typography>
                                                </Grid>
                                            </Grid>
                                        </Paper>
                                    </Grid>
                                </Grid>
                            )
                        })
                    :
                    <>
                        {
                            !!store.messages &&
                            store.messages.map(({ createdAt, id, sender, message }) => {
                                const fecha = new Date(createdAt)
                                const useableDate = `${fecha.getDate()}-${fecha.getMonth()}-${fecha.getFullYear()}`
                                return (
                                    <Grid
                                        item
                                        container
                                        xs={12}
                                        md={6}
                                        key={`${id}/${sender}`} >
                                        <Paper className={classes.messagecard}>
                                            <Grid container >
                                                <Grid
                                                    container
                                                    justify="space-between"
                                                    item>
                                                    <Typography variant="h6">
                                                        {sender}
                                                    </Typography>
                                                    <Typography>
                                                        {useableDate}
                                                    </Typography>
                                                </Grid>
                                                <Grid item>
                                                    <Typography variant="caption">
                                                        {message}
                                                    </Typography>
                                                </Grid>
                                            </Grid>
                                        </Paper>
                                    </Grid>
                                )
                            })
                        }
                    </>
            }
        </Grid>
    )
}