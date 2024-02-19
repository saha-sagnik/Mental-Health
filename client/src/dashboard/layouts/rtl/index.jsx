import React, { useState } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { Portal, Box, useDisclosure } from "@chakra-ui/react";
import Footer from "../../components/footer/FooterAdmin.jsx";
import Sidebar from "../../components/sidebar/Sidebar.jsx";
import { RtlProvider } from "../../components/rtlProvider/RtlProvider.js";
import { SidebarContext } from "../../contexts/SidebarContext";
import routes from "../../routes.js";

export default function Dashboard(props) {
  const { ...rest } = props;
  const [fixed] = useState(false);
  const [toggleSidebar, setToggleSidebar] = useState(false);

  const getRoute = () => {
    return window.location.pathname !== "/rtl/full-screen-maps";
  };

  const getActiveRoute = (routes) => {
    let activeRoute = "Default Brand Text";
    for (let i = 0; i < routes.length; i++) {
      if (routes[i].collapse || routes[i].category) {
        let collapseActiveRoute = getActiveRoute(routes[i].items);
        if (collapseActiveRoute !== activeRoute) {
          return collapseActiveRoute;
        }
      } else {
        if (
          window.location.href.indexOf(routes[i].layout + routes[i].path) !== -1
        ) {
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
        let collapseActiveNavbar = getActiveNavbar(routes[i].items);
        if (collapseActiveNavbar !== activeNavbar) {
          return collapseActiveNavbar;
        }
      } else {
        if (
          window.location.href.indexOf(routes[i].layout + routes[i].path) !== -1
        ) {
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
        let collapseActiveNavbar = getActiveNavbarText(routes[i].items);
        if (collapseActiveNavbar !== activeNavbar) {
          return collapseActiveNavbar;
        }
      } else {
        if (
          window.location.href.indexOf(routes[i].layout + routes[i].path) !== -1
        ) {
          return routes[i].messageNavbar;
        }
      }
    }
    return activeNavbar;
  };

  const getRoutes = (routes) => {
    return routes.map((prop, key) => {
      if (prop.layout === "/rtl") {
        return (
          <Route
            path={prop.layout + prop.path}
            component={prop.component}
            key={key}
          />
        );
      }
      if (prop.collapse || prop.category) {
        return getRoutes(prop.items);
      } else {
        return null;
      }
    });
  };

  const { onOpen } = useDisclosure();

  document.documentElement.dir = "rtl";

  return (
    <RtlProvider>
      <SidebarContext.Provider
        value={{
          toggleSidebar,
          setToggleSidebar,
        }}
      >
        <Sidebar routes={routes} display="none" {...rest} />
        <Box
          float="left"
          minHeight="100vh"
          height="100%"
          overflow="auto"
          position="relative"
          maxHeight="100%"
          w={{ base: "100%", xl: "calc( 100% - 290px )" }}
          maxWidth={{ base: "100%", xl: "calc( 100% - 290px )" }}
          transition="all 0.33s cubic-bezier(0.685, 0.0473, 0.346, 1)"
          transitionDuration=".2s, .2s, .35s"
          transitionProperty="top, bottom, width"
          transitionTimingFunction="linear, linear, ease"
        >
          <Portal>
            <Box>
            </Box>
          </Portal>

          {getRoute() ? (
            <Box mx="auto" p={{ base: "20px", md: "30px" }} pe="20px" minH="100vh" pt="50px">
              <Switch>
                {getRoutes(routes)}
                <Redirect from="/" to="/rtl/default" />
              </Switch>
            </Box>
          ) : null}
          <Box>
            <Footer />
          </Box>
        </Box>
      </SidebarContext.Provider>
    </RtlProvider>
  );
}
