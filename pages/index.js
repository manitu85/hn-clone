import React, { useState, useEffect } from "react";
import Error from "next/error";
import axios from "axios";

import StoryListComponent from "@/components/StoryList.component";
import Layout from "hoc/Layout.component";
import Pagination from "@/components/Pagination.component";
import { HN_API } from "@/lib/hnApi";

const Index = ({ stories, page }) => {
  console.log(`data`, stories);

  if (stories.length === 0) return <Error statusCode={503} />;

  return (
    <Layout
      title="Hacker News Next.js"
      description="Hacker News clone made with Next.js"
    >
      <StoryListComponent stories={stories} description={`Page ${page + 1}`} />
      <Pagination page={page} />
    </Layout>
  );
};

export const getServerSideProps = async ({ _, req, query }) => {
  let res, page;
  console.log(`query`, query);

  try {
    page = Number(query.page) || 0;
    res = await axios.get(`${HN_API}/news?${page}`);
    console.log(`respnse`, res.data);
  } catch (err) {
    console.error(err);
    res = null;
  }

  return {
    props: {
      stories: res.data,
      page,
    },
  };
};

export default Index;

// const [data, setData] = useState(null);
// console.log(`data`, data);
// // if (stories.length === 0) return <Error statusCode={503} />;
// useEffect(() => {
//   const fetcher = async () => {
//     let page = Number(page) || 0;
//     const res = await fetch(`https://api.hackerwebapp.com/news?${page}`, {
//       method: "GET",
//       headers: { "content-type": "application/json" },
//     });
//     const data = await res.json();
//     setData(data);
//   };
//   fetcher();
// }, []);
