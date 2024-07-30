import "../../assets/css/components.css";

import React from "react";

import ArrowRightMain from "../../assets/images/arrow-up-right.svg";

const TrackExpense = () => {
    return (
        <div className="tracker-div">
            <div>
                <div className="card-header">
                    <div className="card-header-single active">
                        <h4>Credit</h4>
                    </div>
                    <div className="card-header-single">
                        <h4>Debit</h4>
                    </div>
                </div>
                <div className="card-body">
                    <div className="single-data">
                        <div className="flex-div">
                            <div className="data-tag">

                            </div>
                            <h4>Debit or Credit Card</h4>
                        </div>
                        <div>
                            <img src={ArrowRightMain} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TrackExpense;