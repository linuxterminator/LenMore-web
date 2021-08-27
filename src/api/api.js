import axios from "axios"

const url = "http://121.199.22.53:8090"

const config = {
    baseURL:url,
    timeout:1000,
}

// create返回的是一个方法
const instance = axios.create(config)

export default instance