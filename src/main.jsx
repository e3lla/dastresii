import { createRoot } from 'react-dom/client'
import './index.css'
import App from './components/App/App'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import { Provider } from 'react-redux'
import { store } from './redux/Store'

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
<Header/>
  <App/>
  <Footer/>
  </Provider>,
)
