import React, {Component} from 'react';
import PerformanceGraph from '../components/PerformanceGraph';
import RouteMap from '../components/RouteMap'


class GraphContainer extends Component {
  constructor(props){
    super(props);
    this.onResize = this.onResize.bind(this)
    this.onHover = this.onHover.bind(this)
    this.onBrush = this.onBrush.bind(this)
    this.state = { screenWidth: 1000, screenHeight: 500, hover: "none", brushExtent: [0, 40] }
  }
  onResize() {
    this.setState({ screenWidth: window.innerWidth, screenHeight: window.innerHeight - 120 })
  }

  onHover(d) {
    this.setState({ hover: d })
    console.log(d)
  }

  onBrush(d) {
    this.setState({ brushExtent: d })
  }

  componentDidMount() {
    window.addEventListener('resize', this.onResize, false)
    this.onResize()

  }

  render() {
    return <div className="graphcontainer">
        <div id="testing"></div>
        <div className="performance">
          <PerformanceGraph />
        </div>
        <div>
          <h1> Routes & Middleware Map</h1>
        </div>
        <div className="routemap">
          <RouteMap onHover={this.onHover}/>
        </div>
      </div>;
  }
}
export default GraphContainer;
