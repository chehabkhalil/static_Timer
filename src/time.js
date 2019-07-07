import React from 'react'; 
import './time.css';
let h="00"
let m="30"
let s="00"
function StaticTimer() {
    return (
        <div className="Time">
            <div>{h}</div>:<div>{m}</div>:<div>{s}</div>
        </div>
    );
}

export default StaticTimer;