import React, { useState } from 'react'
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import version from "../Images/4thversion.png"
import background1 from "../Images/background2.jpg"

import RequestForOilCollection2 from './RequestForOilCollection2';
import { useEffect } from 'react';

function ReponsiveModal() {

    const [open, setOpen] = useState(false);

    const onOpenModal = () => setOpen(true);
    const onCloseModal = () => setOpen(false);

    useEffect(() => {
      
        setTimeout(() => {
            setOpen(true)
        }, 2000);

    }, [])
    

    

    return (
        <div>
            {/* <button onClick={onOpenModal}>Open modal</button> */}
            <Modal open={open} onClose={onCloseModal} center >

                <div style={{ background: `url(${background1})`, backgroundRepeat: 'no-repeat', padding: "12px" }}>
                    <div className="row" >
                        <div className="col-md-12 text-center mt-3">
                            <h2> Request for Oil collection </h2>
                        </div>

                    </div>



                    <div className="row mt-3" >

                        <div className="col-md-6" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <img src={version} className="img-fluid" alt="Request for oil collection" />
                        </div>

                        <div className="col-md-6">
                           <RequestForOilCollection2 />
                        </div>

                    </div>
                </div>



            </Modal>
        </div>
    )
}

export default ReponsiveModal