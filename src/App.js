import React from "react";
import "./app.css"
import { Navbar, Home, About, Menu, Chef, Video, Award, Gallery, Contact, Footer } from "./containers";


const App = () => {
    return (
        <div class="app">
            <Navbar />
            <Home />
            <About />
            <Menu />
            <Chef />
            <Video />
            <Award />
            <Gallery />
            <Contact />
            <Footer />
        </div>
    )
}

export default App