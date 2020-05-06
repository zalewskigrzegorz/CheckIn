import Checkpoints from '../constants/Checkpoints'
export default {
  tabIndex: 0,
  email: '',
  password: '',
  isRegistered: false,
  location: '',
  currentState: { id: '', name: '', checked: false },
  nearList: [
    Checkpoints.home
  ],
  allList: [
    Checkpoints.home,
    Checkpoints.gliwice,
    Checkpoints.katowice,
    Checkpoints.wroclaw
  ],
  isLoading: false
}
