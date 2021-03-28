import React, { useState, useEffect } from "react";
import useSWR from "swr";
// import Error from "next/error";

// Story Item Component rename it
import StoryListComponent from "@/components/StoryList.component";
import Layout from "hoc/Layout.component";
import Pagination from "@/components/Pagination.component";
import fetcher from "@/lib/fetcher";
import { HN_API } from "@/lib/hnApi";

const Index = ({ stories, page }) => {
  // cached data
  const { data } = useSWR(`${process.env.HN_API}/news?page=${page}`, fetcher, {
    initialData: stories,
  });

  console.log(`data`, stories);

  // if (stories.length === 0) return <Error statusCode={503} />;

  return (
    <Layout
      title="Hacker News Next.js"
      description="Hacker News clone made with Next.js"
    >
      {stories.length === 0 ? (
        <div>There is no story</div>
      ) : (
        <StoryListComponent stories={data} description={`Page ${page}`} />
      )}

      <Pagination page={page} />
    </Layout>
  );
};

export const getServerSideProps = async ({ _, req, query }) => {
  const page = Number(query.page) || 1;
  // so this `fetcher` function will be executed on the server-side.
  const data = await fetcher(`${HN_API}/news?page=${page}`);

  return {
    props: {
      stories: data || [],
      page,
    },
  };
};

export default Index;
