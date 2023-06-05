import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: 'b7103bf54678482a840fc3130173a9ff'
    }
})