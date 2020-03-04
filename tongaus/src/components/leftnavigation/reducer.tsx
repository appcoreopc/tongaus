import {HOMEPAGELOAD, ORDERPAGELOAD, MARKETINGPAGELOAD, ANALYTICSPAGELOAD, APPPAGELOAD, SETTINGSPAGELOAD} from "./actions";

const LeftNavigationReducer = (state: any = { count : 0}, action: any) =>  {
    switch (action.type) {
        case HOMEPAGELOAD:
          return { ...state, count: state.count + 1 };
        case ORDERPAGELOAD:
            return { ...state, count: state.count + 1 };
        case MARKETINGPAGELOAD:
          return { ...state, count: state.count - 1 };
        case ANALYTICSPAGELOAD:
              return { ...state, count: state.count - 1 };
        case APPPAGELOAD:
              return { ...state, count: state.count - 1 };
        case SETTINGSPAGELOAD:
            return { ...state, count: state.count + 100 };
            default:
          return state;
      }
    };

export default LeftNavigationReducer;
