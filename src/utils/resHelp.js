/*
* 公共返回提示
* */

const SERVER_TIP = '系统异常!'
const CODE_ERROR_TIP = 'xxxx报错了!'
const NULL_TIP = '抱歉,未搜索到内容!'

/*
* 服务器端返回码
* */
const SUCCESS_CODE = '20000'
const NULL_CODE = '40001'
const CODE_ERROR = ['90001', '90002']

/*
* 成功执行的提示
* */
const codeSuccess = (msg) => {
  return msg
}

/*
* 报错执行的提示
* */
const codeError = (msg) => {
  if (msg) {
    return msg
  } else {
    return CODE_ERROR_TIP
  }
}

/*
* 搜索未查询到的时候执行的提示
* */
const nullError = (msg) => {
  if (msg) {
    return msg
  } else {
    return NULL_TIP
  }
}

/*
* catch错误返回公共方法
* */
const serverError = (err) => {
  return SERVER_TIP
}

export default {
  serverError,
  codeSuccess,
  codeError,
  nullError,

  SUCCESS_CODE,
  NULL_CODE,
  CODE_ERROR
}
