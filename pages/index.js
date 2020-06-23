import React from 'react'
import Error from 'next/error'
import fetch from 'isomorphic-fetch'
import StoryListComponent from '@/components/StoryList.component'
import Layout from '@/components/Layout.component'
import Pagination from '@/components/Pagination.component'


export default ({ stories, page }) => {
  // console.log('STORIESProps:', stories)

  if(stories.length === 0) return <Error statusCode={503} />

  return (
    <Layout 
      title='Hacker News Next'
      description='Hacker News clone made with Next.js'
    >
      <StoryListComponent stories={stories} />
      <Pagination page={page}/>
    </Layout>
  )
}

export const getServerSideProps = async ({res, req, query}) => {
  console.log(query)
  
  let data, page
  
  try {
    page = Number(query.page) || 1
    const res = await fetch(`https://node-hnapi.herokuapp.com/news?page=${page}`)
    data = await res.json()
  } catch(err) {
    console.error(err)
    // data = []
  }

  return {
    props: {
      stories: data || [],
      page
    }
  }
}



