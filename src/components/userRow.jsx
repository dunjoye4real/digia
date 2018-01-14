import React from 'react'

const UserRow = ({ user }) => (
    <div className="row user-row">
        <div className="col-xs-3">
            {user.fullName}
        </div>
        <div className="col-xs-3">
            {user.email}
        </div>
        <div className="col-xs-3">
            {user.phone}
        </div>
    </div>
)

export default UserRow
