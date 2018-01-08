import request from 'axios'
import qs from 'qs'
import { serverError } from './helper'

const FILE_HEADER = { 'Content-Type': 'multipart/form-data' }

class Axios {
  constructor() {
    // 公共参数
    request.defaults.params = {}
    // 设置请求最大时间
    request.defaults.timeout = 30 * 1000
    // 返回的状态值
    request.defaults.validateStatus = status => {
      return status >= 200 && status < 300
    }
    // 请求之前需要做的公共处理
    request.interceptors.request.use((config) => { // 请求前
      return config
    }, (error) => { // 请求前出错
      return Promise.reject(error)
    })
    // 响应需要做的公共处理
    request.interceptors.response.use((response) => { // 响应成功
      return response
    }, (error) => { // 响应失败
      serverError()
      return Promise.reject(error)
    })
    // 对上传的原生进度处理
    request.defaults.onUploadProgress = progressEvent => {
      return progressEvent
    }
    // 对下载的原生进度处理
    request.defaults.onDownloadProgress = progressEvent => {
      return progressEvent
    }
    // 赋予实例
    this.instance = request
  }
  // get
  apiGet (url, params = {}) {
    return new Promise((resolve, reject) => {
      this.instance.get(url, { params: params }).then((res) => {
        resolve(res.data)
      })
    })
  }
  // post
  apiPost (url, params = {}) {
    return new Promise((resolve, reject) => {
      this.instance.post(url, qs.stringify(params)).then((res) => {
        resolve(res.data)
      })
    })
  }
  // upload
  apiFile (url, params) {
    const formData = new FormData()
    for (let item in params) {
      formData.append(item, params[item])
    }

    return new Promise((resolve, reject) => {
      this.instance.post(url, formData, { headers: FILE_HEADER }).then((res) => {
        resolve(res.data)
      })
    })
  }
}

export default new Axios()


