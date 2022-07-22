import React, { useState } from "react";
import Fuse from "fuse.js";
import DisplayItems from "./DisplayItems";

const Search = ({input}) => {
    const [pattern, setPattern] = useState('');

    const handleChange = (e) => {
        e.preventDefault();
        setPattern(e.target.value);
    };

    const options = {
        // isCaseSensitive: false,
        // includeScore: false,
        // shouldSort: true,
        // includeMatches: false,
        // findAllMatches: false,
        // minMatchCharLength: 1,
        // location: 0,
        // threshold: 0.6,
        // distance: 100,
        // useExtendedSearch: false,
        // ignoreLocation: false,
        // ignoreFieldNorm: false,
        // fieldNormWeight: 1,
        keys: [
            "title",
            "author.firstName"
        ]
    };

    const fuse = new Fuse(input, options);
    const searchedContent = fuse.search(pattern);

    return (
        <div style={{ background: "#eee", marginTop: "1em" }}>
            <label style={{ display: "flex", columnGap: ".5em", justifyContent: "center", }}>Searched phrase:
                <input
                    type="text"
                    value={pattern}
                    onChange={(e) => handleChange(e)}
                />
            </label>
            <DisplayItems input={searchedContent} />
        </div>
    );
};

export default Search;