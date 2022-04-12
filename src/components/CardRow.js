import React, { useEffect, useState } from "react";
import eventsService from "../service/events.service";
import Card from "./Card";
import Filter from "./Filter/Filter";

const CardRow = () => {
  const [list, setList] = useState([]);
  const [filterList, setFilterList] = useState([])
  const [loading, setLoading] = useState(false);
  const [selectedDepartment, setSelectedDepartment] = useState(null)
  const getAllEvents = async () => {
    setLoading(true);
    const data = await eventsService.getAllEvents();
    console.log("Data : ", data.docs);
    const result = data.docs.map((item) => ({ ...item.data(), id: item.id }))
    setList(result);
    setFilterList(result)
    setLoading(false);
  };

  useEffect(() => {
    getAllEvents();
  }, []);

  useEffect(() => {
    filterByDepartment()
  }, [selectedDepartment])

  const filterByDepartment = () => {
    if (selectedDepartment === "ALL") {
      setFilterList([...list])
      // alert("hi")
      return;
    }
    else {

      const newList = list.filter((item) => {
        return (item.department === selectedDepartment);
      })
      setFilterList([...newList])
    }
  }


  return (
    <div className="m-1 box">
        <Filter department={selectedDepartment} setDepartment={setSelectedDepartment} />
        
      {/* <div className="is-flex-direction-row is-flex is-justify-content-space-between px-5">
        <h1 className="is-size-2 is-text has-text-left">MCA</h1>
        <h1 className="button  has-text-right">see more</h1>
      </div> */}

      {/* <div className="columns m-5">
        <div className="column">
          <Card />
        </div>
        <div className="column">
          <Card />
        </div>
        <div className="column">
          <Card />
        </div>
        <div className="column">
          <Card />
        </div>
        <div className="column">
          <Card />
        </div>
      </div>
     */}

      <div className="is-flex is-flex-wrap-wrap  is-justify-content-center">
        {/* <div className="cardItem">
          <Card />
        </div> */}
        {loading && (
          <progress className="progress is-small is-primary" max="100">
            15%
          </progress>
        )}
        {filterList.map((item, id) => {
          return (
            <div
              key={id + ""}
              className="cardItem"
              onClick={() => console.log(item)}
            >
              <Card item={item} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CardRow;
