import React from 'react'
//import PropTypes from 'prop-types'
import Add from "./Add";

const Spend = ({ user }) => {
   
  return (
    <React.Fragment>
      <div class="content">
              <h2>Траты</h2>
              <p>Привет, {user.name}</p>
              <Add/>
      </div>
      
    </React.Fragment>
        )

}

// Spend.proptypes = {
//   user: PropTypes.shape({
//     name: PropTypes.string.isRequired,
//   }).isRequired,
// }

export default Spend