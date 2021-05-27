import ArticleItem from '../components/ArticleItem'
import { gql } from '@apollo/client';
import { getApolloClient } from '../utils'
import Meta from '../components/Meta'


const Articles = (props) => {
  
  const articles = props.profile.articles
  const meta_props = {
    profile:{...props.profile},
    title:`${props.profile.first_name} ${props.profile.last_name} | Articles`,
    description:`Articles by ${props.profile.first_name} ${props.profile.last_name}`,
    keywords:`${props.profile.first_name} ${props.profile.last_name},${props.profile.first_name} ${props.profile.last_name},articles,portfolio`
  }
  return(
    <>
      <Meta {...meta_props} />
      <section className="article-page-wrapper">
        <div className="article_content_grid">
          <div className="section-heading">
            <h2>Articles</h2>
          </div>
          {
            articles.map(article => {
              return(
                <ArticleItem {...article} key={article.id}/>
              )
            })
          }
        </div>
      </section>
    </>
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
      profile,
    },
    revalidate: 80, 
  };
}
export default Articles