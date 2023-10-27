import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./table.css"
const YourComponent = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get('http://143.244.142.0/api/v1/org/address/e9524f74-e70e-4aee-aeb1-56825d8e23ee')
            .then(response => {
                setData(response.data);
            })
            .catch(error => {
                console.error(error);
            });
    }, []);

    return (
        <div className="container py-5">
            <div className="table-responsive">
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th>Company Name</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Mobile</th>
                            <th>Email</th>
                            <th>Pin Code</th>
                            <th>State</th>
                            <th>District</th>
                            <th>Address</th>
                            <th>GST No</th>
                            <th>Created</th>
                            <th>Modified</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map(item => (
                            <tr key={item.id}>
                                <td>{item.org.company_name}</td>
                                <td>{item.org.contact_person.first_name}</td>
                                <td>{item.org.contact_person.last_name}</td>
                                <td>{item.org.contact_person.mobile}</td>
                                <td>{item.org.contact_person.email}</td>
                                <td>{item.pincode.pin_code}</td>
                                <td>{item.pincode.state}</td>
                                <td>{item.pincode.district}</td>
                                <td>{item.address}</td>
                                <td>{item.gst_no}</td>
                                <td>{item.created}</td>
                                <td>{item.modified}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default YourComponent;
