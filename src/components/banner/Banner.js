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

                    width: 300px;

                    cursor: pointer;

                    margin: 1rem 10px;

                    user-select: none;
                }

                #buttons button:hover {
                    background-color: #dddddd;
                    color: black;
                }

                #buttons button:hover span {
                    display: none;
                }
                #buttons button:hover:before {
                    content: "Sold Out!";
                }

                #join-us {
                    background: transparent;
                    border: 2px solid #185fc0;
                    border-radius: 4px;

                    font-family: "Futura", sans-serif;
                    color: #dddddd;
                    font-size: 1.2rem;
                    
                    padding: 0.3rem;

                    width: 300px;
                    

                    cursor: pointer;

                    user-select: none;
                }

                #join-us:hover {
                    background-color: #185fc0;
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
                    <button onclick=${this.scrollToJoin}><span>Buy Membership</span></button>
                </div>
                <button id="join-us" onclick=${() => window.open("https://discord.gg/WFV4DQz", "_blank")}>Join Our Discord Waiting Room</button>
            </section>
        `;
    }

    scrollToJoin() {
        const element = document.querySelector("#faq")
        const question = element.root.querySelector("#how-do-i-join");
        element.scrollIntoView();
        question.classList.toggle("fade-border-element");
    }
}