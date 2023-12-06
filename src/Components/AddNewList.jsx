import React, { useState } from "react";

const AddNewList = ({ addlist,setNewTitle,setNewNote }) => {

  return (
    <div className="card  gap-2 col-md-12 col-sm-11 p-1">
      <input
        onChange={(e) => setNewTitle(e.target.value)}
        className="form-control"
        type="text"
        placeholder="Title..."
      />
      <textarea
    
        onChange={(e) =>  setNewNote(e.target.value) }
        className="form-control"
        cols="30"
        rows="10"
        placeholder="Add New Notes..."
      ></textarea>
      <div className="card-body d-flex justify-content-between">
        <button onClick={addlist} className="btn btn-success fw-bolder  ">
          Save
        </button>
      </div>
    </div>
  );
};

export default AddNewList;
