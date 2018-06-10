import React from 'react'

const NotFound = ({ location }) => (
  <div>
    <h3>
      Page not found for <code>{location.pathname}</code>
    </h3>
  </div>
)

export default NotFound