import { Box, Button, Card, CardContent, Divider, Grid, makeStyles, Typography } from '@material-ui/core'
import { KeyboardArrowDown } from '@mui/icons-material';
import { maxWidth } from '@mui/system';

import React from 'react'
import { Link } from 'react-router-dom';
import Navbar3 from './Navbar3';


const useStyles = makeStyles((theme) => ({
  ConnectWalletMainBox: {
    paddingBottom:"100px",
    // height: "100vh",
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
    [theme.breakpoints.down("md")]:{
      padding: "100px 10px 10px 20px",
      height:"800px",
    },    
    [theme.breakpoints.down("sm")]:{
      padding: "100px 10px 10px 20px",
      height:"900px",
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
    [theme.breakpoints.down("md")]:{
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
    [theme.breakpoints.down("md")]:{
      width:"250px",
      marginRight:"20px",
    },
    [theme.breakpoints.down("sm")]:{
      width:"250px",
      marginRight:"20px",
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

  // ConnectWallet Main Card.......

  ConnectWalletCard: {
    maxWidth: "500px",
    height: "720px",
    backgroundColor: "#0F212E",
    borderRadius: "12px",
    padding: "20px",
    [theme.breakpoints.down("md")]:{
      height:"800px",
    },
    [theme.breakpoints.down("sm")]:{
      height:"900px",
    }
  },

  // ConnectWallet First Card.......


  WalletCardBox1: {
    // width: "480px",
    height: "150px",
    // position:"relative",
    // padding:"12px ",
    backgroundColor: "#213743",
    borderRadius: "19px",
    marginBottom: "30px",
    color: "white",
  },
  WalletCardBoxText: {
    color: "white",
    fontSize: "20px",
    fontWeight: 400,
    padding: "12px 0px 0px 12px",
    fontFamily: "Roboto",
  },
  WalletCardBox1Left: {
    color: "white",
    display: "flex",
    paddingLeft: "8px"
  },
  WalletBox1LeftItems: {
    padding: "8px 3px 0px 2px",
    fontSize: "25px",
  },
  WalletBox1LeftNumber: {
    fontSize: "25px",
    paddingTop: "10px",
    // marginLeft: "200px",
    textAlign:"center",
    color: "white",
  },
  WalletBox1LeftNumberSecond: {
    color: "white",
    margin: "-30px 0px 0px 365px",
    marginBottom: "20px",
  },

  // ConnectWallet Second Card......


  WalletCardBox2: {
    height: "98px",
    backgroundColor: "#213743",
    borderRadius: "10px",
    color: "white",
    marginBottom: "25px",
  },

  // Card Down Buttons Text.......... 


  WalletCardButtons: {
    marginBottom: "45px",

  },
  WalletCardButtonsThree: {
    color: "white",
    fontSize: "22px",
    textTransform: "capitalize",
    margin: "5px",
  },
  WalletButtonDownGrid: {
    color: "white",
    display: "flex",
    marginBottom: "25px",
  },

  // Text Down Buttons Text.......... 


  WalletButtonDownLeftText: {
    fontSize: "20px",
    padding: "0px 0px 8px 0px",
  },
  WalletButtonDownRightText: {
    fontSize: "20px",
    padding: "0px 0px 8px 0px",
    textAlign: "right"
  },

  // Text Down Divider Text.......... 

  // WalletTextDownGrid: {
  //   height: "80px",
  //   marginBottom:"70px",
  // },
  WalletDividerDownLeftText:{
    fontSize:"25px",
    marginTop:"15px",
  },
  WalletDividerDownRightText:{
    fontSize:"25px",
    marginTop:"15px",
    textAlign: "right",
  },
  WalletCardButtonGrid:{   
    textAlign:"center",    
    alignItems:"center",   
    height:"70px"    
  },
  WalletCardButton:{
backgroundColor:"#E59446",
color:"white",
borderRadius:"10px",
width:"480px",
height:"65px",
fontSize:"20px",
textTransform:"capitalize",
fontWeight:"500px",
[theme.breakpoints.down("md")]:{
  width:"350px"
},
[theme.breakpoints.down("sm")]:{
  width:"250px"
},
  },
}))

const ConnectWallet = () => {
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
            <Button className={classes.favoriteBtn}>favourite</Button>
            <img src='Image/TutorialLogo.png' alt='' className={classes.TutorialLogo} />
            <Typography className={classes.TutorialText1}>Tutorial Step by Step</Typography>
          </div>
        </Grid>

        <Grid xs={6} className={classes.ConnectWalletMainGridRight}>
          <Card className={classes.ConnectWalletCard}>
            {/* <CardContent> */}
            <Card className={classes.WalletCardBox1}>
              <Grid xs={12} style={{display:"flex"}}>
                <Grid xs={6}>
              <Typography className={classes.WalletCardBoxText}>You sell</Typography>
              <div className={classes.WalletCardBox1Left}>
                <img src='Image/ConnectWalletVector.png' alt='' className={classes.WalletBox1LeftItems} style={{ width: "35px" }} />
                <Typography className={classes.WalletBox1LeftItems}
                //  href='/EstimatedProfile'
                ><Link to="/wallet-select-token" style={{color:"white"}}>ETH</Link></Typography>
                {/* <Button style={{ color:"white" }} href="/EstimatedProfile"> */}
                <KeyboardArrowDown className={classes.WalletBox1LeftItems}              
                style={{ marginTop: "5px", color:"white" }} />
                {/* </Button> */}                
              </div>
              <Typography className={classes.WalletCardBoxText}                           
              >Ethereum</Typography>
              </Grid>
              <Grid xs={6} >
              <Typography className={classes.WalletBox1LeftNumber} style={{textAlign:"right", marginTop:"40px", marginRight:"15px"}}>0.998833</Typography>
              <Typography  style={{textAlign:"right", marginRight:"15px"}}>~$1,210</Typography>
              </Grid>
              </Grid>
            </Card>


            <Card className={classes.WalletCardBox2}>
              <Grid xs={12} style={{display:"flex"}}>
                <Grid xs={6}>
              <Typography className={classes.WalletCardBoxText}>You Buy</Typography>
              <div className={classes.WalletCardBox1Left}>
                <img src='Image/ConnectWalletVector.png' alt='' className={classes.WalletBox1LeftItems} style={{ width: "35px", marginRight: "10px" }} />
                <Typography className={classes.WalletBox1LeftItems}>DAI</Typography>
                </div>
                </Grid>

                <Grid xs={6}>
                <KeyboardArrowDown  style={{textAlign:"right", marginLeft: "191px", marginTop: "38px"}} />
                              
              </Grid>
              </Grid>
            </Card>

            <Grid xs={12} className={classes.WalletCardButtons}>
              <Button variant='outlined'
              //  href="/EstimatedProfile" 
               className={classes.WalletCardButtonsThree}>Uniswap</Button>
              <Button variant='outlined' className={classes.WalletCardButtonsThree}>Shibaswap</Button>
              <Button variant='outlined' className={classes.WalletCardButtonsThree}>Shushiswap</Button>
            </Grid>


            <Grid xs={12} className={classes.WalletButtonDownGrid}>
              <Grid xs={6}>
                <Typography className={classes.WalletButtonDownLeftText}>Lorem Ipsum</Typography>
                <Typography className={classes.WalletButtonDownLeftText}>Transfer fees</Typography>
                <Typography className={classes.WalletButtonDownLeftText}>Profit</Typography>
              </Grid>
              <Grid xs={6}>
                <Typography className={classes.WalletButtonDownRightText}>1.2%</Typography>
                <Typography className={classes.WalletButtonDownRightText} style={{ color: "#FF5678" }}>2.8%</Typography>
                <Typography className={classes.WalletButtonDownRightText} style={{ color: "#2BAD1B" }}>9.3%</Typography>
              </Grid>             
            </Grid>

            <Divider />           
            <Grid xs={12} className={classes.WalletButtonDownGrid}>
              <Grid xs={6}>
                <Typography className={classes.WalletDividerDownLeftText}>Profitpath</Typography>
              </Grid>
              <Grid xs={6}>
                <Typography               
                className={classes.WalletDividerDownRightText}
                style={{cursor:"pointer"}}                
                ><Link to="/estimated-profile" style={{color:"white"}}>Estimated profits > </Link></Typography>
              </Grid>
            </Grid>
            <Divider style={{marginBottom:"28px"}}/>

            <Grid xs={12} className={classes.WalletCardButtonGrid}>
            <Button className={classes.WalletCardButton}
             >
              {/* <Link to="/wallet-select-token"> */}
              Connect wallet
              {/* </Link> */}
              </Button>
            </Grid>         

          </Card>
        </Grid>
      </Grid>
    </Box>
    </>
  )
}

export default ConnectWallet
