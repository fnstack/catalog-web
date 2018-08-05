import * as React from 'react';
import { Button } from 'antd';


class Products extends React.Component {
  public render() {
    
    return (
      <div>
        <div style={{display:"flex"}} >
            <h1 >Produits</h1>
            <div style={{paddingLeft:900}} >
                <Button style={{marginTop: 5}} type="primary">Ajouter</Button> 
            </div>  
        </div> 
        <hr/>
        <div style={{paddingLeft:10}}>
            <b>Nom:</b>
            <br/>
            <b>Description:</b>
            <br/>
            <b>Catégorie:</b>
            <br/>
            <Button style={{marginTop: 5}} type="primary">Renommer</Button> 
            &nbsp;&nbsp;&nbsp;&nbsp;
            <Button style={{marginTop: 5}} type="primary">Supprimer</Button> 
        </div>
        <hr/>
        <div style={{paddingLeft:10}}>
            <b>Nom:</b>
            <br/>
            <b>Description:</b>
            <br/>
            <b>Catégorie:</b>
            <br/>
            <Button style={{marginTop: 5}} type="primary">Renommer</Button> 
            &nbsp;&nbsp;&nbsp;&nbsp;
            <Button style={{marginTop: 5}} type="primary">Supprimer</Button> 
        </div>
        <hr/>
        <div style={{paddingLeft:10}}>
            <b>Nom:</b>
            <br/>
            <b>Description:</b>
            <br/>
            <b>Catégorie:</b>
            <br/>
            <Button style={{marginTop: 5}} type="primary">Renommer</Button> 
            &nbsp;&nbsp;&nbsp;&nbsp;
            <Button style={{marginTop: 5}} type="primary">Supprimer</Button> 
        </div>  
        <hr/>             
      </div>
    );
  }
}

export { Products };
