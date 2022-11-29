import React,{ useState , useEffect} from 'react';
import './App.css';
import Navbar from "./Components/Navbar/Navbar";
import ListBlocks from './Components/ListBlocks/ListBlocks';
// import Complexity from './Components/Complexity/Complexity';
import bubbleSort from "./Algorithms/bubbleSort";
import insertionSort from "./Algorithms/insertionSort";
import selectionSort from "./Algorithms/selectionSort";
import mergeSort from "./Algorithms/mergeSort";
import quickSort from "./Algorithms/quickSort";

export default function App() {

  // function randomIntFromInterval(min, max) {
  //   // min and max included
  //   return Math.floor(Math.random() * (max - min + 1) + min);
  // }
  const generateArray=(len)=>{
    setCompleted(false);
    setSorting(false);
    setSortedIndex([]);
    const randomArray = Array.from(Array(len + 1).keys()).slice(1)
		
		for (let i = randomArray.length - 1; i > 0; i--) {
			const randomIndex = Math.floor(Math.random() * (i - 1))
			const temp = randomArray[i]

			randomArray[i] = randomArray[randomIndex]
			randomArray[randomIndex] = temp
			
		}
		
		
		setBlocks(randomArray)
    // const arr=Array.from(Array(len+1).keys()).slice(1);
    // const arr=[];
    // for(let i=arr.length-1;i>0;i--){
    //   const temp= Math.floor((Math.random() * len) + 1);
		// 	arr[i]=temp;
    // }
    // const array = [];
    // for (let i = 0; i < len; i++) {
    //   array.push(randomIntFromInterval(5, 730));
    // }
    // setBlocks(arr);
  }
  const[algo, setAlgo]= useState('bubbleSort');
  const[len,setLength]= useState(30);
  const[blocks, setBlocks]=useState([]);
  const [sorting, setSorting] = useState(false);
  const[completed, setCompleted]=useState(true);
  const[speed, setSpeed]=useState(250);
  const[compare, setCompare]= useState([]);
  const [swap, setSwap]=useState([]);
  const[sortedIndex, setSortedIndex]= useState([]);
  const[name, setName]=useState("Bubble Sort");
  const[worst,setWorst]=useState("N2")
  const[best,setBest]=useState("1");
  const[avg,setAvg]=useState("na");
  const[space,setSpace]=useState("1");
  
  useEffect(() => {
      generateArray(len);
  }, [len,algo]);
  
  const handleAlgo=(event)=>{
    setAlgo(event.target.value);
  }

  const handleLength=(event)=>{
    setLength(Number(event.target.value));
  }

  const handleSpeed=(event)=>{
    setSpeed(Math.ceil(400 / Number(event.target.value)));
  }

  const bubbleDetails=()=>{
      setName('Bubble Sort');
      setWorst('N2');
      setBest('1');
      setAvg('na');
      setSpace('1');
  }
  const selectionDetails=()=>{
    setName("Selection Sort");
    setWorst('N2');
    setBest('1');
    setAvg('na');
    setSpace('1');
  }
  const insertionDetails=()=>{
    setName('Insertion Sort');
      setWorst('N2');
      setBest('1');
      setAvg('na');
      setSpace('1');
  }
  const mergeDetails=()=>{
    setName('Merge Sort');
      setWorst('NlogN');
      setBest('1');
      setAvg('na');
      setSpace('N');
  }
  const quickDetails=()=>{
    setName('Quick Sort');
      setWorst('NlogN');
      setBest('1');
      setAvg('na');
      setSpace('1');
  }

  const handleAll=(event)=>{
    if(event.target.value=="selectionSort"){
      selectionDetails();
    }
    if(event.target.value=="bubbleSort"){
      bubbleDetails();
    }
    if(event.target.value=="insertionSort"){
      insertionDetails();
    }
    if(event.target.value=="mergeSort"){
      mergeDetails();
    }
    if(event.target.value=="quickSort"){
      quickDetails();
    }
    handleAlgo();
  }

  const handleSort=()=>{
    // handleAll();
    const sortAccOrder=(order)=>{
      (
        function loop(i){
          setTimeout(() => {
            const [j,k,array,index]=order[i];
            setCompare([j,k]);
            setSwap([]);
            if(index!=null){
              setSortedIndex((prevState)=>(
                [...prevState,index]
              ))
            }
            if(array){
              setBlocks(array);
              if(j!=null || k!=null){
                setSwap([j,k]);
              }
            }
            i++;
            if(i<order.length){
              loop(i);
            }
            else{
              setCompleted(true);
              setSorting(false);
            }
          }, speed);
        }
      )(0)
    }
    setSorting(true);
    if(algo=='bubbleSort'){
      // setName('Bubble Sort');
      // setWorst('N2');
      // setBest('1');
      // setAvg('na');
      // setSpace('1');
      sortAccOrder(bubbleSort(blocks));
    }
    else if(algo=='selectionSort'){
    //   setName("Selection Sort");
    // setWorst('N2');
    // setBest('1');
    // setAvg('na');
    // setSpace('1');
      sortAccOrder(selectionSort(blocks));
    }
    else if(algo=='mergeSort'){
      // setName('Bubble Sort');
      // setWorst('N2');
      // setBest('1');
      // setAvg('na');
      // setSpace('1');
      sortAccOrder(mergeSort(blocks));
    }
    else if(algo=='quickSort'){
      // setName('Bubble Sort');
      // setWorst('N2');
      // setBest('1');
      // setAvg('na');
      // setSpace('1');
      sortAccOrder(quickSort(blocks));
    }
    else if(algo=='insertionSort'){
      // setName('Bubble Sort');
      // setWorst('N2');
      // setBest('1');
      // setAvg('na');
      // setSpace('1');
      sortAccOrder(insertionSort(blocks));
    }
    else{
        setCompleted(true);
        setSorting(false);
    }
  }

  return (
    <div className="App">
      <Navbar generateArray={()=>generateArray(len)} handleLength={handleLength} handleSpeed={handleSpeed} handleAlgo={handleAlgo} handleSort={handleSort} sorting={sorting} completed={completed} len={len} speed={speed} algo={algo} bubbleDetails={bubbleDetails} selectionDetails={selectionDetails} insertionDetails={insertionDetails} mergeDetails={mergeDetails} quickDetails={quickDetails} handleAll={handleAll} />
      <ListBlocks blocks={blocks} compare={compare && sorting} swap={swap && sorting} sorted={sortedIndex}/>
      {/* <Complexity name={name} worst={worst} best={best} avg={avg} space={space} /> */}
    </div>
  );
}

