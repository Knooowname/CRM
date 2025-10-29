import { BrowserRouter, Outlet, Route, Routes, useLocation } from "react-router";
import "./App.css";
import { Header } from "./components/Header";
import { HomePage } from "./pages/HomePage";
import { ClientsPage } from "./pages/ClientsPage";
import { ServicesPage } from "./pages/ServicesPage";
import { AnalyticsPage } from "./pages/AnalyticsPage";
import { RegisterPage } from "./pages/RegisterPage";
import { NewAuthPage } from "./pages/AuthPage";
import { useEffect } from "react";
import { ModalLayout } from "./components/ModalLayout";
import { ModalFormAddClient } from "./components/ui/ModalFormAddClient";
import { useAppSelector } from "./redux/hooks";
import { ModalDetails } from "./components/ui/ModalDetails";
import type { User } from "./shared/types/user.types";
import { useCurrentValueModal } from "./hooks/useCurrentValueModal";
import type { Event } from "./shared/types/event.types";
import { ModalDetailsEvent } from "./components/ui/ModalDetailsEvent";
import { useDinamicFilterData } from "./hooks/useDinamicFilterData";

function AppWrapper() {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
}

function App() {
  
  const location = useLocation();
  const allUsers = useAppSelector(state => state.users.users)
  const allEvents = useAppSelector(state => state.events.events)
  const modal = useAppSelector(state => state.modal)

  const { currentValue: currentUser, setCurrentId: setCurrentUserId } = useCurrentValueModal<User>(allUsers as User[])
  const { currentValue: currentEvent, setCurrentId: setCurrentEventId } = useCurrentValueModal<Event>(allEvents as Event[]) 

  const { currentEventUser, currentEventClient, currentEventService, currentEventStatus } = useDinamicFilterData(currentEvent)

  // useEffect отвечающий за отображение паддингов у root div
  useEffect(() => {
    const parent: HTMLDivElement | null = document.querySelector("#root");
    if (parent) {
      if (location.pathname === "/auth" || location.pathname === "/register") {
        parent.style.padding = "0";
      } else {
        parent.style.padding = "";
      }
    }
  }, [location.pathname]);



  return (
    <>
      <div className="realtive flex h-full w-full">
        {location.pathname !== "/auth" &&
        location.pathname !== "/register" &&
        location.pathname !== "/newauth" ? (
          <Header />
        ) : null}

        <Outlet/>
        {modal.isOpen && modal.type === 'addClient' && <ModalLayout>
          <ModalFormAddClient/>  
        </ModalLayout>}
        {modal.isOpen && modal.type === 'details' && <ModalLayout>
          <ModalDetails img={''} clientName={currentUser?.first_name ? currentUser?.first_name : ''} clientSurname={currentUser?.last_name ? currentUser?.last_name : ''} dateAndTime={currentUser?.date_create ? currentUser.date_create : ''} serviceName={'name'} servicePrice={'3000'}/>  
        </ModalLayout>}
        {modal.isOpen && modal.type === 'detailsEvent' && <ModalLayout>
          <ModalDetailsEvent info={currentEvent ? currentEvent?.information : ''} statusName={currentEventStatus ? currentEventStatus.name_status : ''} priceService={currentEventService ? currentEventService?.price : ''} nameService={currentEventService ? currentEventService?.name_services : ''} dateStartEvent={currentEvent ? currentEvent?.datetime_start_event : ''} dateEndEvent={currentEvent ? currentEvent.datetime_end_event : ''} clientSurname={currentEventClient ? currentEventClient?.last_name : ''} clientName={currentEventClient ? currentEventClient?.first_name : ''} userName={currentEventUser ? currentEventUser?.first_name : ''} userSurname={currentEventUser ? currentEventUser?.last_name : ''}/>  
        </ModalLayout>}

        <Routes>
          <Route path={"/"} element={<HomePage setCurrentEventId={setCurrentEventId}/>} />
          <Route path={"/clients"} element={<ClientsPage setCurrentUserId={setCurrentUserId}/>} />
          <Route path={"/services"} element={<ServicesPage />} />
          <Route path={"/analytics"} element={<AnalyticsPage />} />
          <Route path={"/auth"} element={<NewAuthPage />} />
          <Route path={"/register"} element={<RegisterPage />} />
        </Routes>
      </div>
    </>
  );
}

export default AppWrapper;
