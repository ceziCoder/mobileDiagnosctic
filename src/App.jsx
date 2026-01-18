import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Main }  from "./page/Main";
import { ErrorPage } from "./page/ErrorPage";

export const App = () => {
  const shouldRedirect = true
  return (
    <>
      <BrowserRouter basename='/'>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path='*' element={!shouldRedirect ? <ErrorPage /> : <Navigate to='/' />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
