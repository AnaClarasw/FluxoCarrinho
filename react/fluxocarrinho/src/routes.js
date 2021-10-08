import {BrowserRouter, Switch, Route} from 'react-router-dom'

import Carrinho from './infoX/carrinho'

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/carrinho" components={Carrinho} />
            </Switch>
        </BrowserRouter>
    )
}