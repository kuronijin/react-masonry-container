import * as React from 'react';

export interface MasonryContainerProps {
  className?: string;
}

export interface MasonryContainerState {

}

class MasonryContainer extends React.Component<MasonryContainerProps, MasonryContainerState> {
  constructor(props: MasonryContainerProps) {
    super(props);
  }

  render() {
    return React.createElement('div', {}, 'MasonryContainer');
  }
}

export default MasonryContainer;
