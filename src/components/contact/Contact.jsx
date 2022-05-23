import { Row, Col, Form, Button, Spinner } from 'react-bootstrap';
import { Fragment, useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';
import { Toast } from 'primereact/toast';
import axios from 'axios';

import './style.scss';
// const dotenv = require('dotenv');
// dotenv.config();

// #TODO  integrate email sending functionality

function Contact() {
  const toast = useRef(null);
  const [contactMessageDetails, setContactMessageDetails] = useState({
    name: '',
    phoneNumber: '',
    email: '',
    message: '',
  });
  const [messageLoading, setMessageLoading] = useState(false);

  const updateContactMessageDetails = (field, value) => {
    setContactMessageDetails({
      ...contactMessageDetails,
      ...{ [field]: value },
    });
  };

  const sendContactMail = async () => {
    try {
      setMessageLoading(true);
      const message = `Good day,you have a new mail from the dcl site.\nDetails are shown below\n
      Name: ${contactMessageDetails.name}\nPhone Number: ${contactMessageDetails.phoneNumber}\nEmail: ${contactMessageDetails.email}\nMessage: ${contactMessageDetails.message}\n
      `;
      const data = {
        sender: {
          email: 'contact@digitalcarsolutions.com',
          name: 'Dcl Contact Form',
        },
        to: [{ email: 'contact@digitalcarsolutions.com' }],
        textContent: message,
        subject: 'Mail from contact form',
      };
      const response = await axios.post(
        'https://api.sendinblue.com/v3/smtp/email',
        data,
        {
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            'Api-Key': process.env.REACT_APP_SEND_IN_BLUE_API_KEY,
          },
        }
      );
      setMessageLoading(false);

      if (!response.data.messageId) {
        toast.current.show({
          severity: 'error',
          summary: 'Error',
          detail: 'Error sending contact mail',
        });
        return;
      }

      toast.current.show({
        severity: 'success',
        summary: 'Success Message',
        detail: 'Message sent successfully',
      });
    } catch (error) {
      toast.current.show({
        severity: 'error',
        summary: 'Error',
        detail: 'Error sending contact mail',
      });
      setMessageLoading(false);
    }
  };

  return (
    <Fragment>
      <Row
        id='contact-us'
        className='mt-0 md-mt-5 mb-3 dcl-contact align-items-center  pt-5 pb-5'
      >
        <Col className='mb-5 md-mb-0' md='6'>
          <h5 className='text-center text-dark mb-4'>Contact Us</h5>
          <Toast ref={toast} />
          <Form>
            <Form.Group className='mb-3'>
              <Form.Control
                type='text'
                required={true}
                autoComplete={'on'}
                onChange={(e) =>
                  updateContactMessageDetails('name', e.target.value)
                }
                className='bg-dark text-white'
                placeholder='Your Name'
              />
            </Form.Group>
            <Form.Group className='mb-3'>
              <Form.Control
                type='text'
                onChange={(e) =>
                  updateContactMessageDetails('phoneNumber', e.target.value)
                }
                className='bg-dark text-white'
                required={true}
                autoComplete={'on'}
                placeholder='Phone Number'
              />
            </Form.Group>
            <Form.Group className='mb-3'>
              <Form.Control
                className='bg-dark text-white'
                onChange={(e) =>
                  updateContactMessageDetails('email', e.target.value)
                }
                type='email'
                required={true}
                autoComplete={'on'}
                placeholder='Enter email'
              />
            </Form.Group>
            <Form.Group className='mb-3'>
              <Form.Control
                className='bg-dark text-white'
                onChange={(e) =>
                  updateContactMessageDetails('message', e.target.value)
                }
                as='textarea'
                rows={5}
                required={true}
                autoComplete={'on'}
                placeholder='Your Message'
              />
            </Form.Group>

            <div className='text-center'>
              <Button
                onClick={() => {
                  sendContactMail();
                }}
                className=' w-50'
                variant='dark'
                type='button'
              >
                {messageLoading ? (
                  <Spinner
                    size='sm'
                    className='me-2'
                    variant='light'
                    animation='border'
                  />
                ) : (
                  ''
                )}
                Submit
              </Button>
            </div>
          </Form>
        </Col>
        <Col xs='12 ' md='6' className='text-center'>
          <a
            className='d-block text-decoration-none mb-4 text-dark'
            href='https://goo.gl/maps/XWKNEMTAowoiEQTB9'
          >
            <FontAwesomeIcon
              className='me-2 dcl-icon'
              icon={solid('location-dot')}
            />
            <span>
              36 Eze Gbakagbaka Avenue off Chelsea Fuel Station, Woji Elelenwo
              Road Woji, Port Harcourt, Rivers State.
            </span>
          </a>
          <p>
            <FontAwesomeIcon
              className='me-2 dcl-icon'
              icon={solid('mobile-screen-button')}
            />
            <span>08033123865 , 07017081067 , 08057609828, 08093068017</span>
          </p>
          <a className='text-dark text-decoration-none ' href='#.'>
            <FontAwesomeIcon
              className='me-2 dcl-icon'
              icon={solid('envelope')}
            />
            <span>contact@digitalcarsolutions.com</span>
          </a>

          <div className='text-center mt-3 '>
            <a
              target='_blank'
              rel='noreferrer'
              className='btn  btn-dark '
              href='https://www.google.ng/maps/place/Digital+Carsolutions+Ltd/@4.8325758,7.0615204,19z/data=!4m5!3m4!1s0x1069cdebd73485cd:0xb11f18fe3a7dcbe9!8m2!3d4.8324535!4d7.0606345'
            >
              Locate Us
            </a>
          </div>
        </Col>
      </Row>
    </Fragment>
  );
}

export default Contact;
