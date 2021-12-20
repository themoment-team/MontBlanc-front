import React from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import * as P from "./Page/index";
import Config from "Shared/Config.json";
import GlobalStyle from "Shared/Styles/GlobalStyles";
import reactModal from "react-modal";

const checkState: boolean = false;

reactModal.setAppElement("#root");

reactModal.defaultStyles = {
  overlay: {
    zIndex: 3,
    position: "fixed",
    inset: "0px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(54, 54, 54, 0.4)",
  },
  content: {
    zIndex: 3,
    inset: "40px",
    overflow: "hidden",
    borderRadius: "15px",
    outline: "none",
    flexDirection: "column",
    background: "#FFFFFF",
    border: "none",
    boxSizing: "border-box",
  },
};

const App: React.FC = () => (
  <BrowserRouter>
    <GlobalStyle />
    {checkState ? (
      <Routes>
        <Route path={Config.LINK.SYSTEMCHECK} element={<P.SystemCheck />} />
      </Routes>
    ) : (
      <Routes>
        <Route path={Config.LINK.ABOUT} element={<P.About />} />
        <Route path={Config.LINK.IMPROVEMENT} element={<P.Improvement />} />
        <Route path={Config.LINK.RANK} element={<P.Rank />} />
        <Route path={Config.LINK.COMMENT} element={<P.LeaveComments />} />
        <Route path="/the_moment" element={<Navigate to={Config.LINK.COMMENT}/>} />
        <Route path={Config.LINK.START} element={<P.Start />} />
        <Route path={Config.LINK.BEFORERANK} element={<P.BeforeRank />} />
        <Route element={<P.NotFound />} />
      </Routes>
    )}
  </BrowserRouter>
);

export default App;
