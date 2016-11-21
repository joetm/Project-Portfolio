var React = require('react');

import LoadingAnim from './LoadingAnim.jsx';

class PastProjects extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true
        };
    }
    render() {
    	this.state.loading = false;
        return (
            <section>
                <div id="past" class="row hide-for-print">
                    <div class="large-12 columns">
                        <hr class="hidden-print" />
                            <h3>Past Projects <LoadingAnim loading={this.state.loading} /></h3>
                    </div>
                </div>
                <div id="past_projects" class="margin-top-print">{this.props.children}</div>
            </section>
        );
    }
}

export default PastProjects;
