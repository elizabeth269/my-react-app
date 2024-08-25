// import Counter from "./components/counter";
// import Welcome from "./components/welcome"
import React from "react";
//props is read only
//state is cna store data that can change over time

import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';

function Home() {
  return <h2>Home Page</h2>;
}

function About() {
  return <h2>About Page</h2>;
}

function Users() {
  return <h2>Users Page</h2>;
}

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav>

        {/* <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/users" element={<Users />} />
          <Route path="/" element={<Home />} />
        </Routes> */}
      </div>
    </Router>
  );
}


// function App() {


//   return (
//     <>
//       <div><Welcome name="Alice" /> <Welcome name="Bob" />
//       </div>
//       <Counter></Counter>
//     </>
//   );
// }

export default App
