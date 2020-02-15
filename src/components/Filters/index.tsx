import React, { Dispatch } from 'react';
import cx from 'classnames';
import { connect } from 'react-redux';

import { Action, State, VisibilityFilter } from '../../types';

interface OwnProps {}

interface StateProps {
  activeFilter: VisibilityFilter;
}

interface DispatchProps {
  setFilter: (filter: VisibilityFilter) => void;
}

type Props = OwnProps & StateProps & DispatchProps;

const allFilters: Array<VisibilityFilter> = ['all', 'completed', 'incomplete'];

const Filters: React.FC<Props> = props => (
  <div className="visibility-filters">
    {allFilters.map(filter => (
      <span
        key={`visibility-filter-${filter}`}
        className={cx(
          'filter',
          filter === props.activeFilter && 'filter--active',
        )}
        onClick={() => {
          props.setFilter(filter);
        }}
      >
        {filter}
      </span>
    ))}
  </div>
);

const mapStateToProps = (state: State) => ({ activeFilter: state.filter });

const mapDispatchToProps = (dispatch: Dispatch<Action>) => ({
  setFilter: (filter: VisibilityFilter) =>
    dispatch({
      type: 'SET_FILTER',
      payload: {
        filter,
      },
    }),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filters);
