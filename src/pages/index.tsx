import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import { useState, useEffect } from 'react'

import { Header } from '../components/Header'
import { SearchBar } from '../components/SearchBar'
import { ContrastContainer } from '../components/ContrastContainer'
import { ItemContainer } from '../components/ItemContainer'

import { Container, Row } from "react-bootstrap";

import Data from '../db.json'

import { api } from '../services/api'

export default function Home() {

  const [cartCount, setCartCount] = useState(0);

  // useEffect(() => {

  //   async function loadCategoryItems() {

  //     await api.get('/product/by-category', {
  //       params: {
  //         categoryId: categorySelected?.id
  //       }
  //     })
  //       .then((res) => {
  //         setProductList(res.data);
  //         setProductSelected(res.data[0]);

  //       })
  //       .catch(err => {
  //         console.log(err);
  //       })

  //   }

  //   loadCategoryItems()

  // }, []);
  return (
    <>
      <Header cartCount={cartCount} />
      <SearchBar data={Data} />

      <ContrastContainer />

      <Container style={{ width: '90%' }}>
        <Row style={{ justifyContent: 'space-between' }}>
          <ItemContainer />
          <ItemContainer />

          <ItemContainer />
          <ItemContainer />

          <ItemContainer />
          <ItemContainer />

          <ItemContainer />
          <ItemContainer />

        </Row>
      </Container>

      {/* <div className="container"
        style={{ backgroundColor: '#df1414' }}>
        <ItemContainer />
        <ItemContainer />

      </div> */}

      <button onClick={() => setCartCount(cartCount + 1)}>add item</button>
    </>
  )
}
