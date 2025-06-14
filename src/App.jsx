import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import RootLayout from "./pages/RootLayout";
import LoadingSpinner from "./components/LoadingSpinner";
const KeyHighlights = lazy(() => import("./pages/KeyHighlights"));
const FormPage = lazy(() => import("./pages/FormPage"));
const MapPage = lazy(() => import("./pages/MapPage"));
const ErrorPage = lazy(() => import("./pages/ErrorPage"));

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route
            index
            element={
              <Suspense fallback={<LoadingSpinner />}>
                <KeyHighlights />
              </Suspense>
            }
          />
          <Route
            path="form"
            element={
              <Suspense fallback={<LoadingSpinner />}>
                <FormPage />
              </Suspense>
            }
          />
          <Route
            path="map"
            element={
              <Suspense fallback={<LoadingSpinner />}>
                <MapPage />
              </Suspense>
            }
          />
          <Route
            path="*"
            element={
              <Suspense fallback={<LoadingSpinner />}>
                <ErrorPage />
              </Suspense>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
