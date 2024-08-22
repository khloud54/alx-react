import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';
import PropTypes from 'prop-types';

export class BodySection extends Component {
  render () {
    const { title, children } = this.props;
    return (
      <div className={`${css(styles.BodySection)} bodySection`}>
        <h2>{title}</h2>
        {children}
      </div>
    );
  }
}

const styles = StyleSheet.create({
  BodySection: {
    paddingLeft: '40px',
    paddingRight: '40px'
  }
});

BodySection.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node
};

export default BodySection;
