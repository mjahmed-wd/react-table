import React, { useEffect, useState } from "react";

const List = () => {
  const [gridData, setGridData] = useState([]);
  const [localData, setLocalData] = useState([]);

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
      return alert("Already Exists")
    } else {
      setLocalData((prev) => [...prev, value]);
    }
  };
  return (
    <div>
      Local Data
      <table>
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
      </table>
      
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
