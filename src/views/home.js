import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import Question from '../components/question'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Brandon Rodrigues</title>
        <meta property="og:title" content="Brandon Rodrigues" />
      </Helmet>
      <div className="home-hero">
        <div className="home-hero1">
          <div className="home-container1">
            <h1 className="home-hero-heading heading1">
              Welcome to My Website!
            </h1>
            <div className="home-btn-group"></div>
          </div>
        </div>
      </div>
      <div className="home-details">
        <div className="home-details1">
          <div className="home-container2">
            <h2 className="home-details-heading heading2">About Me</h2>
            <span className="home-details-sub-heading">
              Hello! My name is Brandon and I am a Registered Nurse working in
              the Operating Room. 
            </span>
          </div>
          <img
            alt="image"
            src="/external/92347581_4206432752704055_8370812146606407680_n-400w.jpg"
            className="home-details-image"
          />
        </div>
      </div>
      <div className="home-banner">
        <div className="home-banner1">
          <h1 className="home-banner-heading heading2">Find Your Dream Job</h1>
          <span className="home-banner-sub-heading">
            Discover a wide range of nursing positions tailored to your skills
            and preferences.
          </span>
          <Link to="/page" className="home-banner-button button">
            Search Jobs
          </Link>
        </div>
      </div>
      <div className="home-faq">
        <div className="home-faq-container">
          <div className="home-faq1">
            <div className="home-container3">
              <span className="home-text sectionTitle">
                <span>FAQ</span>
                <br></br>
              </span>
              <h2 className="home-text03 heading2">Common questions</h2>
              <span className="home-text04">
                <span>
                  Here are some of the most common questions that I get.
                </span>
                <br></br>
                <span>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </span>
            </div>
            <div className="home-container4">
              <Question
                Answer="I have worked in the surgical services in both a Level 1 trauma  center as well as in an ambulatory surgery center. I have worked both as a circulator and as a charge nurse. "
                Question="What is your nursing experience?"
              ></Question>
              <Question
                Answer="I am certified in Basic Life Support (BLS) and Advanced Cardiac Life Support (ACLS). In addition I am also CNOR certified."
                Question="What certifications do you have?"
              ></Question>
              <Question
                Answer="I have an ADN from Chandler-Gilbert Community College as well as a bachelors degree in Psychological Sciences with minors in Social Work and Biology from Norther Arizona University."
                Question="What is your educational background?"
              ></Question>
              <Question
                Answer="I am based in the San Francisco Bay Area and would like to remain in the Bay. "
                Question="Where are you based out of/where are you interested in working?"
              ></Question>
              <Question
                Answer="Yes, I am proficient in using various EMR systems such as Epic and Cerner."
                Question="Do you have experience with electronic medical records (EMR) systems?"
              ></Question>
            </div>
          </div>
        </div>
      </div>
      <div className="home-footer">
        <footer className="home-footer1">
          <div className="home-container5">
            <span className="home-logo">Brandon Rodrigues</span>
            <nav className="home-nav"></nav>
          </div>
          <div className="home-separator"></div>
          <div className="home-container6">
            <span className="home-text15">
              © 2023 Brandon Rodrigues, All Rights Reserved.
            </span>
          </div>
        </footer>
      </div>
      <a href="https://example.com" target="_blank" rel="noreferrer noopener">
        Link
      </a>
    </div>
  )
}

export default Home
