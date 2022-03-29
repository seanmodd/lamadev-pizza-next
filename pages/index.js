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
      {/* <PizzaList pizzaList={pizzaList} /> */}
      {!close && <Add setClose={setClose} />}
    </div>
  );
}

export const getServerSideProps = async (ctx) => {
  const myCookie = ctx.req?.cookies || '';
  let admin = false;
  // if (myCookie.token === process.env.TOKEN) {
  if (myCookie.__utma === process.env.TOKEN) {
    admin = true;
  }

  console.log('This is process.env.TOKEN: ', process.env.TOKEN);
  console.log('This is myCookie.token: ', myCookie.token);
  console.log('This is myCookie.__utma: ', myCookie.__utma);
  console.log('This is ctx.req?.cookies: ', ctx.req?.cookies);
  // const res = await axios.get('http://localhost:3000/api/products');
  // console.log('This is res: ', res);
  return {
    props: {
      // pizzaList: res.data,
      // admin,
    },
  };
};
