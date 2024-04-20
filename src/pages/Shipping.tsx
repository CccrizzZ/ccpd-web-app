import { useEffect, useState } from "react";
import { Button, Checkbox } from "@nextui-org/react";
import { Link } from "wouter"
import "./Shipping.css"

const Shipping = () => {
  const ShipPageUrl = 'https://beavery.ca/auction-house-delivery'
  const [agreeTerms, setAgreeTerms] = useState<boolean>(false);
  const [showCheckboxError, setShowCheckboxError] = useState<boolean>(false);

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const handleButtonClick = () => {
    if (agreeTerms) {
      window.open(ShipPageUrl);
    } else {
      setShowCheckboxError(true); // Show the error message when the button is clicked
    }
  };

  return (
    <div className="container-Ship" >
      <div className="policy-Ship child">
        <h1 className="H1-Ship H1-pg">Shipping Policy</h1>
        <p>
          1 Request shipping within 1 week <strong className="text-orange-500">***We will send the link after Auction closed. Shipping link will be send in your invoice email. Then you need to follow the link in your email request shipping service by yourself.***</strong> Shipping requests must be made within 1 week following the auction close. We can not promise that we can ship your items if you placed your shipping request after the 1 week timeline. For fastest shipping, we recommend to place your shipping request after Auction Closed.
        </p>
        <br />
        <p>
          2 Usually they pick up on every Wednesday and Saturday, but changes will be made during the holidays. They will send the shipping invoice after picke up, you may have to wait a day or two, they close on weekend. For shipping invoce, you need to double check your junk mail.
        </p>
        <br />
        <p>
          3 Registration ONLY with Beavery The only way we can ship items out is via Beavery. You must create an account with your own username and password. Once that is created, you are able to place shipping request. You can then view your shipping invoice, and status of the request.
        </p>
        <br />
        <p>
          4 Shipping Cost Your can find shipping cost through the following link: Beavery:
          <a className="Link-Ship" href="https://beavery.ca/auction-house-delivery"> https://beavery.ca/auction-house-delivery</a>
          &nbsp;Email:&nbsp;
          <a className="Link-Ship" href="mailto: support@beavery.ca">support@beavery.ca </a>
        </p>
        <br />
        <p>
          5 About Return:
        </p>
        <br />
        <p>
          5.1 If there is an issue with your shipped item, please notify us first and obtain our permission before returning it to us. Once we verify the problem, we will proceed with a refund, which will be processed within 3-5 working days after we receive the returned item. Please note that the refund does not include shipping fees, handling fees, and Buyer's premium charges. All items are sourced from major e-commerce platforms and most of them are returned Items. Therefore, we advise you consider the risks during transportation before opting for shipping.
        </p>
        <br />
        <p>
          5.2 Please ensure that the original packaging in which the item was sold is included when returning it. Returns without the original packaging will not be accepted.
        </p>
        <br />
        <p>
          5.3 Fill out the return authorization form completely and send it via email to <a className="Link-Ship" href="mailto:service@ccpowerdeals.ca"> service@ccpowerdeals.ca.</a> This step is crucial for us to understand why the item is being returned.
        </p>
        <br />
        <p>
          5.4 Returns must be initiated within 3 days of receiving the item to meet the warranty deadline.
        </p>
        <br />
        <p>
          5.5 All returns must be approved by a manager before processing.
        </p>
        <br />
      </div>
      <div className="policy-Ship child">
        <div className='checkbox-ship '>
          <Checkbox defaultSelected={false}
            onChange={(e) => {
              setAgreeTerms(e.target.checked);
              setShowCheckboxError(false); // 用户勾选时隐藏提示
            }}
          ><p>I have read and agree all the content above, including the <Link href='/'// add link here
          >privacy policy</Link>and the<Link href='/'// add link here
          >Terms and Conditions</Link><sup className="required-field">*</sup></p></Checkbox>
        </div>
        {showCheckboxError && (<p className="required-field">Please agree to the terms and conditions before shipping.</p>)}
      </div>
      <div className="Button-Ship mt-12">
        <Button
          radius="full"
          className="bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg Button-Ship-Child"
          onClick={handleButtonClick}
        >
          <p className="Button-Ship-Child">Ship Now</p>
        </Button>
      </div>
    </div>
  )
}

export default Shipping
