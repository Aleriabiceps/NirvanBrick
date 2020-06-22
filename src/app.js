import { html, render, Component } from "jolt";
import { Header } from "./components/header/Header";
import { Banner } from "./components/banner/Banner";
import "./app.css";

/* register components */
Component.register("nirvan-header", Header);
Component.register("nirvan-banner", Banner);

/**
 * App Component
 */
function App() {
    return html`
        <nirvan-header></nirvan-header>
        <nirvan-banner></nirvan-banner>
    `;
}

render(App(), document.querySelector("#app"));