export const isValidEmpty = (stringUsername)  => {
    return (
        stringUsername.length > 0
    )
}
export const checkEmail=(text)=>{
    let reg =/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if(reg.test(text)===true)
    {
      return true;
    }
    else
    {
        return false;
    }
  }

export const checkPassNew=(password)=>{
    let passreg=/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    if(passreg.test(password)===true)
    {
      return true;
    }
    else{
        return false;
    }
   
  }