import React from 'react';
import Content from './Content.js';

import './styles.css';

class App  extends React.Component {

  constructor(props) {
    super(props);
  }

  changeTitle = (title) => {
    document.title = title;
  }

  render() {
    return (
      <Content changeTitle={this.changeTitle} greeting='Hello World' />
    );
  }
}

export default App;
