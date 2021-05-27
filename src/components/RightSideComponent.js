
const RightSideComponent = (props) => {
  
  const profile = props
  const experience = profile.experience
  const leadership = profile.leadership
  const education = profile.education
  const months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]
  const displayDate = date => date.includes("Present")
                              ?date
                              :date.split('-')[1].includes("0")
                              ?`${months[date.split('-')[1][0]]}. ${date.split('-')[0]}`
                              :`${months[date.split('-')[1]]}. ${date.split('-')[0]}`
  // console.log(profile)
  return(
    <div className="right-content-wrapper">
      <h2>About</h2>
      <div className="profile-experience">
        <p>Experience</p>
        {experience.map(item => {
          return(
            <div className="profile-experience-details" key={item.id}>
              <p>{item.position}, {item.company}</p>
              <p>{displayDate(item.start_date)} - {displayDate(item.end_date)}</p>
            </div>
          )
        })}
      </div> 
      <div className="profile-leadership">
        <p>Leadership</p>
        {leadership.map(item => {
          return(
            <div className="profile-leadership-details" key={item.id}>
              <p>{item.position}, {item.organization}</p>
              <p>{displayDate(item.start_date)} - {displayDate(item.end_date)}</p>
            </div>
          )
        })}         
      </div>
      <div className="profile-education">
        <p>Education</p>
        {education.map(item => {
          return(
            <div className="profile-education-details" key={item.id}>
              <p>{!!(item.university) ? item.university : '' } university</p>
              <p>{!!(item.university) ? `${item.university} -`: '' } {item.degreeSubtype} in {item.majorOne} and {item.majorTwo} </p>
            </div>
          )
        })}    
      </div>
    </div>
  )
}

export  default RightSideComponent