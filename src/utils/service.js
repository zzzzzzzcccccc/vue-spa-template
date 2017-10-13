import api from './api'
import request from './request'

class Service {
  testAjax (params) {
    return request.apiGet(api.test, params)
  }
}

export default new Service;
