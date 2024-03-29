import React,{useState,useEffect} from 'react';
import './ListBlocks.css'

export default function ListBlocks({blocks,sorting,compare,swap,sorted}){
    const[width,setWidth]=useState(Math.min(20, Math.ceil(window.innerWidth / blocks.length) - 5));
    const color=blocks.length<=50 && width>14? 'black':'transparent';

    useEffect(() => {
        const handleResize= () => {
            setWidth(Math.min(20, Math.ceil(window.innerWidth / blocks.length) - 8));
        }
        window.addEventListener('resize',handleResize);
        setWidth(Math.min(20, Math.ceil(window.innerWidth / blocks.length) - 8))
    },[blocks.length])
    return(
        <div className="listBlocks">
            {blocks.map((block,i) =>{
                const height=block * 500 / blocks.length;
                let bg='cornflowerblue';
                if(sorting && compare[0] && (i===compare[0] || i===compare[1])){
                    bg='#cc81be';
                    {/* console.log('comparing..' ) */}
                }
                if( i===swap[0] || i===swap[1]){
                    bg='#dbab39';
                    {/* console.log('swapping..') */}
                }
                if(sorted && sorted.includes(i)){
                    {/* console.log('sorted partially') */}
                    bg='#52bf60';
                }
                const style={
                    'backgroundColor':bg,
                    'color': color,
                    'height': height,
                    'width': width
                }
                return (<div key={i} className='block' style={style}> {block} </div>)
            })}
        </div>
    )
}
