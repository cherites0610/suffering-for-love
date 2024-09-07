import Axios from 'axios'

const instance = Axios.create({
    timeout: 5000,  // 增加 timeout 時間
    headers: {
        'Content-Type': 'application/json',  // 可根據具體請求動態設置
        'Access-Control-Allow-Origin':'*'
    },
})

export default instance;