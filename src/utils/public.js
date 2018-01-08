/*
* 拼接hash值并且转码
* @params 传入需要的对象
* */
export function hashQueryString (params) {
  return Object.keys(params).map(key => `${key}=${encodeURIComponent(params[key])}`.join('&'))
}

/*
* 对象值转码
* @params 传入需要的对象
* */
export function enCodeString (params) {
  for (let key in params) {
    params[key] = encodeURIComponent(params[key])
  }
  return params
}

/*
* 验证空值
* @data 需要验证的值
* 0是空
* 1不为空
* */
export function checkNull (data) {
  if (data === '' || data === null || data === undefined) return 0
  else return 1
}




