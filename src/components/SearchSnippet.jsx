/* @flow */

import React from 'react';

export default SearchSnippet = () => (
    items.map((item, index) => (
        <div className="left">
            <input id={s+index} className="filter" type="checkbox" name="technology" value={item}>
            <label for={s+index} className="filter">{item}</label>
        </div>
    ))
);
