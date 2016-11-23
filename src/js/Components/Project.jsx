const React = require('react');

import Thumb from './Thumb.jsx';
import Video from './Video.jsx';


class ProjectLinkRow extends React.Component {
    render() {
        return (
            <div key={this.props.key}>
                <span class="lbl">{this.props.label}:</span> <a href={this.props.linkTarget} target="_blank">{this.props.linkText}</a>
            </div>
        );
    }
}



function outputHTML(txt) {
    return {__html: txt};
}


var Project = React.createClass({

    getInitialState: () => ({
        visible: true
    }),


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

        let projectLinks = [];
        if (this.props.attrs.links !== undefined) {
            for (let i=0, numrows=this.props.attrs.links.length; i < numrows; i++) {
                projectLinks.push(
                    <ProjectLinkRow
                        key={this.props.idtype+'_link_'+i}
                        label={this.props.attrs.links[i].label}
                        linkText={this.props.attrs.links[i].title}
                        linkTarget={this.props.attrs.links[i].link}
                    />
                );
            }
            // console.log('links', projectLinks);
        }

        return (
            <div
                id={this.props.idtype}
                style={{display: this.state.visible === true ? 'block' : 'none'}}
                class="row page-break margin-top-print"
            >
                <div class="large-12 columns">

                    <hr class="hide-for-print" />

                    <h4>{this.props.attrs.title}</h4>

                    <div>{this.props.attrs.idtype}</div>

                    <div class="descr" dangerouslySetInnerHTML={{__html: this.props.attrs.description}}></div>

                    {this.props.attrs.imgs && this.props.attrs.imgs.length > 0 ? 
                        <div class="thumbs">
                            <ul class="clearing-thumbs small-block-grid-1 medium-block-grid-3 large-block-grid-4">
                                {imgs}
                            </ul>
                        </div> :
                        ''
                    }

                    <div class="meta columns margin-top-print">

                        {this.props.attrs.projectLinks ? 
                            <div class="large-12">
                                {projectLinks}
                            </div> :
                            ''
                        }

                        {this.props.attrs.technologies ? 
                            <div class="large-12">
                                <span class="lbl">Technology:</span>
                                <ul class="inline-list">
                                    {technologies}
                                </ul>
                            </div> :
                            ''
                        }

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

                        {this.props.attrs.daterange ? 
                            <div class="large-12">
                                <span class="lbl">Date:</span> {this.props.attrs.daterange}
                            </div> :
                            ''
                        }

                    </div>

                </div>

            </div>
        );
    }
});

export default Project;
