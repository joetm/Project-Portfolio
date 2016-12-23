import { combineReducers } from 'redux';
import { ADD_TODO, SET_VISIBILITY_FILTER, VisibilityFilters } from './actions';
const { SHOW_ALL } = VisibilityFilters;

const initialState = {
    visibilityFilter: VisibilityFilters.SHOW_ALL,
    projects: []
};

function portfolioApp(state = initialState, action) {
    switch (action.type) {
        case SET_VISIBILITY_FILTER:
            return Object.assign({}, state, {
              visibilityFilter: action.filter
            });
		case FILTER_PROJECTS:
		  return Object.assign({}, state, {
		    projects: state.projects.map((project, index) => {
		      if (index === action.index) {
		        return Object.assign({}, project, {
		          completed: !project.completed
		        });
		      }
		      return project;
		    })
		  })
        default:
            return state;
    }
}

