import React from 'react'
import backimage from '../../assets/img/bg/04.jpg'

const BreadcrumbArea = () => {
  return (
    <>
     <section class="breadcrumb-area" style={{backgroundImage:`url(${backimage})`}}>
        <div class="container">
            <div class="breadcrumb-text">
                <span>Recruitment</span>
                <h2 class="page-title">Hire Top Influencers</h2>
                <ul class="breadcrumb-nav">
                    <li><a href="image-style-2.html#">Home</a></li>
                    <li class="active">Hire Talent</li>
                </ul>
            </div>
        </div>
    </section>
    </>
  )
}

export default BreadcrumbArea;