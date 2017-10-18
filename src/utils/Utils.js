/*
* 公共通用小方法
* */

/*
* 拼接hash值并且转码
* @params 传入需要的对象
* */
const hashQueryString = (params) => {
  return Object.keys(params).map(key => `${key}=${encodeURIComponent(params[key])}`.join('&'))
}

/*
* 对象值转码
* @params 传入需要的对象
* */
const enCodeString = (params) => {
  for (let key in params) {
    params[key] = encodeURIComponent(params[key])
  }
  return params
}

export default {
  hashQueryString,
  enCodeString
}
