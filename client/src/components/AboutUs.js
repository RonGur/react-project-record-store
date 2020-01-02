import React, {Component} from 'react';

class AboutUs extends Component {
    render() {
        return (

            <div>
                <h1 className="text-center text-white d-inline d-lg-block site-heading"><span className="text-primary site-heading-upper mb-3" style={{paddingBottom: '0px', paddingTop: '13px'}}>about</span><span className="site-heading-lower">Record breaker</span></h1>
                <div className={"text-center"}>
               <img  src={require("../components/comp_img/about-us_img/vinyl-grey-icon.png")} style={{width: '95px', marginBottom: '43px'}} />
                </div>
                <div className="photo-gallery" style={{backgroundColor: 'rgb(52,58,64)'}}>
                    <div className="container" style={{width: '587px'}}>
                        <div className="intro">
                            <p className="text-center" style={{fontSize: '21px'}}>We are an independent record store,&nbsp;<br />specializing in Alternative music ,<br />passionately selling records since 1993.</p>
                            <p className="text-center" style={{fontSize: '21px'}}>our staff members are world-wide known for their expertise, enthusiasn and dedication.</p>
                            <p className="text-center" style={{fontSize: '21px'}}>We welcome all music-lovers to join us, trust us and let us guide you into a place where Alt meets pop where classic meets hottest, where the sunshine meets the underground.</p>
                            <p className="text-center" style={{fontSize: '21px'}}>Here in 'Record Breaker', we believe in art, we believe in music, we believe in rock'n'roll,&nbsp;</p>
                            <p className="text-center" style={{fontSize: '22px'}}><strong>Do you?</strong></p>
                        </div>
                    </div>
                </div>
                <div />
                <div>
                    <div className="container">
                        <div className="row text-center">
                            <div className="col-md-12"><img className="border rounded flex-shrink-1" src={require("../components/comp_img/about-us_img/about_us-1.jpg")} style={{width: '900px'}} /></div>
                        </div>
                        <div className="row">
                            <div className="col-md-4"><img className="border rounded" src={require("../components/comp_img/about-us_img/about_us-2.jpg")} style={{width: '300px', height: '247px', marginTop: '22px'}} /></div>
                            <div className="col-md-4" style={{width: '356px'}}><img className="border rounded" src={require("../components/comp_img/about-us_img/about_us-4.jpg")} style={{width: '330px', marginRight: '0px', marginLeft: '-11px', marginTop: '22px'}} /></div>
                            <div className="col-md-4"><img className="border rounded" src={require("../components/comp_img/about-us_img/about_us-3.jpg")} style={{width: '300px', height: '247px', marginLeft: '10px', marginTop: '22px'}} /></div>
                        </div>
                    </div>
                </div>

            </div>

        );
    }
}

export default AboutUs;