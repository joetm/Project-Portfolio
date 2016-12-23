import React from 'react';
import { PureComponent } from 'react';

class Vid extends PureComponent {
  render() {
    return (
        <div class="videos">
            <iframe
                width="420"
                height="315"
                src="https://www.youtube.com/embed/{this.props.code}"
                frameborder="0"
                allowfullscreen
            ></iframe>
        </div>
    );
  }
}

export default Vid;
