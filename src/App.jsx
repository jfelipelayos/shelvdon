import React, {useState} from 'react'
import { NavMenu } from './components/NavMenu/NavMenu'
import { ShelvdonApp } from './components/ShelvdonApp/ShelvdonApp'
import { MainView } from './components/MainView/MainView'
import { Home } from './components/Sections/Home/Home'
import { Favorites } from './components/Sections/Favorites/Favorites'
import { ToRead } from './components/Sections/ToRead/ToRead'
import { Finished } from './components/Sections/Finished/Finished'
import { Search } from './components/Sections/Search/Search'



function App() {
  const [currentView, setCurrentView] = useState('home')
  return (
    <ShelvdonApp>
      <NavMenu currentView={currentView} setCurrentView={setCurrentView}/>
      <MainView>
        <ul>
          {
            currentView === 'home' ? (<Home/>) : 
            currentView === 'favorites' ? (<Favorites/>) :
            currentView === 'toread' ? (<ToRead/>) :
            currentView === 'finished' ? (<Finished/>) :
            currentView === 'search' ? (<Search/>) : (<div>404 Section not found</div>)
          }
        </ul>
      </MainView>
    </ShelvdonApp>
  )
}

export default App