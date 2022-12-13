import './App.css';
import 'antd/dist/antd.css';
import portfolioData from './assets/portfolio-data.json';
import { PortfolioCard } from './components/portfolioCard';
import { Button, Col, Layout, Row } from 'antd';
import { Content, Footer } from 'antd/es/layout/layout';
import { Navbar } from './components/navbar';
import { BrowserRouter, Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { AnimatePresence, motion } from 'framer-motion';

portfolioData.forEach((item) => {
  item.image = process.env.PUBLIC_URL + '/' + item.image;
});

export const App = () => {

  return (
    <BrowserRouter>
      <Layout>
        <AnimatePresence>
          <Content style={{ background: '#bbbddd' }}>
            <Navbar />
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.5 }}
              style={{
                fontSize: '25px',
                lineHeight: '27px',
              }}
            >
              <Row id={'about'} style={{ height: '30vh' }} type="flex" />

              <Row type="flex">
                <Col span={12}>
                  <Row
                    style={{
                      marginLeft: '25px',
                    }}
                    type="flex"
                  >
                    <motion.h1
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.75, delay: 0.5 }}
                      style={{
                        fontSize: '25px',
                        lineHeight: '27px',
                      }}
                    >
                      <p
                        style={{
                          marginTop: '50px',
                          height: '50%',
                          fontSize: '30px',
                        }}
                      >
                        Hello there, I'm lazyseahorse333 - &nbsp;
                      </p>
                    </motion.h1>
                  </Row>
                </Col>
              </Row>
            </motion.h1>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.2 }}
              style={{
                fontSize: '25px',
                lineHeight: '27px',
              }}
            >
              <Row type="flex">
                <Col span={12}>
                  <Row
                    style={{
                      marginLeft: '25px',
                    }}
                    type="flex"
                  >
                    <p
                      style={{
                        fontSize: '15px',
                      }}
                    >
                      Follow me as I take you through the course I took at Brown University, where we started with the
                      theory of user interaction and object design, then moved on to learning how to conceptualize and
                      create user models, looked at user testing paradigms, and finally spent a lot of time working with
                      various prototyping techniques, software, and actual web development.
                    </p>
                  </Row>
                </Col>
              </Row>
            </motion.h1>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 2 }}
              style={{
                fontSize: '25px',
                lineHeight: '27px',
              }}
            >
              <Row type="flex">
                <Col span={12}>
                  <Row
                    style={{
                      marginLeft: '25px',
                    }}
                    type="flex"
                  >
                    <HashLink
                      style={{
                        width: '100%',
                      }}
                      smooth
                      to="/#portfolio"
                    >
                      <motion.button
                        className={'ant-btn ant-btn-default'}
                        whileHover={{ scale: 1.1 }}
                        style={{
                          backgroundColor: '#e8e9f4',
                        }}
                      >
                        <Button
                          style={{
                            paddingTop: '0px',
                            height: '100%',
                            width: '100%',
                            backgroundColor: '#e8e9f4',
                            borderColor: 'transparent',
                          }}
                        >
                          View my portfolio
                        </Button>
                      </motion.button>
                      {/*<Button style={{*/}
                      {/*  marginLeft: '0px', height: '70px', width: '50%', backgroundColor: '#cbc7c7'*/}
                      {/*}}>View my portfolio</Button>*/}
                    </HashLink>
                  </Row>
                </Col>
              </Row>
            </motion.h1>

            <Row style={{ height: '30vh' }} type="flex" />
            <div id={'portfolio'}>
              {portfolioData.map((data, idx) => (
                <Row style={{ marginTop: '50px' }} type="flex">
                  <Col span={24}>
                    <Row
                      style={{
                        marginLeft: '25px',
                      }}
                      type="flex"
                    >
                      <PortfolioCard item={data} idx={idx} />
                    </Row>
                  </Col>
                </Row>
              ))}
            </div>

            <Row style={{ height: '10vh' }} type="flex" />
            <Row id={'contact'} style={{ marginLeft: '25px', minHeight: '30vh' }} type="flex">
              <Col span={12}>
                <p style={{ fontSize: '30px' }}>Let's get in touch</p>
                <Link
                  to="#"
                  onClick={(e) => {
                    window.location.href = 'myemail@brown.edu';
                    e.preventDefault();
                  }}
                >
                  <motion.button
                    className={'ant-btn ant-btn-default'}
                    whileHover={{ scale: 1.1 }}
                    style={{
                      backgroundColor: '#e8e9f4',
                    }}
                  >
                    <Button
                      style={{
                        paddingTop: '0px',
                        height: '100%',
                        width: '100%',
                        backgroundColor: '#e8e9f4',
                        borderColor: 'transparent',
                      }}
                    >
                      myemail@brown.edu
                    </Button>
                  </motion.button>
                </Link>
              </Col>
            </Row>
            <Footer>powered by me</Footer>
          </Content>
        </AnimatePresence>
      </Layout>
    </BrowserRouter>
  );
};
