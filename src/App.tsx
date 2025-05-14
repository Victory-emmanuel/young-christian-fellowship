import React from "react";
import { Navbar } from "./components/navbar";
import { Hero } from "./components/hero";
import { About } from "./components/about";
import { Programs } from "./components/programs";
import { Devotionals } from "./components/devotionals";
import { JoinMovement } from "./components/join-movement";
import { WatchListen } from "./components/watch-listen";
import { Partner } from "./components/partner";
import { Contact } from "./components/contact";
import { Footer } from "./components/footer";

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <About />
      <Programs />
      <Devotionals />
      <JoinMovement />
      <WatchListen />
      <Partner />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;