import useSWR from "swr";

// Story Item Component rename it
import StoryListComponent from "@/components/StoryList.component";
import Layout from "hoc/Layout.component";
import Pagination from "@/components/Pagination.component";
import fetcher from "@/lib/fetcher";
import { HN_API } from "@/lib/hnApi";

const HomePage = ({ stories, page }) => {
  // cached data on client side
  const { data } = useSWR(`${HN_API}/news?page=${page}`, fetcher, {
    initialData: stories,
  });

  // console.log(`data`, stories);

  if (stories.length === 0) return <div>There is no story</div>;

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
  const data = await fetcher(`${HN_API}/news?page=${page}`);

  return {
    props: {
      stories: data || [],
      page,
    },
  };
};

export default HomePage;
