import React, { Component } from "react";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTime: "",
      socialLinks: [
        { title: "LinkedIn", url: "https://www.linkedin.com/in/luvsansharav" },
        { title: "GitHub", url: "https://github.com/luvsansharav" },
        { title: "Twitter", url: "https://twitter.com/luvsansharav" },
        { title: "Facebook", url: "https://www.facebook.com/luvsansharav" },
        { title: "Instagram", url: "https://www.instagram.com/luvsansharav" }
      ]
    };
  }

  componentDidMount() {
    this.setState({
      currentTime: this.getCurrentDate()
    });

    setInterval(() => {
      this.setState({
        currentTime: this.getCurrentDate()
      });
    }, 1000);
  }

  getCurrentDate() {
    return new Date();
  }

  render() {
    return (
      <div>
        {/* Start Section */}
        <section className="section pt-40 pb-0">
          <div className="container">
            <div className="hero__standout">
              <img
                src="assets/images/about-us.png"
                className="img-fluid"
                alt="Image article"
              />

              <div className="row">
                <div className="col-lg-6">
                  <div className="hero__standout--headline">
                    <h2 className="section__heading">
                      LOYA Altangerel{" "}
                    </h2>
                    <div className="headline">
                      Software Engineer, Tech Lead, Solutions Architect, Consultant, DevOps/SRE, Tech Analyst
                    </div>
                    <section className="section pt-40 pb-0">
                      <div className="container">
                        <div className="row">
                          <div className="col-lg-12 offset-lg-2">
                            
                            <div className="footer__widget">
                              <ul className="footer__widget-network">
                                <li>
                                  <a href="https://www.facebook.com/luvsansharav" className="footer__widget-network-link" target="_blank">
                                    <i className="fa fa-facebook"></i>
                                  </a>
                                </li>
                                <li>
                                  <a href="https://www.instagram.com/luvsansharav/" className="footer__widget-network-link" target="_blank">
                                    <i className="fa fa-instagram"></i>
                                  </a>
                                </li>
                                <li>
                                  <a href="https://www.linkedin.com/in/luvsansharav" className="footer__widget-network-link" target="_blank">
                                    <i className="fa fa-linkedin"></i>
                                  </a>
                                </li>
                                <li>
                                  <a href="https://twitter.com/luvsansharav" className="footer__widget-network-link" target="_blank">
                                    <i className="fa fa-twitter"></i>
                                  </a>
                                </li>
                                <li>
                                  <a href="https://www.youtube.com/channel/UCEbShGDr4YKcpNF1Z1vSKxA" className="footer__widget-network-link" target="_blank">
                                    <i className="fa fa-youtube"></i>
                                  </a>
                                </li>
                              </ul>
                            </div>
                            <div className="col-lg-12 offset-lg-2">
                              <a href='/assets/files/loya-resume.pdf' download>Download Resume</a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </section>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="hero__standout--content">
                    <h4>Who is Loya?</h4>
                    <p>
                    My name is Loya, the lastborn of House Altangerel. 
                    I grew up in Mongolia its where my story begins and continuing it in somewhere around world.
                    I am the problem solver who is interested in solving world-class optimization.
                    </p>
                    <h4>Professional expertise</h4>
                    <p>
                    10+ years of professional software development experience:
                    System design, development, problem solving, automation,
                    distributed systems, monitoring, troubleshooting, testing,
                    reliability, security, cost optimization, performance efficiency,
                    operational excellence, capacity planning, fleet management, serverless application
                    </p>
                    <p>Want to build something nice? You can reach me at <strong>luvsansharav.a@gmail.com</strong></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* End Section */}


      </div>
    );
  }
}

export default Home;
