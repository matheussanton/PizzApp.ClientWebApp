import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/Home.module.css'

import { useState, useEffect } from 'react'
import Link from 'next/link'

import { Header } from '../components/Header'
import { SearchBar } from '../components/SearchBar'
import { ContrastContainer } from '../components/ContrastContainer'
import { ItemContainer } from '../components/ItemContainer'

import { Container, Row } from "react-bootstrap";

import { api } from '../services/api'

import Fab from '@mui/material/Fab';

import { MdMessage } from 'react-icons/md'

export type ItemProps = {
  id: string;
  name: string;
  price: string;
  description: string;
  banner: string;
  categoryId: string;
}

export default function Home() {

  const [cartCount, setCartCount] = useState(0);
  const [allProductsList, setAllProductsList] = useState<ItemProps[] | []>([]);

  function addItemToCart() {
    setCartCount(cartCount + 1)
  }

  useEffect(() => {

    async function loadAllProducts() {

      await api.get('/product')
        .then((res) => {
          setAllProductsList(res.data);
          console.log(res.data);

        })
        .catch(err => {
          console.log(err);
        })

    }

    loadAllProducts()

  }, []);



  return (
    <>
      <Header cartCount={cartCount} />
      <SearchBar data={allProductsList} />

      <ContrastContainer />

      <Container style={{ width: '90%' }}>
        <Row style={{ justifyContent: 'space-between' }}>
          {allProductsList.map((item) => {
            return (
              <ItemContainer
                key={item.id}
                addItemToCart={addItemToCart} itemData={item} />
            );
          })}
        </Row>
      </Container>

      <Link href="/bot" className={styles.FloatBtn}>
        <Fab aria-label="chat" color="primary">
          <MdMessage size={24} color="#fff" />
        </Fab>
      </Link>

      <div className={styles.BlankFooter}></div>

    </>
  )
}
