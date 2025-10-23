import { BrowserRouter, Outlet, Route, Routes, useLocation } from "react-router";
import "./App.css";
import { Header } from "./components/Header";
import { HomePage } from "./pages/HomePage";
import { ClientsPage } from "./pages/ClientsPage";
import { ServicesPage } from "./pages/ServicesPage";
import { AnalyticsPage } from "./pages/AnalyticsPage";
import { RegisterPage } from "./pages/RegisterPage";
import { NewAuthPage } from "./pages/AuthPage";
import { useEffect, useState } from "react";
import { ModalLayout } from "./components/ModalLayout";
import { ModalFormAddClient } from "./components/ui/ModalFormAddClient";
import { useAppSelector } from "./redux/hooks";
import { ModalDetails } from "./components/ui/ModalDetails";
import type { User } from "./shared/types/user.types";

function AppWrapper() {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
}

function App() {
  
  const [currentUserId, setCurrentUserId] = useState<string | null>(null)
  const [currentUser, setCurrentUser] = useState<User | null>(null)

  const location = useLocation();
  const allUsers = useAppSelector(state => state.users.users)
  const modal = useAppSelector(state => state.modal)

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

  useEffect(() => {
    const filteredUser = allUsers?.filter(user => user.id === currentUserId)

    if(filteredUser) {
      setCurrentUser(filteredUser[0])
    }

  }, [currentUserId])

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

        <Routes>
          <Route path={"/"} element={<HomePage setCurrentUserId={setCurrentUserId}/>} />
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
