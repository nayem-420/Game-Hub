import { createBrowserRouter } from "react-router";
import Footer from "../Components/Footer";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Footer />
    },
]);