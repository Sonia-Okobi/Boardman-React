import React from 'react';
import BaseCard from '../../../ui/organisms/baseCard/BaseCard';
import approval from '../../../../assets/svg/approval.svg';
import time from '../../../../assets/svg/time.svg';

export default function HomeMilestone() {
  return (
    <div className="home-page__home-milestone app-container">
      <div className="home-page__home-milestone__content app-container__section">
        <h1 className="milestone-header">Milestone Payments</h1>
        <p className="milestone-description">
          With Boardman, you can pay for goods and services and have funds
          released at certain points in time, subject to approvals. Use Boardman
          to ensure that funds are only released when you’re happy with each
          step!.
        </p>
        <div className="home-page__home-milestone__content__card">
            <BaseCard icon={time} title='Time/Date based disbursement' description='Funds are only released at certain points in time, set while you created your transaction.' className='milestone-card'/>
            <BaseCard icon={approval} title='Approval based disbursement' description='Funds are only released after the necessary approvals have been given.' className='milestone-card'/>
        </div>
      </div>
    </div>
  );
}
