import Axios from 'axios'

Axios.defaults.baseURL = "http://localhost.charlesproxy.com:9000"
Axios.defaults.headers.post['Content-Type'] = 'application/json'

export default Axios;