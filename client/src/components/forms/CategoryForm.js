import React from "react";

const CategoryForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div className="form-group">
        <label>{props.label}</label>
        <input
          type="text"
          className="form-control"
          onChange={(e) => props.setName(e.target.value)}
          value={props.name}
          autoFocus
          required
        />
        <br />
        <button className="btn btn-outline-primary">Save</button>
      </div>
    </form>
  );
};

export default CategoryForm;
