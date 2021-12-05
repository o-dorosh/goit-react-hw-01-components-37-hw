import PropTypes from 'prop-types';
import css from './TransactionHistory.module.css';

export const TransactionHistory = ({ transactions  }) => {
    return (
        <table  className={css.transaction_history}>
            <thead className={css.tr_history__header}>
                <tr>
                    <th className={css.tr_history__header_th}>Type</th>
                    <th className={css.tr_history__header_th}>Amount</th>
                    <th className={css.tr_history__header_th}>Currency</th>
                </tr>
            </thead>

            <tbody>
            {transactions.map(transaction => (
                <tr className={css.tr_history__body_tr} key={transaction.id}>
                    <td className={css.tr_history__body_td}>{transaction.type}</td>
                    <td className={css.tr_history__body_td}>{transaction.amount}</td>
                    <td className={css.tr_history__body_td}>{transaction.currency}</td>
                </tr>
            ))}
            </tbody>
        </table>
    );
}

TransactionHistory.propTypes = {
  transactions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};