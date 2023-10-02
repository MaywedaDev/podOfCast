import { Outlet} from "react-router-dom";
import Footer from "./footer";

const Layout = () => {
    return ( <div className="w-full min-h-screen overflow-hidden">
        <Outlet />
        <Footer />
    </div> );
}
 
export default Layout;