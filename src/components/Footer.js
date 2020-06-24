/* imports */
import { html, Component } from "jolt";

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