import React from "react";

function SearchBar(props) {
    return (
        <div>
            <div className="container">
                <div className="row justify-content-center">
                    <form className="form-inline form my-2 my-lg-0">
                        <div className="input-group mb-3">
                            <div className="input-group-prepend">
                                <span className="input-group-text" id="basic-addon1">Search Books</span>
                            </div>
                            <input className="form-control mr-sm-2" name="search" type="search" placeholder="Book Title" aria-label="Search" value={props.search} onChange={props.handleInputChange} />
                            <button className="btn btn-outline-success my-2 my-sm-0" type="submit" onClick={props.handleFormSubmit}>Search</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default SearchBar