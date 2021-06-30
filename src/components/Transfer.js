import React from 'react'
//import PropTypes from 'prop-types'
import Add from "./Add";

const Transfer = ({ user }) => {
   
  return (
    <React.Fragment>
      <div class="content">
              <h2>Переводы</h2>
              <p>Привет, {user.name}</p>
              <Add/>
      </div>
      
    </React.Fragment>
        )

}

// Transfer.proptypes = {
//   user: PropTypes.shape({
//     name: PropTypes.string.isRequired,
//   }).isRequired,
// }

export default Transfer