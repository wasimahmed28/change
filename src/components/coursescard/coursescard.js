import React from 'react'

const coursescard = () => {
  return (
    <section id="courses-card">
			<div class="container">
				<h2>How our online public courses works</h2>
				<div class="row justify-content-center">
					<div class="column-lg-3 column-4">
						<div class="courses-card">
							<img src="images/courses/course-1.png" class="img-fluid" />
							<div class="card-heading">
								Hands-On Python & R In Data Science
							</div>
							<div class="card-detail">
								<div class="learners"><span class="learner-icon"></span> 1,45,690</div>
								<div class="duration"><span class="clock-icon"></span> 4 monts</div>
							</div>
							<div class="card-button text-center">
								<a href="#" alt="View Course">View Course</a>
							</div>
						</div>
					</div>
					<div class="column-lg-3 column-4">
						<div class="courses-card">
							<img src="images/courses/course-2.png" class="img-fluid" />
							<div class="card-heading">
								Science and Machine Learning Bootcamp
							</div>
							<div class="card-detail">
								<div class="learners"><span class="learner-icon"></span> 1,45,690</div>
								<div class="duration"><span class="clock-icon"></span> 4 monts</div>
							</div>
							<div class="card-button text-center">
								<a href="#" alt="View Course">View Course</a>
							</div>
						</div>
					</div>
					<div class="column-lg-3 column-4">
						<div class="courses-card">
							<img src="images/courses/course-3.png" class="img-fluid" />
							<div class="card-heading">
								The Python Mega Course:Real Applications
							</div>
							<div class="card-detail">
								<div class="learners"><span class="learner-icon"></span> 1,45,690</div>
								<div class="duration"><span class="clock-icon"></span> 4 monts</div>
							</div>
							<div class="card-button text-center">
								<a href="#" alt="View Course">View Course</a>
							</div>
						</div>
					</div>
					<div class="column-lg-3 column-4">
						<div class="courses-card">
							<img src="images/courses/course-4.png" class="img-fluid" />
							<div class="card-heading">
								Digital Marketing Coursee
							</div>
							<div class="card-detail">
								<div class="learners"><span class="learner-icon"></span> 1,45,690</div>
								<div class="duration"><span class="clock-icon"></span> 4 monts</div>
							</div>
							<div class="card-button text-center">
								<a href="#" alt="View Course">View Course</a>
							</div>
						</div>
					</div>
				</div>
				<div class="text-center">
					<a href="#" class="view-all-course-btn" alt="View All Courses">View All Courses</a>
				</div>
			</div>
		</section>
  )
}

export default coursescard
