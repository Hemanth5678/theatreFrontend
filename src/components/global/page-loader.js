import React from "react";

import CameraLoader from "../../resources/icons/loader-02.gif";

const PageLoader = () => {
    return (
        <section className="page-loader">
            <div className="loader-wrapper">
                <img  src={CameraLoader}  className="camera-loader"  alt="camera-loader"   />
                <div className="load-line"></div>
            </div>
        </section>
    );
};

export default PageLoader;
