import Card from "./Card"
import { petsData } from "./data/petsData"

function CardContainer() {
  return (
    <div>
      <div className="container my-5">
        <h2 className="text-center mb-4">Available pets</h2>
        <div className="row">
          {petsData.map(pet => (
            <Card{...pet}/>
          ))}
        </div>
      </div>
    </div>
  )
}

export default CardContainer
