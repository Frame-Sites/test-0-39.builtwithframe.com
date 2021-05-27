import Link from 'next/link';
import { useRouter } from 'next/router'
import { useState } from 'react';
import createImageUrl from '../utils/createImageUrl'



const Navbar = (props) => {
  const profile = !!props.profile
  const key = profile?props.profile.assets.filter(asset => (asset.type == "primary")).length >= 1:""
  const validKey = key?props.profile.assets.filter(asset => (asset.type == "primary"))[0].url:""
  const url = key?createImageUrl(validKey):"/images/frame-logo.svg";
  const name = profile?`${props.profile.first_name} ${props.profile.last_name}`:""
  const prepareString = s => s.replace(/<[\w]+>|<\/[\w]+>/g, "").trim().slice(0,50)
  const about = profile?!!props.profile.about?prepareString(props.profile.about):"":""
  const facebook_url = profile?
                      !!props.profile.socials.filter(item => item.type=="Facebook")[0]
                      ?props.profile.socials.filter(item => item.type=="Facebook")[0].url
                      :""
                      :""
  const twitter_url = profile?
                      !!props.profile.socials.filter(item => item.type=="Twitter")[0]
                      ?props.profile.socials.filter(item => item.type=="Twitter")[0].url
                      :""
                      :""
  const linkedin_url = profile?
                      !!props.profile.socials.filter(item => item.type=="Linkedin")[0]
                      ?props.profile.socials.filter(item => item.type=="Linkedin")[0].url
                      :""
                      :""
  const github_url = profile?
                      !!props.profile.socials.filter(item => item.type=="GitHub")[0]
                      ?props.profile.socials.filter(item => item.type=="GitHub")[0].url
                      :""
                      :""
  const instagram_url = profile?
                      !!props.profile.socials.filter(item => item.type=="Instagram")[0]
                      ?props.profile.socials.filter(item => item.type=="Instagram")[0].url
                      :""
                      :""
  const medium_url = profile?
                      !!props.profile.socials.filter(item => item.type=="Medium")[0]
                      ?props.profile.socials.filter(item => item.type=="Medium")[0].url
                      :""
                      :""

  const router = useRouter()
  const [navState, setNavState] = useState("close")
  const changeNavState = () => {
    let state = navState === "close" ? "open" : "close"
    setNavState(state) 
  }
  return(
    <nav className="site-navigation">
      <div className="site-nav-wrap">
        <div className="nav-left">
          {(router.pathname === "/articles" && (
            <div className="nav-profile">
              <div className="nav-profile-photo">
                <img src={url} alt="profile-photo"></img>
              </div>
              <div className="info">
              <p>{name}</p>
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
            </div>
          ))|| (
          <div className="nav-icon">
            <img src="/images/frame-logo.svg" alt="frame_logo"></img>
          </div>
          )}
          
        </div>
        <div className="nav-right">
          <div className={`hamburger ${navState}`} onClick={() => changeNavState()}>
            <div className={`line-1 ${navState}`}></div>
            <div className={`line-2 ${navState}`}></div>
            <div className={`line-3 ${navState}`}></div>
          </div>
          <ul className="nav-list">
            <Link href='/'>
              <li className={`nav-item ${router.pathname == "/" ? "active" : ""}`}>
              About
              </li>
            </Link>
            <Link href='/articles'>
              <li className={`nav-item ${router.pathname == "/articles" ? "active" : ""}`}>
              Articles
              </li>
            </Link>
            <Link href="">
              <li className={`nav-item ${router.pathname == "/resume" ? "active" : ""}`}>
              Resume
              </li>
            </Link>
          </ul>
        </div>
      </div>
      <div className={`nav-list-mobile ${navState}`}>
        <ul>
          <Link href='/'>
            <li 
            className={`nav-item ${router.pathname == "/" ? "active" : ""}`}
            onClick={() => changeNavState()}>
            About
            </li>
          </Link>
          <Link href='/articles'>
            <li 
            className={`nav-item ${router.pathname == "/articles" ? "active" : ""}`}
            onClick={() => changeNavState()}>
            Articles
            </li>
          </Link>
          <Link href='/'>
            <li 
            className={`nav-item ${router.pathname == "/resume" ? "active" : ""}`}
            onClick={() => changeNavState()}>
            Resume
            </li>
          </Link>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar

