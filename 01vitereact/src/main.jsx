
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function MyApp() {
    return(
        <div>
            <h1>Hello Vite!</h1>
        </div>
    )
}

const reactElement = React.createElement(
    'a',
    { href: 'https://google.com', target: '_blank' },
    'Click me to visit'
)

ReactDOM.createRoot(document.getElementById('root')).render(
    // reactElement
 <>
<MyApp />
<App />
</> 

)
