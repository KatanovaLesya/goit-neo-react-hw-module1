import React from 'react';
import './common.css';
import './transactions.css';

const TransactionDescription = ({ type, amount, currency }) => {
    console.log({ type, amount, currency });
    return (
        <tr>
            <td>{type}</td>
            <td>{amount}</td>
            <td>{currency}</td>
        </tr>
    );
};

export default TransactionDescription;