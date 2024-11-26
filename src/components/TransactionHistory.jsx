import React from 'react';
import TransactionDescription from './TransactionDescription';
import './transactions.css';
import './common.css';

const TransactionHistory = ({ items }) => {
    console.log({ items });
    return (
        <table className="transaction-history">
            <thead>
                <tr>
                    <th>Type</th>
                    <th>Amount</th>
                    <th>Currency</th>
                </tr>
            </thead>
            <tbody>
                {items.map(({ id, type, amount, currency }) => (
                    <TransactionDescription
                        key={id}
                        type={type}
                        amount={amount}
                        currency={currency}
                    />
                ))}
            </tbody>
        </table>
        
    );
};
export default TransactionHistory;
