import React from "react";

import SubmitLoaderImg from "../../resources/icons/loader-01.gif";
import SubmitSucceededImg from "../../resources/icons/icon-01.png";

export const RequestLoader = () => {
    return (
        <img
            className="process-img"
            src={SubmitLoaderImg}
            alt="loading-process"
        />
    );
};

export const RequestSucceeded = () => {
    return (
        <img  className="process-img"   src={SubmitSucceededImg}  alt="succeeded-process"  />
    );
};
