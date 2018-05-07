import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactContactForm from 'react-mail-form';
import { Text } from 'semantic-ui-react'

export default class Contact extends Component {


  render() {
    return (
      <form method="POST">
         <label htmlFor="name">Name</label>
         <input type="text" name="name" />

         <label htmlFor="email">Email</label>
         <input type="email" name="email" />

         <label htmlFor="message">Message</label>
         <textarea name="message" rows="3"></textarea>

         <input type="submit" />
       </form>
    );
  }

}
