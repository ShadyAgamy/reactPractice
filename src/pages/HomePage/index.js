import React from "react";
import Header from "../../components/Header/Header";
import "./styles.scss";

export default function HomePage() {
  return (
    <div>
      <Header />
      <div className="homePage ">
        <div className="homePage_header">
          <h1>React App</h1>
        </div>
      </div>
    </div>
  );
}
