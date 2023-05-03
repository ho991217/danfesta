import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./home/Home";
import Modal from "../components/modal/Modal";
import Admin from "./admin/Admin";
import { useLogin } from "hooks/UseLogin";
import Ticket from "./ticket/Ticket";
import TicketPopup from "components/ticket/TicketPopup";
import GlobalNavBar from "components/gnb/GlobalNavBar";
import { IRoutePath } from "./IRoutePath";
import LiveMap from "./live-map/LiveMap";
import AnimatedRoutes from "./AnimatedRoutes";
import QuickdrawBar from "components/quickdraw/QuickdrawBar";
import Notice from "./notice/Notice";

function Router() {
   const { isAdmin } = useLogin();

   return (
      <BrowserRouter>
         <GlobalNavBar />
         <QuickdrawBar />
         <AnimatedRoutes />
         <Routes>
            <Route path={IRoutePath["HOME"]} element={<Home />} />
            <Route path={IRoutePath["TICKET"]} element={<Ticket />} />
            <Route
               path={IRoutePath["TICKETING"]}
               element={<div>ticketing</div>}
            />
            <Route path={IRoutePath["EVENTS"]} element={<div>event</div>} />
            <Route path={IRoutePath["LIVEMAP"]} element={<LiveMap />} />
            <Route path={IRoutePath["NOTICE"]} element={<Notice />} />
            <Route
               path={IRoutePath["ADMIN"]}
               element={
                  isAdmin() ? (
                     <Admin />
                  ) : (
                     <div>관리자만 접근가능한 페이지입니다.</div>
                  )
               }
            />
            <Route path={IRoutePath["LINEUP"] + "/*"} element={<></>} />
            <Route path="*" element={<h1>Not Found</h1>} />
         </Routes>

         <Modal />
         <TicketPopup />
      </BrowserRouter>
   );
}

export default Router;
