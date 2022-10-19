
import Vector from '../images1/Vector.png'
import { Link } from 'react-router-dom';
import {
    Box, Button, Paper,
    Table, TableBody, TableCell,
    TableContainer, TableHead, TableRow,
    Grid, makeStyles, MenuItem, Select,
    Typography, withStyles
} from '@material-ui/core'
import { Stack } from '@mui/system'
import React from 'react'
import Navbar2 from './Navbar2'
import { InputBase, styled } from '@mui/material'





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
    FirstBoxDiv: {
        marginBottom: "10px",
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
        width: "180px",
        paddingLeft: "10px",
        color:"white",
        fontSize:"18px"
    },
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
    createData("0x000000012", "ETH", "Uniswap", "$1,100", "Sushiswap", "$1,250", "04/07/22", "11:33", "$150 / 13.3%", "$123"),
    createData("0x000000012", "ETH", "Uniswap", "$1,100", "Sushiswap", "$1,250", "04/07/22", "11:33", "$150 / 13.3%", "$123"),
    createData("0x000000012", "ETH", "Uniswap", "$1,100", "Sushiswap", "$1,250", "04/07/22", "11:33", "$150 / 13.3%", "$123"),
    createData("0x000000012", "ETH", "Uniswap", "$1,100", "Sushiswap", "$1,250", "04/07/22", "11:33", "$150 / 13.3%", "$123"),
    createData("0x000000012", "ETH", "Uniswap", "$1,100", "Sushiswap", "$1,250", "04/07/22", "11:33", "$150 / 13.3%", "$123"),
    createData("0x000000012", "ETH", "Uniswap", "$1,100", "Sushiswap", "$1,250", "04/07/22", "11:33", "$150 / 13.3%", "$123"),

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
                            <span className={classes.LeftConteinText}>Transactions</span>
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
                        <Grid xs={12} className={classes.FirstBoxGrid}>
                            <div className={classes.FirstBoxDiv}>
                                <Typography className={classes.TransactionText}>Transactions  History</Typography>
                            </div>

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
                                    <em>Select Exchange</em>
                                </MenuItem>
                                <MenuItem value={10}><img src='Image/CardSelectImg.png' alt='' />Uniswap </MenuItem>
                                <MenuItem value={20}> <img src='Image/CardSelectImg.png' alt='' />Uniswap </MenuItem>
                                <MenuItem value={30}> <img src='Image/CardSelectImg.png' alt='' />Uniswap </MenuItem>
                            </Select>
                        </div>

                            <div className={classes.FirstBoxDiv}>
                                <Button className={classes.ToButton}>To</Button>
                            </div>

                            <div className={classes.FirstBoxDiv}>
                                <Button className={classes.ToButton}>From</Button>
                            </div>

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
                                    <em>Select Coin</em>
                                </MenuItem>
                                <MenuItem value={10}><img src='Image/CardSelectImg.png' alt='' />Uniswap </MenuItem>
                                <MenuItem value={20}> <img src='Image/CardSelectImg.png' alt='' />Uniswap </MenuItem>
                                <MenuItem value={30}> <img src='Image/CardSelectImg.png' alt='' />Uniswap </MenuItem>
                            </Select>
                        </div>

                            <div className={classes.FirstBoxDiv}>
                                <Button className={classes.SearchButton}>Search</Button>
                            </div>

                            <div className={classes.FirstBoxDiv}>
                                <Button className={classes.SearchButton}>Reset</Button>
                            </div>

                            <div className={classes.FirstBoxDiv}>
                                <Button className={classes.SearchButton}>Export</Button>
                            </div>

                        </Grid>

                        <TableContainer component={Paper}>
                            <Table className={classes.table} aria-label="customized table">
                                <TableHead>
                                    <TableRow>
                                        <StyledTableCell>Tx Hash
                                            <img src={Vector} alt='' style={{marginLeft:"10px"}} />                                        
                                                                                     
                                        </StyledTableCell>
                                        <StyledTableCell >
                                            {/* <Stack style={{ alignItems: "end" }} className={classes.uniswapimg}> */}                                                
                                                Coin Name
                                                <img src={Vector} alt='' style={{marginLeft:"10px"}}/>   
                                            {/* </Stack> */}
                                        </StyledTableCell>

                                        <StyledTableCell align="right">
                                            <Stack style={{ alignItems: "end" }} className={classes.uniswapimg}>
                                                {/* <img src={Shushiswap} alt=''
                                                    className={classes.HeaderImages2} /> */}
                                                Exchange A
                                            </Stack>
                                        </StyledTableCell>


                                        <StyledTableCell align="right">
                                            <Stack style={{ alignItems: "end" }} className={classes.uniswapimg}>
                                                Exchange B
                                            </Stack>
                                        </StyledTableCell>

                                        <StyledTableCell align="right">
                                            {/* <Stack style={{ alignItems: "end" }} className={classes.uniswapimg}> */}
                                                Date/Time
                                                <img src={Vector} alt='' style={{marginLeft:"10px"}} />   
                                            {/* </Stack> */}
                                        </StyledTableCell>

                                        <StyledTableCell align="right">
                                            {/* <Stack style={{ alignItems: "end" }} className={classes.uniswapimg}> */}
                                                Price Difference
                                                <img src={Vector} alt='' style={{marginLeft:"10px"}} />   
                                            {/* </Stack> */}
                                        </StyledTableCell>

                                        <StyledTableCell align="right">
                                            {/* <Stack style={{ alignItems: "end" }} className={classes.uniswapimg}> */}
                                                Profit
                                                <img src={Vector} alt='' style={{marginLeft:"10px"}} />   
                                            {/* </Stack> */}
                                        </StyledTableCell>

                                        {/* <StyledTableCell align="right">Protein&nbsp;(g)</StyledTableCell> */}
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

                                            <StyledTableCell align="right">
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

                    </Grid>
                </Grid>
            </Box>
        </>
    )
}

export default Transaction
