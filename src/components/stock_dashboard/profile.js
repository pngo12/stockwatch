import React, { Component } from 'react';
import {connect} from 'react-redux'

class Profile extends Component {
    render() { 
    let company = this.props.company
        return ( 
            <table className="table is-narrow is-hoverable">
                <tbody>
                    <tr>
                        <th>Profile</th>
                    </tr>
                <tr>
                    <td>{company.description}</td>
                </tr>
                    <tr>
                        <th>Exchange</th>
                        <th>CEO</th>
                    </tr>
                    <tr>
                        <td>{company.exchange}</td>
                        <td>{company.CEO}</td>
                    </tr>
                    <tr>
                        <th>Industry</th>
                        <th>Sector</th>
                    </tr>
                    <tr>
                        <td>{company.industry}</td>
                        <td>{company.sector}</td>
                    </tr>
                    <tr>
                        <th>Website</th>
                    </tr>
                    <tr>
                        <td><a href={company.website} /> </td>
                    </tr>
                </tbody>
            </table>
         );
    }
}

const mapStateToProps = state => ({
    company: state.company
})
 
export default connect(mapStateToProps, null)(Profile)