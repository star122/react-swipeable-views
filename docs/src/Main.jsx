'use strict';

const React = require('react');
const SwipeableViews = require('../../src/index');
const Tabs = require('material-ui/lib/tabs/tabs');
const Tab = require('material-ui/lib/tabs/tab');
const injectTapEventPlugin = require('react-tap-event-plugin');

injectTapEventPlugin();

require('normalize.less');
require('stylesheet.less');
require('github-light.less');

const supportsTouch = 'ontouchstart' in window;

const styles = {
  slide: {
    padding: 15,
    height: 80,
    color: '#fff',
  },
  slide1: {
    background: '#FEA900',
  },
  slide2: {
    background: '#B3DC4A',
  },
  slide3: {
    background: '#6AC0FF',
  },
};

const Main = React.createClass({
  getInitialState: function() {
    return {
      index: 0,
    };
  },
  renderSupportsTouch: function() {
    return !supportsTouch && <span className="pl-id">
        <br />You need a touch device to swipe between the 3 tabs.
      </span>;
  },
  onChangeTabs: function(value) {
    this.setState({
      index: parseInt(value, 10),
    });
  },
  onChangeIndex: function(index) {
    this.setState({
      index: index,
    });
  },
  render: function() {
    const {
      index,
    } = this.state;

    return (
      <div>
        <section className="page-header">
          <h1 className="project-name">React swipeable views</h1>
          <h2 className="project-tagline">A React component for swipeable views</h2>
          <a href="https://github.com/oliviertassinari/react-swipeable-views" className="btn">
            View on GitHub
          </a>
          <a href="https://github.com/oliviertassinari/react-swipeable-views/zipball/master" className="btn">
            Download .zip
          </a>
          <a href="https://github.com/oliviertassinari/react-swipeable-views/tarball/master" className="btn">
            Download .tar.gz
          </a>
        </section>

        <section className="main-content">
          <h3>Demo 1</h3>
          <p>
            Simple case without header.
            {this.renderSupportsTouch()}
          </p>
          <SwipeableViews>
            <div style={Object.assign({}, styles.slide, styles.slide1)}>
              tab n°1
            </div>
            <div style={Object.assign({}, styles.slide, styles.slide2)}>
              tab n°2
            </div>
            <div style={Object.assign({}, styles.slide, styles.slide3)}>
              tab n°3
            </div>
          </SwipeableViews>

          <h3>Demo 2</h3>
          <p>
            Now, let's add a header.
            {this.renderSupportsTouch()}
          </p>

          <Tabs onChange={this.onChangeTabs} value={index + ''}>
            <Tab label="tab n°1" value="0" />
            <Tab label="tab n°2" value="1" />
            <Tab label="tab n°3" value="2" />
          </Tabs>
          <SwipeableViews index={index} onChangeIndex={this.onChangeIndex}>
            <div style={Object.assign({}, styles.slide, styles.slide1)}>
              tab n°1
            </div>
            <div style={Object.assign({}, styles.slide, styles.slide2)}>
              tab n°2
            </div>
            <div style={Object.assign({}, styles.slide, styles.slide3)}>
              tab n°3
            </div>
          </SwipeableViews>

          <footer className="site-footer">
            <span className="site-footer-owner">
              <a href="https://github.com/oliviertassinari/react-swipeable-views">
                React-swipeable-views
              </a>
              {' is maintained by '}
              <a href="https://github.com/oliviertassinari">oliviertassinari</a>.
            </span>
            <span className="site-footer-credits">
              {'This page was generated by '}
              <a href="https://pages.github.com">
                GitHub Pages
              </a>
              {' using the '}
              <a href="https://github.com/jasonlong/cayman-theme">Cayman theme</a>
              {' by '}
              <a href="https://twitter.com/jasonlong">Jason Long</a>.
            </span>
          </footer>
        </section>
      </div>
    );
  },
});

module.exports = Main;
