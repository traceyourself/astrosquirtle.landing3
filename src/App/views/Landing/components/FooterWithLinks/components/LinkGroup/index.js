import React, { PropTypes } from 'react'
import { StyleSheet, css } from 'aphrodite'

import { addRefToLink } from 'redux.store'

import { colors } from 'settings.style'

const onLinkClick = (href) => () => {
  if (window) {
    window.location.href = addRefToLink(href)
  }
}

const LinkGroup = ({ title, links }) => (
  <div>
    <div className={css(styles.title)}>{title}</div>
    <ul className={css(styles.ul)}>
      {
        links
        .map(({ copy, href }, i) => (
          <li className={css(styles.li)} key={i}>
            <a className={css(styles.link)} onClick={onLinkClick(href)}>{copy}</a>
          </li>
        ))
      }
    </ul>
  </div>
)

LinkGroup.propTypes = {
  title: PropTypes.string,
  links: PropTypes.array
}

export default LinkGroup

const styles = StyleSheet.create({
  title: {
    fontFamily: 'Bebas Neue',
    fontSize: '1.2em',
    letterSpacing: '2px',
    fontWeight: 'bold',
    color: colors.radicalRed
  },

  ul: {
    marginTop: '16px',
    listStyleType: 'none'
  },

  li: {
    margin: '5px 0',
    padding: '0'
  },

  link: {
    textDecoration: 'none',
    color: colors.ebonyClay,
    cursor: 'pointer',

    ':hover': {
      textDecoration: 'underline'
    }
  }
})
