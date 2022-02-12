function Pagination({ postsPerPage, totalPosts, paginate }){

    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumbers.push(i);
    }
    return (
            <div className="pagination">
            {pageNumbers.map((number) => (
                <li key={number} className="page-item" onClick={() => paginate(number)}>
                <span  className="page-link">
                &lt; {number} &gt;
                </span>
                </li>
            ))}
            </div>
    );
};

export default Pagination;