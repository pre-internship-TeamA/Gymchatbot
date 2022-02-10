function Pagination({ postsPerPage, totalPosts, paginate }){

    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumbers.push(i);
    }
    return (
        <div>
        <nav>
            <div className="pagination">
            {pageNumbers.map((number) => (
                <li key={number} className="page-item">
                <span onClick={() => paginate(number)} className="page-link">
                    {number}
                </span>
                </li>
            ))}
            </div>
        </nav>
        </div>
    );
};

export default Pagination;