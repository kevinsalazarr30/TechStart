import React, { Component } from 'react';

class ListComponent extends Component {
    render() {

        return (
            <div className="contentList">
                <table className="tableList">
                    <thead>
                        <tr>
                            <th>Invoice Number</th>
                            <th>Vendor Name</th>
                            <th>Vendor Address</th>
                            <th>Invoice Total</th>
                            <th>Invoice Date</th>
                            <th>Due Date</th>
                            <th>Status</th>
                            <th>Action</th>

                        </tr>

                    </thead>
                    <tbody>
                        {this.props.stateList.map(e =>
                            <tr key={e._id}>
                                <td className="colorNumber">{e.invoice_number}</td>
                                <td>{e.vendor_name}</td>
                                <td>{e.remittance_address}</td>
                                <td>{e.total} {e.currency}</td>
                                <td>{e.invoice_date.substring(10, 0)}</td>
                                <td>{e.due_date.substring(10, 0)}</td>
                                <td className="colorStatus">{e.status}</td>
                                <td><button onClick={this.props.approved.bind(this, e._id)}>Approved</button></td>
                            </tr>
                        )}
                    </tbody>
                </table>

            </div>
        )
    }

}

export default ListComponent;