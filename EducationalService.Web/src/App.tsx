import { RouteObject, RouterProvider, createBrowserRouter } from "react-router-dom";
import Page from "./Utils/Page";
import { useState } from "react";
import { SideMenuWidthContext } from "./Context/SideMenuWidthContext";
import { SideMenuType } from "./Components/SideMenu/Consts/SideMenuType";

const App = () => {
  const [ sideMenuWidth, setSideMenuWidth ] = useState(SideMenuType.Icon);
  const pages: RouteObject[] = Page.All().map((page): RouteObject => {
    return {
      path: page.Path,
      element: page.Component,
      errorElement: page.Error,
    };
  });
  const router = createBrowserRouter(pages);

  return (
    <SideMenuWidthContext.Provider value={{ sideMenuWidth, setSideMenuWidth }}>
      <RouterProvider router={router} />
    </SideMenuWidthContext.Provider>
  );
}

export default App;
