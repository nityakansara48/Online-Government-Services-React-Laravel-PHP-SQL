import { Route, Switch } from 'react-router-dom';
import './App.css'; 
import {Home, About, Login, Registration, Contact, Service, Resident, Inspector, Admin, Blog, Admin_old, Inspector_old, Resident_old} from './components';

const App = () => {

  return (
    <>
    <div>
      <div className='div-1'>
        <Switch>
          <Route exact path='/' component={Home}></Route>
          <Route exact path='/home' component={Home}></Route>
          <Route exact path='/service' component={Service}></Route>
          <Route exact path='/about' component={About}></Route>
          <Route exact path='/login' component={Login}></Route>
          <Route exact path='/register' component={Registration}></Route>
          <Route exact path='/contact' component={Contact}></Route>
          <Route exact path='/blog' component={Blog}></Route>
          <Route exact path='/admin' component={Admin}></Route>
          <Route exact path='/admin_old' component={Admin_old}></Route>
          <Route exact path='/inspector' component={Inspector}></Route>
          <Route exact path='/inspector_old' component={Inspector_old}></Route>
          <Route exact path='/resident' component={Resident}></Route>
          <Route exact path='/resident_old' component={Resident_old}></Route>
        </Switch>
      </div>      
    </div>
    
    </>
  )
}

export default App