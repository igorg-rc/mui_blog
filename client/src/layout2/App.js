import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./Carousel.css"
import Carousel from './Carousel'

export const App = () => {
  return (
    <div style={{ textAlign: 'center' }}>
      <h3>Hello from layout 2</h3>
      <Carousel />
    </div>
  )
}