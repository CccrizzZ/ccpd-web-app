import { useState } from "react";
import { Button,Checkbox } from "@nextui-org/react";
import { Link } from "wouter"
import "./Return.css"

const Return = () => {
  const ReturnPageUrl = 'https://beavery.ca/auction-house-delivery'
  const [agreeTerms, setAgreeTerms] = useState<boolean>(false);
  const [showCheckboxError, setShowCheckboxError] = useState<boolean>(false);

  

  const handleButtonClick = () => {
    if (agreeTerms) {
      window.open(ReturnPageUrl);
    } else {
      setShowCheckboxError(true); // Show the error message when the button is clicked
    }
  };

  return (
    <div className="container-Return" >
      <div className="policy-Return child">
        <h1 className="H1-Return H1-pg">Return Policy</h1>
        <p // add return policy
        >巴拉巴拉</p>  
        <p // add return policy
        >巴拉巴拉</p>  
        <p // add return policy
        >巴拉巴拉</p>  
        <p // add return policy
        >巴拉巴拉</p>  
        <p // add return policy
        >巴拉巴拉</p>  
        <p // add return policy
        >巴拉巴拉</p>  
        <br />
      </div>
      <div className="policy-Return child">
      <div className='checkbox-Return '> 
            <Checkbox   defaultSelected={false}
              onChange={(e) => {
              setAgreeTerms(e.target.checked);
              setShowCheckboxError(false); // 用户勾选时隐藏提示
              }}
            ><p>I have read and agree all the content above, including the <Link href='/'// add link here
            >privacy policy</Link>and the<Link href='/'// add link here
            >Terms and Conditions</Link><sup className="required-field">*</sup></p></Checkbox>
            </div>
            {showCheckboxError && (<p className="required-field">Please agree to the terms and conditions before Return.</p>)}
            </div>
      <div className="Button-Return ">
        <Button
          radius="full"
          className="bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg Button-Return-Child"
          onClick={handleButtonClick}
        >
          <p className="Button-Return-Child-Win Button-Return-Child">Request a Return</p>
          <p className="Button-Return-Child-Mob Button-Return-Child">Return</p>
        </Button>
      </div>
    </div>
  )
}

export default Return
