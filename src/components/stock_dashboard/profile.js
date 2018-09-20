import React, { PureComponent } from 'react';
import {connect} from 'react-redux'

class Profile extends PureComponent {
    render() { 
    let company = this.props.company
        return (
            <div className="content">
            <section className="section">
                <h3>Profile</h3>
                    <p>{company.description}</p>
            </section>
            <table className="table is-narrow is-hoverable">
            <tbody>
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
                    <td><a href={company.website}>{company.website}</a> </td>
                </tr>
                </tbody>
            </table>
        </div>
         );
    }
}

const mapStateToProps = state => ({
    company: state.company
})
 
export default connect(mapStateToProps, null)(Profile)