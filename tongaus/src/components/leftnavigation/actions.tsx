const ORDERPAGELOAD = 'OrderPageLoad';
const MARKETINGPAGELOAD = 'OrderPageLoad';
const HOMEPAGELOAD = 'HomePageLoad';


let nextTodoId = 0;

export const HomePage_Load= (text: String) => ({
  type: HOMEPAGELOAD,
  id: nextTodoId++,
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
    type: 'SettingsPageLoad',
    id: nextTodoId++,
    text
  })
  
  
  
    
  
    
  

