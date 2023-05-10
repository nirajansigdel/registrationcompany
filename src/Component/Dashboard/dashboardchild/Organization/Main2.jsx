import React, { useState } from 'react';
import '../Main2.css';
import Nav from '../../Navbar/Nav';
import { Link } from 'react-router-dom';

export default function Admin() {
  const [activeLevel, setActiveLevel] = useState('');

  const handleLevelClick = (level) => {
    setActiveLevel(level);
  };

  return (
    <div className="main">
      <Nav />
      <div className="container">
        <div className="body">
          <div className="grandchild">
            <Link
              to="/View"
              className={`grandchild_body ${activeLevel === 'level1' ? 'active' : ''}`}
              onClick={() => handleLevelClick('level1')}
            >
              <div className="grandchild_content">
                <div className="grandchild_item">View</div>
              </div>
            </Link>
            <Link
              to=""
              className={`grandchild_body ${activeLevel === 'level2' ? 'active' : ''}`}
              onClick={() => handleLevelClick('level2')}
            >
              <div className="grandchild_content">
                <div className="grandchild_item">Department</div>
              </div>
            </Link>
            <Link
              to=""
              className={`grandchild_body ${activeLevel === 'level3' ? 'active' : ''}`}
              onClick={() => handleLevelClick('level3')}
            >
              <div className="grandchild_content">
                <div className="grandchild_item">Module</div>
              </div>
            </Link>

          </div>
          <div className="admin">
            <button>Back</button>
          </div>
        </div>
      </div>
    </div>
  );
}
