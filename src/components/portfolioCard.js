import { Card, Col, Row } from 'antd';
import personas from '../assets/images/personasAndStoryboarding.png';
import goodReads from '../assets/images/goodReads.png';
import glensBakery from '../assets/images/glensBakery.png';
import rizzly from '../assets/images/rizzly.png';
import { useRef, useState } from 'react';
import { AnimatePresence, motion, useScroll } from 'framer-motion';
import { useParallax } from './useParallax';

const images = [rizzly, goodReads, glensBakery, personas];

export const PortfolioCard = (props) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useParallax(scrollYProgress, 50);

  const { item, idx } = props;
  const [showHover, setShowHover] = useState(false);
  return (
    <a href={item.link} target={'_blank'} rel={'noreferrer'}>
      <Card
        ref={ref}
        style={{
          // borderRadius: 10, overflow: 'hidden', backgroundColor: '#d3d3d4', borderWidth: 0, minWidth:'95vw',
          borderRadius: 10,
          overflow: 'hidden',
          backgroundColor: item.color,
          borderWidth: 0,
          minWidth: '95vw',

          minHeight: '60vh',
        }}
        bodyStyle={{ paddingRight: '10px', paddingLeft: '20px', marginTop: '20px' }}
        hoverable
        className={'BakeryItem'}
      >
        <Card.Meta
          className={'fill-container'}
          description={
            <>
              <motion.div
                onHoverStart={() => {
                  setShowHover(true);
                }}
                onHoverEnd={() => {
                  setShowHover(false);
                }}
                style={{
                  height: '100%',
                  width: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: '12px',
                  overflow: 'hidden',
                  position: 'relative',
                }}
              >
                <Row style={{ minHeight: '55px', textAlign: 'right' }}>
                  <Col span={24}>
                    <p className={'line-clamp'}>{item.category}</p>
                  </Col>
                  <Col span={24}>
                    <p style={{ color: 'white' }} className={'line-clamp'}>
                      {item.title}
                    </p>
                  </Col>
                  <Col span={24}>
                    <motion.h2 style={{ y }}>
                      <img height={'100%'} width={'100%'} alt={item.title} src={images[idx]} />
                    </motion.h2>
                  </Col>
                <AnimatePresence>
                  {showHover && (
                    <motion.div
                      initial={{ opacity: 0, y: 200 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 200 }}
                      transition={{ duration: 0.5 }}
                      style={{
                        backgroundColor: 'rgba(25,25,25,0.66)',
                        height: '100%',
                        borderRadius: '12px',
                        padding: '10px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                      }}
                    >
                      <Col style={{alignSelf: 'center', textAlign: 'left'}} span={16} offset={2}>
                        <p style={{ color: 'white'}}>{item.description}</p>
                        {/*<Row style={{marginBottom: '50px'}}/>*/}
                      </Col>
                    </motion.div>
                  )}
                </AnimatePresence>
                </Row>
              </motion.div>
            </>
          }
        />
      </Card>
    </a>
  );
};
