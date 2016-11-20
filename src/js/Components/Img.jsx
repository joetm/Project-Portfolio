var React = require('react');

var Img = React.createClass({
  render: function() {
    return (
        <div class="thumbs">
            <ul  class="clearing-thumbs small-block-grid-1 medium-block-grid-3 large-block-grid-4" data-clearing>
            {{#gallery}}
                <li class="{{class}}">
                    <a href="{{img}}" title="{{title}}">
                        <img data-caption="{{title}}"
                            src="{{thumb}}"
                            alt=""
                            data-interchange="[{{img}}, (small)], [{{thumb}}, (medium)], [{{thumb}}, (large)]">
                    </a>
                </li>
            {{/gallery}}
            </ul>
            {{#screenshot}}
                <div style="padding-top:1.25rem;">
                    <a href="{{img}}"><img data-caption="{{title}}" alt="" src="{{thumb}}" data-interchange="[{{img}}, (small)], [{{thumb}}, (medium)], [{{thumb}}, (large)]"></a>
                </div>
            {{/screenshot}}
        </div>
    );
  }
});

export default Img;
