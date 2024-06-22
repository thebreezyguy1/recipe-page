import './App.css'
import Description from './components/Description'
import Ingredients from './components/Ingredients'
import Instructions from './components/Instructions'
import Nutrition from './components/Nutrition'
import foodImg from "./assets/image-omelette.jpeg"

function App() {

  return (
    <div className="main-container">
      <img className="food-img" src={foodImg} alt="" />
      <div className="recipe-container">
          <Description />
          <Ingredients />
          <Instructions />
          <Nutrition />
      </div>
    </div>
  )
}

export default App
