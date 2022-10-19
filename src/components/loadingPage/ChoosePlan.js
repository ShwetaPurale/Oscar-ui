import { Box, Button, Card, Divider, Grid, List, makeStyles, styled, Typography } from '@material-ui/core'
import { Circle } from '@mui/icons-material'
import React from 'react'
import Navbar2 from './Navbar2'
import { Link } from 'react-router-dom';


// const Stylecircle = styled(Circle)({
// // fontSize:"0.8rem",
// color:"#0F212E",
// // fontSize: theme.components.root


// })

const useStyle = makeStyles ((theme) => ({
  MainBox:{
    backgroundColor:"#1A2C38",
    // height:"100vh",
    paddingBottom:"100px",
    textAlign:"center",
    paddingTop:"150px",
    // alignItems:"center",

    color:"white",
  },
  MainBoxCard:{
    width:"50px",
    height:"100px",
    alignItems:"center",
  },

  EightGridCardMain: {
    // position:"absolute",
    display: "flex",
    paddingTop: "60px",
    paddingLeft: 300,
    paddingRight: 200,
    marginLeft:"120px",
    // [theme.breakpoints.up("md")]:{
    //   paddingLeft: 200,
    //   paddingRight: 120,
    //   // marginLeft:"70px",
    // },
    // [theme.breakpoints.up("sm")]:{
    //   paddingLeft: 100,
    //   paddingRight: 80,
    //   // marginLeft:"30px",
    // },
   
},
LoadingCard1: {
  position:"sticky",
  // display: "flex",
    width: "400px",
    height: "600px",
    margin: 50,
    color: "white",
    borderRadius: "27px",
    backgroundColor: "#213743",
    // [theme.breakpoints.down("md")]:{
    //  width:"270px",
    //  height:"650px",
    //  marginLeft: "30px", 
    // },
    // [theme.breakpoints.down("sm")]:{
    //   width:"250px",
    //   height:"650px",
    //   marginLeft: "10px", 
    //  },    
},
LoadingCard2: {
  position:"sticky",
  // display: "flex",
  width: "450px",
  height: "670px",
  margin: 50,
  color: "white",
  backgroundColor: "#213743",
  borderRadius: "27px",
  marginTop: "-1%",
    
},
LoadingCardHeading: {
    paddingTop: " 60px",
    paddingBottom: "30px",
    fontSize: "20px",
    // font: "Roboto",
    fontWeight: 500,
},
ButtonStartTrial: {
    color: "white",
    backgroundColor: "#E59446",
    margin: "40px",
    width: "130px",
    height: "40px",
},

EightCardText: {
    marginTop: "-6px",
    margin: "10px",
    fontSize: "14px",
},
BulletsText:{
  textAlign:"start",
  marginLeft:"18px",
  overflow:"hidden",
  alignItems:"inline",
},
BulletsText2:{
  textAlign:"start",
  marginLeft:"30px",
  overflow:"hidden",
  alignItems:"inline",
},
Bullets:{
  color:"#0F212E",  
},
}))

