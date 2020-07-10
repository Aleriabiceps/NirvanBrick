/* imports */
import { html, Component } from "jolt";
import twitter_icon from "./assets/twitter_icon.svg";
import tiktok_icon from "./assets/tiktok_icon.svg";
import instagram_icon from "./assets/instagram_icon.svg";

/**
 * Footer Component
 * @class
 */
export class Footer extends Component {

    style() {
        return html`
            <style>
                footer {
                    display: flex;
                    flex-direction: column;
                    align-items: center;

                    color: #dddddd;

                    margin-top: 75px;
                }
                

                nav a {
                    text-decoration: none;
                    text-transform: lowercase;
                    color: #dddddd;

                    border-bottom: 2px solid #dddddd;
                }

                nav a:hover {
                    color: #ca733e;
                    border-bottom: 2px solid #ca733e;
                }

                #social-icons {
                   margin-top: 20px;
                }

                #social-icons a {
                    text-decoration: none;
                }

                #social-icons img {
                    width: 25px;
                    height: 25px;

                    margin: 0px 10px 0px 10px;
                }

                span {
                    margin: 20px 0px 20px 0px;
                    font-size: 14px;
                }

                span a {
                    text-decoration: none;
                    color: #dddddd;

                    border-bottom: 2px solid #dddddd;
                }

                span a:hover {
                    color: #ca733e;
                    border-bottom: 2px solid #ca733e;
                }
            </style>
        `;
    }

    render() {
        return html`
            ${this.style()}

            <footer>
                <nav>
                    <a href="/">Home</a>
                </nav>
                <div id="social-icons">
                    <a href="https://twitter.com/nirvanbrickseek" target="_blank" rel="noreferrer">
                        <img src="${twitter_icon}" alt="Follow us on Twitter" />
                    </a>

                    <a href="https://www.tiktok.com/@nirvansbrickseek?lang=en" target="_blank" rel="noreferrer">
                        <img src="${tiktok_icon}" alt="Follow us on Tiktok" />
                    </a>
                    <a href="https://instagram.com/nirvansbrickseek" target="_blank" rel="noreferrer">
                        <img src="${instagram_icon}" alt="Follow us on Instagram" />
                    </a>
                </div>
                <span>
                    Copyright &copy; 2020 Nirvan's Brickseek LLC | 
                    <a href="https://docs.google.com/document/d/13t5PgRfGlZ6fPi9W6UmFA2tMbMkjZMIG1CIgCJLuMx4/edit" target="_blank" rel="noreferrer">
                        Privacy Policy
                    </a>
                </span>
            </footer>
        `;
    }
}