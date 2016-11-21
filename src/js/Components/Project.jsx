const React = require('react');

/*
    <div class="videos">
            <div>
                <iframe width="420" height="315"
                    src="https://www.youtube.com/embed/{this.props.code}" frameborder="0" allowfullscreen></iframe>
            </div>
    </div>
*/



function outputHTML(txt) {
    return {__html: txt};
}


var Thumb = React.createClass({
    render: () => (
            <a href={this.props.img} title={this.props.title}>
                <img src={this.props.thumb}
                    alt=""
                    />
            </a>
    )
    // data-interchange="[{this.props.img}, (small)], [{this.props.thumb}, (medium)], [{this.props.thumb}, (large)]"
});



var Project = React.createClass({
  render: function() {

    let technologies = [];
    for (let i=0, numrows = this.props.attrs.technology.length; i < numrows; i++) {
        technologies.push(<li key={this.props.idtype+'_tech_'+i}>{this.props.attrs.technology[i]}</li>);
    }

    let imgs = null;
    if (this.props.attrs.imgs !== undefined) {
        let _this = this;
        imgs = this.props.attrs.imgs.map((img, index) => (
                            <li key={_this.props.idtype+'_img_'+index} class={img.class}>
                                <Thumb
                                    title={img.title}
                                    img={img.img}
                                    thumb={img.thumb}
                                    alt=""
                                />
                            </li>
                        )
        );
    }

    // let links = [];
    // for (let i=0, numrows = this.props.attrs.links.length; i < numrows; i++) {
    //     links.push(<div><span class="lbl">Label:</span> <a href="#" target="_blank">{this.props.attrs.links[i]}</a></div>);
    // }
    // console.log('links', links);

    // <div>
    //     <a href="{this.props.attrs.img}">
    //         <img data-caption={this.props.attrs.title} alt="" src={this.props.attrs.thumb} data-interchange="[{this.props.attrs.attrs.img}, (small)], [{this.props.attrs.thumb}, (medium)], [{this.props.attrs.thumb}, (large)]" />
    //     </a>
    // </div>

    return (
        <div id={this.props.idtype}
            class="{this.props.idtype} row page-break margin-top-print">
            <div class="large-12 columns">

                <hr class="hide-for-print" />

                <h4>{this.props.attrs.title}</h4>

                <div class="descr" dangerouslySetInnerHTML={{__html: this.props.attrs.description}}></div>

                <div class="thumbs">
                    <ul class="clearing-thumbs small-block-grid-1 medium-block-grid-3 large-block-grid-4">
                        {imgs}
                    </ul>
                </div>

                <div class="meta columns margin-top-print">

                    <div class="large-12">
                        {'LINKS: TODO'}
                    </div>

                    <div class="large-12">
                        <span class="lbl">Technology:</span>
                        <ul class="inline-list">
                            {technologies}
                        </ul>
                    </div>

                    {this.props.attrs.status ? 
                        <div class="large-12">
                            <span class="lbl">Status:</span> {this.props.attrs.status}
                        </div> :
                        ''
                    }

                    {this.props.attrs.purpose ? 
                        <div class="large-12">
                            <span class="lbl">Purpose:</span> {this.props.attrs.purpose}
                        </div> :
                        ''
                    }

                    {this.props.attrs.position ? 
                        <div class="large-12">
                            <span class="lbl">Position:</span> {this.props.attrs.position}
                        </div> :
                        ''
                    }

                    {this.props.attrs.organisation ? 
                        <div class="large-12">
                            <span class="lbl">Organisation:</span> <span class="descr" dangerouslySetInnerHTML={{__html: this.props.attrs.organisation}}></span>
                        </div> :
                        ''
                    }

                    {this.props.attrs.type ? 
                        <div class="large-12">
                            <span class="lbl">Type:</span> {this.props.attrs.type}
                        </div> :
                        ''
                    }

                    {this.props.attrs.grade ? 
                        <div class="large-12">
                            <span class="lbl">Grade:</span> {this.props.attrs.grade}
                        </div> :
                        ''
                    }

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
