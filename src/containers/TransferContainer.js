import React from 'react'
import { connect } from 'react-redux'
import Transfer from '../components/Transfer'

class TransferContainer extends React.Component {
  render() {
    const { user } = this.props
    return <Transfer user={user} />
  }
}

const mapStateToProps = state => ({
  user: state.session.user,
})

const mapDispatchToProps = dispatch => ({})

export default connect(mapStateToProps, mapDispatchToProps)(TransferContainer)
