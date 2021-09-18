import React, { useEffect, useState } from "react";
import BootstrapTable from "react-bootstrap-table-next";
import "react-bootstrap-table2-filter/dist/react-bootstrap-table2-filter.min.css";
import filterFactory, { textFilter } from "react-bootstrap-table2-filter";
import "react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css";
import paginationFactory, {
  PaginationProvider,
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
        address: value?.location?.city + ", " + value?.location?.country,
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
    { dataField: "address", text: "Address" },
    { dataField: "gender", text: "Gender", sort: true, filter: textFilter() },
  ];
  return (
    <div className="m-3">
      {/* Local Data */}
      <button onClick={() => dispatch(setLocalStorageEmptyAction())}>
        Make Empty
      </button>
      <button
        onClick={() => exportFromJSON({ data: jsonData, fileName, exportType })}
      >
        Download
      </button>
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
      {/* <table>
          <thead>
              <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Address</th>
                  <th>Gender</th>
              </tr>
          </thead>
          <tbody>
          {localData?.map((item, index) => (
              <tr key={index}>
              <td>{item?.name?.first}</td>
              <td>{item?.email}</td>
              <td>{}</td>
              <td>{item?.gender}</td>
          </tr>
      ))}
          </tbody>
      </table> */}
      <br />
      Global Data
      {gridData?.map((item, index) => (
        <h5 key={index} onClick={() => addToLocal(item)}>
          {item?.name?.first}
        </h5>
      ))}
    </div>
  );
};

export default List;
