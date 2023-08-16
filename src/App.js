
import './App.css';

import { motion } from "framer-motion";

import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      <Home />
      asdf
      <motion.div className='box' animate={{ x: 0 }}>
        asdffe
      </motion.div>
    </div>
  );
}

export default App;
