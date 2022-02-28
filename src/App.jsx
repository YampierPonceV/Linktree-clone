
import Wrapper from './Components/Wrapper'
import './App.css'
import Profile from './Components/Profile/main'
import LinksSocial from './Components/LinksSociales/main'

function App() {
  

  return (
    <div className="App">
      <Wrapper>
        <Profile />
        <LinksSocial />
      </Wrapper>
    </div>
  )
}

export default App
