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

                .q-a p a {
                    color: #ca733e;
                    text-decoration: none;

                    border-bottom: 2px solid #ca733e;
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
                        <h3>What is this group for?</h3>
                        <p>
                            Nirvan’s Brickseek is a group focused on reselling. We find items that are heavily discounted instores, 
                            or have an extreme demand online, and use tools and monitors to acquire them,
                            with the intentions of reselling them on sites like ebay. 
                        </p>
                    </div>
                    <div class="q-a">
                        <h3>How do I join?</h3>
                        <p>
                            Memberships are 20 dollars a month and will auto charge every month unless cancelled.
                            Memberships are currently limited, so wait for us to announce a restock or giveaway on our 
                            <a href="https://twitter.com/nirvanbrickseek" target="_blank" rel="noreferrer">twitter.</a>
                        </p>
                    </div>
                    <div class="q-a">
                        <h3>Why should I join?</h3>
                        <p>
                            Maybe you need some extra cash.
                            Maybe you’re bored. Maybe, you want to get into the world of reselling.
                            Either way, Nirvan’s Brickseek will be the right fit for you.
                        </p>
                    </div>
                    <div class="q-a">
                        <h3>What is brickseek?</h3>
                        <p>
                            Brickseek is a website in which one can find heavily marked down items.
                            In the group, we  post ones that can be used to make profit by selling locally, or on ebay. However,
                            there will be some personal deals included that aren't profitable, but are marked down heavily and are good products for in real life uses.
                        </p>
                    </div>
                    <div class="q-a">
                        <h3>So what do we do with this info?</h3>
                        <p>
                            So brickseek allows us to find products that are discounted.
                            Thats it. However, thats where we come in! We have created a setup to find the best items with the highest profits.
                            So whether the cooks are online or in store, they're meant to be flipped for profit. Sometimes,
                            we might post some personal deals, but only if they're super good!
                        </p>
                    </div>
                    <div class="q-a">
                        <h3>Where do I sell this stuff?</h3>
                        <p>
                            A lot of brickseek items get sold the fastest on ebay.
                            However sometimes there are items that are better suited to be sold in real life,
                            locally. Here you can use craigslist, offerup, facebook marketplace -- whatever works for you.
                        </p>
                    </div>
                </div>
            </section>
        `;
    }
}