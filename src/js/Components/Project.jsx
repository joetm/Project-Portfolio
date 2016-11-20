var React = require('react');

/*
                <div class="videos">
                        <div>
                            <iframe width="420" height="315"
                                src="https://www.youtube.com/embed/{this.props.code}" frameborder="0" allowfullscreen></iframe>
                        </div>
                </div>
*/

function outputMarkup(txt) {
  return {__html: txt};
}


var Thumb = React.createClass({
    render: function () {
        return (
            <a href="{this.props.img}" title="{this.props.title}">
                <img data-caption="{this.props.title}"
                    src="{this.props.attrs.thumb}"
                    alt=""
                    data-interchange="[{this.props.attrs.img}, (small)], [{this.props.attrs.thumb}, (medium)], [{this.props.attrs.thumb}, (large)]"
                    />
            </a>
        );
    }
});


/*
    <img data-caption="{this.props.title}"
        src="{this.props.attrs.thumb}"
        alt=""
        data-interchange="[{this.props.attrs.img}, (small)], [{this.props.attrs.thumb}, (medium)], [{this.props.attrs.thumb}, (large)]"
        />
*/


var Project = React.createClass({
  render: function() {
    return (
        <div id="{this.props.idtype}"
            class="{this.props.idtype} row page-break margin-top-print"
            data-magellan-destination="{this.props.idtype}">
            <div class="large-12 columns">

                <hr class="hide-for-print" />

                <h4>{this.props.attrs.title}</h4>

                <div class="descr">
                    {this.props.attrs.description}
                </div>


                <div class="thumbs">
                    <ul  class="clearing-thumbs small-block-grid-1 medium-block-grid-3 large-block-grid-4" data-clearing>
                        <li class="{this.props.attrs.class}">
                            <Thumb
                                data-caption={this.props.title}
                                src={this.props.attrs.thumb}
                                alt=""
                                data-interchange="[{this.props.attrs.img}, (small)], [{this.props.attrs.thumb}, (medium)], [{this.props.attrs.thumb}, (large)]"
                                />
                        </li>
                    </ul>
                    <div>
                        <a href="{this.props.attrs.img}">
                            <img data-caption="{this.props.attrs.title}" alt="" src="{this.props.attrs.thumb}" data-interchange="[{this.props.attrs.attrs.img}, (small)], [{this.props.attrs.thumb}, (medium)], [{this.props.attrs.thumb}, (large)]" />
                        </a>
                    </div>
                </div>


                <div class="meta columns margin-top-print">

                    <div class="large-12">
                        <span class="lbl">{this.props.attrs.label}:</span> <a href="{this.props.attrs.link}" target="_blank">{this.props.attrs.title}</a>
                    </div>


                        <div class="large-12">
                            <span class="lbl">Technology:</span>
                            <ul class="inline-list">

                                <li>{this.props.attrs.ssss}</li>

                            </ul>
                        </div>


                    <div class="large-12">
                        <span class="lbl">Status:</span> {this.props.attrs.status}
                    </div>


                    <div class="large-12">
                        <span class="lbl">Purpose:</span> {this.props.attrs.purpose}
                    </div>


                    <div class="large-12">
                        <span class="lbl">Position:</span> {this.props.attrs.position}
                    </div>


                    <div class="large-12">
                        <span class="lbl">Organisation:</span> {this.props.attrs.organisation}
                    </div>


                    <div class="large-12">
                        <span class="lbl">Type:</span> {this.props.attrs.type}
                    </div>


                    <div class="large-12">
                        <span class="lbl">Grade:</span> {this.props.attrs.grade}
                    </div>

                    <div class="large-12">
                        <span class="lbl">Date:</span> {this.props.attrs.daterange}
                    </div>

                </div>

            </div>
        </div>
    );
  }
});

export default Project;
