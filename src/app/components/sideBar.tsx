import * as React from 'react';

import { Menu, Icon } from 'antd';

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

  private handleClick = e => {
    console.log('click ', e);
  };

  public render() {
    const { style, className } = this.props;

    return (
      <Menu
        onClick={this.handleClick}
        style={{ ...style, width: 256 }}
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        mode="inline"
        className={className}
      >
        <Menu.Item key="1">
          <Icon type="switcher" /> <span>Product categories</span>
        </Menu.Item>
        <Menu.Item key="2">
          <Icon type="tag-o" /> <span>Product Brands</span>
        </Menu.Item>
        <Menu.Item key="3">
          <Icon type="appstore-o" /> <span>Products</span>
        </Menu.Item>
      </Menu>
    );
  }
}

export { SideBar };
