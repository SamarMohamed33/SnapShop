import React from 'react';

function UpButton() {
    return (
        <div className='up-button' style={{position:"fixed",bottom:"30px",right:'30px'}}>
             <button onClick={()=>{window.scrollTo("0px","smooth")}} className='btn border-0' style={{backgroundColor:"#e7ab3c"}}><i class="fa-solid fa-up-long"></i></button>
        </div>
    );
}

export default UpButton;