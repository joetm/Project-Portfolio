/* @flow */

import React from 'react'

import Thumb from './Thumb.jsx'
import Video from './Video.jsx'
import ProjectLinkRow from './ProjectLinkRow.jsx'
import { LaptopFrame, TabletSideBySide, ScreenSideBySide } from './Frame.jsx'


function Project({ attrs, visible, idtype }) {

    return (
        <div
            style={{display: visible === false ? 'none' : 'block'}}
            className="row page-break margin-top-print"
        >
            <div className="large-12 columns">

                <hr className="hide-for-print" />

                <h4>{attrs.title}</h4>

                {
                    attrs?.description &&
                        <div className="descr" dangerouslySetInnerHTML={{__html: attrs.description}}></div>
                }


                {
                    attrs.frame  && attrs.frame === 'laptop' &&
                        <LaptopFrame img={attrs?.imgs[0].img} />
                }
                {
                    attrs.frame  && attrs.frame === 'tablet-sidebyside' &&
                        <TabletSideBySide imgs={attrs?.imgs} bgcolor={attrs?.bgcolor} />
                }
                {
                    attrs.frame  && attrs.frame === 'screen-sidebyside' &&
                        <ScreenSideBySide imgs={attrs?.imgs} bgcolor={attrs?.bgcolor} />
                }
                {
                    attrs.frame  && attrs.frame === 'full' &&
                        <img src={attrs?.imgs[0].img} style={{maxWidth:'100%'}} />
                }
                {
                    !attrs.frame && attrs?.imgs?.length > 0 && (
                            <div className="thumbs">
                                <ul className="clearing-thumbs small-block-grid-1 medium-block-grid-3 large-block-grid-4">
                                {
                                    attrs.imgs.map((el, index) => (
                                        <li key={`${el.title}_${index}`} className={el.class}>
                                            <Thumb
                                                title={el.title}
                                                img={el.img}
                                                thumb={el.thumb}
                                                alt=""
                                                numimgs={attrs.imgs.length}
                                            />
                                        </li>
                                    ))
                                }
                                </ul>
                            </div>
                        )
                }


                <div className="meta columns margin-top-print">

                    {
                        attrs?.links &&
                            <div className="large-12">
                            {
                                attrs.links.map((el, index) =>
                                    <ProjectLinkRow
                                        key={`${el.title}_${index}`}
                                        label={el.label}
                                        linkText={el.title}
                                        linkTarget={el.link}
                                    />
                                )
                            }
                            </div>
                    }
                    {
                        attrs.technology.length &&
                            <div className="large-12">
                                <span className="lbl">Technology:</span>
                                <ul className="technologies inline-list">
                                {
                                    attrs.technology.map((e) => <li className="label" key={`_tech_-${e}`}>{e}</li>)
                                }
                                </ul>
                            </div>
                    }
                    {
                        attrs.status &&
                        <div className="large-12">
                            <span className="lbl">Status:</span> {attrs.status}
                        </div>
                    }
                    {
                        attrs.purpose &&
                        <div className="large-12">
                            <span className="lbl">Purpose:</span> {attrs.purpose}
                        </div>
                    }
                    {
                        attrs.position &&
                        <div className="large-12">
                            <span className="lbl">Position:</span> {attrs.position}
                        </div>
                    }
                    {
                        attrs.organisation &&
                        <div className="large-12">
                            <span className="lbl">Organisation:</span> <span className="descr" dangerouslySetInnerHTML={{__html: attrs.organisation}}></span>
                        </div>
                    }
                    {
                        attrs.location &&
                        <div className="large-12">
                            <span className="lbl">Location:</span> <span className="descr">{attrs.location}</span>
                        </div>
                    }
                    {
                        attrs.type &&
                        <div className="large-12">
                            <span className="lbl">Type:</span> {attrs.type}
                        </div>
                    }
                    {
                        attrs.grade &&
                        <div className="large-12">
                            <span className="lbl">Grade:</span> {attrs.grade}
                        </div>
                    }
                    {
                        attrs.daterange &&
                        <div className="large-12">
                            <span className="lbl">Date:</span> {attrs.daterange}
                        </div>
                    }
                </div>
            </div>
        </div>
    )

}

export default Project
