import Home from "./components/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import Contact from "./components/Contact";
import { Toaster } from "react-hot-toast";

function App() {
  window.addEventListener("error", (e) => {
    if (e.message.includes("ResizeObserver loop")) {
      e.preventDefault();
    }
  });

  

  return (
    <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900">
       <div className="fixed top-0 -z-10 h-full w-full">
       <div class="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      </div> 
      
      

      <div className="container mx-auto">
        <Router>
          <div>
            <Navbar />
            <Toaster position="top-center" toastOptions={{ duration: 3000 }} />

            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/services" element={<Services />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </div>
        </Router>
      </div>
    </div>
  );
}

export default App;
