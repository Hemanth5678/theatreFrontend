import React from "react";

import Typography from "@mui/material/Typography";


const Footer = () => {


    return (
        <section className="footer-section">
            <div className="footer-wrapper display-flex">

                <div className="copyright-wrapper display-flex">
                    <Typography  variant="h7"  component="span" >
                        Copyright ©2022 All rights reserved 
                        Developed by: Hemanth
                    </Typography>
                </div>
            </div>
        </section>
    );
};

export default Footer;
