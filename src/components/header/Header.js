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
                width: 100%;

                display: flex;
                justify-content: center;
            }

            nav {
                width: 100%;

                display: flex;
                justify-content: space-between;

                margin: 35px;
            }

            nav a {
                color: #dddddd;
                font-size: 20px;
                font-weight: 100;
                text-decoration: none;
            }

            nav a:hover {
                color: #ca733e;
            }

            #logo {
                width: 50px;
                height: 50px;
                transform: translateY(-15px);
            }

            #social-icons {
                display: flex;
                justify-content: center;
            }

            #social-icons img {
                width: 25px;
                height: 25px;
                padding: 0px 10px 0px 10px;
            }
        `;
    }

    render() {
        return html`
            <style>${this.style()}</style>
            
            <header>
                <nav>
                    <a href="/">Home</a>
                    
                    <a href="/">
                        <img id="logo" src="${nirvan_icon}" alt="Nirvan Brickseek" />
                    </a>

                    <div id="social-icons">
                        <a href="https://twitter.com/nirvanbrickseek">
                            <img src="${twitter_icon}" alt="Nirvan Brickseek's Twitter" />
                        </a>

                        <a href="https://www.tiktok.com/@nirvansbrickseek?lang=en">
                            <img src="${tiktok_icon}" alt="Nirvan Brickseek's Tiktok" />
                        </a>
                    </div>

                </nav>
            </header>
        `;
    }
}

