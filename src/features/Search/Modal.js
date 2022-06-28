import React from 'react'
import Card from './SearchCard'
import ReactDOM from 'react-dom'
import {Divider,Button} from '@chakra-ui/react';
import styles from './Modal.module.css'

export default function Modal({setOnClose,setisOpen},children) {

    return (
      (
        <>
          <div className={styles.darkBG} onClick={() => setisOpen(false)} />
          <div className={styles.centered}>
            <div className={styles.modal}>
              <div className={styles.modalHeader}>
                <h5 className={styles.heading}>dasdaasdas</h5>
              </div>
              <Divider size="small" />
              {/* <button className={styles.closeBtn} onClick={() => setIsOpen(false)}>
                <IconClose style={{ marginBottom: "-3px" }} />
              </button> */}
              <div className={styles.modalContent}>dsadasasdasdasdasdasdasdas</div>
              <div className={styles.modalActions}>
                <div className={styles.actionsContainer}>
                  <Button
                    className={styles.closeBtn}
                    onClick={() => setisOpen(false)}
                  >
                    Close
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </>
      )
    )
}
