var React = require('react');
var ReactDOM = require('react-dom');

var Project = React.createClass({
  render: function() {
    return (
        <div {{#hasId}}id="{{idtype}}"{{/hasId}}
            class="{{idtype}} row page-break margin-top-print"
            data-magellan-destination="{{idtype}}">
            <div class="large-12 columns">

                <hr class="hide-for-print">

                <h4>{{title}}</h4>

                <div class="descr">
                    {{{description}}}
                </div>

                {{#hasImg}}
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
                {{/hasImg}}

                {{#hasVideo}}
                <div class="videos">
                    {{#videos}}
                        <div>
                            <iframe width="420" height="315"
                                src="https://www.youtube.com/embed/{{code}}" frameborder="0" allowfullscreen></iframe>
                        </div>
                    {{/videos}}
                </div>
                {{/hasVideo}}

                <div class="meta columns margin-top-print">
                    {{#links}}
                    <div class="large-12">
                        <span class="lbl">{{label}}:</span> <a href="{{link}}" target="_blank">{{title}}</a>
                    </div>
                    {{/links}}
                    {{#hasTechnology}}
                        <div class="large-12">
                            <span class="lbl">Technology:</span>
                            <ul class="inline-list">
                            {{#technology}}
                                <li>{{.}}</li>
                            {{/technology}}
                            </ul>
                        </div>
                    {{/hasTechnology}}
                    {{#status}}
                    <div class="large-12">
                        <span class="lbl">Status:</span> {{status}}
                    </div>
                    {{/status}}
                    {{#purpose}}
                    <div class="large-12">
                        <span class="lbl">Purpose:</span> {{purpose}}
                    </div>
                    {{/purpose}}
                    {{#position}}
                    <div class="large-12">
                        <span class="lbl">Position:</span> {{position}}
                    </div>
                    {{/position}}
                    {{#organisation}}
                    <div class="large-12">
                        <span class="lbl">Organisation:</span> {{{organisation}}}
                    </div>
                    {{/organisation}}
                    {{#type}}
                    <div class="large-12">
                        <span class="lbl">Type:</span> {{type}}
                    </div>
                    {{/type}}
                    {{#grade}}
                    <div class="large-12">
                        <span class="lbl">Grade:</span> {{{grade}}}
                    </div>
                    {{/grade}}
                    {{#daterange}}
                    <div class="large-12">
                        <span class="lbl">Date:</span> {{{daterange}}}
                    </div>
                    {{/daterange}}
                </div>

            </div>
        </div>
    );
  }
});

export default Project;