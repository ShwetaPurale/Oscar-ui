import {
  Box, Button,
  Card, Divider, Grid,
  makeStyles,
  MenuItem,
  Modal,
  Select, TextField, Typography
}
  from '@material-ui/core'
import { ArrowForward }
  from '@mui/icons-material'
import React from 'react'
import Navbar3 from './Navbar3'



function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}




// const style = {
//   position: 'absolute',
//   top: '50%',
//   left: '50%',
//   transform: 'translate(-50%, -50%)',
//   width: 400,
//   bgcolor: 'background.paper',
//   border: '2px solid #000',
//   boxShadow: 24,
//   p: 4,
// };


const useStyle = makeStyles((theme) => ({
  MainBox: {
    height: "100%",
    backgroundColor: "#0F212E",
    padding: "80px 150px 0px 150px",
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
    paddingLeft: "10px",
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
    width: "360px",
    height: "250px",
    backgroundColor: "#213743",
    borderRadius: "12px",
    padding: "20px 15px 15px 15px"
  },
  FirstCardDiv: {
    display: "flex",
    gap: "7px",
    color: "white",

  },
  AnimalImage: {
    width: "30px",
    height: "32px"
  },
  AnimalImageText: {
    fontSize: "18px",
    marginTop: "5px",
    marginLeft: "auto",
  },
  SecondLeftGridMain: {
    display: "flex",
    textAlign: "center",
    color: "white",

    paddingTop: "25px"
  },
  SecondLeftGridText: {
    fontSize: "22px",
    letterSpacing: "1.2px",
  },
  ButtonGridMain: {
    paddingTop: "20px",
    display: "flex"
  },
  FirstButtonGrid: {
    color: "white",
    backgroundColor: "#811793",
    width: "165px",
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
    width: "165px",
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
  // LeftGridSelect: {
  //  position: "absolute",
  //  backgroundColor: "rgba(0, 0, 0, 0.3)",
  //     /* stretch to screen edges */

  // }
  backDrop: {
    backdropFilter: "blur(3px)",
    backgroundColor: 'rgba(0,0,30,0.4)'
  },

  paper: {
    position: 'absolute',
    width: 500,
    height: "800px",
    // backgroundColor: theme.palette.background.paper,
    backgroundColor: "#0F212E",
    // border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 6, 3),
  },
  HeadingText: {
    color: "white",
    textAlign: "center",
    fontSize: "26px",
    fontWeight: "400"
  },
  TextFieldDiv: {
    color: "white",
    marginTop:"20px",
  },

  TextFieldDivider: {
    // color: "#AAAAAA",
    marginTop:"20px",
    height:"4px",
  },

  TextFieldText: {
    fontSize: "21px",
  },
  FieldInput: {
    width: "100%",
    backgroundColor: "#213743",
    borderRadius: "7px",
    height: "35px",
    color: "white",
    // marginLeft:"10px",
    fontSize: "18px",
    border: "none",    
  },
  ButtonGrid:{
    paddingTop:"30px",
    display:"flex",
    gap:"47px",
    // width:"80px"
  },
  ButtonTrade:{
    backgroundColor:"#E59446",
    color:"white",
    // width:"80px",
    fontSize:"18px",
    textTransform:"capitalize",
    
  },
  ButtonCheck:{
    backgroundColor:"#811793",
    color:"white",
    // width:"60px",
    fontSize:"18px",
    textTransform:"capitalize",
    
  },
  ButtonClose:{
    backgroundColor:"#213743",
    color:"white",
    // width:"60px",
    fontSize:"18px",
    textTransform:"capitalize",
    
  },
  ButtonPercent:{
    backgroundColor:"#A8C2AD",
    color:"white",
    // width:"60px",
    fontSize:"18px",
    textTransform:"capitalize",
    
  },
}))

const CrossExchange = () => {
  // const [open, setOpen] = React.useState(false);
  // const handleOpen = () => setOpen(true);
  // const handleClose = () => setOpen(false);
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
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };




  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const body = (
    <>
    <div style={modalStyle}
      className={classes.paper}>
      <h2 id="simple-modal-title" className={classes.HeadingText}>Cross Exchange Flash Loan Swap</h2>
      <div className={classes.TextFieldDiv}>
        <Typography className={classes.TextFieldText}>From Factory (PanckakeSwap v2):</Typography>
        <input variant='outlined'
          name='ConnectWallet'
          className={classes.FieldInput} >
        </input>
      </div>

      <div className={classes.TextFieldDiv}>
        <Typography className={classes.TextFieldText}>To Factory (ApeSwap V2):</Typography>
        <input variant='outlined'
          name='ConnectWallet'
          className={classes.FieldInput} >
        </input>
      </div>

      <div className={classes.TextFieldDiv}>
        <Typography className={classes.TextFieldText}>From Router (ApeSwap V2):</Typography>
        <input variant='outlined'
          name='ConnectWallet'
          className={classes.FieldInput} >
        </input>
      </div>

      <div className={classes.TextFieldDiv}>
        <Typography className={classes.TextFieldText}>To Router (ApeSwap V2):</Typography>
        <input variant='outlined'
          name='ConnectWallet'
          className={classes.FieldInput} >
        </input>
      </div>

      <div className={classes.TextFieldDiv}>
        <Typography className={classes.TextFieldText}>Token A (WBNB):</Typography>
        <input variant='outlined'
          name='ConnectWallet'
          className={classes.FieldInput} >
        </input>
      </div>

      <div className={classes.TextFieldDiv}>
        <Typography className={classes.TextFieldText}>Token B (NAUT):</Typography>
        <input variant='outlined'
          name='ConnectWallet'
          className={classes.FieldInput} >
        </input>
      </div>

      <div className={classes.TextFieldDiv}>
        <Typography className={classes.TextFieldText}>Amount Input (Input USD Value)</Typography>
        <input variant='outlined'
          name='ConnectWallet'
          className={classes.FieldInput} >
        </input>
      </div>

      <div className={classes.TextFieldDivider}>
      <Divider style={{ width: "100%", height: "50%", backgroundColor: "#AAAAAA" }} />     
      </div>
      <Grid className={classes.ButtonGrid}>
   <div className={classes.ButtonGridBox}>
    <Button className={classes.ButtonTrade} style={{width:"90px", height:"40px"}}>Trade</Button>
   </div>

    <div className={classes.ButtonGridBox}>
    <Button className={classes.ButtonCheck} style={{width:"90px", height:"40px"}}>Check</Button>
    </div>

    <div className={classes.ButtonGridBox}>
    <Button className={classes.ButtonClose} style={{width:"90px", height:"40px"}}>Close</Button>
    </div>

    <div className={classes.ButtonGridBox}>
    <Button className={classes.ButtonPercent} style={{width:"90px", height:"40px"}}>%</Button>
    </div>
    </Grid>
     
    </div>
   
     </>
  );




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
                // onClick={handleOpen}

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
            <div className={classes.FirstCardDiv}>
              <img src='Image/RabitImg.png' alt='' className={classes.AnimalImage} />
              <ArrowForward />
              <img src='Image/MonkeyImg.png' alt='' className={classes.AnimalImage} />
              <Typography className={classes.AnimalImageText} >2022-7-8 at 13:36:41 UTC</Typography>
            </div>

            <Grid xs={12} className={classes.SecondLeftGridMain}>
              <Grid xs={6} className={classes.SecondLeftGrid}>
                <Typography className={classes.SecondLeftGridText}>WBNB</Typography>
              </Grid>
              <Grid xs={6} className={classes.SecondRightGrid}>
                <Typography className={classes.SecondLeftGridText}>ATA</Typography>
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
              <Button className={classes.SecondButtonGrid}
                onClick={handleOpen}
              >Execute</Button>

              <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
              >
                {body}
              </Modal>

            </Grid>

          </Card>

          <Card className={classes.FirstGridCard}>
            <div className={classes.FirstCardDiv}>
              <img src='Image/RabitImg.png' alt='' className={classes.AnimalImage} />
              <ArrowForward />
              <img src='Image/MonkeyImg.png' alt='' className={classes.AnimalImage} />
              <Typography className={classes.AnimalImageText} >2022-7-8 at 13:36:41 UTC</Typography>
            </div>

            <Grid xs={12} className={classes.SecondLeftGridMain}>
              <Grid xs={6} className={classes.SecondLeftGrid}>
                <Typography className={classes.SecondLeftGridText}>WBNB</Typography>
              </Grid>
              <Grid xs={6} className={classes.SecondRightGrid}>
                <Typography className={classes.SecondLeftGridText}>ATA</Typography>
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
          </Card>

          <Card className={classes.FirstGridCard}>
            <div className={classes.FirstCardDiv}>
              <img src='Image/RabitImg.png' alt='' className={classes.AnimalImage} />
              <ArrowForward />
              <img src='Image/MonkeyImg.png' alt='' className={classes.AnimalImage} />
              <Typography className={classes.AnimalImageText} >2022-7-8 at 13:36:41 UTC</Typography>
            </div>

            <Grid xs={12} className={classes.SecondLeftGridMain}>
              <Grid xs={6} className={classes.SecondLeftGrid}>
                <Typography className={classes.SecondLeftGridText}>WBNB</Typography>
              </Grid>
              <Grid xs={6} className={classes.SecondRightGrid}>
                <Typography className={classes.SecondLeftGridText}>ATA</Typography>
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

          </Card>

          <Card className={classes.FirstGridCard}>
            <div className={classes.FirstCardDiv}>
              <img src='Image/RabitImg.png' alt='' className={classes.AnimalImage} />
              <ArrowForward />
              <img src='Image/MonkeyImg.png' alt='' className={classes.AnimalImage} />
              <Typography className={classes.AnimalImageText} >2022-7-8 at 13:36:41 UTC</Typography>
            </div>

            <Grid xs={12} className={classes.SecondLeftGridMain}>
              <Grid xs={6} className={classes.SecondLeftGrid}>
                <Typography className={classes.SecondLeftGridText}>WBNB</Typography>
              </Grid>
              <Grid xs={6} className={classes.SecondRightGrid}>
                <Typography className={classes.SecondLeftGridText}>ATA</Typography>
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

          </Card>

        </Grid>

        <Grid xs={12} className={classes.SecondMainGrid}>
          <Card className={classes.FirstGridCard}>
            <div className={classes.FirstCardDiv}>
              <img src='Image/RabitImg.png' alt='' className={classes.AnimalImage} />
              <ArrowForward />
              <img src='Image/MonkeyImg.png' alt='' className={classes.AnimalImage} />
              <Typography className={classes.AnimalImageText} >2022-7-8 at 13:36:41 UTC</Typography>
            </div>

            <Grid xs={12} className={classes.SecondLeftGridMain}>
              <Grid xs={6} className={classes.SecondLeftGrid}>
                <Typography className={classes.SecondLeftGridText}>WBNB</Typography>
              </Grid>
              <Grid xs={6} className={classes.SecondRightGrid}>
                <Typography className={classes.SecondLeftGridText}>ATA</Typography>
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

          </Card>

          <Card className={classes.FirstGridCard}>
            <div className={classes.FirstCardDiv}>
              <img src='Image/RabitImg.png' alt='' className={classes.AnimalImage} />
              <ArrowForward />
              <img src='Image/MonkeyImg.png' alt='' className={classes.AnimalImage} />
              <Typography className={classes.AnimalImageText} >2022-7-8 at 13:36:41 UTC</Typography>
            </div>

            <Grid xs={12} className={classes.SecondLeftGridMain}>
              <Grid xs={6} className={classes.SecondLeftGrid}>
                <Typography className={classes.SecondLeftGridText}>WBNB</Typography>
              </Grid>
              <Grid xs={6} className={classes.SecondRightGrid}>
                <Typography className={classes.SecondLeftGridText}>ATA</Typography>
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
          </Card>

          <Card className={classes.FirstGridCard}>
            <div className={classes.FirstCardDiv}>
              <img src='Image/RabitImg.png' alt='' className={classes.AnimalImage} />
              <ArrowForward />
              <img src='Image/MonkeyImg.png' alt='' className={classes.AnimalImage} />
              <Typography className={classes.AnimalImageText} >2022-7-8 at 13:36:41 UTC</Typography>
            </div>

            <Grid xs={12} className={classes.SecondLeftGridMain}>
              <Grid xs={6} className={classes.SecondLeftGrid}>
                <Typography className={classes.SecondLeftGridText}>WBNB</Typography>
              </Grid>
              <Grid xs={6} className={classes.SecondRightGrid}>
                <Typography className={classes.SecondLeftGridText}>ATA</Typography>
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

          </Card>

          <Card className={classes.FirstGridCard}>
            <div className={classes.FirstCardDiv}>
              <img src='Image/RabitImg.png' alt='' className={classes.AnimalImage} />
              <ArrowForward />
              <img src='Image/MonkeyImg.png' alt='' className={classes.AnimalImage} />
              <Typography className={classes.AnimalImageText} >2022-7-8 at 13:36:41 UTC</Typography>
            </div>

            <Grid xs={12} className={classes.SecondLeftGridMain}>
              <Grid xs={6} className={classes.SecondLeftGrid}>
                <Typography className={classes.SecondLeftGridText}>WBNB</Typography>
              </Grid>
              <Grid xs={6} className={classes.SecondRightGrid}>
                <Typography className={classes.SecondLeftGridText}>ATA</Typography>
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
          </Card>
        </Grid>

        <Grid xs={12} className={classes.SecondMainGrid}>
          <Card className={classes.FirstGridCard}>
            <div className={classes.FirstCardDiv}>
              <img src='Image/RabitImg.png' alt='' className={classes.AnimalImage} />
              <ArrowForward />
              <img src='Image/MonkeyImg.png' alt='' className={classes.AnimalImage} />
              <Typography className={classes.AnimalImageText} >2022-7-8 at 13:36:41 UTC</Typography>
            </div>

            <Grid xs={12} className={classes.SecondLeftGridMain}>
              <Grid xs={6} className={classes.SecondLeftGrid}>
                <Typography className={classes.SecondLeftGridText}>WBNB</Typography>
              </Grid>
              <Grid xs={6} className={classes.SecondRightGrid}>
                <Typography className={classes.SecondLeftGridText}>ATA</Typography>
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

          </Card>

          <Card className={classes.FirstGridCard}>
            <div className={classes.FirstCardDiv}>
              <img src='Image/RabitImg.png' alt='' className={classes.AnimalImage} />
              <ArrowForward />
              <img src='Image/MonkeyImg.png' alt='' className={classes.AnimalImage} />
              <Typography className={classes.AnimalImageText} >2022-7-8 at 13:36:41 UTC</Typography>
            </div>

            <Grid xs={12} className={classes.SecondLeftGridMain}>
              <Grid xs={6} className={classes.SecondLeftGrid}>
                <Typography className={classes.SecondLeftGridText}>WBNB</Typography>
              </Grid>
              <Grid xs={6} className={classes.SecondRightGrid}>
                <Typography className={classes.SecondLeftGridText}>ATA</Typography>
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
          </Card>

          <Card className={classes.FirstGridCard}>
            <div className={classes.FirstCardDiv}>
              <img src='Image/RabitImg.png' alt='' className={classes.AnimalImage} />
              <ArrowForward />
              <img src='Image/MonkeyImg.png' alt='' className={classes.AnimalImage} />
              <Typography className={classes.AnimalImageText} >2022-7-8 at 13:36:41 UTC</Typography>
            </div>

            <Grid xs={12} className={classes.SecondLeftGridMain}>
              <Grid xs={6} className={classes.SecondLeftGrid}>
                <Typography className={classes.SecondLeftGridText}>WBNB</Typography>
              </Grid>
              <Grid xs={6} className={classes.SecondRightGrid}>
                <Typography className={classes.SecondLeftGridText}>ATA</Typography>
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

          </Card>

          <Card className={classes.FirstGridCard}>
            <div className={classes.FirstCardDiv}>
              <img src='Image/RabitImg.png' alt='' className={classes.AnimalImage} />
              <ArrowForward />
              <img src='Image/MonkeyImg.png' alt='' className={classes.AnimalImage} />
              <Typography className={classes.AnimalImageText} >2022-7-8 at 13:36:41 UTC</Typography>
            </div>

            <Grid xs={12} className={classes.SecondLeftGridMain}>
              <Grid xs={6} className={classes.SecondLeftGrid}>
                <Typography className={classes.SecondLeftGridText}>WBNB</Typography>
              </Grid>
              <Grid xs={6} className={classes.SecondRightGrid}>
                <Typography className={classes.SecondLeftGridText}>ATA</Typography>
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
          </Card>
        </Grid>




        <Grid xs={6}>

        </Grid>
        <Grid xs={6}></Grid>

      </Box >

    </>
  )
}

export default CrossExchange
