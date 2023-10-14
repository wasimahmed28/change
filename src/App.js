// import logo from './logo.svg';
import Header from './components/header/header';
import Banner from './components/banner/banner';
import University from './components/university/university';
import Courses from './components/courses/courses';
import './App.css';

const App = () => {
  return (
    <div>
      <Header />
       <Banner />
      <University />
      <Courses/>
     {/* Use other components here */}
    </div>
  );
};

export default App;
