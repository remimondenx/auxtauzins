import React, { Component } from 'react';

import Dialog from '@material-ui/core/Dialog';
import Button from '@material-ui/core/Button';

class Video extends Component {
    state = {
        open: false,
    }

    handleOpen = () => {
        this.setState({open: true})
    }

    handleClose = () => {
        this.setState({open: false})
    }

    render() {
        return (
            <div>
                <Button onClick={this.handleOpen}>
                    Visionnez la vidéo de l'établissement !
                </Button>
                <Dialog open={this.state.open} onClose={this.handleClose}>
                    <iframe title="presentation" src="https://player.vimeo.com/video/138057164?title=0&byline=0&portrait=0" width="640" height="360" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen>
                    </iframe>
                </Dialog>
            </div>
        )
    }
    
    
}

export default Video;