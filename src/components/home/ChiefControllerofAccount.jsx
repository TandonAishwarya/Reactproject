import React from "react";
import { NavLink, useNavigate } from "react-router-dom"
import Navbar from "../navbar/Navbar";
import Sidebar from "../navbar/sidebar";
const ChiefControllerofAccount = ({ setLoginUser }) => {
    const navigate = useNavigate()
    return (
        <React.Fragment>

            <Navbar />
            <div>
                <img src="assets/inner-banner01.jpg" alt="" />
            </div>
            <div className="container text-start">
                <div className="row mt-5 d-flex">
                <div className="col-sm-2 ">
                    <Sidebar/>
                    </div>
                    <div className="col-sm-10 ">
                        <div className="">
                            <h2 className="text-danger"><u>Chief Controller of Account</u></h2>
                        </div>
                        <div className="">
                            <h6>Smt. Deepika Jain, ICAS is the Chief Controller of Accounts (CCA)
ROLE OF CHIEF CONTROLLER OF ACCOUNTS</h6>
                            <p>The Secretary of Department is the Chief Accounting Authority. As Chief Accounting Authority he performs his duties with the assistance of a Financial Adviser and a Chief Controller of Accounts.<br/>
The Accounting Organization of the Department of Chemicals and Petro-Chemicals is headed by Chief Controller of Accounts. She performs her duties with the assistance of 2 PAO’s and 3 AAO’s (01 PAO with 01 AAO working in Delhi and 01 PAO and 02 AAO’s working in Bhopal, M. P.). There is also an Internal Audit Wing consisting of one PAO and one AAO under the charge of Chief Controller of Accounts. The duties performed by Chief Controller of Accounts are as under:</p>
<ol>
    <li>Arranging all payments of Department of Chemicals and Petro-Chemicals which pertain to personal claims, Grant-in-Aid and loans & investments under various schemes of Department of Chemicals and Petro-Chemicals.</li>
    <li>Arranging payments of Pension and other retirement benefits to the officers and staff of the Department of Chemicals and Petro-Chemicals.</li>
    <li>Accounting of all Payments and Receipts of the Department and consolidation on monthly and annual basis in the form of Appropriation Accounts, Finance Accounts and Statement of Central Transactions.</li>
    <li>Maintaining the Accounts in an efficient manner in terms of the provisions of GFRs with least balances under Suspense Accounts.</li>
    <li>Arranging Internal Audit to ensure utilization of funds released out of Consolidated Fund of India and maintenance of accounts records.</li>
    <li>Preparation of Receipt budget of Department of Chemicals and Petro-Chemicals.</li>
    <li>Assisting Chief Accounting Authority and Financial Adviser of the Department in expenditure control and maintaining right pace of expenditure.</li>
    <li>Maintaining Accounts of Loan and Equity of Government of India with PSUs.</li>
    <li>Maintaining accounts for receipt and disbursement of amounts in settlement of claims and for relief purposes for Bhopal Gas Relief Disaster.</li>
    <li>Arranging for disbursal of amounts as relief (including interim relief) to the persons affected by the Bhopal Gas Leak Disaster.</li>
    <li>Coordinating work between Controller General of Accounts' office and Department of Chemicals and Petro-Chemicals.</li>
    <li>Rendering advice to the Department on Accounts related matters.</li>
    <li>Looking after the Establishment of Accounts Wing including transfer, posting and promotion under the guidelines of Controller General of Accounts office.</li>
    <li>Implementation of PFMS and I.T. Scheme in the Accounting Organization under the overall guidelines of Controller General of Accounts.</li>
    <li>Keeping the cash balances of Department of Chemicals and Petro-Chemicals in the Government Books reconciled with Reserve Bank of India.</li><li>Under the merged DDO Scheme, Cash Branch of the Ministry reports to Chief Controller of Accounts.</li>
    <li>Authorization of pension to CPAO and also revision of pension.</li>
<li>Any other duties assigned by Financial Adviser.</li>
</ol>
                        </div>
                       

                       
                    </div>
                </div>
            </div>

        </React.Fragment>
    );

}
export default ChiefControllerofAccount;