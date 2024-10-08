import React from 'react';
import AddToCard from '../AddToCard';
import styles from './ProductCard.module.css';

const CardComponent = () => {
  return (
    <div className={styles.card}>
        <AddToCard />
    </div>
  )
}

export default CardComponent
