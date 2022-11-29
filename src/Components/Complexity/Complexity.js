import React,{useState} from 'react';
import './Complexity.css'

export default function Complexity({name, worst, best, avg, space,algo}){
    return(
        <>
        <div className="details">
            <h1>{name}</h1>
            <div className="complexity">
                <div className="comp">
                    <h3>Time Complexity</h3>
                    <div className="times">
                        <div>Worst Case : O{worst}  </div>
                        <div>Best Case : O{best}  </div>
                        <div>Average Case : O{avg}  </div>
                    </div>
                </div>
                <div className="comp">
                    <h3>Space Complexity:</h3>
                    <span>O({space})</span>
                </div>
            </div>
         </div>
        <div className="barDetails">
            <div className="compare">
                <span className="sqaure compare"></span>
                {/* <i class="uim uim-squre-shape"></i> */}
                {/* <i class="uil uil-square-shape"></i> */}
                Compare
            </div>
            <div className="swap">
                <span className="square"></span>
                {
                    algo=="mergeSort"?'From auxiliary space':'Swap'
                }
            </div>
            <div className="sorted">
                <span className="square"></span>
                Sorted
            </div>
        </div>
        </>
    )
}