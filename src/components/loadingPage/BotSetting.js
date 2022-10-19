import { ClassNames } from '@emotion/react'
import { Box, Button, Card, Grid, makeStyles, Switch, Typography } from '@material-ui/core'
import React from 'react'
import Navbar2 from './Navbar2'
import { Link } from 'react-router-dom';

const useStyle = makeStyles((theme) => ({
    ConnectWalletMainBox: {
        height: "100vh",
        // backgroundColor: "#213743",

        color: "white",
        alignItems: "center",


    },
    ConnectWalletMainGrid: {
        display: "flex",
        // paddingTop: "150px",
        // padding: "170px 0px 10px 200px",

    },
    ConnectWalletMainGridLeft: {
        textAlign: "center",
        backgroundColor: "#0F212E",
        height: "100vh",
        paddingTop: "70px",

    },
    LeftContein: {
        marginBottom: "40px",
        alignItems: "center",
    },
    LeftConteinImg: {
        marginRight: "15px",
        width: "25px",
        paddingTop: "5px",
        cursor: "pointer",
    },
    LeftConteinText: {
        fontSize: "25px",
        color: "#A4A6B3",
        cursor: "pointer",
    },
    ConnectWalletMainGridRight: {
        backgroundColor: "#213743",
        // alignItems: "center",
    },
    BotSettingCard: {
        // position: "absolute",
        width: "600px",
        // height: "700px",
        backgroundColor: "#0F212E",
        marginLeft: "550px",
        marginTop: "100px",
        color: "white",
        padding: "15px 40px 60px 40px",
        [theme.breakpoints.down("md")]:{
            marginLeft:"200px",
            width: "500px",
            // height: "750px",
        },
        [theme.breakpoints.down("sm")]:{
            marginLeft:"50px",
            width: "400px",
            // height: "800px",
        },

    },
    StrategyText: {
        fontSize: "25px",
        // marginTop:"20px",
        marginLeft: "10px",
        marginBottom: "35px",
        letterSpacing: "1.5px",
        // fontFamily:"Mulish",
    },
    FirstBoxDiv: {
        marginBottom: "10px",
    },
    FirstBox: {
        width: "100%",
        height: "70px",
        backgroundColor: "#213743",
        borderRadius: "4px",
        display: "flex",
        textAlign: "center",
       
    },
    FirstBoxInearDiv: {
        display: "flex",
        textAlign: "center",
        padding: "20px 20px 10px 30px",
        [theme.breakpoints.down("md")]:{
            padding: "10px 10px 20px 20px", 
        },
        [theme.breakpoints.down("sm")]:{
            padding: "10px 10px 20px 15px", 
        },
    },
    FirstBoxInearText: {
        fontSize: "20px",
    },
    FirstBoxInearText2: {
        fontSize: "20px",
        marginRight: "30px",
    },
    BotText: {
        fontSize: "25px",
        margin: "40px 0px 40px 5px",
    },
    FirstBoxButton: {
        width: "120px",
        height: "45px",
        backgroundColor: "#0F212E",
        marginTop: "12px",
        color: "white",
        fontSize: "22px",
    },
    ButtonDiv:{
        textAlign:"center",
        marginTop:"50px",
       
    },
    SAVEButton:{
        color:"white",
        backgroundColor:"#E59446",
        width:"170px",
        height:"50px",
        fontSize:"20px",
    }
}))

