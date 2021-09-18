import React, { useEffect, useState } from "react";
import { Formik } from "formik";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { setLocalDataAction } from "../redux/actions";
import * as yup from "yup";

let schema = yup.object().shape({
  name: yup.string().required("Name is required"),
  email: yup.string().email().required("Email is required"),
  gender: yup.string().required("Gender is required"),
  phone: yup.string().required("Phone Number is required"),
});

const initData = {
  name: "",
  email: "",
  gender: "",
  phone: "",
};

const Data = () => {
  const dispatch = useDispatch();
  const { localStorage } = useSelector((state) => {
    return state;
  }, shallowEqual);

  const [gridData, setGridData] = useState(localStorage?.localData);

  useEffect(() => {
    setGridData(localStorage?.localData);
  }, [localStorage]);

  return (
    <div className="container">
      <Formik
        initialValues={initData}
        validationSchema={schema}
        onSubmit={(values, { setSubmitting }) => {
          const duplicateCheck = gridData?.find(
            (item) => item?.email === values?.email
          );
          if (duplicateCheck) {
            return alert("Already Exists");
          }
          alert("Data added");
          dispatch(setLocalDataAction([...gridData, { ...values }]));
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
          isValid,
          dirty,
          /* and other goodies */
        }) => (
          <form onSubmit={handleSubmit}>
            <div className="form-group w-50 mt-2">
              <input
                type="text"
                name="name"
                className="form-control mb-2"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.name}
              />
              {errors.name && touched.name && errors.name}
              <input
                type="email"
                name="email"
                className="form-control mb-2"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
              />
              {errors.email && touched.email && errors.email}

              <input
                type="text"
                name="gender"
                className="form-control mb-2"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.gender}
              />

              <select name="gender" id="gender" className="form-control mb-2">
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
              {errors.gender && touched.gender && errors.gender}
              <input
                type="text"
                name="phone"
                className="form-control mb-2"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.phone}
              />
              {errors.phone && touched.phone && errors.phone}
              <button
                type="submit"
                className="btn btn-primary d-block mt-2"
                disabled={!dirty}
              >
                Submit
              </button>
            </div>
          </form>
        )}
      </Formik>
      <table className="table w-50">
        <thead className="thead-dark">
          <tr>
            <th scope="col">SL</th>
            <th scope="col">Name</th>
          </tr>
        </thead>
        <tbody>
          {gridData?.map((item, index) => (
            <tr>
              <th scope="row">{index + 1}</th>
              <td key={index}>{item?.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Data;
