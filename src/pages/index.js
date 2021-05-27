import { gql } from '@apollo/client';
import { getApolloClient } from '../utils'
import Layout from '../components/HomePage'


const Home = ({profile}) => {
  return (
    <Layout profile={profile} />
  )
}

export const getStaticProps = async() => {

  const GET_PROFILE = gql`{
    getProfile (account_id: "${process.env.GATSBY_ACCOUNT_ID}") {
      dev
    }
  }`;
    
  const { data } = await getApolloClient().query({query: GET_PROFILE})
  const profile = JSON.parse(data.getProfile.dev);
  
  return { props : {
      profile
    },
    revalidate: 80, 
  };
}

export default Home