import React from "react";
import { createRoot } from 'react-dom/client';
import ReactDOM from "react-dom";
import ButtonAppBar from "./bar";

class Layout extends React.Component {
  render() {
    return (
      <h1>Hello world!</h1>
    );
  }
}

const App: React.FC = () => {
  return <>
    <ButtonAppBar />
    <Layout />
  </>;
};

const container = document.getElementById('app');
if (container) {
  const root = createRoot(container);
  root.render(<App />);
}
