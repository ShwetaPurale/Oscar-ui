import React from 'react'
import { Link } from 'react-router-dom';
import {
    Box, Button,
    Card,
    Divider, Grid,
 
    makeStyles,
    Typography
} from '@material-ui/core'
import {
    FacebookRounded,
    Instagram,
    Telegram,
    Twitter,
    YouTube
} from '@mui/icons-material';
import Navbar from './Navbar';
import { maxWidth, width } from '@mui/system';


const useStyles = makeStyles((theme) => ({
    mainBox: {
        width: "100%",
        height: "auto",
        // paddingBottom:"100px",
        right: 0,
        left: 30,
        backgroundColor: "#1A2C38",
        color: "white",
        backgroundRepeat: "no-repeat",
        textAlign: "center",
        // fontFamily: "Roboto"
    },
    mainText: {
        paddingTop: 35,
        textAlign: "center",
        fontSize: "85px",
        // fontFamily: "roboto",
        fontWeight: 700,
        [theme.breakpoints.down("md")]: {
            fontSize: "60px"
        },
        [theme.breakpoints.down("sm")]: {
            fontSize: "45px"
        }
    },
    allInOne: {
        color: "#811793"
    },
    business: {
        color: "#E59446"
    },

    // Loading Page Start Now Button......


    btnBox: {
        color: "white",
        background: "#E59446",
        textTransform: "capitalize",
        width: 200,
        height: 60,
        fontSize: 25,
        marginTop: 50,
        marginBottom: 160,       
        textAlign: "left",
        // marginRight:"1700px",       
        borderRadius: 15,
        [theme.breakpoints.down("md")]: {
            width: 150,
            height: 55,
            fontSize: 20,
        },
        [theme.breakpoints.down("sm")]: {
            width: 140,
            height: 50,
            fontSize: 18,
        }
    },

    img1: {
        width: 1250,
        height: 600,
        border: "28px solid black",
        borderRadius: 49,
        [theme.breakpoints.down("md")]: {
            width: 900,
            height: 480

        },
        [theme.breakpoints.down("sm")]: {
            width: 700,
            height: 400,

        }
    },

    // Loading Page Grid Three....


    mainGridThree: {
        // zIndex:"12px",
        marginTop: -20,
        height: 850,
        backgroundColor: "#213743",
        zIndex: 12,
        top: 1040,
        // marginBottom:"50px"
    },
    ExperiencingText: {
        paddingTop: 70,
        fontSize: 60,
        // fontFamily: "roboto",
        fontWeight: 600,
        [theme.breakpoints.down("md")]: {
            fontSize: 50,
        },
        [theme.breakpoints.down("sm")]: {
            fontSize: 38,
        }
    },
    learning: {
        color: "#811793",
    },
    ImagesMain: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        margin: 20,
        [theme.breakpoints.down("sm")]: {
            margin: 10,
        }
    },
    imageContent: {
        alignItems: "center",
        display: theme.spacing(2),
        marginLeft: 30,
        marginRight: 30,
        [theme.breakpoints.down("sm")]: {
            marginRight: 10,
            marginLeft: 10,
            fontSize: "14px"
        }
    },
    imageText:{
        fontSize: "20px", 
        // wordSpacing: "2px",
        color:"#FFFFFF80",
        [theme.breakpoints.down("md")]:{
            fontSize:"16px",
            wordSpacing: "1px",
        },
        [theme.breakpoints.down("sm")]:{
            fontSize:"14px",
            wordSpacing: "0px",
        }
    },

    // Loading Page Grid Four......


    mainGridFour: {
        paddingTop: 70,
        height: 800,

    },
    TrandingText: {
        color: "#811793",
        // fontFamily: "Roboto",
        fontWeight: 600,
    },
    // Main Grid in Loading Page


    ComboGridLoading: {
        display: "flex",
        margin: 30,
    },
    LeftGridLoading: {
        alignItems: "center",
        textAlign: "center",
        overflow: "hidden",
       
        padding: "0px 10px 0px 180px",
        display: "center",
        [theme.breakpoints.up("md")]: {
            padding: "0px 10px 0px 10px",
        },
        [theme.breakpoints.up("sm")]: {
            padding: "0px 0px 0px 10px",
        },
        // "@madia(max-width:1366px)":{
        //     padding:"20px",
        // }

    },
    Lefticons: {
        width: 65,
        height: 58,
        alignItems: "center",
        paddingTop: 12,
        paddingLeft: 10,
    },
    LeftGridFeature: {
        marginLeft:"250px",
        marginTop: 60,
        textAlign: "left",
        background: "linear-gradient(180deg, #F1F5FC -89.43%, rgba(241, 245, 252, 0) 19.33%)",
        height: 90,
        width: 580,
        display: "flex",
        borderRadius: 24,
        [theme.breakpoints.down("md")]: {
            height: 120,
            width: 450,
            marginLeft:"0px",
            marginTop: 20,
            padding: "0px 10px 0px 0px",
        },
        [theme.breakpoints.down("sm")]: {
            height: 130,
            width: 400,
            marginLeft:"0px",
            marginTop: 10,
            padding: "0px 0px 0px 0px",

        }
    },
    LeftFeatureText: {
        paddingLeft: 15,
        
        
    },

    // Loading Page Right side grid

    RightGridLoading: {
        paddingTop: 75,
        // marginLeft:"10px"
    },

    RightGridImage1: {
        height: "480px",
            width: "670px",
        // height: "maxContent",
        [theme.breakpoints.down("md")]: {
            height: "380px",
            width: "570px",
        },
        [theme.breakpoints.down("sm")]: {
            height: "300px",
            width: "400px",
            marginTop: "60px",
        },
        // "@madia(max-width:1366)":{
        //     // height: "380px",
        //     // width: "570px",
        // }
    },
    // RightGridImage2: {
    //     marginLeft: "1%",
    //     marginTop: "-96%",
    //     marginBottom: 80,

    // },
    FifthMainGrid: {
        marginTop: "70px",
        height: 650,
        display: "flex",
        paddingTop: "200px",
        [theme.breakpoints.up("md")]:{
            paddingTop: "100px",   
        },
        [theme.breakpoints.up("sm")]:{
            paddingTop: "50px",   
        },
    },
    FifthLeftGrid: {
        paddingLeft: 80,
        alignItems: "center",
        paddingTop: "200px",
        textAlign: "left",
        [theme.breakpoints.up("md")]: {
            marginTop: "-100px"
        },
        [theme.breakpoints.up("sm")]: {
            marginTop: "-200px"
        }
    },
    FifthLeftGridText1: {
        fontSize: "60px",
        [theme.breakpoints.down("md")]: {
            fontSize: "40px",
            // lineHeight:"2px"
        },
        [theme.breakpoints.down("sm")]: {
            fontSize: "35px",
            // lineHeight:"2px"
        }
    },
    FifthLeftGridText: {
        color: "#FFFFFF",
        fontSize: "22px",
        wordSpacing: "3px",
        [theme.breakpoints.down("md")]: {
            fontSize: "18px"
        },
        [theme.breakpoints.down("sm")]: {
            fontSize: "15px"
        },
        // "@media(max-Width:1366px)" :{
        //    fontSize:"20px"
        // },
        // "@media(min-Width:913px)" :{
        //     fontSize:"15px"
        // }
    },
    FifthMainGridImage: {
        marginTop: "-80px",
        width: "750px",
        [theme.breakpoints.down("md")]: {
            marginTop: "50px",
            width: "450px",
        },
        [theme.breakpoints.down("sm")]: {
            marginTop: "150px",
            width: "300px",
        },
        // "@media(max-Width:1366px)" :{
        //     width:"500px",
        //     marginTop:"150px",
        // },
        // "@media(min-Width:913px)" :{
        //     width:"350px",
        //     marginTop:"150px",
        // }
    },
    SixGridMainPage: {
        height: 800,
        paddingTop: 80,
        marginBottom: "30px"
    },
    EightGridCardMain: {

        display: "flex",
        paddingTop: "40px",
        paddingLeft: 300,
        paddingRight: 200,
       
    },
    LoadingCard1: {
        width: "650px",
        height: "600px",
        margin: 50,
        color: "white",
        backgroundColor: "#213743",
        borderRadius: "27px",
        [theme.breakpoints.down("md")]:{
            width: "750px",           
            margin: "35px", 
        },
        [theme.breakpoints.down("sm")]:{
            width: "750px",           
            margin: "25px", 
        },
        
    },
    // LoadingCard2:{
    //     backgroundColor: "#213743",
    //     color:"white",
    //     borderRadius: "27px",
    //     // position:"relative",
    //     margin: 50,
    //     width:"600px",
    // },

    // "& .p":{
    //     wordSpacing:"10px"

    // },
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
        width: "150px",
        height: "40px"
    },

    EightCardText: {
        marginTop: "-10px",
        margin: "15px",
        fontSize: "18px",
        padding:"0px 20px"
    },
    NineGridLoadingMain: {
        padding: "150px 0px 0px 0px",
        height: "450px",
        textAlign: "left",
        display: "flex",
    },
    NineGridLoadingText: {
        marginLeft: "50px"
    },
    NineLoadingText:{
       fontSize:"40px",
       [theme.breakpoints.down("md")]:{
        fontSize:"35px",
       },
       [theme.breakpoints.down("sm")]:{
        fontSize:"30px",
       },
    },
    NineGridLoadingImageBS: {
        width: "220px",
        height: "230px",
        padding: "10px 0px 0px 70px",
        [theme.breakpoints.down("md")]:{
            width: "200px",
            height: "190px",
            padding: "10px 0px 0px 50px",  
        },
        [theme.breakpoints.down("sm")]:{
            width: "150px",
            height: "140px",
            padding: "10px 0px 0px 30px",  
        }
    },

    NineGridLoadingImageLogo: {
        width: "160px",
        height: "160px",
        padding: "20px 0px 0px 20px",
        // margin:"20px",
        [theme.breakpoints.down("md")]:{
            width: "130px",
            height: "120px",
            padding: "10px 0px 0px 10px",  
        },
        [theme.breakpoints.down("sm")]:{
            width: "100px",
            height: "100px",
            padding: "10px 0px 0px 5px",  
        },
    },
    FooterGridLoadingPageMain: {
        // height: "250px",
        backgroundColor: "#0F212E",
        display: "flex",
        padding: "120px",
        paddingBottom:"50px",

    },
    FooterGridLoadingPageRight: {
        display: "flex",
        padding:"20px",
        [theme.breakpoints.down("md")]:{
            marginRight: "100px", 
            paddingRight: "50px",
        },
        [theme.breakpoints.down("sm")]:{
            marginLeft: "100px", 
            marginRight: "90px", 
            paddingRight: "0px",
        }
    },

    FooterGridLoadingPage1: {
        marginRight: "100px",
        paddingRight: "20px",
        [theme.breakpoints.down("md")]:{
            marginRight: "60px", 
            paddingRight: "0px",
        },
        [theme.breakpoints.down("sm")]:{
            marginRight: "25px", 
            paddingRight: "0px",
        }
    },
    FooterLoadingPageText: {
        fontSize: "30px",
        [theme.breakpoints.down("md")]:{
            fontSize: "27px",
        },
        [theme.breakpoints.down("sm")]:{
            fontSize: "22px",
        }
    },
    LoadingPageLink: {
        fontSize: "25px",
        color: "#FFFFFF99",
        [theme.breakpoints.down("md")]:{
            fontSize: "22px",
        },
        [theme.breakpoints.down("sm")]:{
            fontSize: "18px",
        }

    },
    LodingPageFooterIcons: {
        display: "flex",
        margin: "10px"
    }

}))

