import React, { PropTypes } from 'react'
import { StyleSheet, css } from 'aphrodite'

import { colors } from 'settings.style'

import Avatar from 'atm.Avatar'

const Profile = ({ name, avatar, description, about, flagSrc, imageFirst = true }) => {
  const imageNode = (
    <div className={css(styles.avatarWrapper)}>
      <img
        src={avatar}
        className={css(styles.avatar)}
      />
    </div>
  )

  const textNode = (
    <div className={css(styles.textNode)}>
      <div className={css(styles.nameAndFlag)}>
        <div className={css(styles.name)}>{name}</div>
        <div>
          <img
            src={flagSrc}
            className={css(styles.flag)}
            width={flagWidth}
          />
        </div>
      </div>
      <div className={css(styles.description)}>{description}</div>
      <div className={css(styles.about)}>&quot;{about}&quot;</div>
    </div>
  )

  return (
    <div className={css(styles.Profile)}>
      {imageFirst ? imageNode : undefined}
      {textNode}
      {imageFirst ? undefined : imageNode}
    </div>
  )
}

Profile.propTypes = {
  name: PropTypes.string,
  avatar: PropTypes.string,
  description: PropTypes.string,
  about: PropTypes.string,
  flagSrc: PropTypes.string,

  imageFirst: PropTypes.bool
}

export default Profile

const flagWidth = 36

const compactWidth = 600
const compactLayout = `@media (max-width: ${compactWidth}px)`

const styles = StyleSheet.create({
  Profile: {
    backgroundColor: 'white',

    display: 'flex'
  },

  inlineAvatarWrapper: {
    display: 'none',

    [compactLayout]: {
      display: 'block',
      marginRight: '10px'
    }
  },

  avatar: {
    height: '200px',

    [compactLayout]: {
      display: 'none'
    }
  },

  textNode: {
    padding: '24px',

    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center'
  },

  nameAndFlag: {
    display: 'flex',
    alignItems: 'center',

    [compactLayout]: {
      fontSize: '14px'
    }
  },

  name: {
    fontFamily: 'Bebas Neue',
    letterSpacing: '1px',
    fontSize: '1.5em',
    fontWeight: 'bold'
  },

  flag: {
    margin: '0 16px',
    width: `${flagWidth}px`
  },

  description: {
    color: colors.cadetBlue,
    fontStyle: 'italic'
  },

  about: {
    marginTop: '10px',
    fontSize: '0.9em'
  }
})