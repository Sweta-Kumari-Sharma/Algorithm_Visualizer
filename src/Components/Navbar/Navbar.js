import React from "react";
export default function Navbar({
  generateArray,
  handleLength,
  handleSpeed,
  handleAlgo,
  handleSort,
  sorting,
  completed,
  len,
  speed,
  algo,
  bubbleDetails,
  selectionDetails,
  mergeDetails,
  quickDetails,
  insertionDetails,
  handleDetails
}) {
  return (
    <nav className="navbar navbar-expand-lg bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand text-white" href="#">
          Sorting Visualizer
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="nav-item speed mx-4 px-4 text-white">
          <label htmlFor="">Set Speed</label>
          <input
            type="range"
            min="1"
            max="50"
            onChange={handleSpeed}
            value={Math.ceil(400 / speed)}
            disabled={sorting}
          />
        </div>
        <div className="nav-item size mx-4 px-4 text-white">
          <label htmlFor="">Set Size</label>
          <input
            type="range"
            min="5"
            max="150"
            onChange={handleLength}
            disabled={sorting}
            value={len}
            step="1"
          />
        </div>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {/* <select className="mx-5" onChange={handleAll} disabled={sorting} value={algo}>
                        <option value="selectionSort" onClick={selectionDetails} >Selection Sort</option>
                        <option value="bubbleSort" onClick={bubbleDetails}>Bubble Sort</option>
                        <option value="insertionSort" onClick={insertionDetails} >Insertion Sort</option>
                        <option value="mergeSort" onClick={insertionDetails} >Merge Sort</option>
                        <option value="quickSort" onClick={quickDetails}>Quick Sort</option>
                    </select> */}
            <select
              className="mx-5"
              onChange={(e) => {
                handleAlgo(e);
                handleDetails(e);
              }}
              disabled={sorting}
              value={algo}
            >
              <option value="selectionSort" onClick={selectionDetails}>
                Selection Sort
              </option>
              <option value="bubbleSort" onClick={bubbleDetails}>
                Bubble Sort
              </option>
              <option value="insertionSort" onClick={insertionDetails}>
                Insertion Sort
              </option>
              <option value="mergeSort" onClick={insertionDetails}>
                Merge Sort
              </option>
              <option value="quickSort" onClick={quickDetails}>
                Quick Sort
              </option>
            </select>
          </ul>
          <button
            className="btn btn-outline-success mx-3"
            onClick={generateArray}
            disabled={sorting}
          >
            Randomize
          </button>
          <button
            className="btn btn-outline-success mx-3"
            onClick={handleSort}
            disabled={sorting || completed}
          >
            Sort
          </button>
        </div>
      </div>
    </nav>
  );
}
