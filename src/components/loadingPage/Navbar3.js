import { Box, Button, makeStyles, TextField, Toolbar, Typography } from '@material-ui/core'
import React from 'react'
import { useHistory } from 'react-router-dom'
import Modal from '@material-ui/core/Modal';
import { useFormik } from 'formik';


// function rand() {
//     return Math.round(Math.random() * 20) - 10;
//   }
  
//   function getModalStyle() {
//     const top = 50 + rand();
//     const left = 50 + rand();
  
//     return {
//       top: `${top}%`,
//       left: `${left}%`,
//       transform: `translate(-${top}%, -${left}%)`,
//     };
//   }




const useStyles = makeStyles((theme) => ({
    toolBar: {
        // width: "100%",
        height: 110,
        // left:-10,
        backgroundColor: "#0F212E",
        justifyContent:"Space-between",
        cursor:"pointer",
       
    },
    

    paper: {
        position: 'absolute',
        width: 500,
        height:"300px",
        backgroundColor: theme.palette.background.paper,
        backgroundColor:"#0F212E",
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
      },
   


    logo:{
        width: 75,
        marginLeft: 60,
        [theme.breakpoints.down("md")]: {
          width: 65,
        },
        [theme.breakpoints.down("sm")]: {
          width: 55,
        }
    },
    logoText:{
        fontSize: 55,
    color: "white",
    [theme.breakpoints.down("md")]: {
      fontSize: "40px",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "28px",
    }
    },
    navbox: {
        display: "flex",
        gap:"20px"
    },
    navright:{
        display:"flex",
        alignItems:"center",
        position:"absolute",
        right:"80px",
        textAlign:"right",
        paddingRight:10,
        gap:"30px",
        fontSize:"30px",
        [theme.breakpoints.down("md")]:{
            gap: "20px", 
            right: "40px",
          },
          [theme.breakpoints.down("sm")]:{
            right: "20px",
            gap: "15px",
          } 
             
    },
    navItem:{
        marginRight:"40px",
        fontSize: 40,
    color: "white",
    alignItems: "center",
    display: "flex",   
    [theme.breakpoints.down("md")]: {
      marginRight: "30px",
      fontSize: "34px",      
      marginRight: "10px",
    },
    [theme.breakpoints.down("sm")]: {
      marginRight: "20px",
      fontSize: "25px",
      gap: "2px",
      marginRight: "0px",
    }
    },
    btnBox:{
        backgroundColor:"#E59446",
        color:"white",
        fontWeight:500,
        height:"60px",
    width:"230px",
    fontSize: 20,
    borderRadius: 10,
    [theme.breakpoints.down("md")]: {
      fontSize: "17px",
      height:"50px",
      width:"200px",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "15px",
      height:"40px",
      width:"180px",
    }
    },
    TextField:{
        width:"100%",
        borderColor:"#E59446",
        marginTop:"20px",
    },
    HeadingText:{
        color:"white",
        fontSize:"30px",
        textAlign:"center",
        fontWeight:"500",
        // marginBottom:"20px"
    },
    SubmitButton:{
        fontSize:"21px",
        color:"white",
        backgroundColor:"#E59446",
        width:"200px",
        height:"60px",
        margin:"60px 0px 0px 140px"
    }
}))

export default function Navbar  () {
  const classes = useStyles()


//   const initialValues ={
//     ConnectWallet: "",
//   };

//   const {values,errors, touched, handleChange, handleSubmit} = useFormik({
//     initialValues: initialValues,
//     onSubmit: (values) => {
//       console.log(values);
//     }
//   })
//   console.log(errors)




    // const  history = useHistory();

//     const [modalStyle] = React.useState(getModalStyle);
//     const [open, setOpen] = React.useState(false);

//   const handleOpen = () => {
//     setOpen(true);
//   };

//   const handleClose = () => {
//     setOpen(false);
//   };



    // const body = (
    //     <div style={modalStyle}
    //     // onSubmit={handleSubmit}
    //      className={classes.paper}>
    //       <h2 id="simple-modal-title" className={classes.HeadingText}>Request For Wallet</h2>
    //       <TextField variant='outlined'
    //       name='ConnectWallet' 
    //       value={values.ConnectWallet}
    //       onChange={handleChange}
    //       className={classes.TextField}>
    //         {/* Duis mollis, est non commodo luctus, nisi erat porttitor ligula. */}
    //       </TextField>
    //       <Button className={classes.SubmitButton}
    //       href='/ConnectWallet'
    //        >Submit</Button>
    //       {/* <Navbar /> */}
    //       {/* {errors.ConnectWallet && touched.ConnectWallet ? (<p className={classes.errorMsgs}>{errors.ConnectWallet}</p>) : null} */}
    //     </div>
    //   );


    return (
        <Box className='mainbox'>
            <Toolbar className={classes.toolBar}>
                <Box className={classes.navbox}>
                   
                    <img className={classes.logo} src='Image/logo1.png' />
                    <Typography className={classes.logoText} variant='h5'>Logo</Typography>
                   
                    <Box className={classes.navright}>
                        <Typography className={classes.navItem}>Home</Typography>
                        <Typography className={classes.navItem}>Pricing</Typography>
                        <Typography className={classes.navItem}>About</Typography>
                        <Button className={classes.btnBox}
                        // onClick={handleOpen}
                        // onClick={() => history.push('/loadingPage/ConnectWallet')}
                        >Connect Wallet</Button>

{/* <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal> */}

                    </Box>
                </Box>
            </Toolbar>
        </Box>
    )
}