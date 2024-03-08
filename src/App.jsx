import React from 'react'
import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom"
import FullStack from './components/FullStack'
import Cybersecuriy from './components/Cybersecuriy'
import Datascience from './components/Datascience'
import Career from './components/career'
import All from './components/All'
import courseimg from "./assets/course.jpg"

let dataall=[
  {
  imag:courseimg,
  heading:"Introduction to HTML Tags: A Comprehensive Guide With Examples [2024]",
  content:"Creating a website on our own must have been on everyone’s bucket list since the",
  },
  {
    imag:courseimg,
    heading:"Top 17 Best IoT Project Ideas",
    content:"The Internet of Things, or IoT, is all about connecting everyday objects to the internet",
    },
  {
    imag:courseimg,
    heading:"Brainstorming in Design Thinking – A Complete Guide",
    content:"Brainstorming is a group activity where we all share ideas to solve problems, especially when",
    },
  {
  imag:courseimg,
  heading:"Top 15 B2B Digital Marketing Strategies in 2024 [Updated]",
  content:"It was found that 89% of the B2B buyers research the products online while making the",
    },
  {
    imag:courseimg,
    heading:"Master JavaScript Frontend Roadmap: From Novice to Expert [2024]",
    content:"Are you eager to learn JavaScript? Want to dive deep into the JavaScript frontend roadmap?",
      },
  {
    imag:courseimg,
    heading:"Best Software Tools for Writing: Elevate Your Writing Skills",
    content:"Whether you’re penning your next bestseller, crafting an engaging blog post, or just jotting down",
      },
      {
        imag:courseimg,
      heading:"Top Digital Marketing Trends for 2024",
      content:"It’s a new year. It’s time for all digital marketers to amp up their digital",
   },
   {
   imag:courseimg,
   heading:"Innovate or Stagnate: Comprehensive Generative AI Terms For Enthusiasts",
   content:"Generative AI is essential in many fields today to help professionals survive in an era",
     },
     {
   imag:courseimg,
   heading:"Brand Storytelling in the Digital Age: Creating Compelling Content from Scratch",
   content:"Having a personal brand is one thing, but learning to build and grow a sustainable,",
     },
     {
      imag:courseimg,
      heading:"8 Exciting Project Ideas for Final Year B Tech Students [2024]",
      content:"If you are a final year B Tech student, we can understand your frustration for",
      },
      {
     imag:courseimg,
     heading:"Best Project Ideas for Robotic Applications – Including All 3 Levels [2024]",
     content:"Real-world projects are one of the important things that you have to do to improve",
     },
     {
    imag:courseimg,
    heading:"Cross-Platform Consistency in UX: Achieving a Seamless User Experience Across Devices",
    content:"In today’s digital landscape, users interact with products and services across a multitude of devices",
    }, 
    {
     imag:courseimg,
     heading:"Top 8 Selenium Alternatives for Test Automation",
     content:"Test automation plays a crucial role in the development and deployment of software applications. Selenium,",
     }, 
     {
  imag:courseimg,
  heading:"List of Top 30 AWS Services",
  content:"Companies (like Netflix, Pinterest, Instagram, Walmart, Microsoft, Oracle, etc.) have been shifting to AWS Services",
  }, 
  {
   imag:courseimg,
   heading:"The 11 Gestalt Principles of Design with Examples",
   content:"Design is much more than just aesthetics; it’s about how we perceive and interpret visual",
   }, 
   {
    imag:courseimg,
    heading:"Top 9 Machine Learning Project Ideas For All Levels [with Source Code]",
    content:"Machine learning is a dynamic field that continues to shape the future of technology and",
    }, 
    {
     imag:courseimg,
     heading:"What is Color Symbolism: Color Meanings and Uses Explained",
     content:"Do you know why all sustainable brands have green as their primary brand color? Or",
     }, 
     {
      imag:courseimg,
      heading:"Design Thinking and Prototyping in UI/UX: A Comprehensive Guide",
      content:"Design thinking is a user-centric approach to problem-solving that emphasizes empathy and experimentation. It is",
      }, 
      {
       imag:courseimg,
       heading:"Integrating Augmented Reality (AR) into User Interfaces: Challenges and Solutions",
       content:"Augmented Reality (AR) is a tool that adds digital images and information to the real",
       },
       {
        imag:courseimg,
        heading:"Human-Computer Interaction in UI/UX: A Comprehensive Guide on Effective Designing [2024]",
        content:"Believe it or not, approximately 52% of Indians have increased usage of digital devices in",
        },  
    {
      imag:courseimg,
      heading:"10 Important Things to Consider Before Joining Digital Marketing Course",
      content:"Digital marketing is an exceptionally dynamic field that keeps on evolving with the changing trends,",
      }, 
      {
        imag:courseimg,
        heading:"15 Most Common SQL Queries with Examples",
        content:"SQL is a must-have skill for every developer or tech professional to handle large amounts",
    }, 
    {
      imag:courseimg,
      heading:"Top 5 Free Courses by GUVI: Best Upskilling Courses in Tech [2024]",
      content:"Does waking up to the news of mass layoffs every morning make you anxious about",
      },
      {
        imag:courseimg,
        heading:"Top 10 Cloud Computing Project Ideas [2024]",
        content:"Do you know? India ranks 3rd with over 608,000 cloud professionals and is set to become the",
        }, 

  ]
