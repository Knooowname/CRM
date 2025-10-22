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

function AppWrapper() {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
}

function App() {
  const location = useLocation();

  useEffect(() => {
    const parent: HTMLDivElement | null = document.querySelector("#root");
    if (parent) {
      if (location.pathname === "/auth" || location.pathname === "/register") {
        parent.style.padding = "0";
      } else {
        // Можно сбросить стиль, если нужно
        parent.style.padding = "";
      }
    }
  }, [location.pathname]);

  const modal = useAppSelector(state => state.modal)

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

        <Routes>
          <Route path={"/"} element={<HomePage />} />
          <Route path={"/clients"} element={<ClientsPage />} />
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
