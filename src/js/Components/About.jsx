const React = require('react');

class About extends React.Component {
  render() {
    return (
        <section>
            <div id="intro" class="row hidden-print">
                <div class="small-12 columns">
                    <h3>About</h3>
                    <p>
                        {this.props.aboutText}
                    </p>
                    <p>
                        {this.props.introText}
                    </p>
                    <p>
                        <a href="#contact" id="contact_link">Contact information</a>
                    </p>
                </div>
            </div>
        </section>
    );
  }
}

export default About;
