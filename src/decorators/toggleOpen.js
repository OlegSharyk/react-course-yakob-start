import React, { Component as ReactComponent } from 'react';
export default OriginalComponent =>
  class WrappedComponent extends ReactComponent {
    state = {
      isOpen: false
    };

    componentDidMount(){
      console.log('~~~~', 'mounting');
    }

    componentDidUpdate() {
      console.log('~~~~', 'updating');
    }

    componentWillUnmount() {
      console.log('~~~~~', 'unmounting');
    } 

    toggleOpen = ev => {
      ev && ev.preventDefault && ev.preventDefault();
      this.setState({
        isOpen: !this.state.isOpen
      });
    };

    render() {
      return (
        <OriginalComponent
          {...this.props}
          {...this.state}
          toggleOpen={this.toggleOpen}
        />
      );
    }
  };
