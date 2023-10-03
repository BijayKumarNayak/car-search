import "./pagination.css"
import React, { useState } from "react";
import data from "./data/data.json";
import ReactPaginate from "react-paginate";
import Card from "./component/card/Card";
import Header from "./component/header/Header";
import { useSelector } from "react-redux";

function App() {
  const [cars, setCars] = useState(data.slice(0, 60));
  const [pageNumber, setPageNumber] = useState(0);

  const query = useSelector((state) => state.data.inputData);



  const usersPerPage = 6;
  const pagesVisited = pageNumber * usersPerPage;

  const displayCars = cars
    .slice(pagesVisited, pagesVisited + usersPerPage)
    .filter((item) => item.carName.toLowerCase().includes(query))
    .map((car) => {
      return (
        <div  key={car.id}>
          <Card data={car} />
        </div>
      );
    });

  const pageCount = Math.ceil(cars.length / usersPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  return (
    <div className="p-4 bg-slate-300">
      <Header />

      <div className="grid grid-cols-3 grid-rows-2 gap-4">{displayCars}</div>
      
      <ReactPaginate
        className="flex items-center"
        previousLabel={<span className="pt-2 material-symbols-outlined">
        arrow_back
        </span>}
        nextLabel={<span className="pt-2 material-symbols-outlined">
        arrow_forward
        </span>}
        pageCount={pageCount}
        onPageChange={changePage}
        containerClassName={"pagination"}
        pageClassName={'item pagination-page '}
        marginPagesDisplayed={2}
        
        previousLinkClassName={" previousBttn"}
        nextLinkClassName={"nextBttn"}
        disabledClassName={"paginationDisabled"}
        activeClassName={"item paginationActive"}
      />
      </div>
      

  );
}

export default App;
