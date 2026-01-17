import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import HomeDesktop from '../components/HomeDesktop';
import HomeMobile from '../components/HomeMobile';
import Header from '../components/Header';
import Research from '../components/Research';
import Publications from '../components/Publication';
import Blog from '../components/Blog';
import BlogPost from '../components/BlogPost';
import Contacts from '../components/Contact';
import AboutDesktop from '../components/AboutDesktop'
import AboutMobile from '../components/AboutMobile'
import { blogPosts } from '../data/blogPosts';
import { publications } from '../data/publications';
import { researchInterests } from '../data/researchInterests';

export default function App() {
  const [width, setWidth] = useState(() => window.innerWidth);
  const [activeSection, setActiveSection] = useState('home')
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
  }

  useEffect(() => {
    window.addEventListener('resize', handleWindowSizeChange);
    return () => {
      window.removeEventListener('resize', handleWindowSizeChange);
    };
  }, []);

  const isMobile = width <= 768;

  return (
    <Router>
      <div className="min-h-screen text-black flex flex-col items-start">
          
          <Header 
              isMobile={ isMobile }
              activeSection={activeSection}
              setActiveSection={setActiveSection}
              mobileMenuOpen={mobileMenuOpen}
              setMobileMenuOpen={setMobileMenuOpen}  
          />

          <main className="w-full p-[40px]">
              <Routes>

                <Route 
                  path="/"
                  element={
                    isMobile 
                      ? <HomeMobile blogPosts={blogPosts} researchInterest={researchInterests} publications={publications}/>
                      : <HomeDesktop blogPosts={blogPosts} researchInterest={researchInterests} publications={publications}/>
                    }
                />

                <Route 
                  path="/about"
                  element={
                    isMobile ? <AboutMobile /> : <AboutDesktop />
                  }
                />

                <Route 
                  path="/publications"
                  element={
                    <Publications publications={publications} />
                  }
                />

                <Route 
                  path="/research"
                  element={
                    <Research researchInterest={researchInterests} />
                  }
                />

                <Route 
                  path="/blog"
                  element={
                    <Blog blogPosts={blogPosts} />
                  }
                />

                <Route 
                  path="/blog/:id"
                  element={
                    <BlogPost />
                  }
                />

                <Route 
                  path="/contact"
                  element={
                    <Contacts />
                  }
                />

              </Routes>
          </main>

      

      </div>
    </Router>
  );
}
