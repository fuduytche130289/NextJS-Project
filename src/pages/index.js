import React from "react";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Index = () => {
  return (
    <>
      <div className="wrapper-home-page">
        <h3>Home page</h3>
      </div>
    </>
  );
};

Index.getInitialProps = async (ctx) => {
  // ctx.store.dispatch(getHomeBanner(5));
  // ctx.store.dispatch(getHomePropose(3));
  // ctx.store.dispatch(getHomeProduct(8));
  // ctx.store.dispatch(getHomeArticle(3));
};

export default Index;
