var React = require('react');

var Vid = React.createClass({
  render: function() {
    return (
        <div class="videos">
            <div>
                <iframe
                    width="420"
                    height="315"
                    src="https://www.youtube.com/embed/{this.props.code}"
                    frameborder="0"
                    allowfullscreen
                ></iframe>
            </div>
        </div>
    );
  }
});

export default Vid;
