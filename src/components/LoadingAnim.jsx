/* @flow */

import React from 'react'


export default function LoadingAnim({loading}) {

    let icon_style = loading === true ?
      {display: 'none'} :
      {display: 'inline-block'}

    return (
        <i style={icon_style} className="icon-loading animate-spin" title="...loading..."></i>
    )

}
