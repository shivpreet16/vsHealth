import { proxy } from 'valtio'

const state = proxy({
    isAuthenticated:false,
    doctors:[]
})

export default state;