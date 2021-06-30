import React from 'react'
import { connect } from 'react-redux'
import Profit from '../components/Profit'

class ProfitContainer extends React.Component {
  render() {
    const { user } = this.props
    return <Profit user={user} />
  }
}

const mapStateToProps = state => ({
  user: state.session.user,
})

const mapDispatchToProps = dispatch => ({})

export default connect(mapStateToProps, mapDispatchToProps)(ProfitContainer)
