import { useState } from "react";

const NoteList = ({ note, Deleting }) => {
  const [checkedNotes, setCheckedNotes] = useState({});

  /**
   * The handleMark function updates the state of checkedNotes by toggling the value of a specific id.
   */
  const handleMark = (id) => {
    setCheckedNotes((prevCheckedNotes) => ({
      ...prevCheckedNotes,
      [id]: !prevCheckedNotes[id],
    }));
  };

  return (
    <>
      {note.map(({ note, id, title }) => {
        const isChecked = checkedNotes[id] || false;

        return (
          <div key={id} className="card rounded-1  p-1 ">
           
            <h2>{title}</h2>
            <div className="card-body">
              {isChecked ? <del>{note}</del> : <p>{note}</p>}
            </div>
            <div className="container d-flex justify-content-between">
              <div className="form-check">
                <input
                  onChange={() => handleMark(id)}
                  checked={isChecked}
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id={`flexCheckIndeterminate-${id}`}
                />
                <label
                  className="form-check-label"
                  htmlFor={`flexCheckIndeterminate-${id}`}
                >
                  <i className="fa-solid fa-marker text-success"></i>
                </label>
              </div>
              <button onClick={() => Deleting(id)} className="btn btn-danger">
                <i className="fa-solid fa-trash"></i>
              </button>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default NoteList;