const ChoosePlan = () => {
  const classes = useStyle();

  return (
    <>
        <Navbar2 />
      <Box className={classes.MainBox}>
      <Grid item xs={12} className={classes.SixGridMainPage}>
                <Typography variant='h3' style={{ fontWeight: 600 }}>Choose Your Plan</Typography>
                <p style={{ fontSize: "22px", wordSpacing: "2px", fontWeight:"200" }}>Malesuada nec, amet maecenas cras mauris porta nunc. Tempor at tortor scelerisque. <br />You may downgrade to our free plan at the end of your 14-day paid plan trial.</p>
                <Grid item xs={12} className={classes.EightGridCardMain}>

                    <Card className={classes.LoadingCard1}>
                        <Typography className={classes.LoadingCardHeading}>STARTER</Typography>
                        <Divider />
                        <Typography style={{ fontSize: "54px", fontWeight: "700px", paddingTop: "10px" }}>$12</Typography>
                        <p style={{ margin: "-4px", fontSize: "19px", color: "#FFFFFF80" }}>/ month</p>
                        <Button className={classes.ButtonStartTrial}

                        ><Link to="/cross-exchange" style={{color:"white"}}>Buy Now</Link></Button>                    
                        
                       <div className={classes.BulletsText}>
                        
                        <Circle className={classes.Bullets} style={{fontSize:"1rem"}} />
                        
                        <span className={classes.EightCardText}>Lorem ipsum dolor sit amet, consectetur  </span>
                        </div> 

                        <div className={classes.BulletsText}>
                        <Circle className={classes.Bullets} style={{fontSize:"1rem"}}/>
                        <span className={classes.EightCardText}> At nunc sed volutpat cras lobortis. Diam </span>
                        </div>

                        <div className={classes.BulletsText}>
                        <Circle className={classes.Bullets} style={{fontSize:"1rem"}}/>
                        <span className={classes.EightCardText}> Diam orci phasellus suspendisse vitae, </span>
                        </div>

                        <div className={classes.BulletsText}>
                        <Circle className={classes.Bullets} style={{fontSize:"1rem"}}/>
                        <span className={classes.EightCardText}> phasellus nibh. Turpis neque tincidunt nam  </span>
                        </div>

                        <div className={classes.BulletsText}>
                        <Circle className={classes.Bullets} style={{fontSize:"1rem"}}/>
                        <span className={classes.EightCardText}> Turpis neque tincidunt nam volutpat.  </span>
                        </div>                        
                        
                      </Card>

                    <Card className={classes.LoadingCard2}
                    //  style={{ height: 642, width: "800px", marginTop: "-1%", marginBottom: "10px" }}
                     >
                        <Typography className={classes.LoadingCardHeading}>PREMIUM</Typography>
                        <Divider />
                        <Typography style={{ fontSize: "64px", fontWeight: "700px", padding: "10px" }}>$24</Typography>
                        <p style={{ margin: "-10px", fontSize: "19px", color: "#FFFFFF80" }}>/ month</p>
                        <Button className={classes.ButtonStartTrial}
                         ><Link to="/cross-exchange-second" style={{color:"white"}}>Buy Now</Link></Button>   

                        <div className={classes.BulletsText2}>
                        <Circle className={classes.Bullets} style={{fontSize:"1rem"}}/>
                        <span className={classes.EightCardText}>Lorem ipsum dolor sit amet, consectetur lobortis. Diam </span>
                        </div>

                        <div className={classes.BulletsText2}>
                        <Circle className={classes.Bullets} style={{fontSize:"1rem"}}/>
                        <span className={classes.EightCardText}> At nunc sed volutpat cras lobortis. Diam nunc sed</span>
                        </div>

                        <div className={classes.BulletsText2}>
                        <Circle className={classes.Bullets} style={{fontSize:"1rem"}}/>
                        <span className={classes.EightCardText}> Diam orci phasellus suspendisse vitae, tincidunt </span>
                        </div>

                        <div className={classes.BulletsText2}>
                        <Circle className={classes.Bullets} style={{fontSize:"1rem"}}/>
                        <span className={classes.EightCardText}> phasellus nibh. Turpis neque tincidunt nam phasellus </span>
                        </div>

                        <div className={classes.BulletsText2}>
                        <Circle className={classes.Bullets} style={{fontSize:"1rem"}}/>
                        <span className={classes.EightCardText}> Turpis neque tincidunt nam volutpat. Turpis neque </span>
                        </div>
                        
                    </Card>

                    <Card className={classes.LoadingCard1}>
                        <Typography className={classes.LoadingCardHeading}>TEAMS</Typography>
                        <Divider />
                        <Typography style={{ fontSize: "54px", fontWeight: "700px", padding: "10px" }}>$49</Typography>
                        <p style={{ margin: "-10px", fontSize: "19px", color: "#FFFFFF80" }}>/ month</p>
                        <Button className={classes.ButtonStartTrial}>Buy Now</Button>
                        <div className={classes.BulletsText}>
                        <Circle className={classes.Bullets} style={{fontSize:"1rem"}}/>
                        <span className={classes.EightCardText}>Lorem ipsum dolor sit amet, consectetur  </span>
                        </div>

                        <div className={classes.BulletsText}>
                        <Circle className={classes.Bullets} style={{fontSize:"1rem"}}/>
                        <span className={classes.EightCardText}> At nunc sed volutpat cras lobortis. Diam </span>
                        </div>

                        <div className={classes.BulletsText}>
                        <Circle className={classes.Bullets} style={{fontSize:"1rem"}}/>
                        <span className={classes.EightCardText}> Diam orci phasellus suspendisse vitae, </span>
                        </div>

                        <div className={classes.BulletsText}>
                        <Circle className={classes.Bullets} style={{fontSize:"1rem"}}/>
                        <span className={classes.EightCardText}> phasellus nibh. Turpis neque tincidunt nam  </span>
                        </div>

                        <div className={classes.BulletsText}>
                        <Circle className={classes.Bullets} style={{fontSize:"1rem"}}/>
                        <span className={classes.EightCardText}> Turpis neque tincidunt nam volutpat.  </span>
                        </div>                      
                        
                        </Card>
                </Grid>
            </Grid>

      </Box>
    </>
  )
}

export default ChoosePlan
