import React, { Component } from 'react'
import { Image, Container } from 'semantic-ui-react';
import styles from './footer.module.css';
import logo from '@/assets/polygon-logo.svg?url'

export default class Footer extends Component {
  render() {
    return (
      <Container>
        <footer className={styles.footer}>
          <div className={styles.created}>
            Created by
            <div className={styles.img}>
              <Image size='small' src={logo} alt='' />
            </div>
          </div>
          <div className={styles.copyright}>Copyright © 2021 Polygon technology</div>
        </footer>
      </Container>
    )
  }
}
