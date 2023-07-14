import React from 'react'
import { useState } from 'react'
import {Aboutdata,Aboutdata1,Aboutdata21,Aboutdata22,Aboutdata23,Aboutdata3,Aboutdata4} from './Aboutdata';
const About = ({companyName,data}) => {
    const [showMore, setShowMore] = useState(false);
    const [showMore1, setShowMore1] = useState(false);
    const [showMore21, setShowMore21] = useState(false);
    const [showMore22, setShowMore22] = useState(false);
    const [showMore23, setShowMore23] = useState(false);
    const [showMore3, setShowMore3] = useState(false);
    const [showMore4, setShowMore4] = useState(false);
    const text=Aboutdata;
    const text1=Aboutdata1;
    const text21=Aboutdata21;
    const text22=Aboutdata22;
    const text23=Aboutdata23;
    const text3=Aboutdata3;
    const text4=Aboutdata4;
    console.log({text})
  return (
    <>
    <br/><br/>
    <div>
      <main role="main">
<div class="jumbotron">
  <div class="container">
    <h1 class="display-3">RoJana</h1>
    <p>Welcome to our To-Do list website! We're thrilled to have you here.<br/> At {companyName}, our mission is to simplify your life and help you stay organized, focused, and productive. Whether you're a busy professional, a student juggling multiple assignments, or simply someone looking to manage their daily tasks efficiently, we've got you covered.</p>
  </div>
  <br/><br/><br/><br/><br/>
</div>

<div class="container">
  <div class="row">
    <div class="col-md-4">
      <h2>Who We Are</h2>
      <p>{showMore ? text : `${text.substring(0, 200)}`}</p>
      <button class="btn btn-secondary" onClick={() => setShowMore(!showMore)}>{showMore ? "Show less" : "Show more"}»</button>
    </div>
    <div class="col-md-4">
      <h2>What We Offer</h2>
      <p>{showMore1 ? text1 : `${text1.substring(0, 200)}`}</p>
      <button class="btn btn-secondary" onClick={() => setShowMore1(!showMore1)}>{showMore1 ? "Show less" : "Show more"}»</button>
    </div>
    <div class="col-md-4">
      <h2>Key Features</h2>
      <h5>Create and manage multiple lists</h5>
      <p>{showMore21 ? text21 : `${text21.substring(0,0)}`}</p>
      <h5>Task prioritization</h5>
      <p>{showMore22 ? text22 : `${text22.substring(0,0)}`}</p>
      <h5>Mobile-friendly</h5>
      <p>{showMore23 ? text23 : `${text23.substring(0,0)}`}</p>
      <button class="btn btn-secondary" onClick={() => {setShowMore21(!showMore21);setShowMore22(!showMore22);setShowMore23(!showMore23)}}>{showMore21 ? "Show less" : "Show more"}»</button>
    </div>
    
    <hr className='mt-5' />
    <br/><br/><br/><br/>
    <div class="col-md-4">
      <h2>Your Privacy and Security</h2>
      <p>{showMore3 ? text3 : `${text3.substring(0, 200)}`}</p>
      <button class="btn btn-secondary" onClick={() => setShowMore3(!showMore3)}>{showMore3 ? "Show less" : "Show more"}»</button>
    </div>
    <div class="col-md-4">
      <h2>Join Our Community</h2>
      <p>{showMore4 ? text4 : `${text4.substring(0, 200)}`}</p>
      <button class="btn btn-secondary" onClick={() => setShowMore4(!showMore4)}>{showMore4 ? "Show less" : "Show more"}»</button>
    </div>
  </div>
  <br/><br/><br/><br/>
  <hr/>
<p>We're excited to have you join us on this journey of productivity and organization. Start making the most of your time today with [Website Name]. If you have any questions, feedback, or suggestions, please don't hesitate to reach out to our friendly support team. Happy tasking!</p>
<p><a class="btn btn-primary btn-lg" href="https://en.wikipedia.org/wiki/Wikipedia:To-do_list" role="button">Learn more »</a></p>
</div> 
</main>
    </div>
    </>)
}

export default About
