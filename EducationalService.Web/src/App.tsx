import { RouteObject, RouterProvider, createBrowserRouter } from "react-router-dom";
import Page from "./Utils/Page";
import { useState } from "react";
import { SideMenuWidthContext } from "./Context/SideMenuWidthContext";
import { SideMenuType } from "./Components/SideMenu/Consts/SideMenuType";
import { SettingContext } from "./Context/SettingContext";
import { SettingDomain } from "./Models/Domain/SettingDomain";

const App = () => {
  const [ sideMenuWidth, setSideMenuWidth ] = useState(SideMenuType.Icon);
  const [ setting, setSetting ] = useState(SettingDomain.default);
  
  const pages: RouteObject[] = Page.All().map((page): RouteObject => {
    return {
      path: page.Path,
      element: page.Component,
      errorElement: page.Error,
    };
  });


  const router = createBrowserRouter(pages);

  return (
    <SettingContext.Provider value={{ setting, setSetting }}>
      <SideMenuWidthContext.Provider value={{ sideMenuWidth, setSideMenuWidth }}>
        <RouterProvider router={router} />
      </SideMenuWidthContext.Provider>
    </SettingContext.Provider>
  );
}

export default App;
