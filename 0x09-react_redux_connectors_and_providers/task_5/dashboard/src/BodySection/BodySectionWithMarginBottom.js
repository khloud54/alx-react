import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';
import PropTypes from 'prop-types';
import BodySection from './BodySection';

export class BodySectionWithMarginBottom extends Component {
  render () {
    return (
      <div className={css(styles.bodySectionWithMargin)}>
        <BodySection {...this.props} />
      </div>
    );
  }
}

const styles = StyleSheet.create({
  bodySectionWithMargin: {
    marginBottom: '40px'
  }
});

BodySectionWithMarginBottom.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node
};

export default BodySectionWithMarginBottom;
