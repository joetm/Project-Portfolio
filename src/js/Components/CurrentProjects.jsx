const React = require('react');

import LoadingAnim from './LoadingAnim.jsx';

class CurrentProjects extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true
        };
    }
    render() {
        return (
            <section>
                <div id="current" class="row page-break hide-for-print">
                    <div class="small-12 columns">
                        <hr class="hidden-print" />
                        <h3>Current Projects <LoadingAnim loading={this.state.loading} /></h3>
                    </div>
                </div>
                <div id="current_projects" class="margin-top-print">{this.props.children}</div>
            </section>
        );
    }
}

export default CurrentProjects;
