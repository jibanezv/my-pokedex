import React from 'react';

const Pagination = (props) => {
    const { onLeftClick, onRightClick, page, totalPages } = props;
    return (
        <div className="pagination">
            <button onClick={onLeftClick} className="next-back-btn">
                <div className='next-back-div'>👈</div>
            </button>
            <div>{page} de {totalPages}</div>
            <button onClick={onRightClick} className="next-back-btn">
                <div className='next-back-div'>👉</div>
            </button>
        </div>
    );
};

export default Pagination;