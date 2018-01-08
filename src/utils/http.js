/*
* 公共执行http请求
* */
import api from './api'
import request from './request'
import { codeSuccess, codeError } from './helper'

const { test } = api

export async function getUser ({ params, cb }) {
  const { msg, data } = await request.apiGet(test, params || {})
  if (msg && msg.code === '20000') {
    cb(msg, data)
  } else codeError()
}
