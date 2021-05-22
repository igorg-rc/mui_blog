import { Carousel } from 'react-responsive-carousel'

export default () => {
  return (
    <>
      <Carousel autoPlay>
        <div>
          <img src="https://images.unsplash.com/photo-1499781350541-7783f6c6a0c8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&h=400&q=80" />
          <p>Legend 1</p>
        </div>
        <div>
          <img src="https://images.unsplash.com/photo-1589030343991-69ea1433b941?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&h=400&q=80" />
          <p>Legend 2</p>
        </div>
        <div>
          <img src="https://images.unsplash.com/photo-1559102877-4a2cc0e37fce?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&h=400&q=80" />
          <p>Legend 3</p>
        </div>
      </Carousel>
    </>
  )
}