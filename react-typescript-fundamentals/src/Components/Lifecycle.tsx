// Example: Class Component with Lifecycle Methods
import React, { Component } from 'react';

interface LifecycleExampleProps {
  initialCount: number;
}

interface LifecycleExampleState {
  count: number;
}

class LifecycleExample extends Component<LifecycleExampleProps, LifecycleExampleState> {
  constructor(props: LifecycleExampleProps) {
    super(props);
    this.state = {
      count: props.initialCount,
    };
  }

  componentDidMount() {
    console.log('Component did mount');
  }

  componentDidUpdate(prevProps: LifecycleExampleProps, prevState: LifecycleExampleState) {
    console.log('Component did update', prevProps, prevState);
  }

  componentWillUnmount() {
    console.log('Component will unmount');
  }

  render() {
    return (
      <div>
        <p>{`Count: ${this.state.count}`}</p>
      </div>
    );
  }
}

export default LifecycleExample;
