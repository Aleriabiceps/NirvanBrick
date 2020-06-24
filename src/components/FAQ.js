/* imports */
import { html, Component } from "jolt";

/**
 * FAQ Component
 * @class
 */
export class FAQ extends Component {

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

                #faq {
                    display: flex;
                    flex-direction: column;
                    
                    width: 80%;
                }

                .q-a h3{
                    color: #185fc0;
                    font-size: 30px;
                }

                .q-a p {
                    color: #dddddd;
                    font-size: 20px;
                }

                @media screen and (max-width: 800px) {
                    #faq {
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
                <h1 id="section-title">FAQ</h1>

                <div id="faq">
                    <div class="q-a">
                        <h3>What is brickseek?</h3>
                        <p>
                            Brickseek is a website in which one can find heavily marked down items.
                            Here, I will be posting ones that can be used to make profit by selling locally, or on ebay.
                            However, there will be some personal deals included that aren't profitable,
                            but are marked down heavily and are good products for irl uses.
                        </p>
                    </div>
                    <div class="q-a">
                        <h3>So what do we do with this info?</h3>
                        <p>
                            So brickseek allows us to find products that are discounted. thats it. 
                            however, thats where i come in! i have created a setup to find the best items w/ the highest profits. 
                            so whether the cooks are online or in store, they're meant to be flipped for profit. 
                            sometimes, i might post some personal deals, but only if they're super good!
                        </p>
                    </div>
                    <div class="q-a">
                        <h3>Where do i sell this stuff?</h3>
                        <p>
                            a lot of brickseek items get sold the fastest on ebay.
                            however sometimes there are cooks that are better suited to be sold irl,
                            locally. here u can use craigslist, offerup, facebook marketplace -- whatever works for you.
                            also keep in mind items sold locally usually are able to be sold for more.
                        </p>
                    </div>
                    <div class="q-a">
                        <h3>How do i find my own brickseek items to flip?</h3>
                        <p>
                            You can join nirvan's free brickseek group! here we have a monitor set up to show all the newest markdowns.
                            the bot even automtically flags the cooks that are more likely to sell for more!
                        </p>
                    </div>
                    <div class="q-a">
                        <h3>What else do we post?</h3>
                        <p>
                            We also post anything thats a quick flip to make you some money.
                            An example is the nintendo switch, animal crossing edition. since it was highly coveted,
                            it sold for more than its retail. we had members setup monitors and tools to make sure they could buy them super quick,
                            and then resell for more than 200 dollars of profit.
                        </p>
                    </div>
                </div>
            </section>
        `;
    }
}