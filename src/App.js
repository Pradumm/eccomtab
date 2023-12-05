import React from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import AppContext from "./components/Api/context/AppContext";
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import LayoutRoute from "./components/LayoutRoute";
function App() {
  const queryClient = new QueryClient()
  return (
    <>
      <BrowserRouter>
        <QueryClientProvider client={queryClient}>
          <AppContext>
            <LayoutRoute />
          </AppContext>
          <ReactQueryDevtools initialIsOpen={false} />
          <ToastContainer />
        </QueryClientProvider>
      </BrowserRouter>

    </>
  );
}

export default App;


















































