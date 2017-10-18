import axios from 'axios'
import qs from 'qs'
import Utils from './Utils'
import resHelp from './resHelp'

const FILE_HEADER = { 'Content-Type': 'multipart/form-data' }

/*
* @apiGet 公共get请求
* @apiPost 公共post请求
* @apiFile 公共上传
* @url 必填
* @params 必填
* @isEncode 选填 不填则为false 不进行字符串转码
* */
const apiGet = (url, params, isEnCode) => {
  return new Promise((resolve, reject) => {
    if (isEnCode === null || isEnCode === '' || isEnCode === undefined) {
      isEnCode = false
    }
    axios.get(url, { params: isEnCode === false ? params : Utils.enCodeString(params) }).then((res) => {
      resolve(res.data)
    }).catch((err) => {
      reject(err)
      resHelp.serverError()
    })
  })
}

const apiPost = (url, params, isEnCode) => {
  return new Promise((resolve, reject) => {
    if (isEnCode === null || isEnCode === '' || isEnCode === undefined) {
      isEnCode = false
    }
    axios.post(url, qs.stringify(isEnCode === false ? params : Utils.enCodeString(params))).then((res) => {
      resolve(res.data)
    }).catch((err) => {
      reject(err)
      resHelp.serverError()
    })
  })
}

const apiFile = (url, form) => {
  return new Promise((resolve, reject) => {
    axios.post(url, form, { headers: FILE_HEADER }).then((res) => {
      resolve(res.data)
    }).catch((err) => {
      reject(err)
      resHelp.serverError()
    })
  })
}

export default {
  apiGet,
  apiPost,
  apiFile
}
