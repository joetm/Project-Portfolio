var React = require('react');

import LoadingAnim from './LoadingAnim.jsx';

class PastProjects extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            loading: true
        };
    }

    // TODO: fix CSS and remove id="past"
    render() {
        return (
            <section>
                <div id="past" class="projects_headline row hide-for-print">
                    <div class="large-12 columns">
                        <hr class="hidden-print" />
                            <h3>{this.props.title} <LoadingAnim loading={this.state.loading} /></h3>
                    </div>
                </div>
                <div class="projects_body margin-top-print">
                    {this.props.children}
                </div>
            </section>
        );
    }

}

export default PastProjects;
