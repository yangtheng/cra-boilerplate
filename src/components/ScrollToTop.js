import { Component } from 'react';
import { withRouter } from 'react-router-dom';

class ScrollToTop extends Component {
  componentDidUpdate(prevProps) {
    const { location } = this.props;
    if (
      location !== prevProps.location &&
      !(location.pathname.includes('services') && prevProps.location.pathname.includes('services')) &&
      !(location.pathname.includes('contact-us') &&
      prevProps.location.pathname.includes('contact-us'))
    ) {
      window.scrollTo(0, 0);
    }
  }

  render () {
    const { children } = this.props;
    return children;
  }
}

export default withRouter(ScrollToTop);
