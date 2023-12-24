import { proxy } from 'valtio'

const state = proxy({
    isAuthenticated:false,
    doctors:[],
    date:null
})

export default state;