/* imports */
import { html, Component } from "jolt";

/**
 * Testimonials Component
 * @class
 */
export class Testimonials extends Component {

    constructor() {
        super();
    }


    style() {
        return html`
            <style>
                section {
                    display: flex;
                    flex-direction: column;
                    align-items: center;

                    margin-top: 75px;
                }

                #section-title {
                    color: #dddddd;
                    font-size: 50px;
                    border-bottom: 2px solid #ca733e;
                }

                #quotes {
                    display: grid;
                    grid-template-columns: auto;
                    grid-template-rows: repeat(3, auto-fill);
                    grid-gap: 1rem;

                    width: 80%;
                }

                .quote {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    
                    padding: 20px;
                    font-size: 20px;
                    
                    border: 2px solid #185fc0;
                    border-radius: 30px;

                    color: #dddddd;
                }

                q {
                    margin: 15px;
                }

                .author {
                    color: #ca733e;
                }

                .author::before {
                    content: "- ";
                }

                @media screen and (max-width: 800px) {
                    #quotes {
                        width: 95%;
                    }
                }
            </style>
        `;
    }

    render() {
        return html`
            ${this.style()}

            <section>
                <h1 id="section-title">Testimonials</h1>

                <div id="quotes">
                    <div class="quote">
                        <q>
                            Beginning of may, just starting to get eBay sales. I thought I was doing big things.
                            May 25th, I have 30x my sales. Made easily 20,000$ profit within a span of 2-3 weeks.
                            nirvan is the fucking GOAT. Lots of sleepless nights and backbreaking lifting, but it is all worth it.
                            I paid off the car I got 1 week into brickseek 2x over within 2-3 weeks. Not many people can say that.
                        </q>
                        <p class="author">RekapKicks#1278</p>
                    </div>
                    <div class="quote">
                        <q>
                            You can make an insane amount of money from being in this group and profit is all scalable.
                            The more work you put in, the more you make. Even if you do it on the side or you’re doing it full time, you’re going to make money.
                            There’s fast monitors, easy to understand guides, and 1:1 support with staff. There’s no reason why you shouldn’t join.
                        </q>
                        <p class="author">Colten#6202</p>
                    </div>
                    <div class="quote">
                        <q>
                            Nirvan's Brickseek: Only one thing I can say, and that is truly amazing.
                            The best monitors, flips, discounted food, heck even HQ trivia answers.
                            This is a one of a kind group that I am proud to be apart of.
                        </q>
                        <p class="author">HyPix#7001</p>
                    </div>
                </div>
            </section>
        `;
    }
}