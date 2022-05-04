import React, { useEffect, useState } from "react";
import Head from "next/head";
import { useDispatch } from "react-redux";
import { getProduct } from "../actions/product"
import {getListCategories} from "../actions/categories";

import { END } from "redux-saga";

import { wrapper } from "../store";

const MyApp = ({ Component, pageProps }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProduct());
    dispatch(getListCategories());
    }, [])

  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="user-scalable=no, initial-scale=1.0, maximum-scale=1.0, width=device-width"
        />
      </Head>
      <div>
        <h2>demo app</h2>
      </div>
    </>
  );
};

MyApp.getInitialProps = async ({ Component, ctx }) => {
  const pageProps = {
    ...(Component.getInitialProps ? await Component.getInitialProps(ctx) : {}),
  };
  if (ctx.req) {
    ctx.store.dispatch(END);
    await ctx.store.sagaTask.toPromise();
  }
  return { pageProps };
};

export default wrapper.withRedux(MyApp);
