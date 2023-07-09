import Categories from "@/components/Categories";
import LoadMore from "@/components/LoadMore";
import Posts from "@/components/Posts";
import React from "react";

const Home = () => {
  return (
    <section className="flex-start flex-col paddings mb-16">
      <Categories />
      <LoadMore />
      <Posts />
    </section>
  );
};

export default Home;
