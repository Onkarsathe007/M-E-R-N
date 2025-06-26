const router = createBrowserRouter([
    {
        path: "/",
        element: <HomePage />,
        errorElement: <div> 404 Page Not Foud </div>
    },
    {
        path: "/about/:user1",    //Suppose this we have, now 
        element: <Header />,
        errorElement: <div> 404 Page Not Foud </div>
    }
])



//so in the about file:
import { useparams } from 'react-router-dom';

export default function test {
    const obj = useParams();   ///all the paramerts object this will return.
    console.log(obj);
}
