import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/Home.module.css'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import ChatBot from 'react-simple-chatbot';
import { ThemeProvider } from 'styled-components';

import { Header } from '../components/Header'
import { SearchBar } from '../components/SearchBar'
import { ContrastContainer } from '../components/ContrastContainer'
import { ItemContainer } from '../components/ItemContainer'

import { Container, Row } from "react-bootstrap";

import { api } from '../services/api'

import { toast } from 'react-toastify';

import { MdMessage } from 'react-icons/md'

export type ItemProps = {
  id: string;
  name: string;
  price: string;
  description: string;
  banner: string;
  categoryId: string;
}

export type CartItemsProps = {
  item: ItemProps;
  amount: number;
}

const steps = [
  {
    id: '1',
    message: 'Bem-vindo(a) ao PizzApp, qual seu nome?',
    trigger: 'name',
  },
  {
    id: 'name',
    user: true,
    trigger: '3',
  },
  {
    id: '3',
    message: 'Olá {previousValue}! O que gostaria de pedir?',
    trigger: 'pedido'
  },
  {
    id: 'pedido',
    user: true,
    trigger: 'quantidade',
  },
  {
    id: 'cocacola',
    options: [
      { value: '600ml', label: '600ml', trigger: 'itemAdded' },
      { value: '1l', label: '1L', trigger: 'itemAdded' },
    ],
  },
  {
    id: 'quantidade',
    message: 'Em que quantidade?',
    trigger: 'cocacola',
  },
  {
    id: 'itemAdded',
    message: 'Item adicionado ao seu pedido ✔️',
    trigger: 'nextItem'
  },
  {
    id: 'nextItem',
    options: [
      { value: 'adicionar', label: 'Pedir mais', trigger: '3' },
      { value: 'finalizar', label: 'Finalizar pedido', trigger: 'finalizar' },
    ],
  },
  {
    id: 'finalizar',
    message: `Obrigado, seu pedido foi encaminhado à cozinha, agora é só aguardar.
              Bom apetite :)`,
    end: true
  }
];

const theme = {
  headerBgColor: '#c3c750',
  botBubbleColor: '#c3c750',
  userBubbleColor: '#c3c750',

  background: '#f5f8fb',
  fontFamily: 'monospace',
  headerFontColor: '#fff',
  headerFontSize: '15px',
  botFontColor: '#fff',
  userFontColor: '#fff',
}

export default function Home() {

  const [allProductsList, setAllProductsList] = useState<ItemProps[] | []>([]);

  const [cartItems, setCartItems] = useState<CartItemsProps[] | []>(undefined);

  function addItemToCart(item: ItemProps) {

    let amount = CountItemOccurence(item);

    var newCartList;
    if (amount > 1)
      DeleteItemFromCartList(item)

    var data = {
      item: {
        id: item.id,
        name: item.name,
        price: item.price,
        description: item.description,
        banner: item.banner,
        categoryId: item.categoryId
      },
      amount: amount
    }

    setCartItems(allItems => [...allItems, data]);

    toast.success("Item adicionado ao carrinho.");
  }

  function DeleteItemFromCartList(item: ItemProps) {

    let newItemList = cartItems.filter(data => {
      return (data.item.id != item.id)
    })

    setCartItems((newItemList));
  }

  function CountItemOccurence(item: ItemProps) {
    let counter = 1;
    for (const index in cartItems) {
      if (cartItems[index].item.id === item.id) {
        counter++;
      }
    }

    return counter;
  }

  useEffect(() => {
    if (cartItems !== undefined) {
      localStorage.setItem("@PizzAppCartItems", JSON.stringify(cartItems));
    }
  }, [cartItems])

  useEffect(() => {

    async function loadAllProducts() {

      await api.get('/product')
        .then((res) => {
          setAllProductsList(res.data);
        })
        .catch(err => {
          console.log(err);
        })

      let cartItemsList = localStorage.getItem("@PizzAppCartItems");
      setCartItems(JSON.parse(cartItemsList) || []);
    }

    loadAllProducts()

  }, []);



  return (
    <>
      <Header cartCount={cartItems === undefined ? 0 : cartItems.length} showCartIcon={true} />
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

      <ThemeProvider theme={theme}>
        <ChatBot steps={steps}
          floating={true}
          floatingIcon={<MdMessage size={24} color="#fff" />}
          floatingStyle={{ backgroundColor: '#c3c750' }}
          headerTitle="PizzApp Bot"
          userDelay={100}
          enableMobileAutoFocus={true}
          placeholder="Digite uma mensagem.."
          botAvatar="/pizzapplogobot.svg"
        />
      </ThemeProvider>

      <div className={styles.BlankFooter}></div>

    </>
  )
}
