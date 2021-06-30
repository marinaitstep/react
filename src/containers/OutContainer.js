import { connect } from 'react-redux'
import { logOut } from '../actions/SessionActions'
import Out from '../components/Out'

const mapStateToProps = state => ({
    user: state.session.user,
})

const mapDispatchToProps = dispatch => ({
  logOut: () => dispatch(logOut()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Out)