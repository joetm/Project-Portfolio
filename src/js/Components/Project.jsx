/* @flow */

const React = require('react');

import Thumb from './Thumb.jsx';
import Video from './Video.jsx';
import ProjectLinkRow from './ProjectLinkRow.jsx';


class Project extends React.Component {
    render() {
        const { attrs, visible, idtype } = this.props

        let technologies = [];
        for (let i=0, numrows = attrs.technology.length; i < numrows; i++) {
            technologies.push(<li className="label" key={idtype+'_tech_'+i}>{attrs.technology[i]}</li>);
        }

        let imgs = null;
        if (attrs.imgs !== undefined) {
            imgs = attrs.imgs.map((img, index) => (
                    <li key={`${idtype}_img_${index}`} class={img.class}>
                        <Thumb
                            title={img.title}
                            img={img.img}
                            thumb={img.thumb}
                            alt=""
                        />
                    </li>
                )
            )
        }

        let projectLinks = [];
        if (attrs.links !== undefined) {
            for (let i = 0, numrows = attrs.links.length; i < numrows; i++) {
                projectLinks.push(
                    <ProjectLinkRow
                        key={`${this.props.idtype}_link_${i}`}
                        label={attrs.links[i].label}
                        linkText={attrs.links[i].title}
                        linkTarget={attrs.links[i].link}
                    />
                );
            }
        }

        return (
            <div
                style={{display: visible === false ? 'none' : 'block'}}
                className="row page-break margin-top-print"
            >
                <div className="large-12 columns">

                    <hr className="hide-for-print" />

                    <h4>{attrs.title}</h4>

                    <div className="descr" dangerouslySetInnerHTML={{__html: attrs.description}}></div>

                    {attrs.imgs && attrs.imgs.length > 0 && (
                            <div className="thumbs">
                                <ul className="clearing-thumbs small-block-grid-1 medium-block-grid-3 large-block-grid-4">
                                    {imgs}
                                </ul>
                            </div>
                        )
                    }

                    <div class="meta columns margin-top-print">

                        {projectLinks ?
                            <div class="large-12">
                                {projectLinks}
                            </div> :
                            ''
                        }

                        {technologies.length ?
                            <div className="large-12">
                                <span className="lbl">Technology:</span>
                                <ul className="technologies inline-list">
                                    {technologies}
                                </ul>
                            </div> :
                            ''
                        }

                        {attrs.status ?
                            <div class="large-12">
                                <span class="lbl">Status:</span> {attrs.status}
                            </div> :
                            ''
                        }

                        {attrs.purpose ?
                            <div class="large-12">
                                <span class="lbl">Purpose:</span> {attrs.purpose}
                            </div> :
                            ''
                        }

                        {attrs.position ?
                            <div class="large-12">
                                <span class="lbl">Position:</span> {attrs.position}
                            </div> :
                            ''
                        }

                        {attrs.organisation ?
                            <div class="large-12">
                                <span class="lbl">Organisation:</span> <span class="descr" dangerouslySetInnerHTML={{__html: attrs.organisation}}></span>
                            </div> :
                            ''
                        }

                        {attrs.location ?
                            <div class="large-12">
                                <span class="lbl">Location:</span> <span class="descr">{attrs.location}</span>
                            </div> :
                            ''
                        }

                        {attrs.type ?
                            <div class="large-12">
                                <span class="lbl">Type:</span> {attrs.type}
                            </div> :
                            ''
                        }

                        {attrs.grade ?
                            <div class="large-12">
                                <span class="lbl">Grade:</span> {attrs.grade}
                            </div> :
                            ''
                        }

                        {attrs.daterange ?
                            <div class="large-12">
                                <span class="lbl">Date:</span> {attrs.daterange}
                            </div> :
                            ''
                        }

                    </div>

                </div>

            </div>
        );
    }
}

export default Project;
