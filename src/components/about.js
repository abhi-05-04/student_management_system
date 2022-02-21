import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

export default function about() {
    return (
        <div>
            <section className="space-100  ">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-6 text-right col-sm-push-6">
                            <span>
                                <img src="img.png" alt="Automation" />
                            </span>
                        </div>
                        <div className="col-sm-6 text-left col-sm-pull-6">
                            <div className="clearfix ">
                                <h3 className="title11">
                                    How QueueAutomation Works?
                                </h3>
                            </div>
                            <ul className="checkmark-list">
                                <li>
                                    Students can join the queue using their phones through QR scan.
                                </li>
                                <li>
                                    A webpage will be generated highlighting all the required
                                    parameters(Name, Mobile Number). He/She need fill and submit it.
                                </li>
                                <li>
                                    After that he/she will get redirected to new page where they can see their
                                    queue no. and students waiting ahead of them. Queue Status can be
                                    tracked on a real-time basis.
                                </li>
                                <li>
                                    They will receive a reminder notification once they are next
                                    in line to be served.{" "}
                                </li>
                                <li>Service is delivered safely and comfortably. </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
