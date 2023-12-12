import Nav from "./component/Nav"
import Promo from "./component/Promo"
import Intro1 from "./component/Intro1"
import Intro2 from "./component/Intro2"
import Intro3 from "./component/Intro3"
import ProbPassing from "./component/ProbPassing"
import About from "./component/About"
import Home from "./component/Home"
import image from "./assets/images/alex.jpg"
import ReactPlayer from "react-player"
import { Routes, Route, Link } from "react-router-dom"
/*function handleClick() {
  let randomNum = Math.floor(Math.random() * 3) + 1
  console.log(randomNum)
  let userInput = prompt('type a number');
  alert(`Computer number: ${randomNum}, Your guess: ${userInput}`)
}*/
function App() {
  const vdurl = "https://youtu.be/LIosDR4m-i8"
  return (
    <>
      <div className="app">
        <nav className="nav">
          <Link className="nav-link" to="/"><b>Home</b></Link>
          <Link className="nav-link" to="/about-us"><b>About us</b></Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about-us" element={<About />}></Route>
        </Routes>
      </div>
      <img height={400} width={400} src={image} alt="alex" />

      {/* second way of importing image*/}
      <img height={400} width={400} src={require("./assets/images/alexandra.jpg")} alt="second way" />
      <div>
        <ReactPlayer url={vdurl}
          playing={false}
          volume={1}
        />
      </div>
      {/* <Nav />
      <Promo />
      <Intro1 />
      <Intro2 />
      <Intro3 />
       <ProbPassing title="This is Prob" />
      <div>
        <h1>Task: Add a button and handle a click event</h1>
        <button onClick={handleClick}>Guess the number between 1 and 3</button>
      </div>*/}

    </>
  )
}

export default App
