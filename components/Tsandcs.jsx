import React from 'react'
import {Fira_Sans_Extra_Condensed} from 'next/font/google'

const fira = Fira_Sans_Extra_Condensed({
    subsets:['latin'],
    weight:['500'],
  })

const Tsandcs = () => {
    return(
        <div className='mx-auto bg-fixed bg-center bg-cover custom-img'>
            <div className='absolute top-0 left-0 right-0 bottom-0 bg-black/80 relative justify-center' >
            <div className='p-20 text-white z-[2]' >
            <div className={fira.className}>
                <h className='text-2xl'>1. Definitions</h>
                <p>- &quot;We&quot;, &quot;us&quot;, &quot;our&quot; refers to Illusion Tricking, including its owners, staff, contractors, and agents. </p> 
                <p>- &quot;You&quot; or &quot;Participant&quot; refers to any individual (or their parent/guardian if under 18) who enrols in or attends our classes, events, or uses our facilities. </p> 
                <br></br>
                <h className='text-2xl'>2. Assumption of Risk and Waiver of Liability</h>
                <p>Tricking and related movement activities involve inherent physical risks, including risk of injury or death. By participating, you acknowledge and accept these risks.</p> 
                <br></br>
                <p>To the fullest extent permitted by New Zealand law:</p> 
                <br></br>
                <p>- You voluntarily assume all risks associated with participation in our activities.</p> 
                <p>You agree to release and indemnify Illusion Tricking, its directors, staff, contractors, and agents from any claims, liabilities, costs, or demands arising from injury, loss, or damage resulting from your participation.</p> 
                <br></br>
                <p>This waiver does not limit your rights under the Consumer Guarantees Act 1993, if applicable.</p> 
                <br></br>
                <h className='text-2xl'>3. Medical Declaration</h>
                <p>You declare that you (or your child) are physically fit and have no medical conditions that would affect safe participation. You agree to inform us of any injuries, health issues, or medications that may affect your (or your child’s) participation</p>
                <br></br>
                <p>In the event of an emergency, you authorise us to seek medical assistance on your behalf and agree to cover any associated costs.</p>
                <br></br>
                <h className='text-2xl'>4. Supervision of Minors</h>
                <p>Participants under 18 must have the consent of a parent or legal guardian. Children under 5 must be accompanied by a responsible adult while on the premises, unless otherwise agreed.</p>
                <br></br>
                <h className='text-2xl'>5. Class Rules and Code of Conduct</h>
                <p>To ensure a safe and respectful environment, you agree to:</p> 
                <br></br>
                <p>- Follow all instructions given by instructors or staff.</p>
                <p>- Wear appropriate clothing and remove jewellery before class.</p>
                <p>- Treat others with respect and refrain from disruptive or dangerous behaviour.</p>
                <br></br>
                <p>We reserve the right to remove or refuse service to anyone who breaches this code, without refund.</p> 
                <br></br>
                <h className='text-2xl'>6. Payment and Cancellations</h>
                <p>- Class fees must be paid on or prior to first class via the payment methods provided.</p>
                <p>- Term bookings are non-refundable, except as required by the Consumer Guarantees Act</p>
                <p>- If you cancel due to illness or injury (with notice), we may offer a credit or make-up session at our discretion.</p>
                <p>- We reserve the right to cancel or reschedule classes due to low enrolment, staff availability, or force majeure. In such cases, we will offer a full refund or credit.</p>
                <br></br> 
                <h className='text-2xl'>7. Media Release</h>
                <p>By attending our classes or events, you consent to the use of photos or video of you (or your child) for promotional purposes on our website, social media, or marketing. You can opt out by emailing us at illusion.tricking@gmail.com</p> 
                <br></br>
                <h className='text-2xl'>8. Privacy Policy</h> 
                <p>We collect personal information for enrolment, safety, and communication purposes. We will:</p> 
                <br></br>
                <p>- Store your data securely.</p> 
                <p>- Not share your personal information with third parties without your consent, unless required by law.</p>
                <p>- Allow you to request access to or correction of your personal information.</p> 
                <br></br>
                <p>For more details contact us at illusion.tricking@gmail.com</p>  
                <br></br>   
                <h className='text-2xl'>9. Liability and Consumer Rights</h>
                <p>Nothing in these terms affects your rights under the Consumer Guarantees Act 1993 or other applicable laws in New Zealand.</p> 
                <br></br>
                <p>To the extent permitted by law:</p> 
                <br></br>
                <p>- We are not liable for any indirect, incidental, or consequential loss arising from participation.</p>
                <p>- Our total liability is limited to the amount you have paid for the relevant service.</p> 
                <br></br>
                <h className='text-2xl'>10. Changes to Terms</h>
                <p>We may update these Terms and Conditions from time to time. The most current version will always be posted on our website. Continued participation after updates constitutes your acceptance of the new terms.</p> 
                <br></br>
                <h className='text-2xl'>11. Contact Us</h>
                <p>For questions or concerns, contact:</p>
                <p>Illusion Tricking</p>
                <p>Email: illusion.tricking@gmail.com</p>
                <p>Address: 19 Hamaria Road, Levin</p> 
                <br></br>
                <h className='text-2xl'>Parent/Guardian Agreement (for participants under 18)</h>
                <p>I am the parent/legal guardian of the participant. I have read and understood the above terms and conditions and give permission for my child to participate in classes at Illusion Tricking. I accept the risks and agree to the waiver of liability on their behalf.</p>
                </div>
            </div>
            </div>
        </div>
    )
}

export default Tsandcs