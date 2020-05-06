import axios from 'axios'
class CheckInService {
  constructor (email, password) {
    this.email = email
    this.password = password
    this.request = axios.create({
      baseURL: 'https://alm.checkin.atmydesk.eu/json/api',
      timeout: 10000,
      headers: { 'Content-Type': 'application/json' }
    })
  }

  async checkIn (id) {
    const resp = await this.login()
    console.dir(resp)
    this.request.post(`/localUser/checkin/${id}`).catch(error => {
      console.error('request fail ', error)
    })
  }

  async checkOut (id) {
    this.request.post(`/localUser/checkout/${id}`).catch(error => {
      console.error('request fail ', error)
    })
  }

  async login () {
    return axios({
      method: 'POST',
      url: 'https://alm.checkin.atmydesk.eu/json/api/auth/login',
      data: {
        email: this.email,
        password: this.password
      }
    })
  }
}
export default CheckInService
