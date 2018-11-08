import React, { Component } from "react";
import { getSeries, getEpisode } from "../servies/seriesFakeService";
import TvItem from "./tvItem";
import NavBar from "./common/navbar";

class Series extends Component {
  internationalDivider = React.createRef();

  state = {
    series: getSeries(),
    internationalOpacity: 0,
    counter: 0
  };

  handleInternationalMouseEnter = () => {
    this.setState({ internationalOpacity: 1 });
  };

  handleInternationalMouseLeave = () => {
    this.setState({ internationalOpacity: 0 });
  };

  getImageUrl = image => {
    console.log(`/assets/${image}`);
    return `/assets/${image}`;
  };

  render() {
    const { series, internationalOpacity } = this.state;

    return (
      <React.Fragment>
        <NavBar />
        <div className="container">
          <div className="section">
            <div
              className="flex-space-between"
              onMouseEnter={this.handleInternationalMouseEnter}
              onMouseLeave={this.handleInternationalMouseLeave}
            >
              <h6 className="link-text">International Series</h6>
              <h6 className="link-text">More ></h6>
            </div>
          </div>
          <hr
            style={{
              margin: "-5px 10px 10px 10px",
              opacity: internationalOpacity
            }}
            onMouseEnter={this.handleMouseEnter}
          />
          <div className="scroll">
            <div className="flex-container">
              {series.filter(e => e.isLocal === false).map(episode => (
                <TvItem key={episode.id} episode={episode} />
              ))}
            </div>
          </div>
          <div className="section">
            <div className="flex-space-between">
              <h6 className="link-text">Local Series</h6>
              <h6 className="link-text">More ></h6>
            </div>
          </div>
          <div className="flex-container">
            {series.filter(e => e.isLocal === true).map(episode => (
              <TvItem key={episode.id} episode={episode} />
            ))}
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Series;
