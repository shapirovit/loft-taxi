const ACTIVE_PAGE = "ACTIVE_PAGE";

const activePage = page => {
    return {
        type: ACTIVE_PAGE,
        payload: page
    }
};

export default activePage;