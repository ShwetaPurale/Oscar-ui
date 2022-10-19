import { ClassNames } from '@emotion/react'
import Vector from '../images1/Vector.png'
import {
    Box, Button, Paper,
    Table, TableBody, TableCell,
    TableContainer, TableHead, TableRow,
    Grid, makeStyles, MenuItem, Select,
    Typography, withStyles, Card, Switch, Divider
} from '@material-ui/core'
import { Stack } from '@mui/system'
import React from 'react'
import Navbar2 from './Navbar2'
import { InputBase, styled } from '@mui/material'
import { ArrowBackIos, ArrowForwardIos, ChevronRight, FirstPage, LastPage, MoreOutlined, NavigateBefore, SkipPreviousOutlined } from '@mui/icons-material'
import { Link } from 'react-router-dom'





const Styledselect = styled(Select)({
    backgroundColor: "#213743",
    color: "white",

})

const useStyle = makeStyles((theme) => ({
    ConnectWalletMainBox: {
        // height: "100vh",
        paddingBottom: "5px",
        backgroundColor: "#213743",
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
        // height: "100vh",
        paddingTop: "70px",
        paddingBottom: "70px",

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
        padding: "30px",
        // alignItems: "center",
    },
    OverviewText: {
        fontSize: "40px",
        marginBottom: "20px",
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
        [theme.breakpoints.down("md")]: {
            marginLeft: "200px",
            width: "500px",
            // height: "750px",
        },
        [theme.breakpoints.down("sm")]: {
            marginLeft: "50px",
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
    FirstBoxCard: {
        marginBottom: "30px",
        maxWidth:"300px",
        width: "300px",
        height: "150px",
        textAlign: "center",
        borderRadius: "10px",
        backgroundColor: "#0F212E",
        color: "white",
        paddingTop: "35px",
        border: "2px solid white",       
        justifyContent: "space-between",       
    },
    FirstBoxText: {
        fontSize: "25px",
    },
    FirstBoxPara: {
        fontSize: "45px",
        marginTop: "10px",
        color: "#FFFFFF80"
    },
    ExecutionsText: {
        fontSize: "30px",
        marginBottom: "20px",
    },
    FirstBox: {
        width: "100%",
        height: "70px",
        backgroundColor: "#1A2C38",
        borderRadius: "4px",
        display: "flex",
        textAlign: "center",
    },
    FirstBoxInearDiv: {
        display: "flex",
        textAlign: "center",
        padding: "20px 20px 10px 30px",
        [theme.breakpoints.down("md")]: {
            padding: "10px 10px 20px 20px",
        },
        [theme.breakpoints.down("sm")]: {
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
    ButtonDiv: {
        textAlign: "center",
        marginTop: "50px",
    },
    SAVEButton: {
        color: "white",
        backgroundColor: "#E59446",
        width: "170px",
        height: "50px",
        fontSize: "20px",
    },
    FirstBoxGrid: {
        display: "flex",
        // gap: "80px",
        justifyContent: "space-between",
        padding: "10px 0px 10px 0px",
    },
    TransactionText: {
        fontSize: "25px",
    },
    selectField: {
        width: "170px",
        color: "#FFFFFF",
    },
    ToButton: {
        backgroundColor: "#0F212E",
        color: "white",
        width: "80px",
        height: "50px",
        fontSize: "20px",
        textTransform: "capitalize",
    },
    SearchButton: {
        backgroundColor: "#E59446",
        color: "white",
        width: "110px",
        height: "50px",
        fontSize: "20px",
        textTransform: "capitalize",
    },
    LeftGrid: {
        // backgroundColor: "white",
        width: "70px",
        // paddingLeft: "10px",
        color: "white",
        fontSize: "18px",
        height: "40px",
    },
    PriceCheckerText: {
        fontSize: "30px",
        marginTop: "70px",
        marginBottom: "30px",
    },
    MoreTextGrid: {
        // textAlign:"right",
        display: "flex",
        marginLeft: "85%",
        // marginRight:"auto",
        marginTop: "20px",
        // position:"fixed",
    },
    MoreText: {
        fontSize: "20px",
        marginRight: "20px"
    },
    AccountMainGrid: {
        marginTop: "30px",
        display: "flex",
    },
    AccountText: {
        fontSize: "30px",
        marginTop: "20px",
    },
    RightAccountButton: {
        textAlign: "right",
        color: "white",
    },
    ProfitButton: {
        gap: "10",
        backgroundColor: "#E59446",
        width: "150px",
        height: "50px",
        color: "white",
        textTransform: "capitalize",
        fontSize: '16px',
    },
    FailedButton: {
        border: "2px solid #E59446",
        width: "150px",
        height: "50px",
        marginLeft: "30px",
        color: "white",
        textTransform: "capitalize",
        fontSize: '16px',
    },
    GraphMainGrid:{
        display:"flex",
    },
    GraphImgGrid:{
        // backgroundImage:"url(Image/Graph.png)",
        backgroundPosition:"cover",
        backgroundRepeat:"no-repeat",
        height:"600px",
        maxWidth:"100%",
        width:"100%",
        // width:"100vw",
        // marginRight:"50px",
        right:"0",
    },
    GraphImg:{
        maxWidth:"100%",
        width:"100%",
        height:"580px",
    },
    GraphProfitGrid:{
        marginTop:"150px",
    },
    GraphProfitText:{
        fontSize:"25px",
        lineHeight:"50px",
    }


}))

const StyledTableCell = withStyles((theme) => ({
    EstimatedProfileMain: {
        backgroundColor: "#213743",
    },
    head: {
        backgroundColor: "#811793",
        color: theme.palette.common.white,
        height: "40px",
        fontSize: "22px",
        border: "0",
    },
    body: {
        fontSize: "18px",
        color: "white",
        lineHeight: "1px",
        border: "0",
        // marginBottom:"500px"
    },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
    root: {
        '&:nth-of-type(odd)': {
            backgroundColor: "#213743",
            // color:"white",
        },
        '&:nth-of-type(even)': {
            backgroundColor: "#0F212E",
            // color:"white",
        },
    },
}))(TableRow);


const StyleTableCell = withStyles((theme) => ({
    EstimatedProfileMain: {
        backgroundColor: "#213743",
    },
    head: {
        backgroundColor: "#E59446",
        color: theme.palette.common.white,
        height: "40px",
        fontSize: "22px",
        border: "0",
    },
    body: {
        fontSize: "18px",
        color: "white",
        lineHeight: "1px",
        border: "0",
        // marginBottom:"500px"
    },
}))(TableCell);




function createData(name, Uniswap, Shushiswap, span, Shibaswap, p, shiswap, pan, baswap) {
    return { name, Uniswap, Shushiswap, span, Shibaswap, p, shiswap, pan, baswap };
}

const rows = [

    createData("0x000000012", "ETH", "Uniswap", "$1,100", "Sushiswap", "$1,250", "04/07/22", "11:33", "$150 / 13.3%", "$123"),
    createData("0x000000012", "ETH", "Uniswap", "$1,100", "Sushiswap", "$1,250", "04/07/22", "11:33", "$150 / 13.3%", "$123"),
    createData("0x000000012", "ETH", "Uniswap", "$1,100", "Sushiswap", "$1,250", "04/07/22", "11:33", "$150 / 13.3%", "$123"),
    createData("0x000000012", "ETH", "Uniswap", "$1,100", "Sushiswap", "$1,250", "04/07/22", "11:33", "$150 / 13.3%", "$123"),
    createData("0x000000012", "ETH", "Uniswap", "$1,100", "Sushiswap", "$1,250", "04/07/22", "11:33", "$150 / 13.3%", "$123"),
    createData("0x000000012", "ETH", "Uniswap", "$1,100", "Sushiswap", "$1,250", "04/07/22", "11:33", "$150 / 13.3%", "$123"),

];



function createSecondData(name, Uniswap, No, Shushiswap, Shibaswap, shiswap, baswap, swap) {
    // const classes = useStyle();
    return { name, Uniswap, No, Shushiswap, Shibaswap, shiswap, baswap, swap };
}

const lines = [

    createSecondData(<Switch style={{ color: '#00AFA3' }} />, <Button style={{ backgroundColor: "#FF05054F", color: "white" }}>Shiba inu</Button>, "2", "Cameron Williamson", "Dog Trainer", "sara.cruz@example.com ", "$(303) 555-0105", "12/4/17",),

    createSecondData(<Switch disabled style={{ color: '#00AFA3' }} />, <Button style={{ backgroundColor: "#FFAA054F", color: "white" }}>SUSHI</Button>, "2", "Esther Howard", "Marketing Coordinator", "willie.jennings@example.com ", "(308) 555-0121", "1/15/12",),
    createSecondData(<Switch disabled style={{ color: '#00AFA3' }} />, <Button style={{ backgroundColor: "#FFAA054F", color: "white" }}>1INCH</Button>, "3", "Cameron Williamson", "Dog Trainer", "sara.cruz@example.com ", "$(303) 555-0105", "12/4/17",),
    createSecondData(<Switch style={{ color: '#00AFA3' }} />, <Button style={{ backgroundColor: "#00AF274F", color: "white" }}>UNISWAP</Button>, "4", "Esther Howard", "Marketing Coordinator", "willie.jennings@example.com ", "(308) 555-0121", "1/15/12",),

];



const Transaction = () => {
    const classes = useStyle();
    const [age, setAge] = React.useState('');
    const handleChange = (event) => {
        setAge(event.target.value);
    };
    return (
        <>
            <Box className={classes.ConnectWalletMainBox}>
                <Navbar2 />
                <Grid xs={12} className={classes.ConnectWalletMainGrid}>
                    <Grid xs={2} className={classes.ConnectWalletMainGridLeft}>
                        <div className={classes.LeftContein}>
                            <img className={classes.LeftConteinImg} src='Image/Dashboard.png' />
                            <span className={classes.LeftConteinText}>Dashboard</span>
                        </div>

                        <div className={classes.LeftContein}>
                            <img className={classes.LeftConteinImg} src='Image/Setting.png' />
                            <Button style={{
                                fontSize: "22px",
                                color: "#A4A6B3",
                                cursor: "pointer",
                                textTransform: "capitalize",
                                fontfamily: "Sarif"
                            }}
                                ><Link to="/bot-setting" style={{color:"#A4A6B3"}}> Bot Setting</Link></Button>

                        </div>

                        <div className={classes.LeftContein}>
                            <img className={classes.LeftConteinImg} src='Image/Transactions.png' />
                            <Button style={{
                                fontSize: "22px",
                                color: "#A4A6B3",
                                cursor: "pointer",
                                textTransform: "capitalize",
                                fontfamily: "Sarif"
                            }}
                                ><Link to="/transaction" style={{color:"#A4A6B3"}}>Transaction</Link></Button>
                        </div>

                        <div className={classes.LeftContein}>
                            <img className={classes.LeftConteinImg} src='Image/Subscription.png' />
                            <Button style={{
                                fontSize: "22px",
                                color: "#A4A6B3",
                                cursor: "pointer",
                                textTransform: "capitalize",
                                fontfamily: "Sarif"
                            }}
                                ><Link to="/choose-plan" style={{color:"#A4A6B3"}}>Subscription</Link></Button>

                        </div>
                    </Grid>
                    <Grid xs={10} className={classes.ConnectWalletMainGridRight}>
                        <Typography className={classes.OverviewText}>Overview</Typography>
                        <Grid xs={12} className={classes.FirstBoxGrid}>
                            <Card className={classes.FirstBoxCard}>
                                <Typography className={classes.FirstBoxText}>Today’s Profit</Typography>
                                <p className={classes.FirstBoxPara}>$55.67</p>
                            </Card>

                            <Card className={classes.FirstBoxCard}>
                                <Typography className={classes.FirstBoxText}>N° of Successful Tx’s
                                </Typography>
                                <p className={classes.FirstBoxPara}>16</p>
                            </Card>

                            <Card className={classes.FirstBoxCard}>
                                <Typography className={classes.FirstBoxText}>Profit/Loss</Typography>
                                <p className={classes.FirstBoxPara}>+$5.67</p>
                            </Card>

                            <Card className={classes.FirstBoxCard}>
                                <Typography className={classes.FirstBoxText}>Opportunities Found
                                </Typography>
                                <p className={classes.FirstBoxPara}>64</p>
                            </Card>

                        </Grid>
                        <Typography className={classes.ExecutionsText}>Executions</Typography>


                        <TableContainer component={Paper}>
                            <Table className={classes.table} aria-label="customized table">
                                <TableHead>
                                    <TableRow>
                                        <StyledTableCell>
                                            Tx Hash
                                            {/* <img src={Vector} alt=''/> */}
                                        </StyledTableCell>
                                        <StyledTableCell >
                                            Coin Name
                                            {/* <img src={Vector} alt=''/> */}
                                        </StyledTableCell>

                                        <StyledTableCell align="right">
                                            <Stack style={{ alignItems: "end" }} className={classes.uniswapimg}>
                                                Exchange A
                                            </Stack>
                                        </StyledTableCell>
                                        <StyledTableCell align="right">
                                            <Stack style={{ alignItems: "end" }} className={classes.uniswapimg}>
                                                Exchange B
                                            </Stack>
                                        </StyledTableCell>

                                        <StyledTableCell align="right">
                                            Date/Time
                                        </StyledTableCell>

                                        <StyledTableCell align="right">
                                            Price Difference
                                        </StyledTableCell>

                                        <StyledTableCell align="right">
                                            Profit
                                        </StyledTableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {rows.map((row) => (
                                        <StyledTableRow key={row.name}>
                                            <StyledTableCell component="th" scope="row">
                                                <Grid className={classes.cellmain}>
                                                    <Grid xs={12} className={classes.ImageText}>
                                                        <Grid>
                                                            {/* <img src={ETHLogo} alt='' className={classes.ImageLogo} /> */}
                                                            <img className={classes.WalletImages} src={row.image}></img>
                                                        </Grid>
                                                        <Typography className={classes.WalletText}>{row.name}</Typography>
                                                        {/* <p className={classes.WalletText2}>{row.span}</p> */}
                                                    </Grid>
                                                </Grid>
                                                {row.Shushiswap.name}
                                            </StyledTableCell>



                                            <StyledTableCell align="left">

                                                {row.Uniswap}</StyledTableCell>
                                            <StyledTableCell align="right">{row.Shushiswap}
                                                <p className={classes.WalletText2}>{row.span}</p>
                                            </StyledTableCell>
                                            <StyledTableCell align="right">{row.Shibaswap}
                                                <p className={classes.WalletText2}>{row.span}</p>
                                            </StyledTableCell>
                                            <StyledTableCell align="right">{row.shiswap}
                                                <p className={classes.WalletText2}>{row.span}</p>
                                            </StyledTableCell>
                                            <StyledTableCell align="right">{row.baswap}</StyledTableCell>
                                            <StyledTableCell align="right">{row.baswap}</StyledTableCell>
                                            {/* <StyledTableCell align="right">{row.protein}</StyledTableCell> */}
                                        </StyledTableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                        <Grid xs={12} className={classes.MoreTextGrid}>
                            <Typography className={classes.MoreText}>More Executions</Typography>
                            <span><MoreOutlined /></span>
                        </Grid>
                        <Divider style={{ border: "0.5px solid #FFFFFF45", width: "80px", marginLeft: "93%" }} />

                        <Typography className={classes.PriceCheckerText}>Price Checker</Typography>

                        <TableContainer component={Paper}>
                            <Table className={classes.Secondtable} aria-label="customized table">
                                <TableHead>
                                    <TableRow>
                                        <StyleTableCell>
                                            Status

                                        </StyleTableCell>
                                        <StyleTableCell >
                                            Coin Name
                                        </StyleTableCell>

                                        <StyleTableCell >
                                            No.
                                        </StyleTableCell>

                                        <StyleTableCell align="right">
                                            <Stack style={{ alignItems: "end" }} className={classes.uniswapimg}>
                                                Exchange A
                                            </Stack>
                                        </StyleTableCell>
                                        <StyleTableCell align="right">
                                            <Stack style={{ alignItems: "end" }} className={classes.uniswapimg}>
                                                Exchange B
                                            </Stack>
                                        </StyleTableCell>

                                        <StyleTableCell align="right">
                                            Exchange C
                                        </StyleTableCell>

                                        <StyleTableCell align="right">
                                            Biggest Difference
                                        </StyleTableCell>

                                        <StyleTableCell align="right">
                                            Avg Gas Fee
                                        </StyleTableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {lines.map((row) => (
                                        <StyledTableRow key={row.name}>
                                            <StyleTableCell component="th" scope="row">
                                                <Grid className={classes.cellmain}>
                                                    <Grid xs={12} className={classes.ImageText}>
                                                        <Grid>
                                                            {/* <img src={ETHLogo} alt='' className={classes.ImageLogo} /> */}
                                                            <img className={classes.WalletImages} src={row.image}></img>
                                                        </Grid>
                                                        <Typography className={classes.WalletText}>{row.name}</Typography>
                                                        {/* <p className={classes.WalletText2}>{row.span}</p> */}
                                                    </Grid>
                                                </Grid>
                                                {row.Shushiswap.name}
                                            </StyleTableCell>



                                            <StyledTableCell align="left">

                                                {row.Uniswap}</StyledTableCell>
                                            <StyledTableCell align="left">{row.No}
                                            </StyledTableCell>
                                            <StyledTableCell align="right">{row.Shushiswap}
                                            </StyledTableCell>
                                            <StyledTableCell align="right">{row.Shibaswap}
                                            </StyledTableCell>
                                            <StyledTableCell align="right">{row.shiswap}
                                            </StyledTableCell>
                                            <StyledTableCell align="right">{row.baswap}</StyledTableCell>
                                            <StyledTableCell align="right">{row.swap}</StyledTableCell>
                                            {/* <StyledTableCell align="right">{row.baswap}</StyledTableCell> */}
                                            {/* <StyledTableCell align="right">{row.protein}</StyledTableCell> */}
                                        </StyledTableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                        <Grid className={classes.MoreTextGrid}>
                            <FirstPage />
                            <NavigateBefore />
                            <ChevronRight />
                            <LastPage />
                            <div className={classes.LeftGridSelect}>
                                <Select
                                    variant='filled'
                                    value={age}
                                    className={classes.LeftGrid}
                                    onChange={handleChange}
                                    displayEmpty
                                // inputProps={{ 'aria-label': 'Without label' }}
                                >
                                    <MenuItem value="">
                                        <em>1</em>
                                    </MenuItem>
                                    {/* <MenuItem value={10}> 1 </MenuItem> */}
                                    <MenuItem value={20}> 2 </MenuItem>
                                    <MenuItem value={30}> 3 </MenuItem>
                                    <MenuItem value={30}> 4 </MenuItem>
                                    <MenuItem value={30}> 5 </MenuItem>
                                    <MenuItem value={30}> 6 </MenuItem>
                                    <MenuItem value={30}> 7 </MenuItem>
                                    <MenuItem value={30}> 8 </MenuItem>
                                    <MenuItem value={30}> 9 </MenuItem>
                                    <MenuItem value={30}> 10 </MenuItem>
                                </Select>
                            </div>
                        </Grid>

                        <Grid xs={12} className={classes.MoreTextGrid}>                           
                            <Typography className={classes.MoreText}>More Executions</Typography>
                            <span><MoreOutlined /></span>
                        </Grid>
                        <Divider style={{ border: "0.5px solid #FFFFFF45", width: "80px", marginLeft: "93%" }} />


                        <Grid xs={12} className={classes.AccountMainGrid}>
                            <Grid xs={6} className={classes.LeftAccountText}>
                                <Typography className={classes.AccountText}>Account balance</Typography>
                            </Grid>
                            <Grid xs={6} className={classes.RightAccountButton}>
                                <Button className={classes.ProfitButton}>Profit / TX</Button>
                                <Button className={classes.FailedButton}>Failed reverted</Button>
                            </Grid>
                        </Grid>
                        <Grid xs={12} className={classes.GraphMainGrid}>
                            <Grid  className={classes.GraphProfitGrid}>
                                <Typography className={classes.GraphProfitText}>P</Typography>
                                <Typography className={classes.GraphProfitText}>R</Typography>
                                <Typography className={classes.GraphProfitText}>O</Typography>
                                <Typography className={classes.GraphProfitText}>F</Typography>
                                <Typography className={classes.GraphProfitText}>I</Typography>
                                <Typography className={classes.GraphProfitText}>T</Typography>
                            </Grid>
                            <Grid  className={classes.GraphImgGrid}>
                                <img src='Image/Graph.png' className={classes.GraphImg} />
                            </Grid>
                        </Grid>


                    </Grid>
                </Grid>
            </Box>
        </>
    )
}

export default Transaction
