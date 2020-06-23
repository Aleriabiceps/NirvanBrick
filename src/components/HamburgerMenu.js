/* imports */
import { html, Component } from "jolt";

/* HamburgerMenu Component */
export class HamburgerMenu extends Component {

    style() {
        return `
            #bar1,
            #bar2,
            #bar3 {
                width: 35px;
                height: 5px;
                margin: 5px;
                
                background-color: white;
                border-radius: 10px;
            }

            .toggled #bar1 {
                transform: rotate(-45deg) translate(-7px, 6px);
            }

            .toggled #bar2 {
                opacity: 0;
            }

            .toggled #bar3 {
                transform: rotate(45deg) translate(-7px, -6px);
            }

            .toggled * {
                transition: transform 0.4s ease;
            }
        `;
    }

    render() {
        return html`
            <style>${this.style()}</style>

            <div id="container" onclick=${this.animate.bind(this)} ontouchstart=${this.animate.bind(this)}>
                <div id="bar1"></div>
                <div id="bar2"></div>
                <div id="bar3"></div>
            </div>
        `;
    }

    animate(event) {
        event.preventDefault();
        this.root.getElementById("container").classList.toggle("toggled");
    }
}