import React from 'react'

const UserForm = ({user, updateValue, submitForm}) => (
    <div className="user-form row">
        <div className="col-xs-3">
            <input className="form-control" placeholder="Full Name" name="fullName" value={user.fullName} onChange={e => updateValue(e)} />
        </div>
        <div className="col-xs-3">
            <input name="email" className="form-control" placeholder="Email" value={user.email} onChange={e => updateValue(e)} />
        </div>
        <div className="col-xs-3">
            <input name="phone" className="form-control" placeholder="Phone" value={user.phone} onChange={e => updateValue(e)} />
        </div>
        <div className="col-xs-3">
            <button type="button" className="btn btn-success" onClick={submitForm}>
                <span className="glyphicon glyphicon-ok" /> &nbsp;
                Submit
            </button>
        </div>
    </div>
)

export default UserForm
