import React from 'react'
import { connect } from 'react-redux'
import Main from '../components/Main'

class MainContainer extends React.Component {
  render() {
    const { user } = this.props
    return <Main user={user} />
  }
}

const mapStateToProps = state => ({
  user: state.session.user,
})

const mapDispatchToProps = dispatch => ({})

export default connect(mapStateToProps, mapDispatchToProps)(MainContainer)
