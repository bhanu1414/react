import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Collapse from 'react-bootstrap/Collapse';
import { Link } from 'react-router-dom';

function Example() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button
        onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}
      >
        Login
      </Button>
      <div style={{ minHeight: '150px' }}>
        <Collapse in={open} dimension="width">
          <div id="example-collapse-text">
            <Card body style={{ width: '200px' }}>

            <h6>Name</h6>
            <input type="text" placeholder='NAME' style={{ width:"180px" }}/>
               <h6>Email</h6>
               <input type="text" placeholder='Email' style={{ width:"180px" }}/>
                <h6>password</h6>
                <input type="number" placeholder='Number' style={{ width:"180px" }}/>
                <div className='LS'>
                <Link to="/dashboard">
                <button style={{ borderRadius:'15%'}}> Login </button>
                </Link>                
                </div>

            </Card>
          </div>
        </Collapse>
      </div>
    </>
  );
}

export default Example;