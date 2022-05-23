import React from "react";
import { Main, Product, Book } from "./pages";
import { Route, Routes, BrowserRouter } from "react-router-dom";
const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/product/:id" element={<Product />} />
                <Route path="/book" element={<Book />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;
