import styled from 'styled-components'

export const Main = styled.main`
  padding: 1em;  
`

export const StoryTitle = styled.h1`
  font-size: 1.2rem;
  margin: 0;
  font-weight: 300;
  padding-bottom: 0.5em;

  a {
    color: ${({ theme }) => theme.text };
    text-decoration: none;
    transition: all .3s ease-in;
 
    &:hover {
      text-decoration: underline;
    }
    
    span {
      color: rgb(113, 128, 150);
      font-size: 14px;
      padding: 0px 6px
    }

  } 

`

export const StoryDetails = styled.div`
  font-size: 0.8rem;
  padding-bottom: 1em;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  margin-bottom: 1em;

  strong {
    margin-right: 1em;
  }

  a {
    color: #f60;
  }
`