const FrantPage = () => {
    const classes = useStyles();
    return (
        <>
        <Navbar />
        <Box className={classes.mainBox}>
            <Typography className={classes.mainText}><span className={classes.allInOne}>All-in-one </span>
                platfrom for<br /> running <span className={classes.business}>business</span></Typography>
            <Button className={classes.btnBox} ><Link to="/dashboard" style={{color:"white"}}>Start Now</Link></Button>
            <Grid className={classes.imgDashMain}>
                <img src='Image/Dashboard1.png' alt='' className={classes.img1} />
            </Grid>

            {/* Loading Page Grid Three */}

            <Grid className={classes.mainGridThree}>
                <Typography className={classes.ExperiencingText}>Experiencing the <span className={classes.learning}>learning</span><br />cryptocurrency tradig bot</Typography>
                <Box className={classes.ImagesMain}>
                    <Box className={classes.imageContent}>
                        <img src='Image/TrustImage.png' alt='' />
                        <Typography variant='h4'>Trust</Typography>
                        <br />
                        <Typography className={classes.imageText} >Search the world's information, including webpages, <br />images, videos and more. Google has many special features<br /> to help you find exactly what you're looking ...</Typography>
                    </Box>

                    <Box className={classes.imageContent}>
                        <img src='Image/SecurityImage.png' alt='' />
                        <Typography variant='h4'>Security</Typography>
                        <br />
                        <Typography className={classes.imageText} >Search the world's information, including webpages, images,<br /> videos and more. Google has many special features<br /> to help you find exactly what you're looking ...</Typography>
                    </Box>

                    <Box className={classes.imageContent}>
                        <img src='Image/PrivacyImage.png' alt='' />
                        <Typography variant='h4'>Privacy</Typography>
                        <br />
                        <Typography className={classes.imageText} >Search the world's information, including webpages, images, <br />videos and more. Google has many special features <br />to help you find exactly what you're looking ...</Typography>
                    </Box>
                </Box>
            </Grid>

            {/* Loading Page Grid Four.... */}


            <Grid className={classes.mainGridFour}>
                <Typography variant='h2' style={{ fontWeight: 600 }} >Automate your <span className={classes.TrandingText}>Trading</span></Typography>
                <br />
                <Typography variant='h5'>Take your emotion out of the equation</Typography>
                <Grid item xs={12} className={classes.ComboGridLoading}>
                    <Grid xs={6} className={classes.LeftGridLoading}>
                        <Box className={classes.LeftGridFeature}>
                            <img src='Image/LogoImage1.png' alt='' className={classes.Lefticons} />
                            <Box className={classes.LeftFeatureText}>
                                <Typography variant='h6' style={{ color: 'white' }}>Feature-1</Typography>

                                <p style={{ color: '#FFFFFF80' }}>Lorem ipsum dolor sit amet, consectetur adipiscing<br /> elit.
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                            </Box>
                        </Box>

                        <Box className={classes.LeftGridFeature}>
                            <img src='Image/LogoImage2.png' alt='' className={classes.Lefticons} />
                            <Box className={classes.LeftFeatureText}>
                                <Typography variant='h6' style={{ color: 'white', }} >Feature-2</Typography>
                                <p style={{ color: '#FFFFFF80' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.Search the world's information,
                                    including webpages, images, videos and more. </p>
                            </Box>
                        </Box>

                        <Box className={classes.LeftGridFeature}>
                            <img src='Image/LogoImage1.png' alt='' className={classes.Lefticons} />
                            <Box className={classes.LeftFeatureText}>
                                <Typography variant='h6' style={{ color: 'white' }} >Feature-3</Typography>
                                <p style={{ color: '#FFFFFF80', }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.Search the world's information, including webpages, images, videos and more. </p>
                            </Box>
                        </Box>

                        <Box className={classes.LeftGridFeature}>
                            <img src='Image/LogoImage4.png' alt='' className={classes.Lefticons} />
                            <Box className={classes.LeftFeatureText}>
                                <Typography variant='h6' style={{ color: 'white' }} >Feature-4</Typography>
                                <p style={{ color: '#FFFFFF80' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.Search the world's information, including webpages, images, videos and more. </p>
                            </Box>
                        </Box>

                    </Grid>

                    <Grid xs={6} className={classes.RightGridLoading}>
                        <img src='Image/ComponentLoadingPageImage2.png' alt='' className={classes.RightGridImage1} />
                        {/* <img src='Image/GridImageMain.png' alt='' className={classes.RightGridImage2} /> */}

                    </Grid>
                </Grid>
            </Grid>

            {/* fifth Grid of Loading Page */}

            <Grid xs={12} className={classes.FifthMainGrid}>
                <Grid xs={6} className={classes.FifthLeftGrid}>
                    <Typography style={{ fontWeight: 600 }} className={classes.FifthLeftGridText1}>Works with these <span style={{ color: "#E59446" }}>tools </span>
                        and<br /> more coming!</Typography>
                    <p className={classes.FifthLeftGridText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna diam nunc, potenti placerat nunc, placerat dignissim. Sed interdum morbi varius facilisis nisl est.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna diam nunc, potenti placerat nunc, placerat dignissim. Sed interdum morbi varius facilisis nisl est.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna diam nunc, potenti placerat nunc, placerat dignissim. Sed interdum morbi varius facilisis nisl est.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna diam nunc, potenti placerat nunc, placerat dignissim. Sed interdum morbi varius facilisis nisl est. Urna diam nunc, potenti placerat nunc, placerat dignissim. Sed interdum morbi varius facilisis nisl est.</p>
                </Grid>

                <Grid xs={6} >
                    <img src='Image/ComponentLoadingImage1.png' alt='' className={classes.FifthMainGridImage} />
                </Grid>
            </Grid>

            <Grid item xs={12} className={classes.SixGridMainPage}>
                <Typography variant='h3' style={{ fontWeight: 600 }}>Choose Your Plan</Typography>
                <p style={{ fontSize: "22px", wordSpacing: "2px" }}>Malesuada nec, amet maecenas cras mauris porta nunc. Tempor at tortor scelerisque. <br />You may downgrade to our free plan at the end of your 14-day paid plan trial.</p>
                <Grid item xs={12} className={classes.EightGridCardMain}>

                    <Card className={classes.LoadingCard1}>
                        <Typography className={classes.LoadingCardHeading}>STARTER</Typography>
                        <Divider />
                        <Typography style={{ fontSize: "54px", fontWeight: "700px", paddingTop: "10px" }}>$12</Typography>
                        <p style={{ margin: "-4px", fontSize: "19px", coloe: "#FFFFFF" }}>/ Month</p>
                        <Button className={classes.ButtonStartTrial}
                        //  href="/ChoosePlan"
                         >Start Trial</Button>
                        <p className={classes.EightCardText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. At nunc sed volutpat cras lobortis. Diam orci phasellus suspendisse vitae, phasellus nibh. Turpis neque tincidunt nam volutpat. Varius at urna, amet facilisi nisi sit eget.</p>
                    </Card>

                    <Card className={classes.LoadingCard1} style={{ height: 642, width: "800px", marginTop: "-1%", marginBottom: "10px" }}>
                        <Typography className={classes.LoadingCardHeading}>PREMIUM</Typography>
                        <Divider />
                        <Typography style={{ fontSize: "64px", fontWeight: "700px", padding: "10px" }}>$24</Typography>
                        <p style={{ margin: "-10px", fontSize: "19px" }}>/ Month</p>
                        <Button className={classes.ButtonStartTrial}
                        // href="/ChoosePlan"
                        >Start Trial</Button>
                        <p className={classes.EightCardText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. At nunc sed volutpat cras lobortis. Diam orci phasellus suspendisse vitae, phasellus nibh. Turpis neque tincidunt nam volutpat. Varius at urna, amet facilisi nisi sit eget.Turpis neque tincidunt nam volutpat. </p>
                    </Card>

                    <Card className={classes.LoadingCard1}>
                        <Typography className={classes.LoadingCardHeading}>TEAMS</Typography>
                        <Divider />
                        <Typography style={{ fontSize: "54px", fontWeight: "700px", padding: "10px" }}>$49</Typography>
                        <p style={{ margin: "-10px", fontSize: "19px" }}>/ Month</p>
                        <Button className={classes.ButtonStartTrial}
                        // href="/ChoosePlan"
                        >Start Trial</Button>
                        <p className={classes.EightCardText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. At nunc sed volutpat cras lobortis. Diam orci phasellus suspendisse vitae, phasellus nibh. Turpis neque tincidunt nam volutpat. Varius at urna, amet facilisi nisi sit eget.Turpis neque tincidunt nam volutpat.</p>
                    </Card>
                </Grid>
            </Grid>

            <Grid item xs={12} className={classes.NineGridLoadingMain}>
                <Grid xs={6} className={classes.NineGridLoadingText}>
                    <Typography className={classes.NineLoadingText}>Start trading with Oscar for free!</Typography>
                    <p style={{ fontSize: "22px" }}>Free to use - no credit card required</p>
                    <img src='Image/LetsgetImageLogo.png' alt='' style={{ width: "172px" }} />

                </Grid>

                <Grid xs={3} className={classes.NineGridLoadingImage1}>
                    <img src='Image/BSLoadingPageImage.png' alt='' className={classes.NineGridLoadingImageBS} />
                </Grid>

                <Grid xs={3} className={classes.NineGridLoadingImage2}>
                    <img src='Image/FooterDLogo2.png' alt='' className={classes.NineGridLoadingImageLogo} />
                </Grid>
            </Grid>

            <Grid xs={12} className={classes.FooterGridLoadingPageMain}>
                <Grid xs={4} className={classes.FooterGridLoading}>
                    <img src='Image/FooterImageDLogo1.png' alt='' style={{ marginBottom: "25px" }} />
                    <Typography variant='h6' style={{ marginBottom: "12px" }}>Follow us on Social Media</Typography>

                    <FacebookRounded className={classes.LodingPageFooterIcons} />
                    <Twitter className={classes.LodingPageFooterIcons} />
                    <Telegram className={classes.LodingPageFooterIcons} />
                    <YouTube className={classes.LodingPageFooterIcons} />
                    <Instagram className={classes.LodingPageFooterIcons} />

                </Grid>
                <Grid xs={8} className={classes.FooterGridLoadingPageRight}>
                    <Box className={classes.FooterGridLoadingPage1}>
                        <Typography className={classes.FooterLoadingPageText}>features</Typography>
                        <br />
                        <Link href="#" className={classes.LoadingPageLink}>Automatic Trading</Link><br />
                        <br />
                        <br />
                        <Link href="#" className={classes.LoadingPageLink}>Exchange Arbitrage</Link><br />
                        <br />
                        <br />
                        <Link href="#" className={classes.LoadingPageLink}>Market Making Bot</Link><br />
                        <br />
                        <br />
                        <Link href="#" className={classes.LoadingPageLink}>Social Trading</Link><br />
                    </Box>

                    <Box className={classes.FooterGridLoadingPage1}>
                        <Typography className={classes.FooterLoadingPageText}>Resources</Typography>
                        <br />
                        <Link href="#" className={classes.LoadingPageLink}>Get started </Link><br />
                        <br />
                        <br />
                        <Link href="#" className={classes.LoadingPageLink}>tutorials </Link><br />
                        <br />
                        <br />
                        <Link href="#" className={classes.LoadingPageLink}>documentation </Link><br />
                        <br />
                        <br />
                        <Link href="#" className={classes.LoadingPageLink}>academy </Link><br />
                    </Box>

                    <Box className={classes.FooterGridLoadingPage1}>
                        <Typography className={classes.FooterLoadingPageText}>company</Typography>
                        <br />
                        <Link href="#" className={classes.LoadingPageLink}>about us </Link><br />
                        <br />
                        <br />
                        <Link href="#" className={classes.LoadingPageLink}>careers </Link><br />
                        <br />
                        <br />
                        <Link href="#" className={classes.LoadingPageLink}>press </Link><br />
                        <br />
                        <br />
                        <Link href="#" className={classes.LoadingPageLink}>contact </Link><br />
                    </Box>

                    <Box className={classes.FooterGridLoadingPage1} >
                        <Typography className={classes.FooterLoadingPageText}>links</Typography>
                        <br />
                        <Link href="#" className={classes.LoadingPageLink}>cryptocurrencies </Link><br />
                        <br />
                        <br />
                        <Link href="#" className={classes.LoadingPageLink}>Exchanges </Link><br />
                        <br />
                        <br />
                        <Link href="#" className={classes.LoadingPageLink}>signals </Link><br />
                        <br />
                        <br />
                        <Link href="#" className={classes.LoadingPageLink}>Pricing </Link><br />
                    </Box>
                </Grid>
            </Grid>
            {/* <Button style={{textAlign:"right", backgroundColor:"red"}}>Connect Wallet</Button> */}
        </Box>
        </>

    )
}

export default FrantPage
