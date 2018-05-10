import React, { Component } from 'react'
import Helmet from 'react-helmet'

const Template = ({ children }) => (
  <div>
    <Helmet title="Rae Farine | Front-end Engineer" />
    {children()}
  </div>
)

Template.propTypes = {
  children: React.PropTypes.func,
  location: React.PropTypes.object,
}

export default Template
