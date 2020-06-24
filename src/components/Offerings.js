/* imports */
import { html, Component } from "jolt";

/**
 * Offerings Component
 * @class
 */
export class Offerings extends Component {

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

                #offerings {
                    display: grid;
                    grid-template-columns: repeat(3, minmax(300px, 1fr));
                    grid-template-rows: auto;
                    grid-gap: 1rem;

                    width: 80%;
                }

                .offering {
                    padding: 20px;
                    font-size: 30px;

                    border: 2px solid #185fc0;
                    border-radius: 30px;
                }

                .offering:hover {
                    border: 2px solid #ca733e;
                }

                .offering h2 {
                    font-size: 25px;
                    text-align: center;
                    color: #185fc0;
                }

                .offering p {
                    font-size: 16px;
                    color: #dddddd;
                }

                @keyframes fade-in {
                    from {opacity: 0; transform: scale(0.7,0.7)}
                    to {opacity: 1;}
                }

                .fade-in-element {
                    animation: fade-in 1.4s;
                }

                @media screen and (max-width: 800px) {
                    #offerings {
                        width: 95%;
                    }
                }

                @media screen and (max-width: 1100px) {
                    #offerings {
                        grid-template-columns: 1fr;
                    }
                }
            </style>
        `;
    }

    render() {
        return html`
            ${this.style()}

            <section>
                <h1 id="section-title">What We Offer</h1>

                <div id="offerings">
                    <div class="offering fade-in-element">
                        <h2>Exclusive Info 😈</h2>
                        <p>
                            Nowadays, almost every group has info for items dropping. But we’re not every group.
                            <u>We take it one step further, with our stock numbers, early links, scripts, and bypasses.</u>
                            On top of that, we cook items exclusive to only our group.
                        </p>
                    </div>
                    <div class="offering fade-in-element">
                        <h2>🤖 > 🧑</h2>
                        <p>
                            Nirvan’s Brickseek does not rely on humans for a majority of our flips.
                            70% of our price errors and instore flips come from <u>machine learning algorithms</u> scouring the internet,
                            <u>making sure we leave no rock unturned.</u> This reflects in our posts, as we find every sellable item,
                            days or weeks before every other group. Why rely on a process that includes human errors?
                        </p>
                    </div>
                    <div class="offering fade-in-element">
                        <h2>1 on 1 Focus 🔎</h2>
                        <p>
                            A lot of groups sell as many memberships as possible. We intentionally keep membership stock as low as possible.
                            We make sure that our staff and infrastructure can <u>put the current members first.</u> We hold 1 on 1 sessions to ensure every member is able to cook,
                            and hold voice sessions to facilitate learning and discussion. All of our members will attest to the fact that any time they’ve had a problem,
                            we’ve made a substantial effort to solve it.
                        </p>
                    </div>
                    <div class="offering fade-in-element">
                        <h2>The Extra Mile 🥇</h2>
                        <p>
                            It’s easy for a group to pay their way to the top providers. On top of the info and items, through our connections,
                            <u>we make getting and reselling items as easy as possible.</u> We have groupbuys for some of the best tools in the game,
                            bulk cashout providers, lengthy guides for every selling platform,
                            along with an abundance of tools like ebay viewers and <u>free slots for all members.</u>
                        </p>
                    </div>
                    <div class="offering fade-in-element">
                        <h2>Services 🍴</h2>
                        <p>
                            Although we focus on the resell world, that does not mean our service ends there.
                            <u>From sunrise, to sunset, we’re there for our members.</u> We have a section just for personal deals,
                            discounted food, and homework help - ensuring that in and out of our group, you’re eating.
                        </p>
                    </div>
                    <div class="offering fade-in-element">
                        <h2>Community  👫</h2>
                        <p>
                            An issue we’ve heard from a lot of our members about other groups is the lack of a community.
                            We’ve sought out to fix that from day 1, via our active chat, Q&A sessions, and family feel.
                            From the outside, that’s really hard to understand, so we’ve decided to <u>link a couple of our members' testimonials below,
                            and let them show what we have to offer themselves.</u>
                        </p>
                    </div>
                </div>
            </section>
        `;
    }
}