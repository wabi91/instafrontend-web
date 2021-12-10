import { HashRouter as Router, Routes, Route } from 'react-router-dom';

function App(): JSX.Element {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<div>HOME</div>} />
          <Route path="/potato" element={<div>Potato</div>} />
          <Route path="/banana" element={<div>Banana</div>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
