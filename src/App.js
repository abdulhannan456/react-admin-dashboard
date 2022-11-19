import { useState } from "react";
import {ColorModeContext , useMode} from './theme';
import { CssBaseline, ThemeProvider } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import TopBar from "./views/global/Topbar";
import SideBar from "./views/global/SideBar";
import Dashboard from "./views/dashboard";
import Team from "./views/team";
import Invoices from "./views/invoices";
import Contacts from "./views/contacts";
import Bar from "./views/bar";
import Form from "./views/form";
import Line from "./views/line";
import Pie from "./views/pie";
import FAQ from "./views/faq";
import Geography from "./views/geography";
import Calendar from "./views/calendar/calendar";

function App() {
  const [theme , colorMode] = useMode()
  const [isSidebar, setIsSidebar] = useState(true);

  return (
    <ColorModeContext.Provider value ={colorMode}>
      <ThemeProvider theme ={theme}>
        <CssBaseline/>
        <div className="app">
          <SideBar isSidebar={isSidebar}/>
          <main className="content">
            <TopBar setIsSidebar={setIsSidebar}/>
            <Routes>
              <Route path="/react-admin-dashboard" element={<Dashboard />} />
              <Route path="/react-admin-dashboard/team" element={<Team />} />
              <Route path="/react-admin-dashboard/contacts" element={<Contacts />} />
              <Route path="/react-admin-dashboard/invoices" element={<Invoices />} />
              <Route path="/react-admin-dashboard/form" element={<Form />} />
              <Route path="/react-admin-dashboard/bar" element={<Bar />} />
              <Route path="/react-admin-dashboard/pie" element={<Pie />} />
              <Route path="/react-admin-dashboard/line" element={<Line />} />
              <Route path="/react-admin-dashboard/faq" element={<FAQ />} />
              <Route path="/react-admin-dashboard/calendar" element={<Calendar />} />
              <Route path="/react-admin-dashboard/geography" element={<Geography />} />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
