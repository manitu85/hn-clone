import axios from "axios";
import Link from "next/link";
import Error from "next/error";
import Layout from "hoc/Layout.component";
import CommentList from "@/components/CommentList.component";
import { Main, StoryTitle, StoryDetails } from "@/components/Story.styles";
import { HN_API } from "@/lib/hnApi";

const Story = ({ story }) => {
  if (!story) return <Error statusCode={503} />;

  return (
    <Layout title={story.title}>
      <Main>
        <StoryTitle>
          <a href={story.url}>
            {story.title}
            <span>•</span>({story.domain})
          </a>
          <Link href="/">
            <a style={{ float: "right" }}>
              <span>&larr; back</span>
            </a>
          </Link>{" "}
        </StoryTitle>
        <StoryDetails>
          <strong>{story.points} points</strong>
          <strong>{story.comments_count} comments</strong>
          <strong>{story.time_ago}</strong>
        </StoryDetails>
        {story.comments.length > 0 ? (
          <CommentList comments={story.comments} />
        ) : (
          <div>No comments for this story</div>
        )}
      </Main>
    </Layout>
  );
};

export const getServerSideProps = async ({ _, req, query }) => {
  let res;

  try {
    const storyId = query.id;
    res = await axios.get(`https://api.hackerwebapp.com/item/${storyId}`);
  } catch (err) {
    console.error(err);
    res = null;
  }

  return {
    props: {
      story: res.data,
    },
  };
};

export default Story;
