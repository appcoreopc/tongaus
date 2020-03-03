import {HOMEPAGELOAD, MARKETINGPAGELOAD} from "./actions";

const LeftNavigationReducer = (state: any = {}, action: any) =>  {
    switch (action.type) {
        case HOMEPAGELOAD:
          return { ...state, count: state.count + 1 };
        case MARKETINGPAGELOAD:
          return { ...state, count: state.count - 1 };
        default:
          return state;
      }
    };

export default LeftNavigationReducer;
