import * as React from 'react';
import { Modal, Button, Input, Form, AutoComplete } from 'antd';
import { Mutation } from 'react-apollo';
import { createProduct } from '../mutations';

const FormItem = Form.Item;
const { TextArea } = Input;
const Option = AutoComplete.Option;

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
  categories: any[];
  brands: any[];
  
}

class AddNewProduct extends React.Component<AddNewProductProps, AddNewProductState> {
  public state: AddNewProductState = {
    visible: false,
    name: undefined,
    categoryId: undefined,
    category: undefined,
    brandId: undefined,
    brand: undefined,
    description: undefined
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
    const value = e.target.value;
    // @ts-ignore useless error
    this.setState({ name: value });
  };
  private handleInputDescription = e => {
    const value = e.target.value;
    // @ts-ignore useless error
    this.setState({ description: value });
  };
  private handleSelectCategory = (id) => {
  this.setState({categoryId: id})
  };

  private handleSelectBrand = (id) => {
    this.setState({brandId: id})
    };
  
  public render() {
    const { categories, brands } = this.props;
    return (
      <div>
        <Button style={{ marginRight: 20 }} type="primary" onClick={this.showModal}>
          Ajouter
        </Button>
        <Mutation key="createProduct" mutation={createProduct}>
          {createProduct => {

            const onSubmit = () => {
                const { name, categoryId, brandId, description } = this.state;
                createProduct({ variables: { name, categoryId, brandId,  description } });
                this.setState({
                    visible: false
                });
            };

            const categoriesOption=categories.map(c =>
            <Option key={c.id}>{c.name}</Option>
            )
            const brandsOption=brands.map(b =>
            <Option key={b.id}>{b.name}</Option>)

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
                    />
                  </FormItem>
                  <FormItem label="Catégorie :" style={{ marginTop: -20 }}>
                    <AutoComplete                      
                      style={{ width: 200 }}
                      dataSource={categories}
                      placeholder="Catégorie du produit"
                      onSelect={this.handleSelectCategory}
                    >
                      {categoriesOption}                      
                    </AutoComplete>
                  </FormItem>
                  <FormItem label="Marque :" style={{ marginTop: -20 }}>
                    <AutoComplete
                      style={{ width: 200 }}
                      dataSource={brands}
                      placeholder="Marque du produit"
                      onSelect={this.handleSelectBrand} >

                      {brandsOption}    
                      
                    </AutoComplete>
                  </FormItem>
                  <FormItem label="Description :" style={{ marginTop: -20, marginBottom: -10 }}>
                    <TextArea
                      placeholder="Description du produit"
                      autosize={{ minRows: 2, maxRows: 6 }}
                      name="description"
                      onChange={this.handleInputDescription}
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
