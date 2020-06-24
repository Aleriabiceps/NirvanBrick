/* imports */
import { html, Component } from "jolt";
import nirvan_banner from "./assets/nirvan_banner.png";

/**
 * Banner Component
 * @class
 */
export class Banner extends Component {

    style() {
        return html`
            <style>
                section {
                    display: flex;
                    flex-direction: column;
                    align-items: center;

                    margin-top: 100px;
                }

                #banner {
                    display: flex;
                    flex-direction: column;
                }

                #banner img {
                    max-width: 600px;
                    width: 100%;
                    height: auto;
                }

                #banner p {
                    color: #dddddd;
                    text-align: center;
                    font-size: 20px;
                }

                #buttons {
                    display: flex;
                    margin-top: 20px;
                }

                #buttons button {
                    background: transparent;
                    border: 2px solid #dddddd;
                    border-radius: 4px;

                    font-family: "Futura", sans-serif;
                    color: #dddddd;
                    font-size: 1.2rem;
                    
                    padding: 0.3rem;
                    width: 160px;

                    cursor: pointer;

                    margin: 1rem 10px;

                    user-select: none;
                }

                #buttons button:hover {
                    background-color: #dddddd;
                    color: black;
                }
            </style>
        `;
    }

    render() {
        return html`
            ${this.style()}

            <section>
                <div id="banner">
                    <img src="${nirvan_banner}" alt="Nirvan's Brickseek" />
                    <p>Make a second source of income on your own time.</p>
                </div>
                <div id="buttons">
                    <button>Coming Soon</button>
                    <button>Coming Soon</button>
                </div>
            </section>
        `;
    }
}