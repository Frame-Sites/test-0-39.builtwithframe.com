import Link from 'next/link'
import Meta from '../../../components/Meta'
import { gql } from '@apollo/client';
import { getApolloClient } from '../../../utils'
import { useRouter } from 'next/router';

const article = (props) => {

  const router = useRouter()
  if (router.isFallback) {
    return <div style={{minHeight:"74vh"}}>Loading...</div>
  }
  const article = !!props.article[0]?props.article[0]:{"title":"not specified","url":"not specified","caption":"not specified","imageUrl":"not specified"}
  const meta_props = {
    profile:{...props.profile},
    title:`${article.title}`,
    description:`${article.caption}`,
    keywords:`${article.title},${article.caption},${props.profile.first_name} ${props.profile.last_name}`
  }    
  return <>
    <Meta {...meta_props} />
    <div style={{position:"relative", minHeight:"72vh"}}>
      <h1 style={{position:"absolute",left:"50%",transform:"translate(-50%)"}}>{article.title}</h1>
      <br />
      <p style={{paddingTop:"5rem"}}>{article.caption}</p>
    <br />
    </div>
    <Link href = '/articles'>
      Go Back
    </Link>
  </>
}

export const getStaticProps = async(context) => {

  const GET_PROFILE = gql`{
    getProfile (account_id: "${process.env.GATSBY_ACCOUNT_ID}") {
      dev
    }
  }`;
  const { data } = await getApolloClient().query({query: GET_PROFILE})
  const profile = JSON.parse(data.getProfile.dev);
  const articles = profile.articles
  const article = articles.filter(article => article.id === context.params.id)
  
  return { props : {
    article,
    profile
    },
    revalidate: 80, 
  };
}

export const getStaticPaths = async() => {

  const GET_PROFILE = gql`{
    getProfile (account_id: "${process.env.GATSBY_ACCOUNT_ID}") {
      dev
    }
  }`;
  const { data } = await getApolloClient().query({query: GET_PROFILE})
  const profile = JSON.parse(data.getProfile.dev);
  const articles = profile.articles
  const ids = articles.map(article => article.id)
  const paths = ids.map(id => ({
      params:{id:id.toString()}
  }))
  
  return { 
    paths,
    fallback:true,
  }
}

export default article
