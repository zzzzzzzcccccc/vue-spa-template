import axios from 'axios'
import qs from 'qs'
import { checkNull, enCodeString } from './Utils'
import { serverError } from './helper'

const FILE_HEADER = { 'Content-Type': 'multipart/form-data' }

/*
* @apiGet 公共get请求
* @apiPost 公共post请求
* @apiFile 公共上传
* @url 必填
* @params 传递参数 必填
* @isEncode 是否进行编码 选填 不填则为false 不进行字符串编码
* @axios 基本配置不用可行注释
* @timeout 默认20秒超时
* @baseUrl 请求的公共url
* @params 需要传递的公共参数
* @validateStatus 返回的http 状态码用于做错误判断
* */
class Axios {
  constructor() {
    this.instance = axios.create({
      timeout: 20 * 1000,
      baseURL: 'http://116.62.152.114:8085',
      params: {
        companyId: 1
      },
      validateStatus: (status) => {
        return status
      }
    })
  }

  apiGet (url, params, isEncode) {
    return new Promise((resolve, reject) => {
      checkNull(isEncode) === 0 ? isEncode = false : isEncode

      this.instance.get(url, { params: isEncode === false ? params : enCodeString(params) }).then(res => {
        resolve(res.data)
      }).catch(err => {
        reject(err)
        serverError()
      })
    })
  }

  apiPost (url, params, isEncode) {
    return new Promise((resolve, reject) => {
      checkNull(isEncode) === 0 ? isEncode = false : isEncode

      this.instance.post(url, qs.stringify(isEnCode === false ? params : enCodeString(params))).then(res => {
        resolve(res.data)
      }).catch(err => {
        reject(err)
        serverError()
      })
    })
  }

  apiFile (url, formData) {
    return new Promise((resolve, reject) => {
      this.instance.post(url, formData, { headers: FILE_HEADER }).then((res) => {
        resolve(res.data)
      }).catch(err => {
        reject(err)
        serverError()
      })
    })
  }
}

export default new Axios


