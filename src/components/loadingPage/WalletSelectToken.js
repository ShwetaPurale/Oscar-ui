import { Box, Button, Card, CardContent, Grid, InputBase, makeStyles, Typography } from '@material-ui/core'
import { ArrowBackIos, Search, SearchOutlined } from '@mui/icons-material';
import React from 'react'
import { Link } from 'react-router-dom';
import Navbar3 from './Navbar3';

const useStyles = makeStyles((theme) => ({
    ConnectWalletMainBox: {
        // height: "100vh",
        paddingBottom:"100px",
        backgroundColor: "#213743",
        // textAlign: "center",
        color: "white",
        alignItems: "center",
        // @Media(maxWidth:"")

    },
    ConnectWalletMainGrid: {
        display: "flex",
        // paddingTop: "150px",
        padding: "170px 0px 10px 200px",
        [theme.breakpoints.down("md")]: {
            padding: "100px 10px 10px 20px",
            height: "800px",
        },
        [theme.breakpoints.down("sm")]: {
            padding: "100px 10px 10px 20px",
            height: "900px",
        },
    },
    ConnectWalletMainGridLeft: {
        textAlign: "left",
        // [theme.breakpoints.up("md")]:{
        //   padding: "170px 10px 10px 20px",
        //   // overflow:"hidden",
        // },    
        // [theme.breakpoints.up("sm")]:{
        //   padding: "100px 10px 10px 10px",
        //   // overflow:"hidden",
        // },

    },
    LogoText1: {
        fontSize: "60px",
        margin: "20px",
        // paddingBottom:"50px",
        textAlign: "left",

    },
    ConnectWalletText: {
        fontSize: "24px",
        textAlign: "left",
        margin: "25px 0px 20px 0px",
        [theme.breakpoints.down("md")]: {
            fontSize: "20px",
        },
    },
    favoriteBtn: {
        color: "white",
        backgroundColor: "#E59446",
        borderRadius: "10px",
        width: "200px",
        height: "51px",
        marginRight: "75px",
        textTransform: "lowercase",
        fontSize: "20px",
        [theme.breakpoints.down("md")]: {
            width: "250px",
            marginRight: "20px",
        },
        [theme.breakpoints.down("sm")]: {
            width: "250px",
            marginRight: "20px",
        }
    },
    TutorialTextGrid: {
        display: "flex",
        marginTop: "80px",
        // 
    },
    TutorialLogo: {
        width: "30px",
        height: "30px",
        padding: "0px 0px 0px 50px",
        textAlign: "center",
        marginTop: "10px",
        // [theme.breakpoints.up("md")]:{
        //     paddingLeft:"10px"
        //   },
        //   [theme.breakpoints.down("sm")]:{
        //     padding: "0px 0px 0px 0px",
        //   },
    },
    TutorialText1: {
        fontSize: "20px",
        padding: "10px 0px 0px 0px",
    },
    ConnectWalletCard: {
        maxWidth: "500px",
        height: "720px",
        color: "white",
        backgroundColor: "#0F212E",
        borderRadius: "12px",
        padding: "20px",
        [theme.breakpoints.down("md")]: {
            height: "800px",
        },
        [theme.breakpoints.down("sm")]: {
            height: "900px",
        }
    },
    ConnectWalletCardContent: {
        display: "flex",
        gap: "150px",

    },
    ContectText: {
        textAlign: "center",
        marginLeft: "-10%",
        fontSize: "22px",
    },
    SearchBar: {
        display: "flex",
        width: "100%",
        backgroundColor: "#213743",
        height: "60px",
        borderRadius: "10px",
        // textAlign:"center",
    },
    SearchIcon: {
        // height:"50px",
        padding: "20px 0px 0px 20px"
    },
    SearchInput: {
        color: "#FFFFFF",
        fontSize: "22px",
        marginLeft: "20px",
    },
    WalletGrid1: {
        display: "flex",
        marginTop: "20px",

    },
    WalletSecondCard: {
        width: "100px",
        height: "50px",
        backgroundColor: "#213743",
        margin: "5px",
        color: "white",
        display: "flex",
    },
    TextContentMain: {
        display: "flex",
        margin: "5px",
        lineHeight: "1px"
    },
    TextContentImage: {
        height: "55px",
        marginTop: "10px"
    },
    TextContent: {
        margin: "10px",
        // lineHeight:"2px",
    },
    TextContentNumber: {
        textAlign: "end",
        fontSize: "22px",
        marginLeft: "284px"
    },
}))

