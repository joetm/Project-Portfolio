const React = require('react');

class ContactLink extends React.Component {
    onBtnClick(event) {
        window.scrollTo(0, document.body.scrollHeight);
    }
    render() {
        return (
            <a
            href="#contact"
            onClick={this.onBtnClick.bind(this)}
            >
                Contact information
            </a>
        );
    }
}

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
                        <ContactLink />
                    </p>
                </div>
            </div>
        </section>
    );
  }
}

module.exports = About;
