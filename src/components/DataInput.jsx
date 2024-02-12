import React, { useState, useEffect } from "react";
import Output from "./Output";
import "../App.css";

const DataInput = () => {
    let storedData;
    if (localStorage.getItem("TodoData") === null) {
        storedData = [];
    } else {
        storedData = JSON.parse(localStorage.getItem("TodoData"));
    }

    const [titleVal, setTitleVal] = useState("");
    const [descVal, setDescVal] = useState("");

    const [TodoData, setTodoData] = useState(storedData);

    const submit = (e) => {
        e.preventDefault();
        if ((titleVal === "") & (descVal === "")) {
            alert("Please, enter some data in the given field.");
        } else {
            let sNo;
            if (TodoData.length === 0) {
                sNo = 0;
            } else {
                sNo = TodoData[TodoData.length - 1].sno + 1;
            }
            const todo = {
                sno: sNo,
                title: titleVal,
                description: descVal,
            };
            setTodoData([...TodoData, todo]);
            setTitleVal("");
            setDescVal("");
        }
    };

    const onEdit = (val) => {
        const eTitle = TodoData.filter((e) => {
            return e === val;
        });
        const upTitle = prompt("Title", eTitle[0].title);
        const upDesc = prompt("Description", eTitle[0].description);
        setTodoData(
            TodoData.map((item) => {
                if (item === val) {
                    item.title = upTitle;
                    item.description = upDesc;
                    console.log(item.title);
                }
                return item;
            })
        );
    };

    const onDelete = (val) => {
        setTodoData(
            TodoData.filter((e) => {
                return e !== val;
            })
        );
    };

    useEffect(() => {
        localStorage.setItem("TodoData", JSON.stringify(TodoData));
    }, [TodoData]);

    return (
        <>
            <div>
                <h1 className="w-75 m-auto mt-5 fw-bold mb-3">Todo List</h1>
                <form onSubmit={submit}>
                    <div className="w-75 m-auto mb-2">
                        <label className="align-self-center form-label mb-0">
                            <h3>Title</h3>
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            value={titleVal}
                            onChange={(val) => {
                                setTitleVal(val.target.value);
                            }}
                        />
                    </div>
                    <div className="w-75 m-auto mb-3">
                        <label className="form-label mb-0">
                            <h3>Description</h3>
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            value={descVal}
                            onChange={(val) => {
                                setDescVal(val.target.value);
                            }}
                        />
                    </div>
                    <div className="text-ceter w-75 m-auto">
                        <button type="submit" className="btn btn-success">
                            Add
                        </button>
                    </div>
                </form>
                <Output
                    updatedData={TodoData}
                    onEdit={onEdit}
                    onDelete={onDelete}
                    sno={TodoData.sNo}
                />
            </div>
        </>
    );
};

export default DataInput;
