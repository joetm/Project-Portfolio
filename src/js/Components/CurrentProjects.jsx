var React = require('react');

class CurrentProjects extends React.Component {
  render() {
    return (
        <section>
            <div id="current" class="row page-break hide-for-print">
                <div class="small-12 columns">
                    <hr class="hidden-print" />
                    <h3>Current Projects <i class="icon-loading animate-spin" title="...loading..."></i></h3>
                </div>
            </div>
            <div id="current_projects" class="margin-top-print">{this.props.children}</div>
        </section>
    );
  }
}

export default CurrentProjects;
