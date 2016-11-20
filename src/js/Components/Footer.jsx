// import appConfig from '../../../config.json5';

var React = require('react');

import 'whatwg-fetch'; // see https://github.com/github/fetch

String.prototype.rot14 = function(){return this.replace(/[a-zA-Z]/g, function(c){return String.fromCharCode((c <= "Z" ? 90 : 122) >= (c = c.charCodeAt(0) + 14) ? c : c - 26);});};

class Footer extends React.Component {

    constructor(props) {
        super(props);
        this.serverRequest = null;
        this.state = {
            loading: true,
            Name: 'loading...',
            Email: 'loading...',
            Phone: 'loading...',
            CV: 'loading...',
            Linkedin: 'loading...',
        };
    }

    componentDidMount() {

        let _this = this;

        const authorInfo = `./data/author.txt`;

        this.serverRequest = fetch(authorInfo)
        .then((response) => {
            return response.text();
        }).then(function(txt) {
            var vars = txt.split("\n");
            if(vars && vars.length){
                vars = vars.map(function(item) {return item.rot14();});
                _this.setState({
                    Name: vars[0],
                    Email: vars[1],
                    Phone: vars[2],
                    CV: vars[3],
                    Linkedin: vars[4]
                });
            }
            _this.setState({loading: false});
        });
    }

    // abort the running request if component is unmounted
    componentWillUnmount() {
        this.serverRequest.abort();
    }

    render() {

        return (
            <div id="Footer">
                <div id="contact" class="large-12 columns">
                    <hr />
                    <h4>Contact Me</h4>
                    <div class="small-12 medium-6 columns" id="em">
                        <i class="fi-mail"></i> Email: {this.state.Email}
                    </div>
                    <div class="small-12 medium-6 columns">
                        <a href="#" target="_blank" id="linkedin">
                            <i class="fi-social-linkedin"></i> LinkedIn: {this.state.Linkedin}
                        </a>
                    </div>
                    <div class="small-12 medium-6 columns" id="ph">
                        <i class="fi-telephone"></i> Mobile Phone: {this.state.Phone}
                    </div>
                    <div class="small-12 medium-6 columns" id="cv">
                            <i class="fi-web"></i> CV website: <a href="http:{this.state.CV}">{this.state.CV}</a>
                    </div>
                </div>
                <div class="small-12 columns">
                    <hr />
                    <div class="row">
                        <div class="left small-6 columns">
                            <a href="#top" class="hidden-print">Back to top</a>
                        </div>
                        <div class="small-6 columns">
                            <a href="http://validator.w3.org/check?uri=komasurfer.com%2Fportfolio%2F&amp;charset=%28detect+automatically%29&amp;doctype=Inline&amp;group=0"
                            target="_blank" title="Valid HTML5" class="right hidden-print">
                                <i class="fi-html5"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};

export default Footer;
