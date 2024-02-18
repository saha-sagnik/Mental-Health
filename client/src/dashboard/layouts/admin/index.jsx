import React, { useState } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { Portal, Box, useDisclosure } from '@chakra-ui/react';
import Footer from '../../components/footer/FooterAdmin.jsx';
import Sidebar from '../../components/sidebar/Sidebar.jsx';
import { SidebarContext } from '../../contexts/SidebarContext.js';
import routes from '../../routes.js';

export default function Dashboard(props) {
  const { ...rest } = props;
  const [fixed] = useState(false);
  const [toggleSidebar, setToggleSidebar] = useState(false);
  const { onOpen } = useDisclosure();

  const getRoute = () => {
    return window.location.pathname !== '/admin/full-screen-maps';
  };

  const getActiveRoute = (routes) => {
    let activeRoute = 'Default Brand Text';
    for (let i = 0; i < routes.length; i++) {
      if (routes[i].collapse || routes[i].category) {
        let active = getActiveRoute(routes[i].items);
        if (active !== activeRoute) {
          return active;
        }
      } else {
        if (window.location.href.indexOf(routes[i].layout + routes[i].path) !== -1) {
          return routes[i].name;
        }
      }
    }
    return activeRoute;
  };

  const getActiveNavbar = (routes) => {
    let activeNavbar = false;
    for (let i = 0; i < routes.length; i++) {
      if (routes[i].collapse || routes[i].category) {
        let active = getActiveNavbar(routes[i].items);
        if (active !== activeNavbar) {
          return active;
        }
      } else {
        if (window.location.href.indexOf(routes[i].layout + routes[i].path) !== -1) {
          return routes[i].secondary;
        }
      }
    }
    return activeNavbar;
  };

  const getActiveNavbarText = (routes) => {
    let activeNavbar = false;
    for (let i = 0; i < routes.length; i++) {
      if (routes[i].collapse || routes[i].category) {
        let active = getActiveNavbarText(routes[i].items);
        if (active !== activeNavbar) {
          return active;
        }
      } else {
        if (window.location.href.indexOf(routes[i].layout + routes[i].path) !== -1) {
          return routes[i].messageNavbar;
        }
      }
    }
    return activeNavbar;
  };

  const getRoutes = (routes) => {
    return routes.map((prop, key) => {
      if (prop.layout === '/admin') {
        return <Route path={prop.layout + prop.path} component={prop.component} key={key} />;
      }
      if (prop.collapse || prop.category) {
        return getRoutes(prop.items);
      }
      return null;
    });
  };

  return (
    <Box>
      <Box>
        <SidebarContext.Provider value={{ toggleSidebar, setToggleSidebar }}>
          <Sidebar routes={routes} display='none' {...rest} />
          <Box
            float='right'
            minHeight='100vh'
            height='100%'
            overflow='auto'
            position='relative'
            maxHeight='100%'
            w={{ base: '100%', xl: 'calc( 100% - 290px )' }}
            maxWidth={{ base: '100%', xl: 'calc( 100% - 290px )' }}
            transition='all 0.33s cubic-bezier(0.685, 0.0473, 0.346, 1)'
            transitionDuration='.2s, .2s, .35s'
            transitionProperty='top, bottom, width'
            transitionTimingFunction='linear, linear, ease'>
            <Portal>
              <Box>
                <Navbar
                  onOpen={onOpen}
                  logoText={'Horizon UI Dashboard PRO'}
                  brandText={getActiveRoute(routes)}
                  secondary={getActiveNavbar(routes)}
                  message={getActiveNavbarText(routes)}
                  fixed={fixed}
                  {...rest}
                />
              </Box>
            </Portal>

            {getRoute() ? (
              <Box mx='auto' p={{ base: '20px', md: '30px' }} pe='20px' minH='100vh' pt='50px'>
                <Switch>
                  {getRoutes(routes)}
                  <Redirect from='/' to='/admin/default' />
                </Switch>
              </Box>
            ) : null}
            <Box>
              <Footer />
            </Box>
          </Box>
        </SidebarContext.Provider>
      </Box>
    </Box>
  );
}
