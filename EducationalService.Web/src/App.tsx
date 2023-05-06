import { RouteObject, RouterProvider, createBrowserRouter } from "react-router-dom";
import Page from "./Utils/Page";

function App() {
  const pages: RouteObject[] = Page.All().map((page): RouteObject => {
    return {
      path: page.Path,
      element: page.Component,
      errorElement: page.Error,
    };
  });
  const router = createBrowserRouter(pages);

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;