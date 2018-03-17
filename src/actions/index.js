import axios from 'axios'
import { CHANGE_AUTH, FETCH_USERS} from './types'


export const authenticate = isLoggedIn => {
    return {
        type: CHANGE_AUTH,
        payload: isLoggedIn
    }
}  

export const fetchUsers = isLoggedIn => {
    const url="https://jsonplaceholder.typicode.com/users"
    const request = axios.get(url)

    return {
        type: FETCH_USERS,
        payload: request
    }
/*
    return {
        type: FETCH_USERS,
        payload: [
            { name: 'Jane' },
            { name: 'Alex' },
            { name: 'Jim' }
        ]
    }
    */
}  