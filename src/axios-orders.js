import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://react-my-burger-d5439.firebaseio.com/'
})

export default instance