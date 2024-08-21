import Header from '@/Components/Header'
import React from 'react'

const Courses = () => {
  return (
    <div className='courses'>
      <head>
        <title>Course page</title>
        <meta name='sidhdadatri' content='This page is showing all about our courses' />
      </head>
      @Courses
      <div className='courses-child'>
      <div className='cart'>
        <img src='https://vdigtech.com/wp-content/uploads/2024/03/Image-20.jpg' alt='course-img' className='cart-img'></img>
        <h5>Website Development</h5>
      </div>
      <div className='cart'>
        <img src='https://vdigtech.com/wp-content/uploads/2024/03/Image-21.jpg' alt='course-img' className='cart-img'></img>
        <h5>App Development</h5>
      </div>
      <div className='cart'>
        <img src='https://vdigtech.com/wp-content/uploads/2024/03/Image-27.jpg' alt='course-img' className='cart-img'/>
        <h5>Digital Markeing</h5>
      </div>
      <div className='cart'>
        <img src='https://vdigtech.com/wp-content/uploads/2024/03/Image-24.jpg' alt='course-img'  className='cart-img'></img>
        <h5>Website Maintenance</h5>
      </div>
      </div>
    </div>
  )
}

export default Courses
