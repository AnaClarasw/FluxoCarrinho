import Cookie from 'js-cookie'
import { useState } from 'react';

import Contador from '../contador'
import { Container, RemoverIcon} from './styled'


export default function carrinhoItem(props) {
    const [produto, setProduto] = useState(props.info);

    function alterarQtd(qtd) {
        setProduto({...produto, qtd});

        props.onUpdate(produto.id, qtd)
    }

    function remover() {
        props.onRemove(produto.id);
    }

     return(
         <div>
             
         </div>
     )









}
