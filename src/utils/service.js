import api from './api'
import requres from './requres'

class Service {
  testAjax (params) {
    return requres.apiGet(api.test, params)
  }
}

export default new Service;
