import React, { useState, useEffect } from "react";
import useSWR from "swr";
import Error from "next/error";

import StoryListComponent from "@/components/StoryList.component";
import Layout from "hoc/Layout.component";
import Pagination from "@/components/Pagination.component";
import fetcher from "@/lib/fetcher";

const Index = ({ stories, page }) => {
  // cached data
  const { data } = useSWR(`${process.env.HN_API}/news?page=${page}`, fetcher, {
    initialData: stories,
  });

  console.log(`data`, stories);

  if (stories.length === 0) return <Error statusCode={503} />;

  return (
    <Layout
      title="Hacker News Next.js"
      description="Hacker News clone made with Next.js"
    >
      <StoryListComponent stories={data} description={`Page ${page}`} />
      <Pagination page={page} />
    </Layout>
  );
};

export const getServerSideProps = async ({ _, req, query }) => {
  const page = Number(query.page) || 1;
  // so this `fetcher` function will be executed on the server-side.
  const data = await fetcher(`${process.env.HN_API}/news?page=${page}`);

  return {
    props: {
      stories: data,
      page,
    },
  };
};

export default Index;
