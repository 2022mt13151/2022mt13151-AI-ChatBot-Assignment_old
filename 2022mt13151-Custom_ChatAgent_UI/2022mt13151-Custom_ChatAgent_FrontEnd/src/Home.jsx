import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Prompt from './Prompt';
import KnowledgeBase from './KnowledgeBase';

const Home = () => {
  return (
    <Router>
        <div style={{ textAlign: 'center', marginTop: '100px' }}>
        <h3 style={{color: "Black", fontFamily:"Helvetica"}}>(2022mt13151)</h3>
        <h1 style={{color: "Black", fontFamily:"Helvetica"}}>AI-Chatbot Assignment</h1>
        {/*<h1 style={{color: "Black", fontFamily:"Helvetica"}}>AI Chat Agent</h1>*/}
            <div style={{ textAlign: 'center', marginTop: '100px' }}>
                {/* Navigation Links */}
                <nav>
                <Link to="/prompt"><h3 style={{ fontFamily:"sans-serif"}}>Chat with AI Agent</h3></Link>{/*&nbsp;&nbsp;*/}
                <Link to="/knowledge-base"><h3 style={{ fontFamily:"sans-serif"}}>Create Knowledge Base</h3></Link>
                
                {/*<Link to="/prompt">Chat with AI Agent</Link>&nbsp;&nbsp;
                <Link to="/knowledge-base">Create Knowledge Base</Link>*/}

                </nav>
                <br/>
                {/* Routes */}
                <Routes>
                    <Route path="/prompt" element={<Prompt/>} />
                    <Route path="/knowledge-base" element={<KnowledgeBase />} />
                </Routes>
            </div>
        </div>
    </Router>
  );
};

export default Home;
