const Util = {
    doSearch(router, searchText) {
        if (searchText != "") {
            router.push(`/search/${searchText}`);
        }
    }
}
export default Util;