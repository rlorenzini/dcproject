import React,{Component} from 'react';



class History extends Component {
  render(){
    return(
      <div>
      <h1 className="body">What is an officer?</h1>
   <p>A law enforement officer is a government employee, whether federal, state, or local, who has been entrusted to uphold the law, investigation allegations of criminal offenses,
   apprehend individuals who have committed crimes, detain individuals suspected of committing crimes, transport criminals, and prevent further crimes from occurring.
 This includes, but is not limited to, a police officer, FBI agent, sheriff, deputy, constable, probate officer, K9, SWAT, and detective.</p>
   <h4>But what does that <i>mean?</i>
     </h4>
     <p>If a government employee has been <b>sworn in</b> or <b>deputized</b>, they have been granted the authority to uphold the law and arrest those who violate them.
     </p>
     <h4>Sworn in vs. Deputized</h4>
     <ul>
       <li>Sworn in: Granted authority from a <b>government agency</b> to uphold applicable laws; state, county, and city officers.</li>
       <li>Deputized: Granted authority by the <b>federal government</b> to uphold all laws, in any state, within the United States.</li>
     </ul>
     <h4>Why the distinction between the two?</h4>
     <p>When a deputized officer is in another state, they have full authority to act as any local officer would. An officer who is sworn in but <b>not</b> deputized
       has only been granted authority to act within their local area.</p>
       <p>A <b>Houston Police Officer</b> has full authority within the borders of Houston, but likely <i>only</i> within the borders of Houston.</p>
       <p>A <b>Cobb County MCS Narcotics Officer</b>, who has been <i>deputized</i>, can make arrests within the city limits of Houston,
         even though their agency is located in Georgia.</p>
         <h4>Any law enforcement officer has the power to arrest.</h4>
         <p>Even if they are not a local officer, they have been granted authority to make such judgments.</p>
      </div>
    )
  }
}
export default History
