import React from "react";
import SearchSection from "../../component/faq/SearchSection";
import CategorySection from "../../component/faq/CategorySection";
import QuestionSection from "../../component/faq/QuestionSection";
import Footer from "../../common/global/Footer";

const Faq = () => {
  return (
    <>
      <SearchSection />
      <CategorySection />
      <QuestionSection />
      <Footer />
    </>
  );
};

export default Faq;
