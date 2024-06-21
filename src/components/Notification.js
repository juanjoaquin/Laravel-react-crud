import React from 'react'

const Notification = ({message}) => {
    return  (
        <div style={{position: "fixed", top: "10px", right: "10px", backgroundColor: "lightgreen"}}>
            {message}
        </div>
    );
};

export default Notification