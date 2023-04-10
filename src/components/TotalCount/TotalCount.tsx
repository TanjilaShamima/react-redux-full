import React from 'react';

interface Props {
    count: number;
}

const TotalCount = ({count}: Props) => {
    return (
        <div>
            <h2>{count}</h2>
        </div>
    );
};

export default TotalCount;