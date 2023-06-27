import './styles/App.css';
import PersonalInfos from './components/PersonalInfos';
import Introduction from './components/Introduction';
import Skills from './components/Skills';
import Education from './components/Education';
import Experience from './components/Experience';
import BonusSection from './components/BonusSection';

function App() {
  return (
    <div className="app">
      <PersonalInfos />
      <Introduction />
      <main>
        <div className='main--left-side'>
          <Skills />
        </div>
        <div className='main--right-side'>
          <Education />
          <Experience />
        </div>
      </main>
      {/* <a href="https://www.vecteezy.com/free-vector/abstract-background">Abstract Background Vectors by Vecteezy</a> */}
      {/* <a id="backgrond-attribution" href="https://www.vecteezy.com/free-vector/abstract-background">Abstract Background Vectors by Vecteezy</a> */}
    </div>
  );
}

export default App;
