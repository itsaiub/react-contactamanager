import React, { Component } from "react";

class AddContact extends Component {
  constructor(props) {
    super(props);

    this.nameInput = React.createRef();
    this.emailInput = React.createRef();
    this.phoneInput = React.createRef();
  }
  onSubmit = e => {
    e.preventDefault();
    const contact = {
      name: this.nameInput.current.value,
      email: this.emailInput.current.value,
      phone: this.phoneInput.current.value
    }

    console.log(contact);
  };

  static defaultProps = {
    name: 'Fred Smith',
    email: 'fred@gmail.com',
    phone: '777-777-7777'
  }

  render() {
    const { name, email, phone } = this.props;
    return <div className="card mb-3">
        <div className="card-header">Add Contact</div>
        <div className="card-body">
          <form onSubmit={this.onSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input name="name" type="text" className="form-control form control-lg" placeholder="Enter Name..." defaultValue={name} ref={this.nameInput} />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input name="email" type="email" className="form-control form control-lg" placeholder="Enter Email..." defaultValue={email} ref={this.emailInput}/>
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone</label>
              <input name="phone" type="text" className="form-control form control-lg" placeholder="Enter Phone..." defaultValue={phone} ref={this.phoneInput}/>
            </div>
            <input type="submit" value="Add Contact" className="btn btn-light btn-block" />
          </form>
        </div>
      </div>;
  }
}
export default AddContact;
