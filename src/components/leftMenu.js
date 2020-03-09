import React from 'react';
import 'antd/dist/antd.css';
import {  Menu, Icon } from 'antd';

class LeftMenu extends React.Component {
	state = {
	
	}
    
    render() {
        return (
            
            <Menu
            onClick={this.handleClick}
        
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            mode="inline"
            style={{ width: 256,borderRight:'#e4e9f2',background: '#f7f9fc',height:'100%!important',position:'fixed',top:60,paddingTop:20,bottom:0 }}
          >

            <Menu.Item key="1"><a href="/profile"><Icon type="user" /> Profil</a></Menu.Item>
            <Menu.Item key="2"><a href="my-training"><Icon type="file-done" /> Training Saya</a></Menu.Item>
            <Menu.Item key="3"><Icon type="solution" /> Data Peserta</Menu.Item>
            <Menu.Item key="4"><Icon type="bank" /> Data Instansi</Menu.Item>
            <Menu.Item key="4"><Icon type="logout" /> Keluar</Menu.Item>
           
          </Menu>
  
        );
    }
}

export default LeftMenu;
