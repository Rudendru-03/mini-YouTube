import { Provider } from "react-redux";
import "./App.css";
import Body from "./components/Body";
import Header from "./components/Header";
import store from "./utils/Store";
import MainContainier from "./components/MainContainer";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Demo from "./components/Demo";
import NextPage from "./components/NextPage";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      {
        path: "/",
        element: <MainContainier className="col-span-11" />,
      },
      {
        path: "watch",
        element: <NextPage />,
      },
    ],
  },
  ,
  {
    path: "/demo",
    element: <Demo />,
  },
]);

function App() {
  return (
    <Provider store={store}>
      <div className="">
        <Header />
        {/* <Body /> */}
        <RouterProvider router={appRouter} />
      </div>
    </Provider>
  );
}

export default App;
