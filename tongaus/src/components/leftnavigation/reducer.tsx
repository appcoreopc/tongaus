import {HOMEPAGELOAD, ORDERPAGELOAD, MARKETINGPAGELOAD, ANALYTICSPAGELOAD, APPPAGELOAD, SETTINGSPAGELOAD} from "./actions";

const LeftNavigationReducer = (state: any = { count : 0, employee : []}, action: any) =>  {
    switch (action.type) {
        case "HomePageLoad":
          return { ...state, count: state.count + 1 };
        case ORDERPAGELOAD:
            return { ...state, count: state.count + 2 };
        case MARKETINGPAGELOAD:
          return { ...state, count: state.count - 3 };
        case ANALYTICSPAGELOAD:
              return { ...state, count: state.count  + 4 };
        case APPPAGELOAD:
              return { ...state, count: state.count + 5 };
        case SETTINGSPAGELOAD:
            return { ...state, count: state.count + 6 };
        case "USER_FETCH_SUCCEEDED":
            debugger;
            console.log(state.employee);
            return { ...state, employee: action.employee};

        default:
          return state;
      }
    };

export default LeftNavigationReducer;
