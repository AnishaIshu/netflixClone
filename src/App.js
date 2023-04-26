import './App.css';
import Header from './components/Header';
import HomeBg from './components/HomeBg';
import Shows from './components/Shows'

function App() {
  return(
    <div>
    <div className='naavigation'>
       <Header />
  </div>
       <HomeBg />
       <Shows />
  </div>
  
  )
}

export default App;
