import * as userActionCreators from './userActionCreator';
import * as todoActionCreators from './todoActionCreator';

export default {
    ...userActionCreators,
    ...todoActionCreators
}