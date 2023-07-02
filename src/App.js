import './styles/App.css';
import PersonalInfos from './components/PersonalInfos';
import Introduction from './components/Introduction';
import Skills from './components/Skills';
import Education from './components/Education';
import Experience from './components/Experience';
import React from 'react';

class App extends React.Component {
  convertToReadableName(key) {
    const words = key.split(/(?=[A-Z])/)
    const readable = []
    words.forEach((word, index) => {
        const splitWord = word.split('')
        index === 0 ? splitWord.splice(0, 1, splitWord[0].toUpperCase()) : splitWord.splice(0, 1, splitWord[0].toLowerCase())
        readable.push(splitWord.join(''))
    })
    return readable.join(' ')
  }

  render() {
    return (
      <div className="app">
        <div className='app--header'>
          <PersonalInfos convertToReadableName={this.convertToReadableName}/>
          <Introduction />
          </div>
        <div className='app--main'>
          <div className='main--left-side'>
            <Skills />
          </div>
          <div className='main--right-side'>
            <Education convertToReadableName={this.convertToReadableName}/>
            <Experience convertToReadableName={this.convertToReadableName}/>
          </div>
        </div>
        {<a id="background-attribution" href="https://www.vecteezy.com/free-vector/abstract-background">Abstract Background Vectors by Vecteezy</a>}
      </div>
    )
  }
}

export default App;
