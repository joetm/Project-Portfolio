const React = require('react');

import LoadingAnim from './LoadingAnim.jsx';

const CurrentProjects = React.createClass({

    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         loading: true
    //     };
    // }

    getInitialState() {
        return {
            loading: true
        };
    },

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

});

export default CurrentProjects;
