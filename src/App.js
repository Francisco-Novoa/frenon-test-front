import React from 'react'
import injectContext from './store/appContext'
import { Grid, CssBaseline, makeStyles } from '@material-ui/core'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import palette from './palette'



import Sidebar from './components/sidebar'
import Navbar from './components/navbar'
import Notificaciones from './components/notifications'



import Home from './components/Home/Home'
import Calendario from './components/Calendario/calendario'
import Usuarios from './components/Usuarios/usuarios'
import Graficos from './components/Graficos/graficos'
import Informes from './components/Informes/informes'
import NotFound from './components/NotFound/notfound'
import Configuracion from './components/Configuracion/configuracion'
import Messages from './components/Messages/messages'

const useStyles = makeStyles(() => ({
    background: {
        backgroundColor: palette.backgroundColor,
    },
    noPadding: {
        padding: 0
    }
}))

const App = () => {
    const classes = useStyles()

    return (
        <BrowserRouter>
            <Grid
                container
                spacing={2}
                className={classes.background}>
                <CssBaseline />

                <Grid item xs={1}>
                    <Sidebar />
                </Grid>
                <Grid
                    item container
                    xs={11}
                    direction='column'
                    spacing={2}>

                    <Grid container item>
                        <Navbar />
                    </Grid>

                    <Grid
                        container item
                        spacing={2}
                        justify='space-around'>

                        <Switch>
                            <Route exact path='/' component={Home} />
                            <Route exact path='/calendario' component={Calendario} />
                            <Route exact path='/informes' component={Informes} />
                            <Route exact path='/usuarios' component={Usuarios} />
                            <Route exact path='/graficos' component={Graficos} />
                            <Route exact path='/configuracion' component={Configuracion} />
                            <Route path='/messages/:id?' render={props => <Messages {...props} />} />
                            <Route component={NotFound} />
                        </Switch>

                        <Grid item container xs={2}>
                            <Notificaciones />
                        </Grid>

                    </Grid>
                </Grid>
            </Grid>
        </BrowserRouter>
    )
}

export default injectContext(App)