let carrerdata=[{
  imag:courseimg,
  heading:"Top 17 Best IoT Project Ideas",
  content:"The Internet of Things, or IoT, is all about connecting everyday objects to the internet",
  }, {
    imag:courseimg,
    heading:"Best Software Tools for Writing: Elevate Your Writing Skills",
    content:"Whether you’re penning your next bestseller, crafting an engaging blog post, or just jotting down",
      },
      {
        imag:courseimg,
        heading:"8 Exciting Project Ideas for Final Year B Tech Students [2024]",
        content:"If you are a final year B Tech student, we can understand your frustration for",
        },]
let fullstackdata=[{
  imag:courseimg,
  heading:"Introduction to HTML Tags: A Comprehensive Guide With Examples [2024]",
  content:"Creating a website on our own must have been on everyone’s bucket list since the",
  },
  {
    imag:courseimg,
    heading:"Master JavaScript Frontend Roadmap: From Novice to Expert [2024]",
    content:"Are you eager to learn JavaScript? Want to dive deep into the JavaScript frontend roadmap?",
      }, {
        imag:courseimg,
        heading:"Cross-Platform Consistency in UX: Achieving a Seamless User Experience Across Devices",
        content:"In today’s digital landscape, users interact with products and services across a multitude of devices",
        }, {
          imag:courseimg,
          heading:"List of Top 30 AWS Services",
          content:"Companies (like Netflix, Pinterest, Instagram, Walmart, Microsoft, Oracle, etc.) have been shifting to AWS Services",
          },  {
            imag:courseimg,
            heading:"Design Thinking and Prototyping in UI/UX: A Comprehensive Guide",
            content:"Design thinking is a user-centric approach to problem-solving that emphasizes empathy and experimentation. It is",
            },  {
              imag:courseimg,
              heading:"15 Most Common SQL Queries with Examples",
              content:"SQL is a must-have skill for every developer or tech professional to handle large amounts",
          }, 
          {
            imag:courseimg,
            heading:"Top 5 Free Courses by GUVI: Best Upskilling Courses in Tech [2024]",
            content:"Does waking up to the news of mass layoffs every morning make you anxious about",
            }, ]
let datasciencedata=[ {
  imag:courseimg,
  heading:"Brainstorming in Design Thinking – A Complete Guide",
  content:"Brainstorming is a group activity where we all share ideas to solve problems, especially when",
  },
  {
    imag:courseimg,
    heading:"Top 15 B2B Digital Marketing Strategies in 2024 [Updated]",
    content:"It was found that 89% of the B2B buyers research the products online while making the",
  }, {
    imag:courseimg,
  heading:"Top Digital Marketing Trends for 2024",
  content:"It’s a new year. It’s time for all digital marketers to amp up their digital",
}, {
  imag:courseimg,
  heading:"Innovate or Stagnate: Comprehensive Generative AI Terms For Enthusiasts",
  content:"Generative AI is essential in many fields today to help professionals survive in an era",
    }, {
      imag:courseimg,
      heading:"The 11 Gestalt Principles of Design with Examples",
      content:"Design is much more than just aesthetics; it’s about how we perceive and interpret visual",
      }, 
      {
       imag:courseimg,
       heading:"Top 9 Machine Learning Project Ideas For All Levels [with Source Code]",
       content:"Machine learning is a dynamic field that continues to shape the future of technology and",
       }, 
       {
        imag:courseimg,
        heading:"What is Color Symbolism: Color Meanings and Uses Explained",
        content:"Do you know why all sustainable brands have green as their primary brand color? Or",
        }, {  imag:courseimg,
        heading:"Integrating Augmented Reality (AR) into User Interfaces: Challenges and Solutions",
        content:"Augmented Reality (AR) is a tool that adds digital images and information to the real",
        },
        {
         imag:courseimg,
         heading:"Human-Computer Interaction in UI/UX: A Comprehensive Guide on Effective Designing [2024]",
         content:"Believe it or not, approximately 52% of Indians have increased usage of digital devices in",
         },  ]
let cybersecuritydata=[ {imag:courseimg,
heading:"Brand Storytelling in the Digital Age: Creating Compelling Content from Scratch",
content:"Having a personal brand is one thing, but learning to build and grow a sustainable,",
  }, 
  {imag:courseimg,
  heading:"Best Project Ideas for Robotic Applications – Including All 3 Levels [2024]",
  content:"Real-world projects are one of the important things that you have to do to improve",
  }, {
    imag:courseimg,
    heading:"Top 8 Selenium Alternatives for Test Automation",
    content:"Test automation plays a crucial role in the development and deployment of software applications. Selenium,",
    },   {
      imag:courseimg,
      heading:"Top 10 Cloud Computing Project Ideas [2024]",
      content:"Do you know? India ranks 3rd with over 608,000 cloud professionals and is set to become the",
      },  ]
function App() {
  return<>
<BrowserRouter>
<Routes>
  <Route path="/" element={<All dataall={dataall}/>}/>
  <Route path="/carrer" element={<Career carrerdata={carrerdata}/>}/>
  <Route path="/full-stack" element={<FullStack fullstackdata={fullstackdata}/>}/>
  <Route path="/datascience" element={<Datascience datascience={datasciencedata}/>}/>
  <Route path="/cybersecurity" element={<Cybersecuriy cybersecurity={cybersecuritydata}/>}/>
  <Route path="*" element={<Navigate to ="/"/>}/>
</Routes>
</BrowserRouter>
 </>
}

export default App