const Sidebar = () => {
    const classes = useStyle();
    return (
        <>
            <Navbar2 />
            <Box className={classes.ConnectWalletMainBox}>
                <Grid xs={12} className={classes.ConnectWalletMainGrid}>
                    <Grid xs={2} className={classes.ConnectWalletMainGridLeft}>
                        <div className={classes.LeftContein}>
                            <img className={classes.LeftConteinImg} src='Image/Dashboard.png' />
                            <Button style={{
                                fontSize: "22px",
                                color: "#A4A6B3",
                                cursor: "pointer",
                                textTransform: "capitalize",
                                fontfamily: "Sarif"
                            }}
                                ><Link to="/dashboard" style={{color:"#A4A6B3"}}> Dashboard</Link></Button>
                        </div>

                        <div className={classes.LeftContein}>
                            <img className={classes.LeftConteinImg} src='Image/Setting.png' />
                            <span className={classes.LeftConteinText}>Bot Settings</span>
                        </div>

                        <div className={classes.LeftContein}>
                            <img className={classes.LeftConteinImg} src='Image/Transactions.png' />
                            <Button style={{fontSize: "22px",
                               color: "#A4A6B3",
                               cursor: "pointer",
                            textTransform:"capitalize",
                        fontfamily:"Sarif"}} >
                        <Link to="/transaction" style={{color:"#A4A6B3"}}>Transaction</Link></Button>
                        </div>

                        <div className={classes.LeftContein}>
                            <img className={classes.LeftConteinImg} src='Image/Subscription.png' />
                            <Button style={{fontSize: "22px",
                               color: "#A4A6B3",
                               cursor: "pointer",
                            textTransform:"capitalize",
                        fontfamily:"Sarif"}} 
                        ><Link to="/choose-plan" style={{color:"#A4A6B3"}}>Subscription</Link></Button>
                           
                        </div>
                    </Grid>
                    <Grid xs={10} className={classes.ConnectWalletMainGridRight}>
                        <Card className={classes.BotSettingCard}>
                            <Typography className={classes.StrategyText}>Strategy</Typography>
                            <div className={classes.FirstBoxDiv}>
                                <Box className={classes.FirstBox}>
                                    <Grid xs={6} className={classes.FirstBoxInearDiv}>
                                        <Typography className={classes.FirstBoxInearText}>Simple  Arbitrage</Typography>
                                        <Switch style={{ color: '#00AFA3' }} />
                                    </Grid>

                                    <Grid xs={6} className={classes.FirstBoxInearDiv}>
                                        <Typography className={classes.FirstBoxInearText}>Triagular Arbitrage</Typography>
                                        <Switch style={{ color: '#00AFA3' }} />
                                    </Grid>
                                </Box>
                            </div>

                            <div className={classes.FirstBoxDiv}>
                                <Box className={classes.FirstBox}>
                                    <Grid xs={6} className={classes.FirstBoxInearDiv}>
                                        <Typography className={classes.FirstBoxInearText2}>Flash Loan</Typography>
                                        <Switch style={{ color: '#00AFA3' }} />
                                    </Grid>
                                </Box>
                            </div>

                            <div>
                                <Typography className={classes.BotText}>Bot Limit</Typography>
                            </div>

                            <div className={classes.FirstBoxDiv}>
                                <Box className={classes.FirstBox}>
                                    <Grid xs={6} className={classes.FirstBoxInearDiv}>
                                        <Typography className={classes.FirstBoxInearText}>Tranation Limit</Typography>

                                    </Grid>

                                    <Grid xs={6} className={classes.SecondBoxInearDiv}>
                                        <Button className={classes.FirstBoxButton}>15</Button>

                                    </Grid>
                                </Box>
                            </div>

                            <div className={classes.FirstBoxDiv}>
                                <Box className={classes.FirstBox}>
                                    <Grid xs={6} className={classes.FirstBoxInearDiv}>
                                        <Typography className={classes.FirstBoxInearText}>Max Point/tam wtih </Typography>

                                    </Grid>

                                    <Grid xs={6} className={classes.SecondBoxInearDiv}>
                                        <Button className={classes.FirstBoxButton}>$500</Button>

                                    </Grid>
                                </Box>
                            </div>
                            <div className={classes.ButtonDiv}>
                            <Button className={classes.SAVEButton}>SAVE</Button>
                            </div>
                        </Card>
                    </Grid>
                </Grid>
            </Box>
        </>
    )
}

export default Sidebar
