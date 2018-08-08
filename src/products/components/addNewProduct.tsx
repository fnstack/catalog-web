import * as React from 'react';
import { Modal, Button, Input, Form } from 'antd';

const FormItem = Form.Item;
const { TextArea } = Input;

interface AddNewProductState {
    visible:boolean;    
}

class AddNewProduct extends React.Component<AddNewProductState> {
    public state: AddNewProductState = {
        visible:false
    };

    showModal = () => {
        this.setState({
          visible: true,
        });
      }
    
    handleOk = () => {
        this.setState({
          visible: false,
        });
      }

    handleCancel = () => {
    this.setState({
      visible: false,
    });
  }
    public render() {
        return(
            <div>
                <Button style={{marginRight:10}} type="primary" onClick={this.showModal}>Ajouter</Button>
                <Modal
                title="Ajouter un produit"
                visible={this.state.visible}
                onOk={this.handleOk}
                onCancel={this.handleCancel}
                >
                <Form onSubmit={}>
                    <FormItem label="Nom :"style={{marginTop:-20}}>
                        <Input placeholder="Nom du produit" name='name'/>
                    </FormItem>
                    <FormItem label="Catégorie :" style={{marginTop:-20}}>
                        <Input placeholder="Catégorie du produit" name="category"/>
                    </FormItem>
                    <FormItem label="Marque :" style={{marginTop:-20}}>
                        <Input placeholder="Marque du produit" name="brand"/>
                    </FormItem>
                    <FormItem label="Description :" style={{marginTop:-20, marginBottom:-10}}>
                        <TextArea placeholder="Description du produit" 
                        autosize={{ minRows: 2, maxRows: 6 }} name="description"/>
                    </FormItem>
                 </Form> 
                </Modal>               
            </div>
        );
    }
}

export { AddNewProduct}