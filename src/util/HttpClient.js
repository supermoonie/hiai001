import axios from "axios";
import qs from 'qs';
import {Message} from 'element-ui'
import {BASE_URL} from '@/config/env';

const httpClient = axios.create({
    baseURL: BASE_URL,
    timeout: 10000,
    // `withCredentials` 表示跨域请求时是否需要使用凭证
    withCredentials: false,
});
// 请求拦截器
httpClient.interceptors.request.use(
    config => {
        return config;
    },
    error => {
        console.error(error);
        Message({
            message: '网络异常，请稍后重试！',
            type: 'error',
            duration: 2000
        })
    });
// 响应拦截器
httpClient.interceptors.response.use(
    response => {
        if (response.status === 200) {
            if (response.data['code'] === 2000) {
                return Promise.resolve(response.data['data']);
            } else {
                console.error(response.data);
                const msg = response.data['message'];
                Message({
                    message: msg,
                    type: 'error',
                    duration: 2000
                })
                return Promise.reject(response.data['data']);
            }
        } else {
            return Promise.reject(response);
        }
    }, error => {
        console.error(error);
        Message({
            message: '网络异常，请稍后重试！',
            type: 'error',
            duration: 2000
        })
    });

httpClient.asyncGet = async (url, config) => {
    return await httpClient.get(url, config)
}

httpClient.asyncPostForm = async (url, data, config) => {
    return await httpClient.post(url, qs.stringify(data), {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded;charset=utf8'
        },
        ...config
    })
};

httpClient.postForm = (url, data, config) => {
    return httpClient.post(url, qs.stringify(data), {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded;charset=utf8'
        },
        ...config
    })
};

export default httpClient;
