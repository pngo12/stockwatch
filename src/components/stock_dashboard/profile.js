import React, { PureComponent } from 'react';
import { connect } from 'react-redux'

class Profile extends PureComponent {
    render() {
        let company = this.props.company
        return (
            <div className="content">
                <p>{company.description}</p>
                <table className="table is-hoverable is-fullwidth">
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