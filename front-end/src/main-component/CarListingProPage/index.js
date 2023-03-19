import React, { Fragment } from "react";
import { useTranslation } from "react-i18next";

import Header from "../../components/header";
import PageTitle from "../../components/PageTitle";
import CarListPro from "../../components/CarListPro";
import Footer from "../../components/Footer";

const CarListingProPage = () => {
  const { t } = useTranslation();

  return (
    <Fragment>
      <Header />
      <PageTitle
        pageTitle={t("header-navigation.car_listing")}
        pagesub={t("header-navigation.car_listing")}
      />
      <CarListPro />
      <Footer />
    </Fragment>
  );
};
export default CarListingProPage;
