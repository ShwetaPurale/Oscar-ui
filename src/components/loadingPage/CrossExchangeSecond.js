import {
    Box, Button,
    Card, Grid,
    makeStyles,
    MenuItem,
    Select, Typography
}
    from '@material-ui/core'
import { ArrowForward, Star }
    from '@mui/icons-material'
import React from 'react'
import Navbar3 from './Navbar3'

const useStyle = makeStyles((theme) => ({
    MainBox: {
        // height: "100%",
        backgroundColor: "#0F212E",
        padding: "80px 120px 100px 120px",
        // color:"white",
    },
    MainBoxGrid: {
        display: "flex",
        marginBottom: "50px"
    },
    MainBoxLeft: {
        display: "flex",
        gap: "12px",
    },
    MainBoxRight: {
        display: "flex",
    },
    LeftGrid: {
        backgroundColor: "white",
        width: "180px",
        paddingLeft: "10px"
    },
    LeftGridSelectMain: {
        marginLeft: "auto",
        display: "flex",
        gap: "10px"
    },
    LeftGridTwo: {
        backgroundColor: "white",
        // width: "180px",
        paddingLeft: "10px"
    },
    RightGrid: {
        backgroundColor: "white",
        // width: "180px",
        paddingLeft: "10px"
    },
    RightGridTwo: {
        backgroundColor: "white",
        // width: "180px",
        paddingLeft: "10px"
    },
    SecondMainGrid: {
        display: "flex",
        padding: "0px 0px 60px 0px",
        gap: "100px",

    },
    FirstGridCard: {
        width: "420px",
        height: "590px",
        backgroundColor: "#213743",
        borderRadius: "12px",
        padding: "20px 10px 15px 10px"
    },
    FirstCardDiv: {
        display: "flex",
        gap: "7px",
        color: "white",
        // textAlign: "center",
        marginBottom:"20px"

    },
    AnimalImage: {
        width: "30px",
        height: "32px"
    },
    AnimalImageText: {
        fontSize: "25px",
        marginTop: "5px",
        color: "white",
        textAlign: "center",
    },
    SecondLeftGridMain: {
        display: "flex",
        textAlign: "center",
        color: "white",
        lineHeight: "1px",
        paddingTop: "25px"
    },
    SecondLeftGridText: {
        fontSize: "18px",
        letterSpacing: "1.2px",
    },
    SecondLeftGridTextMain: {
        fontSize: "27px",
        letterSpacing: "1.2px",
    },
    ButtonGridMain: {
        paddingTop: "20px",
        display: "flex",
    },
    StarButtonGrid: {
        width: "100%",
        backgroundColor: "#0F212E",
        height: "55px",
        color: "white"
    },
    FirstButtonGrid: {
        color: "white",
        backgroundColor: "#811793",
        width: "194px",
        height: "50px",
        marginRight: "5px",
        marginBottom: "5px",
        marginLeft: "8px",
        fontSize: "18px",
        //   [theme.breakpoints.up("md")]:{
        //     width:"145px",
        //     marginRight:"3px",
        //   marginLeft:"5px",
        //   fontSize:"15px",
        //   },
        //   [theme.breakpoints.up("md")]:{
        //     width:"125px",
        //     marginRight:"1px",
        //   marginLeft:"3px",
        //   fontSize:"12px",
        //   },
    },

    SecondButtonGrid: {
        color: "white",
        backgroundColor: "#E59446",
        width: "194px",
        height: "50px",
        marginRight: "5px",
        marginBottom: "5px",
        marginLeft: "8px",
        fontSize: "18px",
    },
    SecondCalculatorGrid: {
        backgroundColor: "#E59446",
        // width:"150px",
        // height:"50px",  
    },
    AnimalText:{
        marginLeft:"auto",
        fontSize:"19px"
    },
    ThirdMainGrid:{
        display:"flex",
        padding: "40px 0px 60px 0px",
        gap: "100px",
    },
    ThirdGridCard:{
        // display:"flex",
        width: "420px",
        // height: "590px",
        backgroundColor: "#213743",
        borderRadius: "12px",
        padding: "20px 10px 15px 10px" 
    },
    AnimalImageTextPer: {
        fontSize: "25px",
        marginTop: "5px",
        color: "#2BAD1B",
        textAlign: "center",
    },

}))

