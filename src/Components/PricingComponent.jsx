import { useState } from "react";
import "./PricingComponent.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

const PricingComponent = () => {
  const [billingType, setBillingType] = useState("monthly");

  return (
    <div className="container">
      <div className="pricing-container">
        {/* Toggle between Monthly and Annual */}
        <div className="billing-toggle">
          <div className="toggle">
            <button
              className={billingType === "monthly" ? "active" : ""}
              onClick={() => setBillingType("monthly")}
            >
              Monthly
            </button>
            <button
              className={billingType === "annual" ? "active" : ""}
              onClick={() => setBillingType("annual")}
            >
              Annual
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="pricing-cards">
          {/* Trial Card */}

          <div className="card trial">
            <h3>Trial</h3>
            <h1>Try now</h1>
            <p>Get personalised template</p>
            <ul>
              <li style={{marginTop:"1rem"}}>
                <FontAwesomeIcon
                  icon={faCheckCircle}
                 
                  className="icon-common"
                />
                25+ data sources
              </li>
              <li>
                <FontAwesomeIcon icon={faCheckCircle} className="icon-common" />

                GPT-4, LinkedIn and others
              </li>
              <li>
                <FontAwesomeIcon icon={faCheckCircle} className="icon-common" />

                Access to Slack community
              </li>
              <li>
                <FontAwesomeIcon icon={faCheckCircle} className="icon-common" />

                10+ templates to scale your outbound
              </li>
            </ul>
            <hr
              style={{
                borderTop: "2px solid #76A9FA",
                margin: "16px 0",
                marginTop: "10rem",
              }}
            />
            <div className="bottom-div">
              <li>Explore Product Capablites</li>
            </div>
            <div className="buttons">
              <button>Try Now</button>
            </div>
          </div>

          {/* Growth Card */}

          <div className="card growth">
            <h3>Growth</h3>
            <h1>
              $229<span style={{ fontSize: 15, color: "gray", fontWeight:100 }}>/month</span>
            </h1>
            <span
              style={{
                backgroundColor: "#ECFDF3",
                padding: "0.1rem",
                borderRadius: "2rem",
                color: "#027A48",
                fontSize:"12px",
                marginTop:"-8rem"
              }}
            >
              50% off
            </span>
            <span style={{
              color:"gray",
              textDecoration:"line-through",
              fontWeight:800,
              marginLeft:"1rem"
            }}>$459</span>

            <ul>
              <li style={{color:"#1A56DB",fontWeight:800, marginTop:"1rem"}}>
                <FontAwesomeIcon
                  icon={faCheckCircle}
                  style={{ marginRight: "1rem",marginTop:"0.6rem"}}
                  //  className="icon-common"
                />
                8,000 Credits
              </li>
              <li>
                <FontAwesomeIcon icon={faCheckCircle} className="icon-common" />

                Webhook, HTTP API
              </li>
              <li>
                <FontAwesomeIcon icon={faCheckCircle} className="icon-common" />

                Credit rollover (up to 2x plan credits)
              </li>
              <li>
                <FontAwesomeIcon icon={faCheckCircle} className="icon-common" />

                Outbound email integrations like instantly, Smartlead.
              </li>
              <li>
                <FontAwesomeIcon icon={faCheckCircle} className="icon-common" />

                Dedicated 3 hours from Bitscale expert
              </li>
            </ul>
            <hr
              style={{
                borderTop: "2px solid #76A9FA",
                // padding:"1rem",
                margin:"26px 0",
                marginTop: "3rem",
              }}
            />

            <div className="linegap">
              <li>Unlimited lead search</li>
              <li>Fully Enriched 15000 leads</li>
              <li>Personalized outreached at scale</li>
            </div>
            <div className="buttons">
              <button>Continue with Growth</button>
            </div>
          </div>

          {/* Booster Card */}

          <div className="card booster">
            <h3>
              Booster
              <span
                style={{
                  backgroundColor: "#CEE0FF",
                  padding: "0.5rem",
                  border: "none",
                  borderRadius: "2rem",
                  color: "#053D99",
                  marginLeft: "8rem",
                }}
              >
                Popular
              </span>
            </h3>

            <h1>
              $499<span style={{ fontSize: 15,fontWeight:100 }}>/month</span>
            </h1>
            <span
              style={{
                backgroundColor: "#ECFDF3",
                padding: "0.1rem 0.6rem",
                borderRadius: "2rem",
                color: "#027A48",
                fontSize:"12px",
                marginTop:"-2rem"
              }}
            >
              50% off
            </span>
            <span style={{
              textDecoration:"line-through",
              fontWeight:700,
              marginLeft:"0.5rem"
            }}>$999</span>
            <ul>
              <li style={{ color: "white", marginTop:"0.5rem" }}>
                <FontAwesomeIcon icon={faCheckCircle} style={{ color: "white",marginRight:"1rem", marginTop:"0.6rem"}} />

                25,000 Credits
              </li>
              <li style={{ color: "white" }}>
                <FontAwesomeIcon icon={faCheckCircle} style={{ color: "white",marginRight:"1rem", marginTop:"0.6rem"}}/>

                Webhook, HTTP API
              </li>
              <li style={{ color: "white" }}>
                <FontAwesomeIcon icon={faCheckCircle} style={{ color: "white",marginRight:"1rem", marginTop:"0.6rem"}} />

                Credit rollover (up to 2x plan credits)
              </li>
              <li style={{ color: "white" }}>
                <FontAwesomeIcon icon={faCheckCircle} style={{ color: "white",marginRight:"1rem", marginTop:"0.6rem"}} />

                Outbound email integrations like instantly, Smartlead.
              </li>
              <li style={{ color: "white" }}>
              <FontAwesomeIcon icon={faCheckCircle} style={{ color: "white",marginRight:"1rem", marginTop:"0.6rem"}}/>
                Dedicated 3 hours from Bitscale expert
              </li>
              <li style={{ color: "white" }}>
                <FontAwesomeIcon icon={faCheckCircle} style={{ color: "white",marginRight:"1rem", marginTop:"0.6rem"}} />

                Advanced models like claude Sonnet{" "}
              </li>
              <li style={{ color: "white" }}>
                <FontAwesomeIcon icon={faCheckCircle} style={{ color: "white",marginRight:"1rem", marginTop:"0.6rem"}} />

                Dedicated 8 hours from Bitscale expert
              </li>
              <li style={{ color: "white" }}>
                <FontAwesomeIcon icon={faCheckCircle} style={{ color: "white",marginRight:"1rem", marginTop:"0.6rem"}} />

                2 ways Hubspt integration
              </li>
            </ul>
            <hr style={{ borderTop: "1px solid white", margin: "24px 0" }} />
            <div className="linegap">
              <li style={{ color: "white" }}>Unlimited lead search</li>
              <li style={{ color: "white" }}>Fully Enriched 15000 leads</li>
              <li style={{ color: "white" }}>Personalized outreached at scale </li>
            </div>

            <div className="buttons" id="btn-white">
              <button style={{color:"black"}}>Continue with Booster</button>
            </div>
          </div>

          {/* Enterprise Card */}

          <div className="card enterprise">
            <h3>Enterprise</h3>
            <h1>Contact Us</h1>
            <p>For individual pricing</p>
            <ul>
            <li style={{marginTop:"1rem"}}>
                <FontAwesomeIcon icon={faCheckCircle} className="icon-common" />

                Data privacy certification
              </li>
              <li>
                <FontAwesomeIcon icon={faCheckCircle} className="icon-common" />

                Priority support
              </li>
              <li>
                <FontAwesomeIcon icon={faCheckCircle} className="icon-common" />

                Dedicated Bitscale expert
              </li>
              <li>
              <FontAwesomeIcon icon={faCheckCircle} className="icon-common" />

                Private Slack channel
              </li>
              <li>
              <FontAwesomeIcon icon={faCheckCircle} className="icon-common" />

                Collaborative workspace and templates
              </li>
            </ul>
            <hr
              style={{
                borderTop: "2px solid #76A9FA",
                margin: "18px 0",
                marginTop: "7rem",
              }}
            />
             <div className="linegap">
              <li>Perfect for High-Volume End-to-End CRM Data Enrichment</li>
              <li>Unlimted list of leads with unlimted data points</li>
              
            </div>
            <div className="buttons">
              <button>Try Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingComponent;
