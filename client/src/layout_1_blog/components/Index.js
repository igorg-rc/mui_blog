import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Route, Switch } from 'react-router-dom'
import { Header } from './Header'
import { Posts } from './Posts'
import { Post } from './Post'
import { Create } from './Create'
import { Edit } from './Edit'
import { Form } from './Form'
import Carousel from '../components/plugins/Carousel'

export const Index = () => {
  return (
    <>
      <Header />
      <Switch>
        <Route path="/" component={Posts} exact />
        <Route path="/form" component={Form} />
        <Route path="/create" component={Create} />
        <Route path="/:id/edit" component={Edit} />
        <Route path="/:id" component={Post} />
      </Switch>
    </>
  )
}