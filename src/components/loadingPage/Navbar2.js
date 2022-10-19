import { Avatar, Badge, Box, Divider, Grid, makeStyles, Typography } from '@material-ui/core'
import { DarkMode, Notifications, Search, WbSunny } from '@mui/icons-material';
import React from 'react'

const useStyle = makeStyles((theme) => ({
    MainBox: {
        width: "100%",
        height: "90px",
        backgroundColor: "#0F212E",
        color: "white"
    },
    MainGrid: {
        display: "flex",
    },
    MainGridLeft: {
        display: "flex",
        padding: "10px 0px 0px 130px"
    },
    MainGridLeftLogo: {
        width: "60px",
        height: "60px",
    },
    MainGridLeftHeading: {
        fontSize: "25px",
        padding: "20px 0px 0px 30px",
        color: "#A4A6B3",
    },
    MainGridRight: {
        display: "flex",
        marginLeft: "auto",
        right: "10px"
    },
    MainGridRightIcon: {
        marginRight: "30px",
        width: "50px",
        height: "50px"
    },
    Icons: {
        display: "flex",
        marginLeft: "auto",
        marginTop: "30px",
        textAlign: "center",
    },
    MainGridRightText: {
        fontSize: "22px",
        marginRight: "25px",
        marginTop: "-5px"
    }





}))

const Navbar2 = () => {
    const classes = useStyle();
    return (
        <Box className={classes.MainBox}>
            <Grid xs={12} className={classes.MainGrid}>
                <Grid xs={6} className={classes.MainGridLeft}>
                    <img src='Image/logo1.png' className={classes.MainGridLeftLogo} />
                    <Typography className={classes.MainGridLeftHeading}>Dashboard Kit</Typography>
                </Grid>
                <Grid xs={6} className={classes.MainGridRight}>
                    <div className={classes.Icons}>
                        <WbSunny className={classes.MainGridRightIcon} />
                        <DarkMode className={classes.MainGridRightIcon} />
                        <Search className={classes.MainGridRightIcon} />
                        <Notifications className={classes.MainGridRightIcon} />

                        {/* <div style={{display:"flex"}}> */}
                        <Divider orientation="vertical" style={{ width: "2px", height: "100%", marginRight: "15px", backgroundColor: "white" }} />
                        <Typography className={classes.MainGridRightText} >Jones Ferdinand</Typography>
                        <Avatar alt="Remy Sharp" src="Image/AvatarImg1.png" style={{ marginTop: "-10px", marginRight: "20px" }} />
                        {/* </div> */}
                    </div>
                </Grid>
            </Grid>

        </Box>
    )
}

export default Navbar2
