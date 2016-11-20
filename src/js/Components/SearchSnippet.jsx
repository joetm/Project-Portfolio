var React = require('react');

var SearchSnippet = React.createClass({
  render: function() {
    return (
        {{#items}}
        <div class="left">
            <input id="s{{index}}" class="filter" type="checkbox" name="technology" value="{{item}}">
            <label for="s{{index}}" class="filter">{{item}}</label>
        </div>
        {{/items}}
    );
  }
});

export default SearchSnippet;
