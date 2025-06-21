
# Always make it run for one then scale it.

# Routing
```
import { Provider } from "react-redux";
import Body from "./components/Body";
import Head from "./components/Head";
import store from "./utils/store";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainContainer from "./components/MainContainer";
import WatchPage from "./components/WatchPage";

const appRouter = createBrowserRouter([{
  path: '/',
  element: <Body />,
  children: [
    {
      path: "/",
      element: <MainContainer />,
    },
    {
      path: "/watch",
      element: <WatchPage/>
    }
  ]
}])

function App() {
  return (
    <Provider store={store}>
    <div>
      <Head />
      <RouterProvider router={appRouter} />
    </div>
    </Provider>
  );
}
export default App;
```


- Body.jsx

```
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
const Body = () => {
    return (
        <div className="flex">
            <Sidebar />
            <Outlet />
        </div>
    )
}
export default Body;
```
- <Head /> is load everytime
- On '/' load <Body/> on App() <RouterProvider router={appRouter} />
- RouterProvider will load body and outlet is inside body container
- on body.jsx outlet is created
- on <Outlet /> children will be loaded according to route

# Higher order component

- It is a function that takes the component and return a new component

# Debouncing
- Difference between 2 keystroke is very less then decline the API call

- Debouncing with 200ms
  - Difference between 2 keystroke <200ms then Decline the api call
  - >200ms then make the api call