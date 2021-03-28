import useSWR from "swr";
import axios from "axios";

// Story Item Component rename it
import StoryListComponent from "@/components/StoryList.component";
import Layout from "hoc/Layout.component";
import Pagination from "@/components/Pagination.component";
import fetcher from "@/lib/fetcher";
import { HN_API } from "@/lib/hnApi";

const HomePage = ({ stories, page }) => {
  // cached data on client side
  // const { data } = useSWR(`${process.env.HN_API}/news?page=${page}`, fetcher, {
  //   initialData: stories,
  // });

  // console.log(`data`, stories);

  if (stories.length === 0) return <div>There is no story</div>;

  return (
    <Layout
      title="Hacker News Next.js"
      description="Hacker News clone made with Next.js"
    >
      <StoryListComponent stories={stories} description={`Page ${page}`} />
      <Pagination page={page} />
    </Layout>
  );
};

// export const getServerSideProps = async ({ _, req, query }) => {
//   const page = Number(query.page) || 1;
//   // so this `fetcher` function will be executed on the server-side.
//   const data = await fetcher(`${process.env.HN_API}/news?page=${page}`);

//   if (!data) {
//     return {
//       notFound: true,
//     };
//   }

//   return {
//     props: {
//       stories: data,
//       page,
//     },
//   };
// };

export const getServerSideProps = async ({ _, req, query }) => {
  let res, page;
  try {
    page = Number(query.page) || 1;
    res = await axios.get(`${process.env.HN_API}/news?page=${page}`);
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

export default HomePage;
