import React, { useEffect } from "react";
import {
  Route,
  Routes,
  Outlet,
  Link
} from "react-router-dom";
import {
  AskStoriesPage,
  BestStoriesPage,
  JobStoriesPage,
  NewStoriesPage,
  ShowStoriesPage,
  TopStoriesPage,
} from './views'

import ScrollToTopButton from "./components/buttonScrollTop";

function App() {

  const Container = ({ children }) => {
    return children ? (
      <div className="container mx-auto px-4 py-1">
        <nav className="bg-orange-500 px-4 py-1">
          <div className="container mx-auto flex items-center justify-between">
            <div className="flex space-x-4">
              <Link to='/' className="text-black font-bold text-base">Hacker News</Link>
              <Link to='/top' className="text-black hover:text-gray-200">Top</Link>
              <Link to='/new' className="text-black hover:text-gray-200">New</Link>
              <Link to='/show' className="text-black hover:text-gray-200">Show</Link>
              <Link to='/ask' className="text-black hover:text-gray-200">Ask</Link>
              <Link to='/Jobs' className="text-black hover:text-gray-200">Jobs</Link>
            </div>
            <div className="text-black hover:text-gray-200">Login</div>
          </div>
        </nav>
        <div className="bg-[#F6F6EF] min-h-screen w-full">
            {children}
            <ScrollToTopButton/>
        </div>
        <footer className="bg-[#F6F6EF] py-4 border-t-4 border-orange-500">
          <div className="container mx-auto text-center text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} Hackernews. created by azputra.
          </div>
        </footer>
      </div>
    ) : (
      <Outlet />
    );
  };
  
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Container><BestStoriesPage /></Container>} />
        <Route exact path="/new" element={<Container><NewStoriesPage /></Container>} />
        <Route exact path="/top" element={<Container><TopStoriesPage /></Container>} />
        <Route exact path="/show" element={<Container><ShowStoriesPage /></Container>} />
        <Route exact path="/ask" element={<Container><AskStoriesPage /></Container>} />
        <Route exact path="/Jobs" element={<Container><JobStoriesPage /></Container>} />
      </Routes>
    </>
  );
}

export default App;
