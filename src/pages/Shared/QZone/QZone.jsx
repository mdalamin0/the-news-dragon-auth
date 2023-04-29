import React from 'react';
import qzone1 from '../../../assets/qZone1.png'
import qzone2 from '../../../assets/qZone2.png'
import qzone3 from '../../../assets/qZone3.png'

const QZone = () => {
    return (
        <div className='bg-secondary py-4 my-4'>
            <h5 className='ms-2'>Q-Zone</h5>
            <div className='text-center'>
                <img className='' src={qzone1} alt="" />
                <img className='my-3' src={qzone2} alt="" />
                <img className='' src={qzone3} alt="" />
            </div>
        </div>
    );
};

export default QZone;