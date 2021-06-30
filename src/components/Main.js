import React from 'react'
//import PropTypes from 'prop-types'

const Main = ({ user }) => {
   
  return (
    <React.Fragment>
      <div class="content">
              <h2>Баланс</h2>
              <p>Привет, {user.name}</p>
      </div>
      
    </React.Fragment>
        )

}

// Main.proptypes = {
//   user: PropTypes.shape({
//     name: PropTypes.string.isRequired,
//   }).isRequired,
// }

export default Main