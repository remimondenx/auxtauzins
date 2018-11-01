import React, { Component } from 'react';
import logo from '../images/logos/chene.png'

import { withStyles } from '@material-ui/core'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { Link } from 'react-router-dom'
import { Button } from '@material-ui/core';

const styles = {
    appBar: {
        height: '60px',
        paddingLeft: '120px'
    },
    img: {
        position: 'absolute',
        top: '10px',
        left: '-110px',
        height: '75px',
    },
}

class TopBar extends Component {
    render() {
        const { items, classes } = this.props;
        return (
            <AppBar className={classes.appBar} position='sticky'>
                <Toolbar>
                    <Link to='/' style={{textDecoration: 'none'}}>
                        <img className={classes.img} src={logo} alt='logo' />
                    </Link>
                    {items.map(item => 
                        <Button href={item.href}>
                            {item.title}
                        </Button>
                    )}
                </Toolbar>
            </AppBar>
        )
    }
}

export default withStyles(styles)(TopBar);