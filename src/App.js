import Nav from "./component/Nav"
import Promo from "./component/Promo"
import Intro1 from "./component/Intro1"
import Intro2 from "./component/Intro2"
import Intro3 from "./component/Intro3"
import ProbPassing from "./component/ProbPassing"
function handleClick() {
  let randomNum = Math.floor(Math.random() * 3) + 1
  console.log(randomNum)
  let userInput = prompt('type a number');
  alert(`Computer number: ${randomNum}, Your guess: ${userInput}`)
}
function App() {
  return (
    <>
      {/* <Nav />
      <Promo />
      <Intro1 />
      <Intro2 />
      <Intro3 />
       <ProbPassing title="This is Prob" />*/}
      <div>
        <h1>Task: Add a button and handle a click event</h1>
        <button onClick={handleClick}>Guess the number between 1 and 3</button>
      </div>

    </>
  )
}

export default App
