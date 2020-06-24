import { html, render, Component } from "jolt";
import { HamburgerMenu } from "./components/HamburgerMenu";
import { Header } from "./components/header/Header";
import { Banner } from "./components/banner/Banner";
import { Offerings } from "./components/Offerings";
import { Testimonials } from "./components/Testimonials";

/* register components */
Component.register("hamburger-menu", HamburgerMenu);
Component.register("nirvan-header", Header);
Component.register("nirvan-banner", Banner);
Component.register("nirvan-offerings", Offerings);
Component.register("nirvan-testimonials", Testimonials);

/**
 * App Component
 */
function App() {
    return html`
        <nirvan-header></nirvan-header>
        <nirvan-banner></nirvan-banner>
        <nirvan-offerings></nirvan-offerings>
        <nirvan-testimonials></nirvan-testimonials>
    `;
}

render(App(), document.querySelector("#app"));