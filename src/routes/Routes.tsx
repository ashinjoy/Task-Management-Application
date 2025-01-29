import { createBrowserRouter, RouteObject } from "react-router-dom";
import Home from "../pages/home/Home";
import { TaskList } from "../pages/taskList/TaskListView";
import { ProtectedRoute } from "./ProtectedRoute";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/tasks",
    element: (
      <ProtectedRoute>
        <TaskList />
      </ProtectedRoute>
    ),
  },
];
const router = createBrowserRouter(routes);
export default router;
