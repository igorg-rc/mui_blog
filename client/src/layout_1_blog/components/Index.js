import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Route, Switch } from 'react-router-dom'
import { Header } from './Header'
import { Posts } from './Post/Posts'
import { Post } from './Post/Post'
import { Create } from './Post/Create'
import { Edit } from './Post/Edit'
import { Form } from './Post/Form'
// import Carousel from '../components/plugins/Carousel'

export const Index = () => {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/" component={Posts} />
        <Route path="/create" component={Create} />
        <Route path="/form" component={Form} />
        <Route path="/edit/:id" component={Edit} />
        <Route path="/:id" component={Post} />
      </Switch>
    </>
  )
}