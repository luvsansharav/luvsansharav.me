import React, { Component, Fragment } from "react";
import { Timeline, Event } from "react-timeline-scribble";

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
      <div className="container">
        <div className="d-flex justify-content-center mt-3">
          <p class="text-monospace font-weight-light">LOYA Altangerel</p>
        </div>
        <div className="d-flex justify-content-center">
          {this.state.socialLinks.map(item => (
            <a href={item.url} target="_blank" rel="noopener noreferrer">
              <p class="text-monospace">{item.title}</p>
            </a>
          ))}
        </div>
        <div className="d-flex justify-content-center mt-3">
          <p class="text-monospace">{this.state.currentTime.toString()}</p>
        </div>
        <div className="d-flex justify-content-center mt-5">
          <Fragment>
            {/* <h1>test</h1> */}
            <Timeline>
              <Event
                interval={"May 25, 2019"}
                title={"What is Cloud Computing?"}
                subtitle={"A cloud is the future of computing!"}
              >
                <p>
                  A cloud services platform provides rapid access to flexible
                  and low cost IT resources. With cloud computing, you don’t
                  need to make large upfront investments in hardware and spend a
                  lot of time on the heavy lifting of managing that hardware.
                  Instead, you can provision exactly the right type and size of
                  computing resources you need to power your newest idea or
                  operate your IT department. You can access as many resources
                  as you need, almost instantly, and only pay for what you use.
                </p>
                <p>
                  #cloud services, #computing, #platform, #low cost, #no
                  hardware #computing resources, #provision #instant, #pay for
                  whay you use #innovate faster #agility #scale up/down
                  #elasticity #deploy globally
                </p>
                <audio
                  controls
                  src="https://s3-us-west-2.amazonaws.com/luvsansharav.me-audio-archive/cloudcomputing_speech.mp3"
                />
                <footer className="blockquote-footer mt-4">
                  <cite title="Source Title">
                    Reference, https://aws.amazon.com/what-is-cloud-computing/
                  </cite>
                </footer>
              </Event>
              <Event
                interval={"May 24, 2019"}
                title={"Who is Loya?"}
                subtitle={"First post ever!"}
              >
                <p>
                  My name is Loya, the second son of House Altangerel. I grew up
                  in Mongolia its where my story begins. I am the one who loves
                  to learn more about the computer science and share my
                  experience.
                </p>
                <p>
                  #Loya, #Altangerel, #second son, #House Altangerel, #Mongolia,
                  #story, #begins #love to learn, #learn more, #computer
                  science, #share, #experience
                </p>
                <audio
                  controls
                  src="https://s3-us-west-2.amazonaws.com/luvsansharav.me-audio-archive/whoisme_speech.mp3"
                />
                <footer className="blockquote-footer mt-4">
                  <cite title="Source Title">Regards, Loya Altangerel</cite>
                </footer>
              </Event>
            </Timeline>
          </Fragment>
        </div>
      </div>
    );
  }
}

export default Home;
