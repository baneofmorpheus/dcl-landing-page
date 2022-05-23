import { Row, Col } from 'react-bootstrap';
import { Fragment } from 'react';
import service1Image from '../../assets/images/service1.jpg';
import service2Image from '../../assets/images/service2.jpg';
import service3Image from '../../assets/images/service3.jpg';
import consultationImage from '../../assets/images/consultation.jpg';
import towImage from '../../assets/images/tow.jpg';
import interstateImage from '../../assets/images/interstate.jpg';
import purchaseImage from '../../assets/images/purchase.jpg';
import pickupImage from '../../assets/images/pickup.jpg';
import './style.scss';

function Services() {
  return (
    <Fragment>
      <Row className='mb-5'>
        <Col id='services' xs='12 '>
          <h3 className='text-center'>Our Services</h3>{' '}
        </Col>

        {/* tablet service section start */}
        <Col xs='12 ' className=' tablet-services d-none d-md-block d-lg-none'>
          <div className='dcl-services-container h-100 w-100'>
            <div className='dcl-services-child '>
              <p className='text-center'>Automobile Diagnostics</p>
              <div>
                <img
                  alt=''
                  className='img-fluid h-100 w-100'
                  src={service1Image}
                />
              </div>
            </div>
            <div className='dcl-services-child '>
              <p className='text-center'>Spraying and Controlled Bodywork</p>

              <div>
                <img
                  alt=''
                  className='img-fluid h-100 w-100'
                  src={service2Image}
                />
              </div>
            </div>
          </div>
        </Col>
        <Col xs='12 ' className=' tablet-services d-none d-md-block d-lg-none'>
          <div className='dcl-services-container h-100 w-100'>
            <div className='dcl-services-child '>
              <p className='text-center'>Automobile Servicing</p>
              <div>
                <img
                  alt=''
                  className='img-fluid h-100 w-100'
                  src={service3Image}
                />
              </div>
            </div>
            <div className='dcl-services-child '>
              <p className='text-center'>Towing Service</p>

              <div>
                <img alt='' className='img-fluid h-100 w-100' src={towImage} />
              </div>
            </div>
          </div>
        </Col>
        <Col
          xs='12 '
          className='mb-5 tablet-services d-none d-md-block d-lg-none'
        >
          <div className='dcl-services-container h-100 w-100'>
            <div className='dcl-services-child '>
              <p className='text-center'>Interstate Service</p>
              <div>
                <img
                  alt=''
                  className='img-fluid h-100 w-100'
                  src={interstateImage}
                />
              </div>
            </div>
            <div className='dcl-services-child '>
              <p className='text-center'>Spare Parts Purchase</p>

              <div>
                <img
                  alt=''
                  className='img-fluid h-100 w-100'
                  src={purchaseImage}
                />
              </div>
            </div>
          </div>
        </Col>
        <Col
          xs='12 '
          className='mb-5 tablet-services d-none d-md-block d-lg-none'
        >
          <div className='dcl-services-container h-100 w-100'>
            <div className='dcl-services-child '>
              <p className='text-center'>General Consultation</p>
              <div>
                <img
                  alt=''
                  className='img-fluid h-100 w-100'
                  src={consultationImage}
                />
              </div>
            </div>
            <div className='dcl-services-child '>
              <p className='text-center'>Pick up Service</p>

              <div>
                <img
                  alt=''
                  className='img-fluid h-100 w-100'
                  src={pickupImage}
                />
              </div>
            </div>
          </div>
        </Col>
        {/* tablet service section end */}

        {/* mobile service section start */}
        <Col xs='12 ' className=' mobile-services d-md-none '>
          <div className='dcl-services-container h-100 w-100'>
            <div className='mb-5 '>
              <p className='text-center'>Automobile Diagnostics</p>
              <div>
                <img
                  alt=''
                  className='img-fluid h-100 w-100'
                  src={service1Image}
                />
              </div>
            </div>
            <div className='mb-5 '>
              <p className='text-center'>Spraying and Controlled Bodywork</p>

              <div>
                <img
                  alt=''
                  className='img-fluid h-100 w-100'
                  src={service2Image}
                />
              </div>
            </div>
          </div>
        </Col>
        <Col xs='12 ' className=' mobile-services d-md-none '>
          <div className='dcl-services-container h-100 w-100'>
            <div className='mb-5 '>
              <p className='text-center'>Automobile Servicing</p>
              <div>
                <img
                  alt=''
                  className='img-fluid h-100 w-100'
                  src={service3Image}
                />
              </div>
            </div>
            <div className='mb-5 '>
              <p className='text-center'>Towing Service</p>

              <div>
                <img alt='' className='img-fluid h-100 w-100' src={towImage} />
              </div>
            </div>
          </div>
        </Col>
        <Col xs='12 ' className=' mobile-services d-md-none '>
          <div className='dcl-services-container h-100 w-100'>
            <div className='mb-5 '>
              <p className='text-center'>Interstate Service</p>
              <div>
                <img
                  alt=''
                  className='img-fluid h-100 w-100'
                  src={interstateImage}
                />
              </div>
            </div>
            <div className='mb-5 '>
              <p className='text-center'>Spare Parts Purchase</p>

              <div>
                <img
                  alt=''
                  className='img-fluid h-100 w-100'
                  src={purchaseImage}
                />
              </div>
            </div>
          </div>
        </Col>
        <Col xs='12 ' className=' mobile-services d-md-none '>
          <div className='dcl-services-container h-100 w-100'>
            <div className='mb-5 '>
              <p className='text-center'>General Consultation</p>
              <div>
                <img
                  alt=''
                  className='img-fluid h-100 w-100'
                  src={consultationImage}
                />
              </div>
            </div>
            <div className='mb-5 '>
              <p className='text-center'>Pick up Service</p>

              <div>
                <img
                  alt=''
                  className='img-fluid h-100 w-100'
                  src={pickupImage}
                />
              </div>
            </div>
          </div>
        </Col>
        {/* mobile service section end */}

        <Col xs='12 ' className='mb-5 d-lg-block d-none '>
          <div className='dcl-services-container h-100 w-100'>
            <div className='dcl-services-child '>
              <p className='text-center'>Automobile Diagnostics</p>
              <div>
                <img
                  alt=''
                  className='img-fluid h-100 w-100'
                  src={service1Image}
                />
              </div>
            </div>
            <div className='dcl-services-child '>
              <p className='text-center'>Spraying and Controlled Bodywork</p>

              <div>
                <img
                  alt=''
                  className='img-fluid h-100 w-100'
                  src={service2Image}
                />
              </div>
            </div>
            <div className='dcl-services-child  '>
              <p className='text-center'>Automobile Servicing</p>

              <div>
                <img
                  alt=''
                  className='img-fluid h-100 w-100'
                  src={service3Image}
                />
              </div>
            </div>
          </div>
        </Col>

        <Col xs='12 ' className='mt-5 mb-5 d-lg-block d-none'>
          <div className='dcl-services-container h-100 w-100'>
            <div className='dcl-services-child '>
              <p className='text-center'>Towing Service</p>
              <div>
                <img alt='' className='img-fluid h-100 w-100' src={towImage} />
              </div>
            </div>
            <div className='dcl-services-child '>
              <p className='text-center'>Interstate Service</p>

              <div>
                <img
                  alt=''
                  className='img-fluid h-100 w-100'
                  src={interstateImage}
                />
              </div>
            </div>
            <div className='dcl-services-child '>
              <p className='text-center'>Spare Parts Purchase</p>
              <div>
                <img
                  alt=''
                  className='img-fluid h-100 w-100'
                  src={purchaseImage}
                />
              </div>
            </div>
          </div>
        </Col>
        <Col xs='12 ' className='mt-5 mb-5 d-lg-block d-none'>
          <div className='dcl-services-container h-100 w-100'>
            <div className='dcl-services-child '>
              <p className='text-center'>Interstate Service</p>
              <div>
                <img
                  alt=''
                  className='img-fluid h-100 w-100'
                  src={interstateImage}
                />
              </div>
            </div>
            <div className='dcl-services-child '>
              <p className='text-center'>General Consultation</p>

              <div>
                <img
                  alt=''
                  className='img-fluid h-100 w-100'
                  src={consultationImage}
                />
              </div>
            </div>
            <div className='dcl-services-child '>
              <p className='text-center'>Pick up Service</p>
              <div>
                <img
                  alt=''
                  className='img-fluid h-100 w-100'
                  src={pickupImage}
                />
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </Fragment>
  );
}

export default Services;
