import * as Yup from 'yup';

export const singUpSchemas = ({
    ConnectWallet: Yup.string().matches(/^(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?$/).required("please enter link"),
})