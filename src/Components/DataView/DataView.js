import React, { Component } from 'react';
import styles from './DataView.css';
import api from '../../api/apiCalls';
import { withRouter } from 'react-router';

import {
    Table,
    TableBody,
    TableHeader,
    TableHeaderColumn,
    TableRow,
    TableRowColumn,
} from 'material-ui/Table';

class DataView extends Component {
    constructor(props) {
        super(props);

        this.state = {
            guests: [],
            songs: []
        };

    }

    componentDidMount() {
        api.getGuests()
            .then(res => this.setState({ guests: res.data }) );

        api.getSongs()
            .then(res => this.setState({ songs: res.data }) );
    }

    countGuest() {
        var total = 0;

        this.state.guests.forEach(guest => {
            if (guest.attending) {
                total++
                if (guest.guest2) total++
            }
        })

        return total;
    }

    render() {
        if (!this.state.guests) return <h1>Loading</h1>

        return (
            <div>
                <h1>Guests</h1>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHeaderColumn>ID</TableHeaderColumn>
                            <TableHeaderColumn>First Guest</TableHeaderColumn>
                            <TableHeaderColumn>Second Guest</TableHeaderColumn>
                            <TableHeaderColumn>Phone</TableHeaderColumn>
                            <TableHeaderColumn>Email</TableHeaderColumn>
                            <TableHeaderColumn>Allergies</TableHeaderColumn>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {this.state.guests.map((guest, index) => {
                            return (
                                <TableRow key={index} className={guest.attending ? styles.isAttending : styles.notAttending}>
                                    <TableRowColumn>{index}</TableRowColumn>
                                    <TableRowColumn>{guest.guest1}</TableRowColumn>
                                    <TableRowColumn>{guest.guest2}</TableRowColumn>
                                    <TableRowColumn>{guest.phone}</TableRowColumn>
                                    <TableRowColumn>{guest.email}</TableRowColumn>
                                    <TableRowColumn>{guest.allergies}</TableRowColumn>
                                </TableRow>
                            )
                        })}
                    </TableBody>
                </Table>

                <h1>Total Guest: {this.countGuest()}</h1>
                <h1>Songs</h1>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHeaderColumn>ID</TableHeaderColumn>
                            <TableHeaderColumn>Artist</TableHeaderColumn>
                            <TableHeaderColumn>Title</TableHeaderColumn>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {this.state.songs.map((song, index) => {
                            return (
                                <TableRow key={index}>
                                    <TableRowColumn>{index}</TableRowColumn>
                                    <TableRowColumn>{song.artist}</TableRowColumn>
                                    <TableRowColumn>{song.title}</TableRowColumn>
                                </TableRow>
                            )
                        })}
                    </TableBody>
                </Table>
            </div>
        );
    }
};

export default withRouter(DataView);