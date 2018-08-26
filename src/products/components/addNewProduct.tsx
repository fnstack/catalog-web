import * as React from 'react';
import { Modal, Button, Input, Form, Col, Row } from 'antd';

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

    handleOk = (e) => {
        console.log(e);
        this.setState({
          visible: false,
        });
      }

    handleCancel = (e) => {
    console.log(e);
    this.setState({
      visible: false,
    });
  }
    public render() {
        return(
            <div>
              <Row>
               <Col span={24}>
                <Button style={{marginRight:10}} type="primary" onClick={this.showModal}>Ajouter</Button>
                <Modal
                title="Ajouter un produit"
                visible={this.state.visible}
                onOk={this.handleOk}
                onCancel={this.handleCancel}
                >
                <Form>
                    <FormItem label="Nom :">
                        <Input placeholder="Nom du produit"/>
                    </FormItem>
                    <FormItem label="Catégorie :">
                        <Input placeholder="Catégorie du produit"/>
                    </FormItem>
                    <FormItem label="Description :">
                        <TextArea placeholder="Description du produit"
                        autosize={{ minRows: 2, maxRows: 6 }} />
                    </FormItem>
                 </Form>
                </Modal>
               </Col>
              </Row>
            </div>
        );
    }
}

export { AddNewProduct };
