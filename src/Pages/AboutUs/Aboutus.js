
import React from "react"
import Member from "./Membercards"
import { EXEC_MEMBERS } from "./MembersData"
import "./Aboutus.css"
import Fade from "react-reveal/Fade"
import data from './data'


export default function Aboutus() {
  return (
    <div className="aboutus">
      <div className='about-top-container'>
        <Fade>
          <div className="aboutus-title">About Us</div>
          <div className="aboutus-description">
            At Western Developers Society, we want to give students real life
            development experience. Join us today!
          </div>
        </Fade>
      </div>
      <div className="team-container">
        <h1 className="team-title">Meet the Team!</h1>
      <Fade>
      <div className="join-container">
        <div className="join-title">How to Join</div>
        <div className="content-container">
        <div className="subtitle">General Member</div>
        <div className="general">Anyone at western is welcome to join our community as a general member by attending our events such as hackathons, networking events, workshops etc.
        Drop by any of our social media outlets to learn more about us, keep up-to-date with our upcoming events, or to chat with our members!</div>

      <div className="exec-dev">
        <div className="exec">
        <div className="subtitle">Executive</div>
        <div className="director">We'll be opening applications later in September for all Western students interested in joining our executive team.
Directors will be hired for internal & external events, marketing, careers, and finance. In our Development portfolio we'll be hiring one community lead and 2 tech leads.<br />
        </div></div>
        <div className="dev">
        <div className="subtitle">Development Teams</div>
        <div className="devs">Applications for 4 month development teams will open in September and January for students interested in building real world applications for WDS, other Western Clubs and local London community groups. We'll be hiring Team Leads, Developers, and Designers!</div>
        </div>
        </div>
        <div className="joinus">Some perks of being a WDS member include tangible career growth opportunities, access to mentornship program, discounted of waived event ticket fee, exclusive educationals and workshops and much more!

      </div>
      </div>
      </div>
      </Fade>
        <div className="card-container">
          {EXEC_MEMBERS.map((item, idx) => (
            <Member key={idx + item.name} data={item} />
          ))}
        </div>
      </div>
    </div>
  )
}
