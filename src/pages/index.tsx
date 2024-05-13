import { Route, Routes } from "react-router-dom";
import User from "./user";
import AddUser from "./user/add-user";
import EditUser from "./user/edit-user";

const routes = [
  { path: "/", element: <>Home</> },
  { path: "/user", element: <User /> },
  { path: "/user/:id", element: <EditUser /> },
  { path: "/user/add", element: <AddUser /> },
  { path: "/role", element: <>Role</> },
  { path: "/role/add", element: <>Role Add</> },
  { path: "*", element: <h1>404</h1> }, // 404 Page
];

function PageRoutes() {
  return (
    <Routes>
      <>
        {routes.map((route, index) => (
          <Route key={index} path={route.path} element={route.element} />
        ))}
      </>
    </Routes>
  );
}
export default PageRoutes;
