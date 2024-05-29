import { createBrowserRouter } from "react-router-dom";

import MainPage from "./pages/MainPage";
import ReposPage from "./pages/ReposPage";
import NotFoundPage from "./pages/NotFoundPage";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
    errorElement: (
      <NotFoundPage text="Ops... A página que você está procurando não existe!" />
    ),
  },
  {
    path: "/repositories/:username",
    element: <ReposPage />
  },
]);

export default routes;
