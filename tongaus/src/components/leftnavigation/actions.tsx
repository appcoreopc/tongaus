export const ORDERPAGELOAD = 'OrderPageLoad';
export const MARKETINGPAGELOAD = 'OrderPageLoad';
export const HOMEPAGELOAD = 'HomePageLoad';
export const SETTINGSPAGELOAD = 'SettingsPageLoad';

let nextTodoId = 0;

export const HomePage_Load= (text: String) => ({
  type: HOMEPAGELOAD,
  id: nextTodoId++,
  count : 1,
  text
})

export const Order_Page_Load = (text: String) => ({
  type: ORDERPAGELOAD,
  id: nextTodoId++,
  text
})

export const Marketing_Page_Load = (text: String) => ({
    type: MARKETINGPAGELOAD,
    id: nextTodoId++,
    text
  })

  
export const Analytics_Page_Load = (text: String) => ({
    type: 'AnalyticsPageLoad',
    id: nextTodoId++,
    text
  })

export const App_Page_Load = (text: String) => ({
    type: 'AppPageLoad',
    id: nextTodoId++,
    text
  })

export const Settings_Page_Load = (text: String) => ({
    type: SETTINGSPAGELOAD,
    id: nextTodoId++,
    text
  })
  
  
  
    
  
    
  

