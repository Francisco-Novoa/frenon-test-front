import axios from 'axios'


export default function getState({ getStore, getActions, setStore }) {
    return {
        store: {
            search: '',
            hotels: [],
            users: [],
            alerts: [],
            messages: [],
            message: ''
        },
        actions: {
            setSearch: input => {
                getStore()
                getActions()
                setStore({ search: input })
            },
            getHotels: async () => {
                const hotels = await axios.get('https://5f10e642d40d13001631d5b4.mockapi.io/api/Hotels')
                setStore({ hotels: hotels.data })
            },
            getUser: async () => {
                const user = await axios.get('https://5f10e642d40d13001631d5b4.mockapi.io/api/users')
                setStore({ users: user.data })
            },
            getAlerts: async () => {
                const message = await axios.get('https://5f10e642d40d13001631d5b4.mockapi.io/api/mail')
                setStore({ alerts: message.data })
            },
            getMessages: async () => {
                const message = await axios.get('https://5f10e642d40d13001631d5b4.mockapi.io/api/Messages')
                setStore({ messages: message.data })
            },
            saveMessageId: (id, history) => {
                setStore({ message: id })
                history.push('/messages/')

            }
        }
    }
}