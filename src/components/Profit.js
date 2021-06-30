import React from 'react'
//import PropTypes from 'prop-types'
import Add from "./Add";

const Profit = ({ user }) => {
   
  return (
    <React.Fragment>
      <div class="content">
              <h2>Доходы</h2>
              <p>Привет, {user.name}</p>
              <Add/>
      </div>
      
    </React.Fragment>
        )

}

// Profit.proptypes = {
//   user: PropTypes.shape({
//     name: PropTypes.string.isRequired,
//   }).isRequired,
// }

export default Profit