import Checkpoints from '../constants/Checkpoints'
export default {
  tabIndex: 0,
  email: '',
  password: '',
  isRegistered: false,
  location: '',
  currentState: { id: '', name: '', checked: false },
  loading: false, // user list loading
  isRefreshing: false, // for pull to refresh
  nearList: [Checkpoints.home, Checkpoints.gliwice],
  allList: [
    Checkpoints.home,
    Checkpoints.gliwice,
    Checkpoints.katowice,
    Checkpoints.wroclaw
  ],
  isLoading: false
}
