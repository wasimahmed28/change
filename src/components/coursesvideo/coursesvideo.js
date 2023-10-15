import React from 'react'

const coursesvideo = () => {
  return (
    <section id="courses-video">
    <div class="container">
        <div class="row align-items-center">
            <div class="column-6">
                <h2>Transform your life through education</h2>
                <p>Ariel Hocsman launched a new career in software development by taking courses on Besnik. What will you be able to do?</p>
                <div class="text-left">
                    <a class="get-started" href="javascript:void(0);" title="Get Started">Get Started</a>
                </div>
            </div>
            <div class="column-6">
                <a href="javascript:void(0);" id="myBtnVideo" alt="Video" class="courses-video-wrapper">
                    <img src="images/course-vid.png" class="img-fluid" />
                    <span class="video-play-icon"></span>
                </a>
            </div>
        </div>
    </div>
</section>
  )
}

export default coursesvideo
