import { Box, Button, Grid, makeStyles, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography, withStyles } from '@material-ui/core'
import { ArrowBackIos } from '@mui/icons-material';
import { fontSize } from '@mui/system';
import React from 'react'
import Navbar3 from './Navbar3';
import Uniswap1 from '../images1/Uniswap1.png'
import ETHLogo from '../images1/ETHLogo.png'
import USD from '../images1/USD.png'
import TetherUSD from '../images1/TetherUSD.png'
import Shushiswap from '../images1/Shushiswap.png'
import Shibaswap from '../images1/shibaswap.png'
import { Stack } from '@mui/material';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  EstimatedProfileMain: {
    backgroundColor: "#213743",
    height: "100%",
    color: "white",
    padding: "150px 250px 300px 250px",
  },
  BackText: {
    fontSize: "20px",
    marginBottom: "100px",
  },
  Back: {
    fontSize: "20px",
  },
  cell1: {
    display: "flex",
    justifyContent: "space-between"
  },
  ImageText: {
    display: "flex",
  },
  // ImageLogo:{
  //   marginRight:"20px",
  //   width:"60px"
  // },
  WalletImages: {
    marginRight: "20px",
    height: "50px",
  },
  WalletText: {
    fontSize: "20px"
  },
  WalletText2: {
    fontSize: "18px",
    marginTop: "35px",
    marginLeft: "-40px"
  },
  HeaderImages: {
    height: "100px",
    width: '100px',

  },
  HeaderImages2: {
    height: "90px",
    width: '90px',
    marginRight: "25px"

  },
  HeaderImages3: {
    height: "80px",
    width: '80px',
    marginRight: "15px"

  },
  uniswapimg: {
    // paddingLeft:"30px"

  }
}))


const StyledTableCell = withStyles((theme) => ({
  EstimatedProfileMain: {
    backgroundColor: "#213743",    
  },
  head: {
    backgroundColor: "#0F212E",
    color: theme.palette.common.white,
    height: "80px",
    fontSize: "25px",
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


function createData(image, name, span, Uniswap, Shushiswap, Shibaswap,) {
  return { image, name, span, Uniswap, Shushiswap, Shibaswap, };
}

const rows = [

  createData(ETHLogo, "ETH", "Ethereum", "1.2%", "2.4%", "1.89%"),
  createData(USD, 'USD', "usdt", "1.2%", "2.4%", "1.89%"),
  createData(TetherUSD, 'Tether', "usdt", "1.2%", "2.4%", "1.89%"),
  createData(ETHLogo, "ETH", "Ethereum", "1.2%", "2.4%", "1.89%"),
  createData(ETHLogo, "ETH", "Ethereum", "1.2%", "2.4%", "1.89%"),
  createData(ETHLogo, "ETH", "Ethereum", "1.2%", "2.4%", "1.89%"),
  createData(ETHLogo, "ETH", "Ethereum", "1.2%", "2.4%", "1.89%"),
];

const EstimatedProfile = () => {
  const classes = useStyles();
  return (
    <>
      <Navbar3 />
      <Box className={classes.EstimatedProfileMain}>
        <div className={classes.BackText}>
          <Button style={{ color:"white" }}
           href="/ConnectWallet">
            <Link  to="/connect-wallet" style={{color:"white"}}><ArrowBackIos /></Link>           

          {/* <ArrowBackIos   /> */}
          </Button>
          <span className={classes.Back}> Back</span>
        </div>
        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell>Currancy</StyledTableCell>

                <StyledTableCell >

                  <Stack style={{ alignItems: "end" }} className={classes.uniswapimg}>
                    <img src={Uniswap1} alt=''
                      className={classes.HeaderImages}

                    />
                    Uniswap
                  </Stack>
                </StyledTableCell>

                <StyledTableCell align="right">
                  <Stack style={{ alignItems: "end" }} className={classes.uniswapimg}>
                    <img src={Shushiswap} alt=''
                      className={classes.HeaderImages2} />
                    Shushiswap
                  </Stack>
                </StyledTableCell>


                <StyledTableCell align="right">
                  <Stack style={{ alignItems: "end" }} className={classes.uniswapimg}>
                    <img src={Shibaswap} alt=''
                      className={classes.HeaderImages3} />
                    Shibaswap
                  </Stack>
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
                        <p className={classes.WalletText2}>{row.span}</p>
                      </Grid>
                    </Grid>
                    {row.Shushiswap.name}
                  </StyledTableCell>



                  <StyledTableCell align="right">

                    {row.Uniswap}</StyledTableCell>
                  <StyledTableCell align="right">{row.Shushiswap}</StyledTableCell>
                  <StyledTableCell align="right">{row.Shibaswap}</StyledTableCell>
                  {/* <StyledTableCell align="right">{row.protein}</StyledTableCell> */}
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </>
  )
}

export default EstimatedProfile
