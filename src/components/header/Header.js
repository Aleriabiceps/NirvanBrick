/* imports */
import { html, Component } from "jolt";
import nirvan_icon from "./assets/nirvan_icon.png";
import twitter_icon from "./assets/twitter_icon.svg";
import tiktok_icon from "./assets/tiktok_icon.svg";

/**
 * Header Component
 * @class
 */
export class Header extends Component {

    style() {
        return `
            header {
                display: flex;
                justify-content: space-evenly;

                position: fixed;
                top: 0;
                height: 85px;
                width: 100%;
            }

            nav {
                display: flex;
                justify-content: space-between;

                width: 100%;
                margin: 20px;
            }

            nav #navbar {
                display: flex;
                justify-content: space-between;

                width: 100%;
            }

            nav a {
                color: #dddddd;
                font-size: 20px;
                font-weight: 100;
                text-decoration: none;
                text-transform: lowercase;
            }

            nav a:hover {
                color: #ca733e;
            }

            nav #logo {
                width: 50px;
                height: 50px;
                transform: translateY(-10px);
            }

            nav #social-icons {
                display: flex;
                justify-content: flex-end;

                width: 100%;
            }

            nav #social-icons img {
                width: 25px;
                height: 25px;

                margin: 0px 10px 0px 10px;
            }

            nav #burger {
                display: none;
                cursor: pointer;

            }

            @media screen and (max-width: 800px) {

                nav #burger {
                    display: block;
                }

                nav #links {
                    display: none;
                }

                nav #navbar {
                    justify-content: flex-start;
                }
                nav #social-icons {
                    display: none;
                }

                #navbar #links.mobile {
                    display: flex;
                    flex-direction: column;
                    justify-content: flex-start;
                    align-items: center;

                    position: fixed;
                    top: 85px;
                    width: 100%;
                    height: 100%;
                }
            }


        `;
    }

    render() {
        return html`
            <style>${this.style()}</style>
            
            <header>
                <nav>
                    <div id="navbar">
                        <div id="links">
                            <a href="/">
                                <span>Home</span>
                            </a>
                        </div>

                        <a href="/">
                            <img id="logo" src="${nirvan_icon}" alt="Nirvan's Brickseek" />
                        </a>
                    </div>

                    <div id="social-icons">
                        <a href="https://twitter.com/nirvanbrickseek" target="_blank">
                            <img src="${twitter_icon}" alt="Twitter" />
                        </a>

                        <a href="https://www.tiktok.com/@nirvansbrickseek?lang=en" target="_blank">
                            <img src="${tiktok_icon}" alt="Tiktok" />
                        </a>
                    </div>

                    <hamburger-menu id="burger" onclick=${this.toggleMobile.bind(this)}></hamburger-menu>
                </nav>
            </header>
        `;
    }

    toggleMobile(event) {
        event.preventDefault();

        const container = this.root.querySelector("#links");
        container.classList.toggle("mobile");

        if(container.classList.contains("mobile")) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
    }
}