import React from "react";
import "../App.css";

const Output = (props) => {
    return (
        <div className="mt-5">
            {props.updatedData.map((val) => {
                return (
                    <ul className="p-0">
                        <div className="w-75 m-auto output">
                            <div className=" ">
                                <h3>{val.title}</h3>
                                <h4>{val.description}</h4>
                            </div>
                            <button
                                type="button"
                                className="btn btn-success px-2 py-0 me-3 edit"
                                onClick={() => {
                                    props.onEdit(val);
                                }}
                            >
                                Edit
                            </button>
                            <button
                                type="button"
                                className="btn btn-danger px-2 py-0 "
                                onClick={() => {
                                    props.onDelete(val);
                                }}
                            >
                                Delete
                            </button>
                            <hr />
                        </div>
                    </ul>
                );
            })}
        </div>
    );
};

export default Output;
