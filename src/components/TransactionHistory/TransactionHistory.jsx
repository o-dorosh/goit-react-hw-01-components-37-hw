import PropTypes from 'prop-types';
import s from './TransactionHistory.module.css';

export const TransactionHistory = ({ transactions  }) => {
    return (
        <table  className={s.transaction_history}>
            <thead className={s.tr_history__header}>
                <tr>
                    <th className={s.tr_history__header_th}>Type</th>
                    <th className={s.tr_history__header_th}>Amount</th>
                    <th className={s.tr_history__header_th}>Currency</th>
                </tr>
            </thead>

            <tbody>
            {transactions.map(({id, type, amount, currency}) => (
                <tr className={s.tr_history__body_tr} key={id}>
                    <td className={s.tr_history__body_td}>{type}</td>
                    <td className={s.tr_history__body_td}>{amount}</td>
                    <td className={s.tr_history__body_td}>{currency}</td>
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