const WalletSelectToken = () => {
    const classes = useStyles();
    return (
        <>
            <Navbar3 />
            <Box className={classes.ConnectWalletMainBox}>
                <Grid xs={12} className={classes.ConnectWalletMainGrid}>
                    <Grid xs={6} className={classes.ConnectWalletMainGridLeft}>
                        <img src='Image/FooterImageDLogo1.png' alt='' style={{ marginTop: "20px" }} />
                        <span className={classes.LogoText1}>Logo</span>
                        <Typography className={classes.ConnectWalletText}>Velit integer eget lobortis est netus. Eget risus ullamcorper orci <br />
                            pharetra risus. Tellus augue in nibh blandit. Eu tortor adipiscing <br />rhoncus
                            habitant nec. Elit dui bibendum nibh sapien.</Typography>
                        {/* <br /> */}
                        <Typography className={classes.ConnectWalletText}>Velit integer eget lobortis est netus. Eget risus ullamcorper orci <br />
                            pharetra risus. Tellus augue in nibh blandit. Eu tortor adipiscing <br />rhoncus
                            habitant nec. Elit dui bibendum nibh sapien.</Typography>
                        <div className={classes.TutorialTextGrid}>
                            <Button className={classes.favoriteBtn} >favourite</Button>
                            <img src='Image/TutorialLogo.png' alt='' className={classes.TutorialLogo} />
                            <Typography className={classes.TutorialText1}>Tutorial Step by Step</Typography>
                        </div>
                    </Grid>

                    <Grid xs={6} className={classes.ConnectWalletMainGridRight}>
                        <Card className={classes.ConnectWalletCard}>
                            <CardContent className={classes.ConnectWalletCardContent}>
                                <Button style={{color:"white"}} >
                                <Link  to="/connect-wallet" style={{color:"white"}}><ArrowBackIos /></Link> 
                                </Button>
                                <Typography className={classes.ContectText}>Select a Token</Typography>
                            </CardContent>
                            <div className={classes.SearchBar}>
                                <Search className={classes.SearchIcon} />
                                <InputBase placeholder='Search by name' className={classes.SearchInput} />
                            </div>
                            <Grid xs={12} className={classes.WalletGrid1}>
                                <Card className={classes.WalletSecondCard}>
                                    <img src='Image/Vector1.png' alt='' style={{ width: "30px", height: "30px", margin: "8px" }} />
                                    <Typography style={{ marginTop: "10px" }}>ETH</Typography>
                                </Card>

                                <Card className={classes.WalletSecondCard}>
                                    <img src='Image/Vector2.png' alt='' style={{ width: "30px", height: "30px", margin: "8px" }} />
                                    <Typography style={{ marginTop: "10px" }}>USDT</Typography>
                                </Card>

                                <Card className={classes.WalletSecondCard}>
                                    <img src='Image/Vector3.png' alt='' style={{ width: "35px", height: "35px", margin: "5px" }} />
                                    <Typography style={{ marginTop: "10px" }}>USD</Typography>
                                </Card>

                                <Card className={classes.WalletSecondCard}>
                                    <img src='Image/Vector4.png' alt='' style={{ width: "40px", height: "40px", marginTop: "5px" }} />
                                    <Typography style={{ marginTop: "10px" }}>DAI</Typography>
                                </Card>

                            </Grid>

                            <Grid xs={12} className={classes.CardGridContent}>
                                {/* <Grid xs={12} className={classes.CardGridContentText}> */}
                                <Grid className={classes.TextContentMain}>
                                    <img src='Image/Ethereum.png' alt='' className={classes.TextContentImage} />
                                    <div className={classes.TextContent}>
                                        <Typography variant='h6'>Ethereum</Typography>
                                        <p style={{ color: "#FFFFFF80" }}>ETH</p>
                                    </div>
                                    <p className={classes.TextContentNumber}>12</p>
                                </Grid>
                                {/* </Grid> */}
                                <Grid className={classes.TextContentMain}>
                                    <img src='Image/USD Coin.png' alt='' className={classes.TextContentImage} />
                                    <div className={classes.TextContent}>
                                        <Typography variant='h6'>USD Coin</Typography>
                                        <p style={{ color: "#FFFFFF80" }}>USDT</p>
                                    </div>
                                    <p className={classes.TextContentNumber} style={{ marginLeft: "290px" }}>10</p>
                                </Grid>

                                <Grid className={classes.TextContentMain}>
                                    <img src='Image/StableCoin.png' alt='' className={classes.TextContentImage} />
                                    <div className={classes.TextContent}>
                                        <Typography variant='h6'>Dai Stablecoin</Typography>
                                        <p style={{ color: "#FFFFFF80" }}>DAI</p>
                                    </div>
                                    <p className={classes.TextContentNumber} style={{ marginLeft: "254px" }}>11</p>
                                </Grid>

                                <Grid className={classes.TextContentMain}>
                                    <img src='Image/Therer USD.png' alt='' className={classes.TextContentImage} />
                                    <div className={classes.TextContent}>
                                        <Typography variant='h6'>Tether USD</Typography>
                                        <p style={{ color: "#FFFFFF80" }}>USDT</p>
                                    </div>
                                    <p className={classes.TextContentNumber} style={{ marginLeft: "280px" }}>13</p>
                                </Grid>

                                <Grid className={classes.TextContentMain}>
                                    <img src='Image/StableCoin.png' alt='' className={classes.TextContentImage} />
                                    <div className={classes.TextContent}>
                                        <Typography variant='h6'>USD Coin</Typography>
                                        <p style={{ color: "#FFFFFF80" }}>USDT</p>
                                    </div>
                                    <p className={classes.TextContentNumber} style={{ marginLeft: "295px" }}>13</p>
                                </Grid>
                            </Grid>
                        </Card>
                    </Grid>
                </Grid>
            </Box>
        </>
    )
}

export default WalletSelectToken
