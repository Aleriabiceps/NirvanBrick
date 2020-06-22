/* imports */
import { html, Component } from "jolt";
import nirvan_banner from "./assets/nirvan_banner.png";
import discord_preview from "./assets/discord_preview.jpg";

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
                width: 350px;
                height: 150px;
            }

            p {
                color: #dddddd;
                text-align: center;
                font-size: 20px;
                font-weight: 100;
            }

            #discord-preview {
                margin-top: 40px;
            }

            button {
                margin-top: 20px;
                width: 200px;
                height: 55px;

                background-color: transparent;
                border: 2px solid #dddddd;
                border-radius: 4px;

                font-size: 20px;
                text-transform: uppercase;
                color: #dddddd;
            }

            button:hover {
                background-color: #dddddd;
                color: black;
            }


        `;
    }

    render() {
        return html`
            <style>${this.style()}</style>

            <section>
                <img id="banner" src="${nirvan_banner}" alt="Nirvan's Brickseek" />
                <p>Make a second source of income on your own time.</p>
                <button onclick=${() => window.open("https://www.google.com/", "_blank")}>Subscribe Now</button>

                <img id="discord-preview" src="${discord_preview}" alt="Preview of Nirvan's Brickseek" />
            </section>
        `;
    }
}