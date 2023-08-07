import { useState } from 'react'
import { Button } from '@progress/kendo-react-buttons';

import { useNavigate, useLocation } from 'react-router-dom'
import { Drawer, DrawerContent, DrawerSelectEvent } from '@progress/kendo-react-layout';
import {
  AppBar,
  AppBarSection,
  AppBarSpacer,
} from "@progress/kendo-react-layout";

type NavigationItem = {
  name: string; 
  icon: string;
  selected?: boolean , 
  route: string
}
type Separator = {
  separator: boolean,
}

const items: Array<NavigationItem | Separator> = [
  { name: 'dashboard', icon: 'k-i-grid' , route: '/' },
  { separator: true},
  { name: 'planning', icon: 'k-i-calendar', route: '/planning' },
  { separator: true},
  { name: 'profile', icon: 'k-i-user', route: '/profile' },  
  { separator: true},
  { name: 'info', icon: 'k-i-information', route: '/info' },
  { separator: true},
];

export interface DrawerProps {
  expanded: boolean,
  selectedId: number,
  isSmallerScreen: boolean,
}

const DrawerContainer = (props: any) => {
  const navigate = useNavigate()
  const location = useLocation()
  const [state, setState] = useState<DrawerProps>({
    expanded: true,
    selectedId: items.findIndex(x => x.selected === true),
    isSmallerScreen: window.innerWidth < 768
  })

  const handleClick = (e: any) => {
    setState(prevState => ({
      ...prevState,
      expanded: !prevState.expanded
    }))
  }

  const handleSelect = (e: DrawerSelectEvent) => {
    console.log(e.itemTarget.props);
    navigate(e.itemTarget.props.route)
  }  
 
  return <div style={{width: '100%', height: '100%'}}>

      <AppBar>
        <AppBarSection>
          <Button className="k-button k-button-md k-rounded-md k-button-flat k-button-flat-base" onClick={handleClick}>
            <span className="k-icon k-i-menu" />
          </Button>
        </AppBarSection>

        <AppBarSpacer
          style={{
            width: 4,
          }}
        />

        <AppBarSection>
          <h3 className="title">ADMIN</h3>
        </AppBarSection>
        <AppBarSpacer />

        <AppBarSection>          
        </AppBarSection>
      </AppBar>

      <Drawer
          expanded={state.expanded}
          animation={{duration: 100}}
          items={items.map((item) => ({
              ...item,
              text: `custom.${item.name}`,
              selected: location.pathname.includes(item.route)
            }))
          }
          position='start'
          mode={state.isSmallerScreen ? 'overlay' : 'push'}
          mini={state.isSmallerScreen ? false : true}
          onOverlayClick={handleClick}
          onSelect={handleSelect}
        >
          <DrawerContent >
            {props.children}
          </DrawerContent>
        </Drawer>
    </div>;
};

export default DrawerContainer;