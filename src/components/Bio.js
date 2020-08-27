import React from 'react'
import styles from './Bio.module.css'
import { getGravatarURL } from '../utils/getGravatarURL'
import { Link } from 'react-navi'

function Bio(props) {
  let photoURL = getGravatarURL({
    email: "test1@example.com",
    size: 56,
  })

  return (
    <div className={`
      ${styles.Bio}
      ${props.className || ''}
    `}>
      <img src={photoURL} alt="Me" />
      <p className={`
          ${styles.Name}
        `}>
        <Link href="/about">RikuKinoshita</Link>
      </p>
    </div>
  )
}

export default Bio
