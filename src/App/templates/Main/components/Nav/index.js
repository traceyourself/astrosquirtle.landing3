import React, { PropTypes } from 'react'

import { addRefToLink } from 'redux.store'

import { StyleSheet, css } from 'aphrodite'

import { colors } from 'settings.style'
import { mediaAt } from 'utils.styling'

import Logo from 'atm.Logo'
import Btn from 'atm.Btn'
import { Link } from 'react-router'

import { links } from 'config.definitions'

const linkContent = (isButton, content) =>
  isButton
  ? <Btn copy={content} />
  : content

const mapLinkDataToLink = ({ copy, link, href, isButton, onClick }, i) =>
  link
  ? (
    <Link key={i} className={css(styles.link)} to={link} onClick={onClick}>{
      linkContent(isButton, copy)
    }</Link>
  )
  : (
    <a {...{
      key: i,
      className: css(styles.link),
      onClick: () => {
        if (window) {
          onClick && onClick()
          window.location.href = addRefToLink(href)
        }
      }
    }}>
      {linkContent(isButton, copy)}
    </a>
  )

const Nav = ({ refCode }) => {
  const refQueryParam = refCode
    ? `?ref=${refCode}`
    : ''

  const linksData = [
    {
      copy: 'FAQ',
      link: '/faq'
    },
    {
      copy: 'Blog',
      href: links.blog
    },
    {
      copy: 'Login',
      href: `${links.login}${refQueryParam}`
    },
    {
      copy: 'Apply to help',
      href: `${links.registration}${refQueryParam}`
    },
    {
      copy: 'Sign up',
      href: `${links.registration}${refQueryParam}`,
      isButton: true,
      onClick: ctaOnClick
    }
  ]

  return (
    <div className={css(styles.Nav)}>
      <Link to='/'>
        <div className={css(styles['logo-big'])}>
          <Logo />
        </div>
        <img src='/assets/images/ac_cloud.png' className={css(styles['logo-small'])} />
      </Link>
      <ul className={css(styles.links)}>
        {linksData.map(mapLinkDataToLink)}
      </ul>
    </div>
  )
}

Nav.propTypes = {
  refCode: PropTypes.string
}

export default Nav

function ctaOnClick () {
  if (window.ga) {
    window.ga('send', 'event', {
      eventCategory: 'Landing',
      eventAction: 'Nav Get Started',
      eventLabel: 'Clicked'
    })
  }

  if (window.mixpanel) {
    window.mixpanel.track(
      'Landed',
      {source: 'nav'}
    )
  }
}

const styles = StyleSheet.create({
  Nav: {
    width: '100%',
    height: '85px',
    padding: '40px',
    fontFamily: 'Bebas Neue',
    fontSize: '1.1em',
    letterSpacing: '2px',

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',

    [mediaAt(900)]: {
      padding: '10px'
    }
  },

  'logo-big': {
    [mediaAt(700)]: {
      display: 'none'
    }
  },

  'logo-small': {
    display: 'none',
    width: '30px',
    [mediaAt(700)]: {
      display: 'block'
    }
  },

  links: {
    listStyleType: 'none',
    margin: 0,
    padding: 0,
    cursor: 'pointer',

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',

    [mediaAt(550)]: {
      fontSize: '13px'
    },

    [mediaAt(450)]: {
      fontSize: '11px'
    }
  },

  link: {
    margin: '0 20px',
    padding: 0,
    textTransform: 'uppercase',
    textDecoration: 'none',
    color: colors.aluminium,

    [mediaAt(800)]: {
      margin: '0 10px'
    },

    [mediaAt(500)]: {
      margin: '0 5px'
    }
  }
})
