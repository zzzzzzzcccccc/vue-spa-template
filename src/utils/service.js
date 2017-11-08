import api from './api'
import request from './request'

export function testAjax (params) {
  return request.apiGet(api.test, params)
}

