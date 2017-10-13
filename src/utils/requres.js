import axios from 'axios'
import qs from 'qs'

const FILE_HEADER = { 'Content-Type': 'multipart/form-data' };

/*
* 拼接hash值并且转码
* */
const hashQueryString = (params) => {
  return Object.keys(params).map(key => `${key}=${encodeURIComponent(params[key])}`.join('&'))
}

/*
* 对象值转码
* */
const enCodeString = (params) => {
  for (let key in params) {
    params[key] = encodeURIComponent(params[key]);
  }
  return params
}

/*
* catch错误返回公共方法
* */
const checkError = (err) => {
  return err
}

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
    axios.get(url, { params: isEnCode === false ? params : enCodeString(params) }).then((res) => {
      resolve(res.data)
    }).catch((err) => {
      reject(err)
      checkError(err)
    })
  })
}

const apiPost = (url, params, isEnCode) => {
  return new Promise((resolve, reject) => {
    if (isEnCode === null || isEnCode === '' || isEnCode === undefined) {
      isEnCode = false
    }
    axios.post(url, qs.stringify(isEnCode === false ? params : enCodeString(params))).then((res) => {
      resolve(res.data)
    }).catch((err) => {
      reject(err)
      checkError(err)
    })
  })
}

const apiFile = (url, form) => {
  return new Promise((resolve, reject) => {
    axios.post(url, form, { headers: FILE_HEADER }).then((res) => {
      resolve(res.data)
    }).catch((err) => {
      reject(err);
      checkError(err);
    })
  })
}

export default {
  hashQueryString,
  enCodeString,

  apiGet,
  apiPost,
  apiFile
}
