import React, { useEffect } from 'react'
import Link from 'next/link'
import Error from 'next/error'
import fetch from 'isomorphic-fetch'
import StoryListComponent from '@/components/StoryList.component'
import Layout from '@/components/Layout.component'
import Pagination from '@/components/Pagination.component'

class Index extends React.Component {
  static async getInitialProps({ req, res, query }) {
    let stories;
    let page;

    try {
      page = Number(query.page) || 1;
      const response = await fetch(
        `https://node-hnapi.herokuapp.com/news?page=${page}`
      );
      stories = await response.json();
    } catch (err) {
      console.log(err);
      stories = [];
    }

    return { page, stories };
  }

  componentDidMount() {
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker
        .register("/service-worker.js")
        .then(registration => {
          console.log("service worker registration successful", registration);
        })
        .catch(err => {
          console.warn("service worker registration failed", err.message);
        });
    }
  }

  render() {
    const { stories, page } = this.props;

    if (stories.length === 0) {
      return <Error statusCode={503} />;
    }

    return (
      <Layout
        title="Hacker Next"
        description="A Hacker News clone made with Next.js"
      >
        <StoryListComponent stories={stories} />

        <footer>
          <Link href={`/?page=${page + 1}`}>
            <a>Next Page ({page + 1})</a>
          </Link>
        </footer>

        <style jsx>{`
          footer {
            padding: 1em;
          }
          footer a {
            font-weight: bold;
            color: black;
            text-decoration: none;
          }
        `}</style>
      </Layout>
    );
  }
}

export default Index;



// const Index = ({ stories, page }) => {
//   // console.log('STORIESProps:', stories)

//   useEffect(() => {
//     if ('serviceWorker' in navigator) {
//       navigator.serviceWorker
//         .register('/service-worker.js')
//         .then(registration => {
//           console.log('service worker registration successful', registration);
//         })
//         .catch(err => {
//           console.error('service worker registration failed', err.message);
//         });
//     }
//   }, []);

//   if(stories.length === 0) return <Error statusCode={503} />

//   return (
//     <Layout 
//       title='Hacker News Next'
//       description='Hacker News clone made with Next.js'
//     >
//       <StoryListComponent 
//         stories={stories} 
//         description={`Page ${page + 1}`}
//       />
//       <Pagination page={page}/>
//     </Layout>
//   )
// }

// export const getServerSideProps = async ({res, req, query}) => {
  
//   let data, page
  
//   try {
//     page = Number(query.page) || 0
//     const res = await fetch(`https://node-hnapi.herokuapp.com/news?page=${page}`)
//     data = await res.json()
//   } catch (err) {
//     console.error(err)
//     data = []
//   }

//   return {
//     props: {
//       stories: data,
//       page
//     }
//   }
// }

// export default Index

