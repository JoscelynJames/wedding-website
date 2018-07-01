import React, { Component } from 'react';

class Songs extends Component {
    constructor(props) {

        this.state = {

        };

    }

    render() {
        return (
            <div className={`${ styles.songs }`}>
                <h3>Song Request</h3>
                <div className={styles.row}>
                    <div className={styles.double}>
                        <div className={styles.song}>
                            <TextField floatingLabelText="Song Title" onChange={(e) => this.updateSong1(e, 'title')} />
                        </div>
                        <div className={styles.song}>
                            <TextField floatingLabelText="Artist" onChange={(e) => this.updateSong1(e, 'artist')} />
                        </div>
                    </div>
                    <div className="song1" onClick={(e) => this.removeSong(e, 'showSong1')}>
                    </div>
                </div>
                {this.state.showSong2 ? (
                    <div className={styles.row}>
                        <div className={styles.double}>
                            <div className={styles.song}>
                                <TextField floatingLabelText="Song Title" onChange={(e) => this.updateSong2(e, 'title')} />
                            </div>
                            <div className={styles.song}>
                                <TextField floatingLabelText="Artist" onChange={(e) => this.updateSong2(e, 'artist')} />
                            </div>
                        </div>
                        <div className="song2" onClick={(e) => this.removeSong(e, 'showSong2')}>
                            <Delete />
                        </div>
                    </div>
                )
                    : null}
                {this.state.showSong3 ? (
                    <div className={styles.row}>
                        <div className={styles.double}>
                            <div className={styles.song}>
                                <TextField floatingLabelText="Song Title" onChange={(e) => this.updateSong3(e, 'title')} />
                            </div>
                            <div className={styles.song}>
                                <TextField floatingLabelText="Artist" onChange={(e) => this.updateSong3(e, 'artist')} />
                            </div>
                        </div>
                        <div className="song3" onClick={(e) => this.removeSong(e, 'showSong3')}>
                            <Delete />
                        </div>
                    </div>
                )
                    : null}

                {this.state.showSong3 && this.state.showSong2 && this.state.showSong1
                    ? null
                    : (
                        <div className={styles.add} onClick={() => this.handleAddSongClick()}>
                            <RaisedButton label="Add Another Song" />
                        </div>
                    )
                }
            </div>
        )
    }
}