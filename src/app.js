import { html, render, Component } from "jolt";
import { HamburgerMenu } from "./components/HamburgerMenu";
import { Header } from "./components/header/Header";
import { Banner } from "./components/banner/Banner";
import { Offerings } from "./components/Offerings";
import { Testimonials } from "./components/Testimonials";
import { FAQ } from "./components/FAQ";
import { Footer } from "./components/Footer";

/* register components */
Component.register("hamburger-menu", HamburgerMenu);
Component.register("nirvan-header", Header);
Component.register("nirvan-banner", Banner);
Component.register("nirvan-offerings", Offerings);
Component.register("nirvan-testimonials", Testimonials);
Component.register("nirvan-faq", FAQ);
Component.register("nirvan-footer", Footer);

/**
 * App Component
 */
function App() {
    return html`
        <nirvan-header></nirvan-header>
        <nirvan-banner></nirvan-banner>
        <nirvan-offerings></nirvan-offerings>
        <nirvan-testimonials></nirvan-testimonials>
        <nirvan-faq></nirvan-faq>
        <nirvan-footer></nirvan-footer>
    `;
}

render(App(), document.querySelector("#app"));