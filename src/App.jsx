import { Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home.jsx'

import './App.css'
import Online from './pages/online/Online.jsx';
import Page from './pages/course/Course.jsx';
import List from './pages/list/List.jsx';
import EventsGrid from './pages/View/View.jsx';
import SignIn from './pages/Sign-in/Sign-in.jsx';
import AboutPage from './pages/About/About.jsx';
import Contacts from './pages/Contacts/Contacs.jsx';
import Bloging from './pages/Blog/Blog.jsx';
import SignUp from './pages/Sign-up/Sign-up.jsx';
function App() {
  return (
   <div>
      <Routes>
        <Route>
          <Route path='*' element={<Home />}/>
          <Route path='/' element={<Home />}/>
          <Route path='/page' element={<Page/>}/>
          <Route path='/bloging' element={<Bloging/>}/>
          <Route path='/list' element={<List/>}></Route>
          <Route path="/eventsgrid" element={<EventsGrid />} />
          <Route path='/sign-in' element={<SignIn/>}></Route>
          <Route path='Contacts' element={<Contacts/>}/>
          <Route path='/signup' element={<SignUp/>}></Route>
        </Route>
      </Routes>
   </div>
  )
}

export default App;