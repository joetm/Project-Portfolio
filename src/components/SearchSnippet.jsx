/* @flow */

import React from 'react'

export default SearchSnippet = () => (
    items.map((item, index) => (
        <div className="left" key={`${item}${index}`}>
            <input id={s+index} className="filter" type="checkbox" name="technology" value={item}>
            <label for={s+index} className="filter">{item}</label>
        </div>
    ))
)
