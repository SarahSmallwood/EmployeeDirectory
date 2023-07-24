import React, { useContext, createContext, useState, useEffect } from 'react';

// create context
function Employee(props) {
  const loaded = () => {
      return <h1> </h1>
  }
return Employee? loaded() : loading();
  <div>
      <h1> {props.Employee.name} </h1>
      <h1> {props.Employee.title} </h1>
      <h1> {props.Employee.URL} </h1>
      <hr/>
      <img src={props.Employee.img}/>
      


  </div>

}

export default Employee