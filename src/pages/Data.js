import React, {useState} from "react";
import { Formik } from "formik";
const initData={
    name: "",
    email:"",
    gender:"",
    phone:""
}
const Data = () => {

const [gridData,setGridData]=useState([])
console.log(gridData)
  return (
    <div>
      <Formik
        initialValues={initData}
        // validate={}
        onSubmit={(values, { setSubmitting }) => {
        const duplicateCheck= gridData?.find(item=>item?.email===values?.email)
        console.log(duplicateCheck)
        if(duplicateCheck){
            return alert("Already Exists")
        } 
        setGridData((prev)=>[...prev,{...values}])
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
          /* and other goodies */
        }) => (
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.name}
            />
            {errors.name && touched.name && errors.name}
            <input
              type="email"
              name="email"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
            />
            {errors.email && touched.email && errors.email}
            
            <input
              type="text"
              name="gender"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.gender}
            />
            {errors.gender && touched.gender && errors.gender}
            <input
              type="number"
              name="phone"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.phone}
            />
            {errors.phone && touched.phone && errors.phone}
            <button type="submit">
              Submit
            </button>
          </form>
        )}
      </Formik>
      {
          gridData?.map((item,index)=>(<h1 key={index}>{item?.name}</h1>))
      }
    </div>
  );
};

export default Data;