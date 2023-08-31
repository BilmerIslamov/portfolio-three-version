
import React from 'react'

import { ControlNotes } from './components/Layout/context/Context.jsx';
import Header from './components/Web/Header/Header.jsx';
import Footer from './components/Web/Footer/Footer.jsx';
import Home from './components/Pages/Home/Home.jsx';
import About from './components/Pages/About/About.jsx';
import Education from './components/Pages/Education/Education.jsx';
import Portfolio from './components/Pages/Portfolio/Portfolio.jsx';
import Question from './components/Pages/Question/Question.jsx'
import Customers from './components/Pages/Customers/Customers.jsx'
import Contact from './components/Pages/Contact/Contact.jsx';
import Info from './components/Layout/info/Info';
import Btn from './components/Layout/Home_button/Button.jsx'



function App() {
    return (
        <React.Fragment>
            <ControlNotes>
                <Header />
                <Home />
                <Info />
                <Btn />
                <About />
                <Education />
                <Portfolio />
                <Question />
                <Customers />
                <Contact />
                <Footer />
            </ControlNotes>
        </React.Fragment>
    );
}

export default App;
