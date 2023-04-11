import React,{useState} from 'react';
// import './Complexity.css'

export default function Complexity({name, worst, best, avg, space,algo}){
    return(
        <>
        <div className="details container text-white">
            <h1>{name}</h1>
            <div className="complexity row">
                <div className="comp col-xs-6">
                    <h3>Time Complexity</h3>
                    <div className="times">
                        <div>Worst Case : O{worst}  </div>
                        <div>Best Case : O{best}  </div>
                        <div>Average Case : O{avg}  </div>
                    </div>
                </div>
                <div className="comp col-xs-6">
                    <h3>Space Complexity:</h3>
                    <span>O({space})</span>
                </div>
            </div>
         </div>
       
        </>
    )
}