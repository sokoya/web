import "../assets/css/components.css";

import React from "react";

const TrackExpense = () => {
    return (
        <div className="tracker">
            <div>
                <div className="grid-flex">
                    <div>
                        <h4 className="tile-header">Expenses</h4>
                    </div>
                    <div>
                        <div className="date">
                            <h5>July 2024</h5>
                        </div>
                    </div>
                </div>
                <div className="body-content mt_5">
                    <div className="expense-flow">
                        <div className="flow-bar"></div>
                        <div className="flow-bar green"></div>
                        <div className="flow-bar lemon"></div>
                    </div>
                    <div className="expense-list mt_3">
                        <div className="single-expense">
                            <div className="flex-div">
                                <div className="bar"></div>
                                <h4>Office Food</h4>
                            </div>
                            <div>
                                <h4><span className="currency">NGN</span>4,550.00</h4>
                            </div>
                        </div>
                        <div className="single-expense">
                            <div className="flex-div">
                                <div className="bar"></div>
                                <h4>Office Food</h4>
                            </div>
                            <div>
                                <h4><span className="currency">NGN</span>4,550.00</h4>
                            </div>
                        </div>
                        <div className="single-expense">
                            <div className="flex-div">
                                <div className="bar"></div>
                                <h4>Office Food</h4>
                            </div>
                            <div>
                                <h4><span className="currency">NGN</span>4,550.00</h4>
                            </div>
                        </div>
                        <div className="single-expense">
                            <div className="flex-div">
                                <div className="bar"></div>
                                <h4>Office Food</h4>
                            </div>
                            <div>
                                <h4><span className="currency">NGN</span>4,550.00</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default TrackExpense;