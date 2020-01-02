import React, {Component} from 'react';

class RecordOfMonth extends Component {
    render() {
        return (
            <div>
                <div>
                    <h1 className="text-center text-white d-inline d-lg-block site-heading"><span
                        className="text-primary site-heading-upper mb-3"
                        style={{paddingBottom: '0px', paddingTop: '13px'}}>RECORD</span><span
                        className="site-heading-lower">of the month</span></h1>
                    <div className="text-center"><h2 className="text-info">Vampire Weekend - Father of the Bride</h2>
                    </div>
                    <div className="photo-gallery" style={{backgroundColor: 'rgb(52,58,64)'}}>
                        <div className="container" style={{width: '587px'}}>
                            <div className={"text-center"}>
                                <iframe width={560} height={315} src="https://www.youtube.com/embed/FwkrrU2WYKg"
                                        frameBorder={0}
                                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                />
                            </div>
                            <div className="intro">

                                <p className="text-center" style={{fontSize: '18px'}}>Vampire Weekend return with a
                                    shaggy, sprawling double album all about rebirth, contentment, and the reclamation
                                    of light.<br/></p>
                                <p className="text-center" style={{fontSize: '18px'}}>Sophiscated yet catchy, this
                                    record is a must for all music lovers out there</p>
                                <div className="text-center"><img className="border rounded border-primary shadow-lg"
                                                                  src={require("../components/comp_img/album_covers/album_cover-Vempire.jpg")}
                                                                  style={{
                                                                      height: '400px',
                                                                      width: '400px',
                                                                      marginTop: '22px'
                                                                  }}/></div>
                                <p className="text-center" style={{fontSize: '18px'}}><strong>Favourite
                                    tracks: </strong><a href={"https://youtu.be/yfGEq0JWxGM"} target="_blank" rel="noopener noreferrer"> "Harmony Hall" </a>, <a
                                    href={"https://youtu.be/R76f5AzYJK0"} target="_blank" rel="noopener noreferrer"> "Sunflower"</a> , <a
                                    href={"https://youtu.be/uxgGmqyHEqk"} target="_blank" rel="noopener noreferrer">"Flowermoon"</a></p>
                            </div>
                        </div>
                    </div>


                </div>

            </div>
        );
    }
}

export default RecordOfMonth;