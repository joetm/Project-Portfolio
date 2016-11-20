var React = require('react');

class PastProjects extends React.Component {
  render() {
    return (
        <section>
            <div id="past" class="row hide-for-print">
                <div class="large-12 columns">
                    <hr class="hidden-print" />
                    <h3>Past Projects <i class="icon-loading animate-spin" title="...loading..."></i></h3>
                </div>
            </div>
            <div id="past_projects" class="margin-top-print">{this.props.children}</div>
        </section>
    );
  }
}

export default PastProjects;
