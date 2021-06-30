import React from 'react'
import { connect } from 'react-redux'
import Spend from '../components/Spend'

class SpendContainer extends React.Component {
  render() {
    const { user } = this.props
    return <Spend user={user} />
  }
}

const mapStateToProps = state => ({
  user: state.session.user,
})

const mapDispatchToProps = dispatch => ({})

export default connect(mapStateToProps, mapDispatchToProps)(SpendContainer)
