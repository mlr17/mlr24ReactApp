import ReactDOM from 'react-dom/client'
import "./assets/base.less"
import Router from './router'
//import App from './App'
const rootDiv = ReactDOM.createRoot(document.getElementById('root'))
rootDiv.render(
    <Router />
)