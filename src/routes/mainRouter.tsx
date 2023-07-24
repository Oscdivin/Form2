import {createBrowserRouter} from "react-router-dom"
import LayOut from "../components/common/LayOut"
import HomeSceen from "../pages/Home/HomeSceen"


export const mainRouter = createBrowserRouter([{
          path:"/",
          element: <LayOut/>,
          children: [{
                    index: true,
                    element: <HomeSceen/>
          }]
}])