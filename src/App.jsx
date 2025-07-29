import { BrowserRouter, Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom';
import './App.css';

import timer from './assets/timer.jpg';


import {Carousel} from "./components/Carousel";

import {slides} from "./data/carouselData.json";


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="courses" element={<Courses />} />
            <Route path="test-series" element={<TestSeries />} />
            <Route path="classroom" element={<Classroom />} />
            <Route path="results" element={<Results />} />
            <Route path="study-materials" element={<StudyMaterial />} />
            <Route path="scholarships" element={<Scholarships />} />
            <Route path="allen-e-store" element={<EStore />} />
            <Route path="more" element={<More />} />
            <Route path="*" element={<ErrorPage />} />
            <Route path="call-us" element={<CallUs/>}/>
            <Route path = "login" element={<LogIn/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

function Layout() {
  return (
    <div>
      <Header />
      <Outlet />
    </div>

  );
}


function Header() {
  return (
    <div style={{ display: "flex", justifyContent: "space-between", padding: "10px", alignItems: "center" }}>
      
      {/* Left nav items */}
      <div style={{ display: "flex", gap: "30px" }}>
        <Link to="/" className='nav-top-elements'>Allen</Link>
        <Link to="/test-series" className='nav-top-elements'>Test series</Link>
        <Link to="/classroom" className='nav-top-elements'>Classroom</Link>
        <Link to="/results" className='nav-top-elements'>Result</Link>
        <Link to="/study-materials" className='nav-top-elements'>Study Materials</Link>
        <Link to="/scholarships" className='nav-top-elements'>Scholarships</Link>
        <Link to="/allen-e-store" className='nav-top-elements'>Allen-E-Store</Link>
        <Link to="/more" className='nav-top-elements'>More</Link>
      </div>

      {/* Right nav items (Call and Login) */}
      <div style={{ display: "flex", gap: "20px", alignItems: "center" }}>
        <Link to="/call-us" className='nav-top-elements'>Call</Link>
        <Link to="/login" className='nav-top-elements'>
          <button className='login'>Login</button>
        </Link>
      </div>
    </div>
  );
}


function Courses() {
  return <div>This is the Courses Page</div>;
}

function TestSeries() {
  return <div>This is the Test Series Page</div>;
}

function Classroom() {
  return <div>This is the Classroom Page</div>;
}

function Results() {
  return <div>This is the Results Page</div>;
}

function StudyMaterial() {
  return <div>This is the Study Materials Page</div>;
}

function Scholarships() {
  return <div>This is the Scholarships Page</div>;
}

function EStore() {
  return <div>This is the E-Store Page</div>;
}

function More() {
  return <div>This is the More Page</div>;
}

function ErrorPage() {
  return <div>Wrong Request</div>;
}

function CallUs(){
  return <div>
    <p>We will provide u with form to contact us!</p>
  </div>
}

function LogIn(){
  return <div>
    We will provide you with LogIn button
  </div>
}


function HomePage() {
  return <div>
    <div style={{backgroundColor:"#eee"}}>
     <PromotionLine/>
    </div>
    <div style={{display:"flex",backgroundColor:"#eee",padding:"0px 0px 50px 0px" ,justifyContent:"center",alignItems:"center"}}> <Carousel data={slides}/> </div>
    <Choosing/>
    </div>;
}


function Choosing(){
  return <div>
    <div style={{display:"flex",margin:" 30px 0px 0px 350px", }}>
      <h2>Pick the right course for you</h2>
    </div>

    <div className='courses-container'>
      <div className='cards'>
        <h3 style={{fontSize:"20px"}}>NEET Courses</h3>
        <a href="" style={{textDecoration:"none", color:"#025FCA",fontSize:"20px"}}>View Courses</a>
      </div>

      <div className='cards' >
        <h3 style={{fontSize:"20px"}}>JEE Courses</h3>
        <a href="" style={{textDecoration:"none", color:"#025FCA",fontSize:"20px",}}>View Courses</a>
      </div>

      <div className='cards'>
        <h3 style={{fontSize:"20px"}}>Courses for class 6-10</h3>
        <a href="" style={{textDecoration:"none", color:"#025FCA",fontSize:"20px"}}>View Courses</a>
      </div>

    </div>


  </div>
}


function PromotionLine(){
  return <div className='promotion-container'>
    <img className='tickling' src={timer} alt="Timer"/>
    <a style={{color:"#F8FD05", textDecoration:"none"}} href='/'>GET UP TO 90% SCHOLARSHIP </a>  <span> <a href="/" style={{textDecoration:"none",color:"white"}}>on NEET repeater courses for 2026</a></span>
  </div>
}



export default App;
