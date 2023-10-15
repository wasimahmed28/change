import Header from './components/header/header';
import Banner from './components/banner/banner';
import University from './components/university/university';
import Courses from './components/courses/courses';
import CoursesCard from './components/coursescard/coursescard';
import CoursesVideo from './components/coursesvideo/coursesvideo';
import Projects from './components/projects/projects';
import FAQ from './components/faq/faq';
import Footer from './components/footer/footer';
import './App.css';

const App = () => {
  return (
    <div>
      <Header />
       <Banner />
      <University />
      <Courses/>
      <CoursesCard />
      <CoursesVideo />
      <Projects />
      <FAQ />
      <Footer />
     {/* Use other components here */}
    </div>
  );
};

export default App;
