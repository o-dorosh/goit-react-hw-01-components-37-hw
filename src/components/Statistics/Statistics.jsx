import PropTypes from 'prop-types';
import s from './Statistics.module.css';

export const Statistics = ({ title, stats}) => {
    return (
        <section className={s.statistics}>
            {title && <h2 className={s.title}>{title}</h2>}
      
        <ul className={s.statistics__list}>
          {stats.map(stats_item => (
            <li className={s.item} key={stats_item.id}>
            <span className={s.labe}>{stats_item.label}</span>
            <span className={s.percentage}>{stats_item.percentage}</span>
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