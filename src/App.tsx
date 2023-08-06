import { useState, SyntheticEvent } from 'react'
import "@progress/kendo-theme-default/dist/all.css";
import "./App.css";
// import MyDatePicker from "./components/MyDatePicker";
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom'
import { Drawer, DrawerContent, DrawerSelectEvent } from '@progress/kendo-react-layout';

type NavigationItem = {
  name: string; 
  icon: string;
  selected?: boolean , 
  route: string
}

const items: Array<NavigationItem> = [
  { name: 'dashboard', icon: 'k-i-grid' , route: '/' },
  { name: 'planning', icon: 'k-i-calendar', route: '/planning' },
  { name: 'profile', icon: 'k-i-user', route: '/profile' },
  // { separator: true },
  { name: 'info', icon: 'k-i-information', route: '/info' }
];

export interface DrawerProps {
  expanded: boolean,
  selectedId: number,
  isSmallerScreen: boolean,
}

function App() {
  const navigate = useNavigate()
  const location = useLocation()
  const [state, setState] = useState<DrawerProps>({
    expanded: true,
    selectedId: items.findIndex(x => x.selected === true),
    isSmallerScreen: window.innerWidth < 768
  })
  const handleClick = (e: any) => {
    
  }

  const handleSelect = (e: DrawerSelectEvent) => {
    console.log(e.itemTarget.props);
    navigate(e.itemTarget.props.route)
  }  

  return (
    <div className="App">
       
       <Drawer
          expanded={true}
          animation={{duration: 100}}
          items={items.map((item) => ({
                ...item,
                text: `custom.${item.name}`,
                selected: location.pathname.includes(item.route)
            }))
          }
          position='start'
          mode={false ? 'overlay' : 'push'}
          mini={false ? false : true}

          onOverlayClick={handleClick}
          onSelect={handleSelect}
        >
            <DrawerContent style={{height: 1066}}>
                <Routes>
                  <Route path="/" element={<div>HOME</div>} />
                  <Route path="/planning" element={<div>PLANNING</div>} />
                  <Route path="/profile" element={<div>PROFILE</div>} />
                  <Route path="/info" element={<div>INFO</div>} />
                </Routes>
            </DrawerContent>
        </Drawer>
    </div>
  )
}

export default App