const CrossExchange = () => {
    const classes = useStyle();

    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
    };

    const [list, setList] = React.useState('');

    const listHandleChange = (event) => {
        setList(event.target.value);
    };

    const [item, setItem] = React.useState('');

    const itemHandleChange = (event) => {
        setItem(event.target.value);
    };

    const [listItem, setListItem] = React.useState('');

    const listItemHandleChange = (event) => {
        setListItem(event.target.value);
    };

    return (
        <>
            <Navbar3 />
            <Box className={classes.MainBox}>
                <Grid xs={12} className={classes.MainBoxGrid}>

                    <Grid xs={6} className={classes.MainBoxLeft}>


                        <div className={classes.LeftGridSelect}>
                            <Select
                                variant='outlined'
                                value={age}
                                className={classes.LeftGrid}
                                onChange={handleChange}
                                displayEmpty
                            // inputProps={{ 'aria-label': 'Without label' }}
                            >
                                <MenuItem value="">
                                    <em>Cross Exchange</em>
                                </MenuItem>
                                <MenuItem value={10}><img src='Image/CardSelectImg.png' alt='' />Uniswap </MenuItem>
                                <MenuItem value={20}> <img src='Image/CardSelectImg.png' alt='' />Uniswap </MenuItem>
                                <MenuItem value={30}> <img src='Image/CardSelectImg.png' alt='' />Uniswap </MenuItem>
                            </Select>
                        </div>

                        <div className={classes.LeftGridSelect}>
                            <Select
                                variant='outlined'
                                value={list}
                                className={classes.LeftGridTwo}
                                onChange={listHandleChange}
                                displayEmpty
                            // inputProps={{ 'aria-label': 'Without label' }}
                            >
                                <MenuItem value="">
                                    <em>Tringal Exchange</em>
                                </MenuItem>
                                <MenuItem value={10}> <img src='Image/CardSelectImg.png' alt='' />Uniswap </MenuItem>
                                <MenuItem value={20}> <img src='Image/CardSelectImg.png' alt='' />Uniswap </MenuItem>
                                <MenuItem value={30}> <img src='Image/CardSelectImg.png' alt='' />Uniswap </MenuItem>
                            </Select>
                        </div>

                    </Grid>

                    <Grid xs={6} className={classes.MainBoxRight}>
                        <Box className={classes.LeftGridSelectMain}>
                            <div className={classes.RightGridSelect}>
                                <Select
                                    variant='outlined'
                                    value={item}
                                    className={classes.RightGrid}
                                    onChange={itemHandleChange}
                                    displayEmpty
                                // inputProps={{ 'aria-label': 'Without label' }}
                                >
                                    <MenuItem value="">
                                        <em>Buy</em>
                                    </MenuItem>
                                    <MenuItem value={10}> <img src='Image/CardSelectImg.png' alt='' />Uniswap </MenuItem>
                                    <MenuItem value={20}> <img src='Image/CardSelectImg.png' alt='' />Uniswap </MenuItem>
                                    <MenuItem value={30}> <img src='Image/CardSelectImg.png' alt='' />Uniswap </MenuItem>
                                </Select>
                            </div>

                            <div className={classes.RightGridSelect}>
                                <Select
                                    variant='outlined'
                                    value={listItem}
                                    className={classes.RightGridTwo}
                                    onChange={listItemHandleChange}
                                    displayEmpty
                                // inputProps={{ 'aria-label': 'Without label' }}
                                >
                                    {/* const body = ( */}
                                    <MenuItem value="">
                                        <em>Sell</em>
                                    </MenuItem>
                                    <MenuItem value={10}> <img src='Image/CardSelectImg.png' alt='' />Uniswap </MenuItem>
                                    <MenuItem value={20}> <img src='Image/CardSelectImg.png' alt='' />Uniswap </MenuItem>
                                    <MenuItem value={30}> <img src='Image/CardSelectImg.png' alt='' />Uniswap </MenuItem>
                                    {/* ) */}
                                </Select>
                            </div>

                        </Box>
                    </Grid>
                </Grid>

                <Grid xs={12} className={classes.SecondMainGrid}>
                    <Card className={classes.FirstGridCard}>
                        {/* <div className={classes.FirstCardDiv}>                             */}
                        <Typography className={classes.AnimalImageText} >No Arbitrage</Typography>
                        {/* </div>  */}

                        <Grid xs={12} className={classes.SecondLeftGridMain}>
                            <Grid xs={6} className={classes.SecondLeftGrid}>
                                <Typography className={classes.SecondLeftGridText}>FGD</Typography>
                                <p className={classes.SecondLeftGridPara}>
                                    $200 to $100,000 www.c</p>
                            </Grid>
                            <Grid xs={6} className={classes.SecondRightGrid}>
                                <Typography className={classes.SecondLeftGridText}>USDT</Typography>
                                <p className={classes.SecondLeftGridPara}>
                                    $200 to $100,000 www.c</p>
                            </Grid>
                        </Grid>

                        <Grid xs={12} className={classes.SecondLeftGridMain}>
                            <Grid xs={6} className={classes.SecondLeftGrid}>
                                <Typography className={classes.SecondLeftGridText}>USDT</Typography>
                                <p className={classes.SecondLeftGridPara}>
                                    $200 to $100,000 www.c</p>
                            </Grid>
                            <Grid xs={6} className={classes.SecondRightGrid}>
                                <Typography className={classes.SecondLeftGridText}>WBNB</Typography>
                                <p className={classes.SecondLeftGridPara}>
                                    $200 to $100,000 www.c</p>
                            </Grid>
                        </Grid>

                        <Grid xs={12} className={classes.SecondLeftGridMain}>
                            <Grid xs={6} className={classes.SecondLeftGrid}>
                                <Typography className={classes.SecondLeftGridText}>WBNB</Typography>
                                <p className={classes.SecondLeftGridPara}>
                                    $200 to $100,000 www.c</p>
                            </Grid>
                            <Grid xs={6} className={classes.SecondRightGrid}>
                                <Typography className={classes.SecondLeftGridText}>FGD</Typography>
                                <p className={classes.SecondLeftGridPara}>
                                    $200 to $100,000 www.c</p>
                            </Grid>
                        </Grid>

                        <Grid xs={12} className={classes.SecondLeftGridMain}>
                            <Grid xs={6} className={classes.SecondLeftGrid}>
                                <Typography className={classes.SecondLeftGridTextMain}>WBNB</Typography>

                            </Grid>
                            <Grid xs={6} className={classes.SecondRightGrid}>
                                <Typography className={classes.SecondLeftGridTextMain}>ATA</Typography>

                            </Grid>
                        </Grid>


                        <Grid xs={12} className={classes.ButtonGridMain}>
                            <Button className={classes.FirstButtonGrid}>0.035 USD</Button>
                            <Button className={classes.FirstButtonGrid}>1.954%</Button>
                        </Grid>

                        <Grid xs={12} className={classes.ButtonGridMain}>
                            <Button className={classes.SecondButtonGrid}>
                                <img src='Image/calculator.png' alt='' className={classes.SecondCalculatorGrid} />
                            </Button>
                            <Button className={classes.SecondButtonGrid}>Execute</Button>
                        </Grid>

                        <Grid xs={12} className={classes.ButtonGridMain}>
                            <Button className={classes.StarButtonGrid}><Star /></Button>
                        </Grid>
                    </Card>

                    <Card className={classes.FirstGridCard}>
                        {/* <div className={classes.FirstCardDiv}>                             */}
                        <Typography className={classes.AnimalImageText} >No Arbitrage</Typography>
                        {/* </div>  */}

                        <Grid xs={12} className={classes.SecondLeftGridMain}>
                            <Grid xs={6} className={classes.SecondLeftGrid}>
                                <Typography className={classes.SecondLeftGridText}>FGD</Typography>
                                <p className={classes.SecondLeftGridPara}>
                                    $200 to $100,000 www.c</p>
                            </Grid>
                            <Grid xs={6} className={classes.SecondRightGrid}>
                                <Typography className={classes.SecondLeftGridText}>USDT</Typography>
                                <p className={classes.SecondLeftGridPara}>
                                    $200 to $100,000 www.c</p>
                            </Grid>
                        </Grid>

                        <Grid xs={12} className={classes.SecondLeftGridMain}>
                            <Grid xs={6} className={classes.SecondLeftGrid}>
                                <Typography className={classes.SecondLeftGridText}>USDT</Typography>
                                <p className={classes.SecondLeftGridPara}>
                                    $200 to $100,000 www.c</p>
                            </Grid>
                            <Grid xs={6} className={classes.SecondRightGrid}>
                                <Typography className={classes.SecondLeftGridText}>WBNB</Typography>
                                <p className={classes.SecondLeftGridPara}>
                                    $200 to $100,000 www.c</p>
                            </Grid>
                        </Grid>

                        <Grid xs={12} className={classes.SecondLeftGridMain}>
                            <Grid xs={6} className={classes.SecondLeftGrid}>
                                <Typography className={classes.SecondLeftGridText}>WBNB</Typography>
                                <p className={classes.SecondLeftGridPara}>
                                    $200 to $100,000 www.c</p>
                            </Grid>
                            <Grid xs={6} className={classes.SecondRightGrid}>
                                <Typography className={classes.SecondLeftGridText}>FGD</Typography>
                                <p className={classes.SecondLeftGridPara}>
                                    $200 to $100,000 www.c</p>
                            </Grid>
                        </Grid>

                        <Grid xs={12} className={classes.SecondLeftGridMain}>
                            <Grid xs={6} className={classes.SecondLeftGrid}>
                                <Typography className={classes.SecondLeftGridTextMain}>WBNB</Typography>

                            </Grid>
                            <Grid xs={6} className={classes.SecondRightGrid}>
                                <Typography className={classes.SecondLeftGridTextMain}>ATA</Typography>

                            </Grid>
                        </Grid>


                        <Grid xs={12} className={classes.ButtonGridMain}>
                            <Button className={classes.FirstButtonGrid}>0.035 USD</Button>
                            <Button className={classes.FirstButtonGrid}>1.954%</Button>
                        </Grid>

                        <Grid xs={12} className={classes.ButtonGridMain}>
                            <Button className={classes.SecondButtonGrid}>
                                <img src='Image/calculator.png' alt='' className={classes.SecondCalculatorGrid} />
                            </Button>
                            <Button className={classes.SecondButtonGrid}>Execute</Button>
                        </Grid>

                        <Grid xs={12} className={classes.ButtonGridMain}>
                            <Button className={classes.StarButtonGrid}><Star /></Button>
                        </Grid>
                    </Card>

                    <Card className={classes.FirstGridCard}>
                        {/* <div className={classes.FirstCardDiv}>                             */}
                        <Typography className={classes.AnimalImageText} >No Arbitrage</Typography>
                        {/* </div>  */}

                        <Grid xs={12} className={classes.SecondLeftGridMain}>
                            <Grid xs={6} className={classes.SecondLeftGrid}>
                                <Typography className={classes.SecondLeftGridText}>FGD</Typography>
                                <p className={classes.SecondLeftGridPara}>
                                    $200 to $100,000 www.c</p>
                            </Grid>
                            <Grid xs={6} className={classes.SecondRightGrid}>
                                <Typography className={classes.SecondLeftGridText}>USDT</Typography>
                                <p className={classes.SecondLeftGridPara}>
                                    $200 to $100,000 www.c</p>
                            </Grid>
                        </Grid>

                        <Grid xs={12} className={classes.SecondLeftGridMain}>
                            <Grid xs={6} className={classes.SecondLeftGrid}>
                                <Typography className={classes.SecondLeftGridText}>USDT</Typography>
                                <p className={classes.SecondLeftGridPara}>
                                    $200 to $100,000 www.c</p>
                            </Grid>
                            <Grid xs={6} className={classes.SecondRightGrid}>
                                <Typography className={classes.SecondLeftGridText}>WBNB</Typography>
                                <p className={classes.SecondLeftGridPara}>
                                    $200 to $100,000 www.c</p>
                            </Grid>
                        </Grid>

                        <Grid xs={12} className={classes.SecondLeftGridMain}>
                            <Grid xs={6} className={classes.SecondLeftGrid}>
                                <Typography className={classes.SecondLeftGridText}>WBNB</Typography>
                                <p className={classes.SecondLeftGridPara}>
                                    $200 to $100,000 www.c</p>
                            </Grid>
                            <Grid xs={6} className={classes.SecondRightGrid}>
                                <Typography className={classes.SecondLeftGridText}>FGD</Typography>
                                <p className={classes.SecondLeftGridPara}>
                                    $200 to $100,000 www.c</p>
                            </Grid>
                        </Grid>

                        <Grid xs={12} className={classes.SecondLeftGridMain}>
                            <Grid xs={6} className={classes.SecondLeftGrid}>
                                <Typography className={classes.SecondLeftGridTextMain}>WBNB</Typography>

                            </Grid>
                            <Grid xs={6} className={classes.SecondRightGrid}>
                                <Typography className={classes.SecondLeftGridTextMain}>ATA</Typography>

                            </Grid>
                        </Grid>


                        <Grid xs={12} className={classes.ButtonGridMain}>
                            <Button className={classes.FirstButtonGrid}>0.035 USD</Button>
                            <Button className={classes.FirstButtonGrid}>1.954%</Button>
                        </Grid>

                        <Grid xs={12} className={classes.ButtonGridMain}>
                            <Button className={classes.SecondButtonGrid}>
                                <img src='Image/calculator.png' alt='' className={classes.SecondCalculatorGrid} />
                            </Button>
                            <Button className={classes.SecondButtonGrid}>Execute</Button>
                        </Grid>

                        <Grid xs={12} className={classes.ButtonGridMain}>
                            <Button className={classes.StarButtonGrid}><Star /></Button>
                        </Grid>
                    </Card>

                    <Card className={classes.FirstGridCard}>
                        {/* <div className={classes.FirstCardDiv}>                             */}
                        <Typography className={classes.AnimalImageText} >No Arbitrage</Typography>
                        {/* </div>  */}

                        <Grid xs={12} className={classes.SecondLeftGridMain}>
                            <Grid xs={6} className={classes.SecondLeftGrid}>
                                <Typography className={classes.SecondLeftGridText}>FGD</Typography>
                                <p className={classes.SecondLeftGridPara}>
                                    $200 to $100,000 www.c</p>
                            </Grid>
                            <Grid xs={6} className={classes.SecondRightGrid}>
                                <Typography className={classes.SecondLeftGridText}>USDT</Typography>
                                <p className={classes.SecondLeftGridPara}>
                                    $200 to $100,000 www.c</p>
                            </Grid>
                        </Grid>

                        <Grid xs={12} className={classes.SecondLeftGridMain}>
                            <Grid xs={6} className={classes.SecondLeftGrid}>
                                <Typography className={classes.SecondLeftGridText}>USDT</Typography>
                                <p className={classes.SecondLeftGridPara}>
                                    $200 to $100,000 www.c</p>
                            </Grid>
                            <Grid xs={6} className={classes.SecondRightGrid}>
                                <Typography className={classes.SecondLeftGridText}>WBNB</Typography>
                                <p className={classes.SecondLeftGridPara}>
                                    $200 to $100,000 www.c</p>
                            </Grid>
                        </Grid>

                        <Grid xs={12} className={classes.SecondLeftGridMain}>
                            <Grid xs={6} className={classes.SecondLeftGrid}>
                                <Typography className={classes.SecondLeftGridText}>WBNB</Typography>
                                <p className={classes.SecondLeftGridPara}>
                                    $200 to $100,000 www.c</p>
                            </Grid>
                            <Grid xs={6} className={classes.SecondRightGrid}>
                                <Typography className={classes.SecondLeftGridText}>FGD</Typography>
                                <p className={classes.SecondLeftGridPara}>
                                    $200 to $100,000 www.c</p>
                            </Grid>
                        </Grid>

                        <Grid xs={12} className={classes.SecondLeftGridMain}>
                            <Grid xs={6} className={classes.SecondLeftGrid}>
                                <Typography className={classes.SecondLeftGridTextMain}>WBNB</Typography>

                            </Grid>
                            <Grid xs={6} className={classes.SecondRightGrid}>
                                <Typography className={classes.SecondLeftGridTextMain}>ATA</Typography>

                            </Grid>
                        </Grid>


                        <Grid xs={12} className={classes.ButtonGridMain}>
                            <Button className={classes.FirstButtonGrid}>0.035 USD</Button>
                            <Button className={classes.FirstButtonGrid}>1.954%</Button>
                        </Grid>

                        <Grid xs={12} className={classes.ButtonGridMain}>
                            <Button className={classes.SecondButtonGrid}>
                                <img src='Image/calculator.png' alt='' className={classes.SecondCalculatorGrid} />
                            </Button>
                            <Button className={classes.SecondButtonGrid}>Execute</Button>
                        </Grid>

                        <Grid xs={12} className={classes.ButtonGridMain}>
                            <Button className={classes.StarButtonGrid}><Star /></Button>
                        </Grid>
                    </Card>
                </Grid>


                <Grid xs={12} className={classes.ThirdMainGrid}>
                    <Card className={classes.ThirdGridCard}>
                        <div className={classes.FirstCardDiv}>
                            <img src='Image/RabitImg.png' alt='' className={classes.AnimalImage} />
                            <ArrowForward />
                            <img src='Image/MonkeyImg.png' alt='' className={classes.AnimalImage} />
                            <Typography className={classes.AnimalText} >2022-7-8 at 13:36:41 UTC</Typography>
                        </div>

                        <Typography className={classes.AnimalImageText} >No Arbitrage</Typography>

                        <Grid xs={12} className={classes.SecondLeftGridMain}>
                            <Grid xs={6} className={classes.SecondLeftGrid}>
                                <Typography className={classes.SecondLeftGridText}>FGD</Typography>
                                <p className={classes.SecondLeftGridPara}>
                                    $200 to $100,000 www.c</p>
                            </Grid>
                            <Grid xs={6} className={classes.SecondRightGrid}>
                                <Typography className={classes.SecondLeftGridText}>USDT</Typography>
                                <p className={classes.SecondLeftGridPara}>
                                    $200 to $100,000 www.c</p>
                            </Grid>
                        </Grid>

                        <Grid xs={12} className={classes.SecondLeftGridMain}>
                            <Grid xs={6} className={classes.SecondLeftGrid}>
                                <Typography className={classes.SecondLeftGridText}>USDT</Typography>
                                <p className={classes.SecondLeftGridPara}>
                                    $200 to $100,000 www.c</p>
                            </Grid>
                            <Grid xs={6} className={classes.SecondRightGrid}>
                                <Typography className={classes.SecondLeftGridText}>WBNB</Typography>
                                <p className={classes.SecondLeftGridPara}>
                                    $200 to $100,000 www.c</p>
                            </Grid>
                        </Grid>

                        <Grid xs={12} className={classes.SecondLeftGridMain}>
                            <Grid xs={6} className={classes.SecondLeftGrid}>
                                <Typography className={classes.SecondLeftGridText}>WBNB</Typography>
                                <p className={classes.SecondLeftGridPara}>
                                    $200 to $100,000 www.c</p>
                            </Grid>
                            <Grid xs={6} className={classes.SecondRightGrid}>
                                <Typography className={classes.SecondLeftGridText}>FGD</Typography>
                                <p className={classes.SecondLeftGridPara}>
                                    $200 to $100,000 www.c</p>
                            </Grid>
                        </Grid>

                        <Grid xs={12} className={classes.SecondLeftGridMain}>
                            <Grid xs={6} className={classes.SecondLeftGrid}>
                                <Typography className={classes.SecondLeftGridTextMain}>WBNB</Typography>

                            </Grid>
                            <Grid xs={6} className={classes.SecondRightGrid}>
                                <Typography className={classes.SecondLeftGridTextMain}>ATA</Typography>

                            </Grid>
                        </Grid>


                        <Grid xs={12} className={classes.ButtonGridMain}>
                            <Button className={classes.FirstButtonGrid}>0.035 USD</Button>
                            <Button className={classes.FirstButtonGrid}>1.954%</Button>
                        </Grid>

                        <Grid xs={12} className={classes.ButtonGridMain}>
                            <Button className={classes.SecondButtonGrid}>
                                <img src='Image/calculator.png' alt='' className={classes.SecondCalculatorGrid} />
                            </Button>
                            <Button className={classes.SecondButtonGrid}>Execute</Button>
                        </Grid>

                        <Grid xs={12} className={classes.ButtonGridMain}>
                            <Button className={classes.StarButtonGrid}><Star /></Button>
                        </Grid>
                    </Card>

                    <Card className={classes.ThirdGridCard}>
                        <div className={classes.FirstCardDiv}>
                            <img src='Image/RabitImg.png' alt='' className={classes.AnimalImage} />
                            <ArrowForward />
                            <img src='Image/MonkeyImg.png' alt='' className={classes.AnimalImage} />
                            <Typography className={classes.AnimalText} >2022-7-8 at 13:36:41 UTC</Typography>
                        </div>

                        <Typography className={classes.AnimalImageTextPer} >Arb 0.49%</Typography>

                        <Grid xs={12} className={classes.SecondLeftGridMain}>
                            <Grid xs={6} className={classes.SecondLeftGrid}>
                                <Typography className={classes.SecondLeftGridText}>FGD</Typography>
                                <p className={classes.SecondLeftGridPara}>
                                    $200 to $100,000 www.c</p>
                            </Grid>
                            <Grid xs={6} className={classes.SecondRightGrid}>
                                <Typography className={classes.SecondLeftGridText}>USDT</Typography>
                                <p className={classes.SecondLeftGridPara}>
                                    $200 to $100,000 www.c</p>
                            </Grid>
                        </Grid>

                        <Grid xs={12} className={classes.SecondLeftGridMain}>
                            <Grid xs={6} className={classes.SecondLeftGrid}>
                                <Typography className={classes.SecondLeftGridText}>USDT</Typography>
                                <p className={classes.SecondLeftGridPara}>
                                    $200 to $100,000 www.c</p>
                            </Grid>
                            <Grid xs={6} className={classes.SecondRightGrid}>
                                <Typography className={classes.SecondLeftGridText}>WBNB</Typography>
                                <p className={classes.SecondLeftGridPara}>
                                    $200 to $100,000 www.c</p>
                            </Grid>
                        </Grid>

                        <Grid xs={12} className={classes.SecondLeftGridMain}>
                            <Grid xs={6} className={classes.SecondLeftGrid}>
                                <Typography className={classes.SecondLeftGridText}>WBNB</Typography>
                                <p className={classes.SecondLeftGridPara}>
                                    $200 to $100,000 www.c</p>
                            </Grid>
                            <Grid xs={6} className={classes.SecondRightGrid}>
                                <Typography className={classes.SecondLeftGridText}>FGD</Typography>
                                <p className={classes.SecondLeftGridPara}>
                                    $200 to $100,000 www.c</p>
                            </Grid>
                        </Grid>

                        <Grid xs={12} className={classes.SecondLeftGridMain}>
                            <Grid xs={6} className={classes.SecondLeftGrid}>
                                <Typography className={classes.SecondLeftGridTextMain}>WBNB</Typography>

                            </Grid>
                            <Grid xs={6} className={classes.SecondRightGrid}>
                                <Typography className={classes.SecondLeftGridTextMain}>ATA</Typography>

                            </Grid>
                        </Grid>


                        <Grid xs={12} className={classes.ButtonGridMain}>
                            <Button className={classes.FirstButtonGrid}>0.035 USD</Button>
                            <Button className={classes.FirstButtonGrid}>1.954%</Button>
                        </Grid>

                        <Grid xs={12} className={classes.ButtonGridMain}>
                            <Button className={classes.SecondButtonGrid}>
                                <img src='Image/calculator.png' alt='' className={classes.SecondCalculatorGrid} />
                            </Button>
                            <Button className={classes.SecondButtonGrid}>Execute</Button>
                        </Grid>

                        <Grid xs={12} className={classes.ButtonGridMain}>
                            <Button className={classes.StarButtonGrid}><Star /></Button>
                        </Grid>
                    </Card>

                    <Card className={classes.ThirdGridCard}>
                        <div className={classes.FirstCardDiv}>
                            <img src='Image/RabitImg.png' alt='' className={classes.AnimalImage} />
                            <ArrowForward />
                            <img src='Image/MonkeyImg.png' alt='' className={classes.AnimalImage} />
                            <Typography className={classes.AnimalText} >2022-7-8 at 13:36:41 UTC</Typography>
                        </div>

                        <Typography className={classes.AnimalImageText} >No Arbitrage</Typography>

                        <Grid xs={12} className={classes.SecondLeftGridMain}>
                            <Grid xs={6} className={classes.SecondLeftGrid}>
                                <Typography className={classes.SecondLeftGridText}>FGD</Typography>
                                <p className={classes.SecondLeftGridPara}>
                                    $200 to $100,000 www.c</p>
                            </Grid>
                            <Grid xs={6} className={classes.SecondRightGrid}>
                                <Typography className={classes.SecondLeftGridText}>USDT</Typography>
                                <p className={classes.SecondLeftGridPara}>
                                    $200 to $100,000 www.c</p>
                            </Grid>
                        </Grid>

                        <Grid xs={12} className={classes.SecondLeftGridMain}>
                            <Grid xs={6} className={classes.SecondLeftGrid}>
                                <Typography className={classes.SecondLeftGridText}>USDT</Typography>
                                <p className={classes.SecondLeftGridPara}>
                                    $200 to $100,000 www.c</p>
                            </Grid>
                            <Grid xs={6} className={classes.SecondRightGrid}>
                                <Typography className={classes.SecondLeftGridText}>WBNB</Typography>
                                <p className={classes.SecondLeftGridPara}>
                                    $200 to $100,000 www.c</p>
                            </Grid>
                        </Grid>

                        <Grid xs={12} className={classes.SecondLeftGridMain}>
                            <Grid xs={6} className={classes.SecondLeftGrid}>
                                <Typography className={classes.SecondLeftGridText}>WBNB</Typography>
                                <p className={classes.SecondLeftGridPara}>
                                    $200 to $100,000 www.c</p>
                            </Grid>
                            <Grid xs={6} className={classes.SecondRightGrid}>
                                <Typography className={classes.SecondLeftGridText}>FGD</Typography>
                                <p className={classes.SecondLeftGridPara}>
                                    $200 to $100,000 www.c</p>
                            </Grid>
                        </Grid>

                        <Grid xs={12} className={classes.SecondLeftGridMain}>
                            <Grid xs={6} className={classes.SecondLeftGrid}>
                                <Typography className={classes.SecondLeftGridTextMain}>WBNB</Typography>

                            </Grid>
                            <Grid xs={6} className={classes.SecondRightGrid}>
                                <Typography className={classes.SecondLeftGridTextMain}>ATA</Typography>

                            </Grid>
                        </Grid>


                        <Grid xs={12} className={classes.ButtonGridMain}>
                            <Button className={classes.FirstButtonGrid}>0.035 USD</Button>
                            <Button className={classes.FirstButtonGrid}>1.954%</Button>
                        </Grid>

                        <Grid xs={12} className={classes.ButtonGridMain}>
                            <Button className={classes.SecondButtonGrid}>
                                <img src='Image/calculator.png' alt='' className={classes.SecondCalculatorGrid} />
                            </Button>
                            <Button className={classes.SecondButtonGrid}>Execute</Button>
                        </Grid>

                        <Grid xs={12} className={classes.ButtonGridMain}>
                            <Button className={classes.StarButtonGrid}><Star /></Button>
                        </Grid>
                    </Card>

                    <Card className={classes.ThirdGridCard}>
                        <div className={classes.FirstCardDiv}>
                            <img src='Image/RabitImg.png' alt='' className={classes.AnimalImage} />
                            <ArrowForward />
                            <img src='Image/MonkeyImg.png' alt='' className={classes.AnimalImage} />
                            <Typography className={classes.AnimalText} >2022-7-8 at 13:36:41 UTC</Typography>
                        </div>

                        <Typography className={classes.AnimalImageText} >No Arbitrage</Typography>

                        <Grid xs={12} className={classes.SecondLeftGridMain}>
                            <Grid xs={6} className={classes.SecondLeftGrid}>
                                <Typography className={classes.SecondLeftGridText}>FGD</Typography>
                                <p className={classes.SecondLeftGridPara}>
                                    $200 to $100,000 www.c</p>
                            </Grid>
                            <Grid xs={6} className={classes.SecondRightGrid}>
                                <Typography className={classes.SecondLeftGridText}>USDT</Typography>
                                <p className={classes.SecondLeftGridPara}>
                                    $200 to $100,000 www.c</p>
                            </Grid>
                        </Grid>

                        <Grid xs={12} className={classes.SecondLeftGridMain}>
                            <Grid xs={6} className={classes.SecondLeftGrid}>
                                <Typography className={classes.SecondLeftGridText}>USDT</Typography>
                                <p className={classes.SecondLeftGridPara}>
                                    $200 to $100,000 www.c</p>
                            </Grid>
                            <Grid xs={6} className={classes.SecondRightGrid}>
                                <Typography className={classes.SecondLeftGridText}>WBNB</Typography>
                                <p className={classes.SecondLeftGridPara}>
                                    $200 to $100,000 www.c</p>
                            </Grid>
                        </Grid>

                        <Grid xs={12} className={classes.SecondLeftGridMain}>
                            <Grid xs={6} className={classes.SecondLeftGrid}>
                                <Typography className={classes.SecondLeftGridText}>WBNB</Typography>
                                <p className={classes.SecondLeftGridPara}>
                                    $200 to $100,000 www.c</p>
                            </Grid>
                            <Grid xs={6} className={classes.SecondRightGrid}>
                                <Typography className={classes.SecondLeftGridText}>FGD</Typography>
                                <p className={classes.SecondLeftGridPara}>
                                    $200 to $100,000 www.c</p>
                            </Grid>
                        </Grid>

                        <Grid xs={12} className={classes.SecondLeftGridMain}>
                            <Grid xs={6} className={classes.SecondLeftGrid}>
                                <Typography className={classes.SecondLeftGridTextMain}>WBNB</Typography>

                            </Grid>
                            <Grid xs={6} className={classes.SecondRightGrid}>
                                <Typography className={classes.SecondLeftGridTextMain}>ATA</Typography>

                            </Grid>
                        </Grid>


                        <Grid xs={12} className={classes.ButtonGridMain}>
                            <Button className={classes.FirstButtonGrid}>0.035 USD</Button>
                            <Button className={classes.FirstButtonGrid}>1.954%</Button>
                        </Grid>

                        <Grid xs={12} className={classes.ButtonGridMain}>
                            <Button className={classes.SecondButtonGrid}>
                                <img src='Image/calculator.png' alt='' className={classes.SecondCalculatorGrid} />
                            </Button>
                            <Button className={classes.SecondButtonGrid}>Execute</Button>
                        </Grid>

                        <Grid xs={12} className={classes.ButtonGridMain}>
                            <Button className={classes.StarButtonGrid}><Star /></Button>
                        </Grid>
                    </Card>
                </Grid>


                <Grid xs={12} className={classes.ThirdMainGrid}>
                    <Card className={classes.ThirdGridCard}>
                        <div className={classes.FirstCardDiv}>
                            <img src='Image/RabitImg.png' alt='' className={classes.AnimalImage} />
                            <ArrowForward />
                            <img src='Image/MonkeyImg.png' alt='' className={classes.AnimalImage} />
                            <Typography className={classes.AnimalText} >2022-7-8 at 13:36:41 UTC</Typography>
                        </div>

                        {/* <Typography className={classes.AnimalImageText} >No Arbitrage</Typography> */}

                        <Grid xs={12} className={classes.SecondLeftGridMain}>
                            <Grid xs={6} className={classes.SecondLeftGrid}>
                                <Typography className={classes.SecondLeftGridText}>FGD</Typography>
                                <p className={classes.SecondLeftGridPara}>
                                    $200 to $100,000 www.c</p>
                            </Grid>
                            <Grid xs={6} className={classes.SecondRightGrid}>
                                <Typography className={classes.SecondLeftGridText}>USDT</Typography>
                                <p className={classes.SecondLeftGridPara}>
                                    $200 to $100,000 www.c</p>
                            </Grid>
                        </Grid>

                        <Grid xs={12} className={classes.SecondLeftGridMain}>
                            <Grid xs={6} className={classes.SecondLeftGrid}>
                                <Typography className={classes.SecondLeftGridText}>USDT</Typography>
                                <p className={classes.SecondLeftGridPara}>
                                    $200 to $100,000 www.c</p>
                            </Grid>
                            <Grid xs={6} className={classes.SecondRightGrid}>
                                <Typography className={classes.SecondLeftGridText}>WBNB</Typography>
                                <p className={classes.SecondLeftGridPara}>
                                    $200 to $100,000 www.c</p>
                            </Grid>
                        </Grid>

                        <Grid xs={12} className={classes.SecondLeftGridMain}>
                            <Grid xs={6} className={classes.SecondLeftGrid}>
                                <Typography className={classes.SecondLeftGridText}>WBNB</Typography>
                                <p className={classes.SecondLeftGridPara}>
                                    $200 to $100,000 www.c</p>
                            </Grid>
                            <Grid xs={6} className={classes.SecondRightGrid}>
                                <Typography className={classes.SecondLeftGridText}>FGD</Typography>
                                <p className={classes.SecondLeftGridPara}>
                                    $200 to $100,000 www.c</p>
                            </Grid>
                        </Grid>

                        <Grid xs={12} className={classes.SecondLeftGridMain}>
                            <Grid xs={6} className={classes.SecondLeftGrid}>
                                <Typography className={classes.SecondLeftGridTextMain}>WBNB</Typography>

                            </Grid>
                            <Grid xs={6} className={classes.SecondRightGrid}>
                                <Typography className={classes.SecondLeftGridTextMain}>ATA</Typography>

                            </Grid>
                        </Grid>


                        <Grid xs={12} className={classes.ButtonGridMain}>
                            <Button className={classes.FirstButtonGrid}>0.035 USD</Button>
                            <Button className={classes.FirstButtonGrid}>1.954%</Button>
                        </Grid>

                        <Grid xs={12} className={classes.ButtonGridMain}>
                            <Button className={classes.SecondButtonGrid}>
                                <img src='Image/calculator.png' alt='' className={classes.SecondCalculatorGrid} />
                            </Button>
                            <Button className={classes.SecondButtonGrid}>Execute</Button>
                        </Grid>

                        <Grid xs={12} className={classes.ButtonGridMain}>
                            <Button className={classes.StarButtonGrid}><Star /></Button>
                        </Grid>
                    </Card>

                    <Card className={classes.ThirdGridCard}>
                        <div className={classes.FirstCardDiv}>
                            <img src='Image/RabitImg.png' alt='' className={classes.AnimalImage} />
                            <ArrowForward />
                            <img src='Image/MonkeyImg.png' alt='' className={classes.AnimalImage} />
                            <Typography className={classes.AnimalText} >2022-7-8 at 13:36:41 UTC</Typography>
                        </div>

                        {/* <Typography className={classes.AnimalImageText} >No Arbitrage</Typography> */}

                        <Grid xs={12} className={classes.SecondLeftGridMain}>
                            <Grid xs={6} className={classes.SecondLeftGrid}>
                                <Typography className={classes.SecondLeftGridText}>FGD</Typography>
                                <p className={classes.SecondLeftGridPara}>
                                    $200 to $100,000 www.c</p>
                            </Grid>
                            <Grid xs={6} className={classes.SecondRightGrid}>
                                <Typography className={classes.SecondLeftGridText}>USDT</Typography>
                                <p className={classes.SecondLeftGridPara}>
                                    $200 to $100,000 www.c</p>
                            </Grid>
                        </Grid>

                        <Grid xs={12} className={classes.SecondLeftGridMain}>
                            <Grid xs={6} className={classes.SecondLeftGrid}>
                                <Typography className={classes.SecondLeftGridText}>USDT</Typography>
                                <p className={classes.SecondLeftGridPara}>
                                    $200 to $100,000 www.c</p>
                            </Grid>
                            <Grid xs={6} className={classes.SecondRightGrid}>
                                <Typography className={classes.SecondLeftGridText}>WBNB</Typography>
                                <p className={classes.SecondLeftGridPara}>
                                    $200 to $100,000 www.c</p>
                            </Grid>
                        </Grid>

                        <Grid xs={12} className={classes.SecondLeftGridMain}>
                            <Grid xs={6} className={classes.SecondLeftGrid}>
                                <Typography className={classes.SecondLeftGridText}>WBNB</Typography>
                                <p className={classes.SecondLeftGridPara}>
                                    $200 to $100,000 www.c</p>
                            </Grid>
                            <Grid xs={6} className={classes.SecondRightGrid}>
                                <Typography className={classes.SecondLeftGridText}>FGD</Typography>
                                <p className={classes.SecondLeftGridPara}>
                                    $200 to $100,000 www.c</p>
                            </Grid>
                        </Grid>

                        <Grid xs={12} className={classes.SecondLeftGridMain}>
                            <Grid xs={6} className={classes.SecondLeftGrid}>
                                <Typography className={classes.SecondLeftGridTextMain}>WBNB</Typography>

                            </Grid>
                            <Grid xs={6} className={classes.SecondRightGrid}>
                                <Typography className={classes.SecondLeftGridTextMain}>ATA</Typography>

                            </Grid>
                        </Grid>


                        <Grid xs={12} className={classes.ButtonGridMain}>
                            <Button className={classes.FirstButtonGrid}>0.035 USD</Button>
                            <Button className={classes.FirstButtonGrid}>1.954%</Button>
                        </Grid>

                        <Grid xs={12} className={classes.ButtonGridMain}>
                            <Button className={classes.SecondButtonGrid}>
                                <img src='Image/calculator.png' alt='' className={classes.SecondCalculatorGrid} />
                            </Button>
                            <Button className={classes.SecondButtonGrid}>Execute</Button>
                        </Grid>

                        <Grid xs={12} className={classes.ButtonGridMain}>
                            <Button className={classes.StarButtonGrid}><Star /></Button>
                        </Grid>
                    </Card>

                    <Card className={classes.ThirdGridCard}>
                        <div className={classes.FirstCardDiv}>
                            <img src='Image/RabitImg.png' alt='' className={classes.AnimalImage} />
                            <ArrowForward />
                            <img src='Image/MonkeyImg.png' alt='' className={classes.AnimalImage} />
                            <Typography className={classes.AnimalText} >2022-7-8 at 13:36:41 UTC</Typography>
                        </div>

                        {/* <Typography className={classes.AnimalImageText} >No Arbitrage</Typography> */}

                        <Grid xs={12} className={classes.SecondLeftGridMain}>
                            <Grid xs={6} className={classes.SecondLeftGrid}>
                                <Typography className={classes.SecondLeftGridText}>FGD</Typography>
                                <p className={classes.SecondLeftGridPara}>
                                    $200 to $100,000 www.c</p>
                            </Grid>
                            <Grid xs={6} className={classes.SecondRightGrid}>
                                <Typography className={classes.SecondLeftGridText}>USDT</Typography>
                                <p className={classes.SecondLeftGridPara}>
                                    $200 to $100,000 www.c</p>
                            </Grid>
                        </Grid>

                        <Grid xs={12} className={classes.SecondLeftGridMain}>
                            <Grid xs={6} className={classes.SecondLeftGrid}>
                                <Typography className={classes.SecondLeftGridText}>USDT</Typography>
                                <p className={classes.SecondLeftGridPara}>
                                    $200 to $100,000 www.c</p>
                            </Grid>
                            <Grid xs={6} className={classes.SecondRightGrid}>
                                <Typography className={classes.SecondLeftGridText}>WBNB</Typography>
                                <p className={classes.SecondLeftGridPara}>
                                    $200 to $100,000 www.c</p>
                            </Grid>
                        </Grid>

                        <Grid xs={12} className={classes.SecondLeftGridMain}>
                            <Grid xs={6} className={classes.SecondLeftGrid}>
                                <Typography className={classes.SecondLeftGridText}>WBNB</Typography>
                                <p className={classes.SecondLeftGridPara}>
                                    $200 to $100,000 www.c</p>
                            </Grid>
                            <Grid xs={6} className={classes.SecondRightGrid}>
                                <Typography className={classes.SecondLeftGridText}>FGD</Typography>
                                <p className={classes.SecondLeftGridPara}>
                                    $200 to $100,000 www.c</p>
                            </Grid>
                        </Grid>

                        <Grid xs={12} className={classes.SecondLeftGridMain}>
                            <Grid xs={6} className={classes.SecondLeftGrid}>
                                <Typography className={classes.SecondLeftGridTextMain}>WBNB</Typography>

                            </Grid>
                            <Grid xs={6} className={classes.SecondRightGrid}>
                                <Typography className={classes.SecondLeftGridTextMain}>ATA</Typography>

                            </Grid>
                        </Grid>


                        <Grid xs={12} className={classes.ButtonGridMain}>
                            <Button className={classes.FirstButtonGrid}>0.035 USD</Button>
                            <Button className={classes.FirstButtonGrid}>1.954%</Button>
                        </Grid>

                        <Grid xs={12} className={classes.ButtonGridMain}>
                            <Button className={classes.SecondButtonGrid}>
                                <img src='Image/calculator.png' alt='' className={classes.SecondCalculatorGrid} />
                            </Button>
                            <Button className={classes.SecondButtonGrid}>Execute</Button>
                        </Grid>

                        <Grid xs={12} className={classes.ButtonGridMain}>
                            <Button className={classes.StarButtonGrid}><Star /></Button>
                        </Grid>
                    </Card>

                    <Card className={classes.ThirdGridCard}>
                        <div className={classes.FirstCardDiv}>
                            <img src='Image/RabitImg.png' alt='' className={classes.AnimalImage} />
                            <ArrowForward />
                            <img src='Image/MonkeyImg.png' alt='' className={classes.AnimalImage} />
                            <Typography className={classes.AnimalText} >2022-7-8 at 13:36:41 UTC</Typography>
                        </div>

                        {/* <Typography className={classes.AnimalImageText} >No Arbitrage</Typography> */}

                        <Grid xs={12} className={classes.SecondLeftGridMain}>
                            <Grid xs={6} className={classes.SecondLeftGrid}>
                                <Typography className={classes.SecondLeftGridText}>FGD</Typography>
                                <p className={classes.SecondLeftGridPara}>
                                    $200 to $100,000 www.c</p>
                            </Grid>
                            <Grid xs={6} className={classes.SecondRightGrid}>
                                <Typography className={classes.SecondLeftGridText}>USDT</Typography>
                                <p className={classes.SecondLeftGridPara}>
                                    $200 to $100,000 www.c</p>
                            </Grid>
                        </Grid>

                        <Grid xs={12} className={classes.SecondLeftGridMain}>
                            <Grid xs={6} className={classes.SecondLeftGrid}>
                                <Typography className={classes.SecondLeftGridText}>USDT</Typography>
                                <p className={classes.SecondLeftGridPara}>
                                    $200 to $100,000 www.c</p>
                            </Grid>
                            <Grid xs={6} className={classes.SecondRightGrid}>
                                <Typography className={classes.SecondLeftGridText}>WBNB</Typography>
                                <p className={classes.SecondLeftGridPara}>
                                    $200 to $100,000 www.c</p>
                            </Grid>
                        </Grid>

                        <Grid xs={12} className={classes.SecondLeftGridMain}>
                            <Grid xs={6} className={classes.SecondLeftGrid}>
                                <Typography className={classes.SecondLeftGridText}>WBNB</Typography>
                                <p className={classes.SecondLeftGridPara}>
                                    $200 to $100,000 www.c</p>
                            </Grid>
                            <Grid xs={6} className={classes.SecondRightGrid}>
                                <Typography className={classes.SecondLeftGridText}>FGD</Typography>
                                <p className={classes.SecondLeftGridPara}>
                                    $200 to $100,000 www.c</p>
                            </Grid>
                        </Grid>

                        <Grid xs={12} className={classes.SecondLeftGridMain}>
                            <Grid xs={6} className={classes.SecondLeftGrid}>
                                <Typography className={classes.SecondLeftGridTextMain}>WBNB</Typography>

                            </Grid>
                            <Grid xs={6} className={classes.SecondRightGrid}>
                                <Typography className={classes.SecondLeftGridTextMain}>ATA</Typography>

                            </Grid>
                        </Grid>


                        <Grid xs={12} className={classes.ButtonGridMain}>
                            <Button className={classes.FirstButtonGrid}>0.035 USD</Button>
                            <Button className={classes.FirstButtonGrid}>1.954%</Button>
                        </Grid>

                        <Grid xs={12} className={classes.ButtonGridMain}>
                            <Button className={classes.SecondButtonGrid}>
                                <img src='Image/calculator.png' alt='' className={classes.SecondCalculatorGrid} />
                            </Button>
                            <Button className={classes.SecondButtonGrid}>Execute</Button>
                        </Grid>

                        <Grid xs={12} className={classes.ButtonGridMain}>
                            <Button className={classes.StarButtonGrid}><Star /></Button>
                        </Grid>
                    </Card>

                </Grid>




               
            </Box >

        </>
    )
}

export default CrossExchange
