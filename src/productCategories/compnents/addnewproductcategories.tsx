import * as React from 'react';
import { Modal, Button, Input, Form, Col, Row } from 'antd';
const FormItem = Form.Item;
const { TextArea } = Input;


class Addnewproductcategorie extends React.Component {
  state = { visible: false, maskClosable: false }


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

  handleSubmit = () => {
    console.error("Not implemented");
  }

public render () {
  return(
    <div>
      <Row>
        <Col span={24}>
        <Button type="primary" onClick={this.showModal}>Ajouter</Button>
          <Modal
            title="Ajouter une catégorie de produit"
            visible={this.state.visible}
            onOk={this.handleOk}
            onCancel={this.handleCancel}
            cancelText= "Annuler"
            maskClosable={this.state.maskClosable}

          >
              <Form onSubmit={this.handleSubmit}>
                  <FormItem label="Nom:">
                    <Input placeholder="Nom de la catégorie"/>
                  </FormItem>
                    <FormItem label="Description:">
                      <TextArea placeholder="Description de la catégorie du produit"
                      autosize={{ minRows: 2, maxRows: 6 }}/>
                    </FormItem>
              </Form>
            </Modal>
        </Col>
      </Row>
    </div>
  );
}
}
export { Addnewproductcategorie };
