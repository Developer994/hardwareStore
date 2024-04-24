import './Contact.css';

export default function Contact() {
  return (
    <div className='main'>
      <h1 className='contactUs'>Contact Us</h1>
      <div className='contactContainer'>
        <div className='textContainer'>
          <h3 className='heading'>Phone Number:</h3>
          <h5>(XXX) - XXX XXXX</h5>
        </div>
        <div className='textContainer'>
          <h3 className='heading'>Email Address:</h3>
          <h5>blob_blob@gmail.com</h5>
        </div>
        <h3 className='heading'>Inquiries</h3>
        <select className='form-control'>
          <option value=''>---</option>
          <option value=''>Product Availability</option>
          <option value=''>Pricing inquiry</option>
          <option value=''>Assistance</option>
          <option value=''>Feedback</option>
          <option value=''>Returns</option>
        </select>
        <h5 className='h5Headers'>First Name</h5>
        <input type='text' />
        <h5 className='h5Headers'>Last Name</h5>
        <input type='text' />
        <h5 className='h5Headers'>Phone Number</h5>
        <input type='text' />
        <h5 className='h5Headers'>Email</h5>
        <input type='email' />
        <h5 className='h5Headers'>Message</h5>
        <input type='text' className='messageBox' />
        <button>Submit</button>
      </div>
    </div>
  );
}
