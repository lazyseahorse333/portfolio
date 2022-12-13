import { HashLink } from 'react-router-hash-link';
import { Col, Menu, PageHeader, Row } from 'antd';
import { MenuOutlined } from '@ant-design/icons';
import { Header } from 'antd/es/layout/layout';

export const Navbar = () => {
  return (
    <Header style={{ position: 'sticky', top: 0, zIndex: 1, width: '100%', backgroundColor: 'transparent' }}>
      <Row>
        <Col span={8}>
          <PageHeader className="site-page-header" title="Portfolio" />
        </Col>
        <Col sm={{ span: 4, offset: 12 }} md={{ span: 8, offset: 8 }}>
          <Menu
            style={{
              background: 'transparent',
              borderBottom: 'transparent',
            }}
            mode="horizontal"
            overflowedIndicator={<MenuOutlined />}
          >
            <HashLink smooth to="/#about">
              <Menu.Item style={{ color: 'black' }}>About</Menu.Item>
            </HashLink>
            <HashLink smooth to="/#portfolio">
              <Menu.Item style={{ color: 'black' }}>Portfolio</Menu.Item>
            </HashLink>
            <HashLink smooth to="/#contact">
              <Menu.Item style={{ color: 'black' }}>Contact</Menu.Item>
            </HashLink>
            <a href={'https://github.com/lazyseahorse333/'} target={'_blank'} rel={'noreferrer'}>
              <Menu.Item style={{ color: 'black' }}>Github</Menu.Item>
            </a>
          </Menu>
        </Col>
      </Row>
    </Header>
  );
};
