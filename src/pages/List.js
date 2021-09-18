import React, { useEffect, useState } from "react";
import BootstrapTable from "react-bootstrap-table-next";
import "react-bootstrap-table2-filter/dist/react-bootstrap-table2-filter.min.css";
import filterFactory, { textFilter } from "react-bootstrap-table2-filter";
import "react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css";
import paginationFactory, {
  // PaginationProvider,
} from "react-bootstrap-table2-paginator";
import { useDispatch, useSelector } from "react-redux";
import {
  setLocalDataAction,
  setLocalStorageEmptyAction,
} from "../redux/actions";
import { shallowEqual } from "react-redux";
import exportFromJSON from "export-from-json";

const List = () => {
  const { localStorage } = useSelector((state) => {
    return state;
  }, shallowEqual);
  const dispatch = useDispatch();
  const [gridData, setGridData] = useState([]);
  const [localData, setLocalData] = useState(localStorage?.localData);
  const [localDataLength, setLocalDataLength] = useState(0);

  const jsonData = localData;
  const fileName = "download";
  const exportType = exportFromJSON.types.json;

  useEffect(() => {
    setLocalData(localStorage?.localData);
    setLocalDataLength(localStorage?.localData?.length);
  }, [localStorage]);

  useEffect(() => {
    fetch(`https://randomuser.me/api/?results=20`)
      .then((res) => res.json())
      .then((data) => setGridData(data?.results));
  }, []);
  const addToLocal = (value) => {
    const duplicateCheck = localData?.find(
      (item) => item?.email === value?.email
    );
    if (duplicateCheck) {
      return alert("Already Exists");
    } else {
      const newData = {
        name:
          value?.name?.title +
          ". " +
          value?.name?.first +
          " " +
          value?.name?.last,
        email: value?.email,
        gender: value?.gender,
        phone: value?.phone,
      };
      dispatch(setLocalDataAction([...localData, newData]));
      // setLocalData([...localData, newData]);
    }
  };
  const paginationOption = paginationFactory({
    // custom: true,
    page: 1,
    sizePerPage: 10,
    firstPageText: "<<",
    prePageText: "<",
    nextPageText: ">",
    lastPageText: ">>",
    showTotal: true,
    totalSize: localDataLength,
  });
  const columns = [
    { dataField: "name", text: "Name", filter: textFilter() },
    { dataField: "email", text: "Email", sort: true, filter: textFilter() },
    { dataField: "phone", text: "Phone" },
    { dataField: "gender", text: "Gender", sort: true, filter: textFilter() },
  ];
  return (
    <div className="container">
      {/* Local Data */}
      <div className="mt-3 mb-3 d-flex justify-content-between align-item-center">
        <button
          className="btn btn-warning"
          onClick={() => dispatch(setLocalStorageEmptyAction())}
        >
          Make Empty
        </button>
        <button
          className="btn btn-success ml-3"
          onClick={() =>
            exportFromJSON({ data: jsonData, fileName, exportType })
          }
        >
          Download
        </button>
      </div>
      <h1>Locally Saved Data</h1>
      {
        <BootstrapTable
          bootstrap4
          keyField="email"
          columns={columns}
          data={localData}
          filter={filterFactory()}
          pagination={paginationOption}
        />
      }
      <br />
      <h1>Global Data</h1>
      <table className="table">
        <thead className="thead-dark">
          <tr>
            <th scope="col">SL</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {" "}
          {gridData?.map((item, index) => (
            <tr className="" key={index}>
              <th scope="row">{index + 1}</th>
              <td>
                <h5>{item?.name?.first}</h5>
              </td>
              <td>{item?.email}</td>
              <td>
                <button
                  className="btn btn-info"
                  onClick={() => addToLocal(item)}
                >
                  Add to List
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default List;
