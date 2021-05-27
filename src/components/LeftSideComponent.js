import createImageUrl from '../utils/createImageUrl'

const LeftSideComponent = (props) => {
  const profile = props
  const key = profile.assets.filter(asset => (asset.type == "primary")).length >= 1
  const validKey = key?profile.assets.filter(asset => (asset.type == "primary"))[0].url:""
  const url = key?createImageUrl(validKey):"/images/frame-logo.svg";
  const name = `${profile.first_name} ${profile.last_name}`
  const facebook_url =!!profile.socials.filter(item => item.type=="Facebook")[0]
                      ?profile.socials.filter(item => item.type=="Facebook")[0].url
                      :""
  const twitter_url = !!profile.socials.filter(item => item.type=="Twitter")[0]
                      ?profile.socials.filter(item => item.type=="Twitter")[0].url
                      :""
  const linkedin_url = !!profile.socials.filter(item => item.type=="Linkedin")[0]
                      ?profile.socials.filter(item => item.type=="Linkedin")[0].url
                      :""
  const github_url = !!profile.socials.filter(item => item.type=="GitHub")[0]
                      ?profile.socials.filter(item => item.type=="GitHub")[0].url
                      :""
  const instagram_url = !!profile.socials.filter(item => item.type=="Instagram")[0]
                      ?profile.socials.filter(item => item.type=="Instagram")[0].url
                      :""
  const medium_url = !!profile.socials.filter(item => item.type=="Medium")[0]
                      ?profile.socials.filter(item => item.type=="Medium")[0].url
                      :""
  //function for cleaning html tags from String
  const prepareString = s => s.replace(/<[\w]+>|<\/[\w]+>/g, "").trim().slice(0,50)
  const about = !!profile.about?prepareString(profile.about):""
  return(
    <div className="left-content-wrapper">
      <div className="profile-content">
        <img src={url} alt="profile_photo" width="220" height="220"></img>
        <h2>{name}</h2>
        <p>{about}</p>
        <div className="social-icons">
          {facebook_url && (
            <a href={facebook_url}>
              <span className="facebook-icon"></span>
            </a>
          )}
          {twitter_url && (
            <a href={twitter_url}>
              <span className="twitter-icon"></span>
            </a>
          )}
          {linkedin_url && (
            <a href={linkedin_url}>
              <span className="linkedin-icon"></span>
            </a>
          )}
          {instagram_url && (
            <a href={instagram_url}>
              <span className="instagram-icon"></span>
            </a>
          )}
          {github_url && (
            <a href={github_url}>
              <span className="github-icon"></span>
            </a>
          )}
          {medium_url && (
            <a href={medium_url}>
              <span className="medium-icon"></span>
            </a>
          )}
        </div>
      </div>
      <div className="profile-skills">
        <p>Skills</p>
        <ul>
          {profile.skills.map(item => {
              return(
                  <li key={item.id}>{item.content}</li>
              )
          })
          }
        </ul>
      </div>
      <div className="profile-coursework">
        <p>Coursework</p>
        <ul>
            {profile.coursework.map(item => {
                return(
                    <li key={item.id}>{item.course_name}</li>
                )
            })
            }   
        </ul>
      </div>
    </div>
  )
}

export default LeftSideComponent