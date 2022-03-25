import http from '@/util/config'

const requestApi = {
  async getLdrkdaData () {
    let data = []
    http.post('/ldrkda/getData').then((res) => {
      data = res
    })
    if (data !== []) {
      return data
    }
  }
}

export default requestApi
