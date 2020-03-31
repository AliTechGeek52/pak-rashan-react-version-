import React from 'react';
import './App.css';
import banner from '../src/images/banner.jpg';
import quaid from '../src/images/quaid.jpeg';

function App() {
  return (
    <>
      <header>
        {/* Header above section starts*/}
        <div className="header-items">
          <h1>PakRashan</h1>
          <div>
            <a href="#">signin</a>
            <a href="#">signup</a>
          </div>
        </div>
        {/* Header above section ends */}
        {/* Navigation starts */}
        <nav>
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Feedback</li>
          </ul>
        </nav>
        {/* Navigation Ends */}
      </header>
      {/* Banner Section Starts */}
      <section>
        <span>Lets join hands to fight against covid-19 to save our belovedcountry
          pakistan</span>
        <img src={banner} alt="banner image" />
      </section>
      {/* Banner Section Ends */}
      {/* Message Section Starts */}
      <section>
        <h1>Message By Father of Nation</h1>
        <div className="message-section">
          <div>
            <img src={quaid} alt="quaid" />
          </div>
          <p className="message-text">
            "Come forward as servants of Islam,organize the people
            economically,socially,educationally and politically and I am sure that
            you will be a power that will be accepted by everybody
          </p>
        </div>
      </section>
      {/* Message Section Ends */}
      {/* Verification Section Starts */}
      <section>
        <h1>Verification Process</h1>
        <form>
          <ul>
            <li>
              <label>CNIC-No</label>
              <input type="text" />
            </li>
            <li>
              <label>Address</label>
              <input type="text" />
            </li>
            <li>
              <button>Submit</button>
            </li>
            <li>
              <label>Result</label>
              <input type="text" />
            </li>
          </ul>
        </form>
      </section>
      {/*- Verification Section Ends */}
    </>
  );
}

export default App;
