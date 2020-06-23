/* imports */
import { html, Component } from "jolt";
import nirvan_banner from "./assets/nirvan_banner.png";

/**
 * Banner Component
 * @class
 */
export class Banner extends Component {

    style() {
        return `
            section {
                display: flex;
                flex-direction: column;
                align-items: center;
            }

            #banner {
                width: 600px;
                height: 200px;
            }

            p {
                color: #dddddd;
                text-align: center;
                font-size: 20px;
                font-weight: 100;
            }

            #widget {
                display: flex;
                flex-direction: column;
                align-items: center;
            }

            #buttons {
                display: flex;
                justify-content: center;
                margin-top: 20px;
            }

            #buttons button {
                margin-right: 20px;
                marign-top: 1.5rem;

                width: 160px;

                background-color: transparent;
                border: 2px solid #dddddd;
                border-radius: 4px;

                font-size: 20px;
                text-transform: uppercase;
                color: #dddddd;

                user-select: none;
            }

            #buttons button {
                background-color: transparent;
                border: 2px solid #dddddd;
                border-radius: 4px;

                color: #dddddd;
                font-size: 1.2rem;
                font-weight: 200;

                padding: 0.8rem 1.8rem;
                width: 160px;

                margin-right: 20px
                margin-top: 1.5rem;
            }

            button:hover {
                background-color: #dddddd;
                color: black;
            }

            iframe {
                margin-top: 20px;
            }
        `;
    }

    render() {
        return html`
            <style>${this.style()}</style>

            <section>
                <img id="banner" src="${nirvan_banner}" alt="Nirvan's Brickseek" />
                <p>Make a second source of income on your own time.</p>

                <div id="widget">
                    <div id="buttons">
                        <button onclick=${() => window.open("https://www.patreon.com/join/nirvanbrickseek/checkout?rid=5256316", "_blank")}>Subscribe (Client)</button>
                        <button onclick=${() => window.open("https://www.patreon.com/join/nirvanbrickseek/checkout?rid=5256316", "_blank")}>Subscribe (Member)</button>
                    </div>

                    <iframe src="https://discordapp.com/widget?id=664225791126798338&theme=dark" allowtransparency="true" frameborder="0"></iframe>
                </div>
            </section>
        `;
    }
}