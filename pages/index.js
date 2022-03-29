import axios from 'axios';
import Head from 'next/head';
import Image from 'next/image';
import { useState } from 'react';
import Add from '../components/Add';
import AddButton from '../components/AddButton';
import Featured from '../components/Featured';
import PizzaList from '../components/PizzaList';
import styles from '../styles/Home.module.css';

export default function Home({ pizzaList, admin }) {
  const [close, setClose] = useState(true);
  return (
    <div className={styles.container}>
      <Head>
        <title>Pizza Restaurant in Newyork</title>
        <meta name="description" content="Best pizza shop in town" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Featured />
      <AddButton setClose={setClose} />
      <PizzaList pizzaList={pizzaList} />
      {!close && <Add setClose={setClose} />}
    </div>
  );
}

export const getServerSideProps = async (ctx) => {
  // const myCookie = ctx.req?.cookies || '';
  // let admin = false;

  // if (myCookie.token === process.env.TOKEN) {
  //   admin = true;
  // }

  // const res = await axios.get('http://localhost:3000/api/products');
  const data = [];
  let error = '';
  try {
    const res = await fetch('http://localhost:3000/api/products', {
      method: 'GET',
      headers: {
        // update with your user-agent
        'User-Agent':
          'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4758.109 Safari/537.36',
        Accept: 'application/json; charset=UTF-8',
      },
    });
    console.log('This is res:', await res.json());
    const data = await res.json();
  } catch (err) {
    console.log('This is err:', err);
    error = err;
  }

  return {
    props: {
      pizzaList: data,
      // admin,
    },
  };
};
