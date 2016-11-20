var React = require('react');

var Project = React.createClass({
  render: function() {
    return (
        <div id="{this.props.idtype}"
            class="{this.props.idtype} row page-break margin-top-print"
            data-magellan-destination="{this.props.idtype}">
            <div class="large-12 columns">

                <hr class="hide-for-print" />

                <h4>{this.props.title}</h4>

                <div class="descr">
                    {this.props.description}
                </div>


                <div class="thumbs">
                    <ul  class="clearing-thumbs small-block-grid-1 medium-block-grid-3 large-block-grid-4" data-clearing>

                        <li class="{this.props.class}">
                            <a href="{this.props.img}" title="{this.props.title}">
                                <img data-caption="{this.props.title}"
                                    src="{this.props.thumb}"
                                    alt=""
                                    data-interchange="[{this.props.img}, (small)], [{this.props.thumb}, (medium)], [{this.props.thumb}, (large)]"
                                    />
                            </a>
                        </li>

                    </ul>

                        <div>
                            <a href="{this.props.img}">
                                <img data-caption="{this.props.title}" alt="" src="{this.props.thumb}" data-interchange="[{this.props.img}, (small)], [{this.props.thumb}, (medium)], [{this.props.thumb}, (large)]" />
                            </a>
                        </div>

                </div>

                <div class="videos">
                        <div>
                            <iframe width="420" height="315"
                                src="https://www.youtube.com/embed/{this.props.code}" frameborder="0" allowfullscreen></iframe>
                        </div>
                </div>

                <div class="meta columns margin-top-print">

                    <div class="large-12">
                        <span class="lbl">{this.props.label}:</span> <a href="{this.props.link}" target="_blank">{this.props.title}</a>
                    </div>


                        <div class="large-12">
                            <span class="lbl">Technology:</span>
                            <ul class="inline-list">

                                <li>{this.props.ssss}</li>

                            </ul>
                        </div>


                    <div class="large-12">
                        <span class="lbl">Status:</span> {this.props.status}
                    </div>


                    <div class="large-12">
                        <span class="lbl">Purpose:</span> {this.props.purpose}
                    </div>


                    <div class="large-12">
                        <span class="lbl">Position:</span> {this.props.position}
                    </div>


                    <div class="large-12">
                        <span class="lbl">Organisation:</span> {this.props.organisation}
                    </div>


                    <div class="large-12">
                        <span class="lbl">Type:</span> {this.props.type}
                    </div>


                    <div class="large-12">
                        <span class="lbl">Grade:</span> {this.props.grade}
                    </div>


                    <div class="large-12">
                        <span class="lbl">Date:</span> {this.props.daterange}
                    </div>

                </div>

            </div>
        </div>
    );
  }
});

export default Project;
