/*
* 公共返回通知
* */

export function codeSuccess () {
  console.log('成功触发事件')
}

export function codeError () {
  console.log('触发错误事件')
}

export function serverError () {
  console.log('服务器报错触发事件')
}
