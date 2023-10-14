import React from 'react';

const Banner = () => {
  return (
    <section id="banner">
      {<section id="banner">
			<div class="container">
				<div class="row align-items-center justify-content-center">
					<div class="column-6 order-12">
						<div class="banner-image">
                        <img src={process.env.PUBLIC_URL + '/images/banner-image.png'} className="img-fluid" alt="Banner" />
  	</div>
					</div>
					<div class="column-6 order-1">
						<h1>Explore top-notch courses for optimal learning experiences.</h1>
						<p>Embark on an educational journey like never before with Connections Academy—an 
						innovative, tuition-free online public school, designed to empower students 
						nationwide in their pursuit of knowledge.</p>
						<div class="text-left">
							<a class="get-started" href="javascript:void(0);" title="Get Started">Get Started</a>
						</div>
					</div>
					
				</div>
			</div>
		</section>}
    </section>
  );
};

export default Banner;
