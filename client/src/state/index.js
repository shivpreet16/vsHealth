import { proxy } from 'valtio'

const state = proxy({
    isAuthenticated:false
})

export default state;