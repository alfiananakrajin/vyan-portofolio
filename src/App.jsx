import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Beranda } from "./halaman/Beranda"
import { TidakAda } from "./halaman/TidakAda"

function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Beranda />}/>
          <Route path="*" element={<TidakAda />}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
