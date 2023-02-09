console.log("I am web developer Aman");

import {
    clearSearchText,
    setSearchFocus,
    showClearTextButton,
    clearPushListener
} from "./searchBar.js";

import {
    deleteSearchResults,
    buildSearchResults,
    clearStatsLine,
    setStatsLine
} from "./searchResults.js";

import {
    getSearchTerm,
    retriveSearchResults
} from "./dataFunction.js";

document.addEventListener("readystatechange", (event) => {
    if (event.target.readyState === "complete") {
        initApp();
    }
});

const initApp = () => {
    setSearchFocus();
    // 3 eventlistener clear text
    const search = document.getElementById("search");
    search.addEventListener("input", showClearTextButton);
    const clear = document.getElementById('clear');
    clear.addEventListener("click", clearSearchText,deleteSearchResults);
    clear.addEventListener("click", deleteSearchResults);
    clear.addEventListener("click", clearStatsLine);
    clear.addEventListener("keydown", clearPushListener);
    const form = document.getElementById("searchBar");
    form.addEventListener("submit", submitTheSearch);
}

// Procedural "workflow" Function
const submitTheSearch = (event) => {
    event.preventDefault();
    deleteSearchResults();
    processTheSearch();
    setSearchFocus();
};



// Procedural1
const processTheSearch = async () => {
    clearStatsLine();
    const searchTerm = getSearchTerm();
    if (searchTerm === "") return;
    const resultArray = await retriveSearchResults(searchTerm);

    if (resultArray.length) buildSearchResults(resultArray);
    setStatsLine(resultArray.length);

}