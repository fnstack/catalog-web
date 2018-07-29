import * as React from 'react';

import { Menu, Icon, Button } from 'antd';
import {Link} from 'react-router-dom';

interface SideBarProps {
  style?: any;
  className?: any;
}

interface SideBarState {
  collapsed: boolean;
}

class SideBar extends React.Component<SideBarProps, SideBarState> {
  public state: SideBarState = {
    collapsed: false
  };

  private toggleCollapsed = () => {
    this.setState({ collapsed: !this.state.collapsed });
  };

  private handleClick = e => {
    console.log('click ', e);
  };

  public render() {
    const { style, className } = this.props;

    return (
      <div style={{ width: 256, height: '100vh' }}>

        <Menu
          onClick={this.handleClick}
          style={{ ...style, height: '100%' }}
          defaultSelectedKeys={['1']}
          mode="inline"
          theme="dark"
          className={className}
          inlineCollapsed={this.state.collapsed}
        >
         <Button type="primary" onClick={this.toggleCollapsed} style={{ margin: 8 }}>
          <Icon type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'} />
        </Button>
          <Menu.Item key="1">
            <Link to="/product-categories"><Icon type="switcher" /> <span>Product categories</span></Link>
          </Menu.Item>
          <Menu.Item key="2">
            <Icon type="tag-o" /> <span>Product Brands</span>
          </Menu.Item>
          <Menu.Item key="3">
            <Icon type="appstore-o" /> <span>Products</span>
          </Menu.Item>
        </Menu>
      </div>
    );
  }
}

export { SideBar };
