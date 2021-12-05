import PropTypes from 'prop-types';
import css from './Statistics.module.css';

export const Statistics = ({ title, stats}) => {
    return (
        <section className={css.statistics}>
            {title && <h2 className={css.title}>{title}</h2>}
      
        <ul className={css.statistics__list}>
          {stats.map(stats_item => (
            <li className={css.item} key={stats_item.id}>
            <span className={css.labe}>{stats_item.label}</span>
            <span className={css.percentage}>{stats_item.percentage}</span>
          </li>
          ))}
        </ul>
      </section>
    );
  }

  Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        percentage: PropTypes.number.isRequired,
      }),
    ).isRequired,
  };