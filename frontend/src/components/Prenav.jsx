import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './styles.css';

const Prenav = () => {
  return (
    <div className='container prenav'>
        <div className="mail-call">
        <div className="icon-mail">
            <img src="/Images/sms.png" alt="" />
            <p>hbandsonsllc@gmail.com</p>
        </div>
        <div className="icon-mail">
            <img src="/Images/call.png" alt="" />
            <p>hbandsonsllc@gmail.com</p>
        </div>
        </div>
        <div className="icon-time">
            <img src="/Images/Icon.png" alt="" />
            <p>8:00 AM until 6:00 PM</p>
        </div>
    </div>
  );
}

export default Prenav