import React, { useEffect, useRef, useState } from "react";
import "../../css/header/search.css";

function Search({ closeSearch }) {
    const inputRef = useRef(null);
    const [keyword, setKeyword] = useState("");

    // auto focus into input element
    useEffect(() => {
        if (inputRef.current) {
            inputRef.current.focus();
        }
    }, []);
    const handleOverlayClick = (event) => {
        if (event.target.classList.contains("h-search-overlay")) {
            closeSearch();
        }
    }; //if click outside of container, close search

    const handleSearch = (keyWord) => {
        setKeyword(keyWord)
    }
    return (
        <div className="h-search-overlay" onClick={handleOverlayClick}>
            <div className="h-search-container lato-regular">
                <div className="h-search-box">
                    <input
                        ref={inputRef}
                        type="text"
                        className="h-search-input"
                        onChange={(event) => handleSearch(event.target.value)} />
                    <br />
                </div> <br />
                {keyword ? (<div className="h-search-infor">Show results for '{keyword}'</div>) : ""}
            </div>
        </div>
    );
}

export default Search;
