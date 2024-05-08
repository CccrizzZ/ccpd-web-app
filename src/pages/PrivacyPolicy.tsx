import React, { useEffect } from 'react'

const PrivacyPolicy: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const headerClass = 'text-2xl text-orange-500'
  return (
    <div className='w-[61.8%] grid gap-6 xl:px-32 m-auto text-center mt-16'>
      <p className='text-6xl text-orange-500 px-auto m-auto'>Privacy Policy</p>
      <p>
        &emsp; CC Power Deals Inc. operates the website "CC Power Deals Inc." at 258.ca (previously ccpowerdeals.ca).
        We take your privacy seriously. To better protect your privacy,
        we provide this privacy policy notice explaining the way your personal information
        is collected and used.
      </p>
      <p className={headerClass}>Collection of Routine Information</p>
      <p>
        &emsp; This website track basic information about its visitors.
        This information includes, but is not limited to, IP addresses, browser details,
        timestamps and referring pages. None of this information can personally identify specific
        visitors to this website. The information is tracked for routine
        administration and maintenance purposes.
      </p>
      <p className={headerClass}>Web Forms</p>
      <p>
        &emsp; By submitting your information through our web form,
        including your name, phone number, and email address,
        you agree that CC Power Deals Inc. may use this information for any purposes related to the services we offer,
        except for selling your information to third parties.
        This may include using your details to improve our services, contact you with updates,
        respond to your inquiries, and for other promotional activities. Your privacy is important to us,
        and we are committed to protecting your personal data in accordance with our privacy policy.
        All photographs submitted via the web form will be securely stored on our Azure Cloud Storage indefinitely.
        The management team retains comprehensive control over the uploaded media,
        including but not limited to internal distribution, external distribution, and use for data analytics purposes.
        However, they do not possess the rights to derive financial profit from these media files.
      </p>
      <p className={headerClass}>Cookies</p>
      <p>
        &emsp; Where necessary, this website uses cookies to store information about a visitor’s
        preferences and history to better serve the visitor and/or present the
        visitor with customized content.
      </p>
      <p className={headerClass}>Advertisement and Other Third Parties</p>
      <p>
        &emsp; Advertising partners and other third parties may use cookies, scripts and/or web beacons to track
        visitor activities on this website to display advertisements
        and other useful information. Such tracking is done directly by the third parties through their
        servers and is subject to their privacy policies. This website has no access or
        control over these cookies, scripts and/or web beacons that may be used by third parties.
      </p>
      <div>
        <p>
          &emsp; We have included links on this website for your use and reference.
          We are not responsible for the privacy policies on these websites. You
          should be aware
          that the privacy policies of these websites may differ from our own.
        </p>
        <p>
          &emsp; Link to the privacy policy of third-party service providers used
          by the website
        </p>
        <ul>
          <li><a className='underline text-blue-500' href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">Google Analytics</a></li>
          <li><a className='underline text-blue-500' href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">YouTube</a></li>
          <li><a className='underline text-blue-500' href="https://www.facebook.com/about/privacy/" target="_blank" rel="noopener noreferrer">Facebook</a></li>
        </ul>
      </div>
      <p className={headerClass}>Security</p>
      <p>
        &emsp; The security of your personal information is important to us, but remember that no
        method of transmission over the Internet, or method of electronic storage, is 100% secure.
        While we strive to use commercially acceptable means to protect your personal information,
        we cannot guarantee its absolute security.
      </p>
      <p className={headerClass}>Changes To This Privacy Policy</p>
      <p>
        &emsp; This Privacy Policy is effective as of 2024-04-01 and will remain in effect except concerning any
        changes in its provisions in the future, which will be in effect immediately after being posted on this page.
        We reserve the right to update or change our Privacy Policy at any time and you
        should check this Privacy Policy periodically. If we make any material changes to this Privacy Policy,
        we will notify you either through the email address you have provided us or by
        placing a prominent notice on our website.
      </p>
      <p className={headerClass}>Contact Information</p>
      <p>
        &emsp; For any questions or concerns regarding the privacy policy,
        please send us an email at <a href="mailto:info@258.ca">service@258.ca</a>.
      </p>
      <p>
        &emsp; Our Address: 240 Bartor Rd Unit #4, Toronto, ON M9M 2W6
        &emsp; TEL: +1 416-740-2333
      </p>
    </div >
  )
}

export default PrivacyPolicy