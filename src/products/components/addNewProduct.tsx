import * as React from 'react';
import { Modal, Button, Input, Form } from 'antd';
import { Mutation } from 'react-apollo';
import { createProduct } from '../mutations';

const FormItem = Form.Item;
const { TextArea } = Input;

interface AddNewProductState {
  visible: boolean;
  name: string;
  categoryId: string;
  category: string;
  brandId: string;
  brand: string;
  description: string;
}

interface AddNewProductProps {
  onSubmit: (
    value: {
      variables: any;
    }
  ) => void;
}

class AddNewProduct extends React.Component<AddNewProductProps, AddNewProductState> {
  public state: AddNewProductState = {
    visible: false,
    name: undefined,
    categoryId: undefined,
    category: undefined,
    brandId: undefined,
    brand: undefined,
    description: ''
  };

  showModal = () => {
    this.setState({
      visible: true
    });
  };
  
  handleCancel = () => {
    this.setState({
      visible: false
    });
  };

   private handleInputName = e => {
    const name = e.target.name;
    const value = e.target.value;
    // @ts-ignore useless error
    this.setState({ [name]: value });
  };

  
  public render() {
    return (
      <div>
        <Button style={{ marginRight: 10 }} type="primary" onClick={this.showModal}>
          Ajouter
        </Button>
        <Mutation key="createProduct" mutation={createProduct}>
          {createProduct => {

            const onSubmit = () => {
                const { name, categoryId, brandId, description } = this.state;
                createProduct({ variables: { name, description } });
                this.setState({
                    visible: false
                });
            };

            return (
              <Modal
                title="Ajouter un produit"
                visible={this.state.visible}
                onOk={onSubmit}
                okText="Enregistrer"
                cancelText="Annuler"
                onCancel={this.handleCancel}
              >
                <Form>
                  <FormItem label="Nom :" style={{ marginTop: -20 }}>
                    <Input 
                    placeholder="Nom du produit" 
                    name="name" 
                    onChange={this.handleInputName}
                    value={name} 
                    />
                  </FormItem>
                  <FormItem label="Catégorie :" style={{ marginTop: -20 }}>
                    <Input placeholder="Catégorie du produit" name="category" />
                  </FormItem>
                  <FormItem label="Marque :" style={{ marginTop: -20 }}>
                    <Input placeholder="Marque du produit" name="brand" />
                  </FormItem>
                  <FormItem label="Description :" style={{ marginTop: -20, marginBottom: -10 }}>
                    <TextArea
                      placeholder="Description du produit"
                      autosize={{ minRows: 2, maxRows: 6 }}
                      name="description"
                    />
                  </FormItem>
                </Form>
              </Modal>
            );
          }}
        </Mutation>
      </div>
    );
  }
}

export { AddNewProduct };
