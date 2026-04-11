export type Requirement = { text: string; subItems?: string[] };

export interface LicensingCategory {
  id: string;
  title: string;
  description: string;
  preface?: string;
  requirements: Requirement[];
  notes?: string[];
}

export const licensingCategories: LicensingCategory[] = [
  {
    id: 'branch-ab',
    title: 'Requirements For Branch Banking Licence - Category "A" & "B" Banking Licence',
    description: 'Requirements for establishing a branch of an international bank.',
    requirements: [
      { text: "Copy of bank's Charter." },
      { text: 'Copy of By-Acts certified by the Secretary before a Notary Public.' },
      {
        text: 'List of Directors, shareholders and the major corporate officers with full names, addresses, occupations and nationalities certified by the company\'s secretary. Approval of shareholders, directors, controllers. The following is required:',
        subItems: [
          'Personal Questionnaire',
          'Two character references',
          'Financial reference from a bank/trust company',
          'Police clearance certificate',
          'Evidence of two effective directors',
          'Evidence of relevant banking experience of at least one director.',
        ],
      },
      { text: 'Corporate chart showing relationship of affiliate companies and subsidiaries.' },
      { text: "Name and address of bank's auditors." },
      { text: 'Last annual report of the bank and its holding company. This should contain two years figures.' },
      {
        text: 'A letter to the Governor signed by the Chairman/President of the bank containing the following information:',
        subItems: [
          'Business of the bank in outline',
          'Short details of the bank\'s subsidiaries and affiliates',
          'Objectives of the Pacific Settlement Bank branch',
          'Names of authorised agents',
          'Evidence of banking experience of the directors and confirming that they do not have any criminal records.',
        ],
      },
      { text: 'Undertaking to meet liabilities of the branch.' },
      { text: 'References from two different international banks.' },
      {
        text: 'Undertaking not to trade locally.',
        subItems: [
          'Where necessary, approval of the Central Banking Authority in the country of origin.',
          'Assurance from Central Banking Authority of consolidated supervision and good standing of the applicant.',
        ],
      },
      { text: 'Date of financial year end.' },
      { text: 'Any exemption required from Section 7.' },
      { text: 'Application fee.' },
      { text: 'Certificate of Registration.' },
      { text: 'Licence fee.' },
    ],
  },
  {
    id: 'incorporated-ab',
    title: 'Requirements For Locally Incorporated Company Banking Licence - Category "A" & "B" Banking Licence',
    description: 'Requirements for establishing a newly incorporated banking entity.',
    requirements: [
      { text: 'Approval of name.' },
      {
        text: 'Approval of shareholders, directors, controllers. The following is required:',
        subItems: [
          'Personal Questionnaire',
          'Two character references',
          'Financial reference from a bank/trust company',
          'Police clearance certificate',
          'Evidence of two effective directors',
          'Evidence of relevant banking experience of at least one director.',
        ],
      },
      { text: 'Letter of recommendation from bank/trust company.' },
      {
        text: 'Approval from parent supervisory authority (where appropriate).',
        subItems: [
          'Assurance from parent supervisory authority of consolidated supervision and good standing of the applicant (where appropriate).',
        ],
      },
      {
        text: 'Objectives of company.',
        subItems: [
          'Reasons',
          'Customer base (including names for Restricted licence).',
          'Asset structure.',
          'Management structure.',
          'Two-year projection.',
        ],
      },
      { text: 'Any exemption from Section 7.' },
      { text: 'Minimum required capital.' },
      { text: 'Undertaking not to solicit funds locally.' },
      { text: 'Principal office.' },
      { text: 'Authorised agents.' },
      { text: 'Local auditors.' },
      { text: 'Date of financial year-end.' },
      { text: 'Memorandum and Articles of Association.' },
      { text: 'Certificate of Incorporation.' },
      { text: 'Application fee.' },
      { text: 'Opening balance sheet.' },
      { text: 'Licence fee.' },
    ],
  },
  {
    id: 'unrestricted-trust',
    title: 'Requirements on Application for Unrestricted Trust Licence - (Locally Incorporated Company)',
    description: 'Framework for trust entities operating without restrictions on client origin.',
    requirements: [
      { text: 'The address of its principal office.' },
      { text: "Letter of consent from the applicant's agent." },
      { text: 'Letter of recommendation for the applicant from a bank or trust company.' },
      {
        text: 'Please submit the following in respect of all proposed shareholders, managers, controllers and directors:',
        subItems: [
          'Personal Questionnaire',
          'Two character references',
          'Police clearance certificates',
          'Financial reference from a bank/trust company',
          'Evidence of two directors actively engaged in the business',
          'Evidence of relevant experience of the directors.',
        ],
      },
      {
        text: 'Business Plan / Objectives of company.',
        subItems: [
          'Give reasons for applying for an Unrestricted Trust Licence.',
          "If not a newly formed company, details of the company's current business activities accompanied by the audited statements for the past two years.",
          'Customer base - proposed number and origin of client companies etc.',
          'Current range of services or proposed services.',
          'A detailed statement setting out the following for the next two years: Asset structure (type of assets), The proposed initial assets, Expected liabilities, Expected income',
          'Details of management structure, personnel and responsibilities.',
          "Details of the applicant's proposed fee earnings.",
          'Detail procedures for maintaining custody of bearer shares.',
        ],
      },
      { text: 'Any exemptions requested pursuant to Section 7 of the Bank and Trust Companies Act.' },
      { text: 'Confirmation from parent Supervisory Authorities of no objection to the applicant being licensed as a Trust Company.' },
      { text: 'Confirmation of consolidated supervision from parent Supervisory Authorities.' },
      {
        text: "Names and addresses of all subsidiaries as well as a statement of how much of each subsidiary's capital constitute an asset of the applicant.",
      },
      {
        text: 'Names, addresses/country of incorporation and nationality of ultimate beneficial shareholders as well as any shareholder possessing more than 5% of the voting rights or issued share capital.',
      },
      { text: 'Audited statements for the past two years for shareholders that are a company.' },
      { text: 'Proof of paid-up capital (minimum of US$400,000 for Unrestricted Trust Companies).' },
      { text: "Confirmation from the applicant's bank or auditors of the capital that has been paid in (a copy of the applicant's balance sheet)." },
      {
        text: 'A letter of consent from an Auditor, approved by the Authority, stating that they are aware of their obligations under the Bank and Trust Companies Act.',
      },
      { text: "The applicant's financial year end." },
      { text: 'Certified copy of the Memorandum and Articles of Association.' },
      { text: 'Original certified copy of Certificate of Incorporation.' },
      { text: 'Application fee.' },
      { text: 'Annual fee (due upon receipt of approval for the issue of a Unrestricted Trust Licence).' },
      { text: 'An undertaking signed by the applicant that the information supplied in the application is true and correct.' },
      {
        text: 'An undertaking signed by directors to inform the Authority of any changes to the information supplied in this application should a Licence be granted.',
      },
    ],
    notes: [
      'In the event that the applicant is involved in business activities subject to regulation in another jurisdiction, please attach confirmation of good standing and a letter of no objection from the relevant regulatory authority as well as a copy of the last years audited financial statements.',
      'In the interest of expeditious processing of an application, please submit only complete applications. Incomplete applications will be returned by mail to the sender.',
      'Applications for an Unrestricted Trust Licence under the Banks and Trust Companies Act (as revised) should meet all the criteria as itemized above.',
    ],
  },
  {
    id: 'restricted-b-branch',
    title: 'Requirements For Restricted Category "B" Banking Licence (Branch)',
    description: 'Requirements for establishing a restricted branch operation.',
    requirements: [
      { text: "Copy of bank's Charter." },
      { text: 'Copy of By-Acts certified by the Secretary before a Notary Public.' },
      {
        text: 'List of Directors and the major corporate officers with full names, addresses, occupations and nationalities certified by the company\'s secretary.',
      },
      { text: 'Corporate chart showing relationship of affiliate companies and subsidiaries.' },
      { text: "Name and address of bank's auditors." },
      { text: 'Last annual report of the bank and its holding company. This should contain two years figures.' },
      {
        text: 'A letter to the Governor signed by the Chairman/President of the bank containing the following information:',
        subItems: [
          'Business of the bank in outline',
          'Short details of the bank\'s subsidiaries and affiliates',
          'Objectives of the Pacific Settlement Bank branch',
          'Names of authorised agents',
          'Evidence of banking experience of the directors and confirming that they do not have any criminal records.',
        ],
      },
      { text: 'Undertaking to meet liabilities of the branch.' },
      { text: 'References from two different international banks.' },
      {
        text: 'Undertaking not to trade locally.',
        subItems: [
          'Where necessary, approval of the Central Banking Authority in the country of origin.',
          'Assurance from Central Banking Authority of consolidated supervision and good standing of the applicant.',
        ],
      },
      { text: 'Date of financial year-end.' },
      { text: 'Any exemption required from Section 7.' },
      { text: 'Application fee.' },
      { text: 'Certificate of Registration.' },
      { text: 'Licence fee.' },
    ],
  },
  {
    id: 'restricted-b-inc',
    title: 'Requirements For Restricted Category "B" Banking Licence (Locally Incorporated Company)',
    description: 'Requirements for a restricted locally incorporated banking operation.',
    requirements: [
      { text: 'Approval of name.' },
      {
        text: 'Approval of shareholders, directors, controllers. The following is required:',
        subItems: [
          'Personal Questionnaire',
          'Two character references',
          'Financial reference from bank/trust company',
          'Police clearance certificate',
          'Evidence of two effective directors',
          'Evidence of relevant banking experience of at least one Director.',
        ],
      },
      { text: 'Letter of recommendation from a bank/trust company.' },
      { text: 'Approval from parent supervisory authority (where appropriate).' },
      { text: 'Assurance from parent supervisory authority of consolidated supervision and good standing of the applicant (where appropriate).' },
      {
        text: 'Objectives of company.',
        subItems: [
          'Reasons',
          'Customer base (including names for Restricted licence).',
          'Asset structure.',
          'Management structure.',
          'Two-year projection.',
        ],
      },
      { text: 'Any exemption from section 7.' },
      {
        text: 'Minimum required capital.',
        subItems: [
          'When third party funding/liabilities are involved - US$20,000 or amount necessary to satisfy a RAR of 15% (non-bank or unconsolidated bank subsidiaries) or 12% (bank subsidiaries).',
          'For totally related operations or 100% related funding - RAR based capital requirement (and large exposures guidelines) can be waived if the following is provided: confirmation from all depositors/creditors that they are aware that our normal capital adequacy (and lending guidelines) will not be applied to the operations of the bank.',
        ],
      },
      { text: 'Undertaking not to solicit funds locally.' },
      { text: 'Principal office.' },
      { text: 'Authorised agents.' },
      { text: 'Local auditors.' },
      { text: 'Date of financial year-end.' },
      { text: 'Memorandum and Articles of Association.' },
      { text: 'Certificate of Incorporation.' },
      { text: 'Application fee.' },
      { text: 'Opening balance sheet.' },
      { text: 'Licence fee.' },
    ],
  },
  {
    id: 'restricted-trust',
    title: 'Requirements on Application for Restricted Trust Licence',
    description: 'Framework for trust entities operating with a defined, restricted client base.',
    requirements: [
      { text: 'The address of its principal office.' },
      { text: "Letter of consent from the applicant's agent." },
      {
        text: 'Please submit the following in respect of all proposed shareholders, managers, controllers and directors:',
        subItems: [
          'Personal Questionnaire',
          'Two character references',
          'Police clearance certificates',
          'Financial reference from a bank/trust company',
          'Evidence of two directors actively engaged in the business',
          'Evidence of relevant experience of the directors.',
        ],
      },
      {
        text: 'Business Plan/Objectives of company.',
        subItems: [
          'Give reasons for applying for an Restricted Trust Licence.',
          "If not a newly formed company, details of the company's current business activities accompanied by the audited statements for the past two years.",
          'Customer base - proposed name number and origin of trusts proposed to be managed by the applicant.',
          'Completed copy of page one of the personal questionnaire in respect of each person that is a settlor of a managed trust.',
          'Source of trust assets for each managed trust.',
          'Police clearance certificate for each settlor.',
          'One (1) character reference in respect of each settlor.',
          'Range of applicants proposed services.',
          'A detailed statement setting out the following for the next two years: Asset structure (type of assets), The proposed initial assets, Expected liabilities, Expected income.',
          'Details of management structure, personnel and responsibilities.',
          "Details of the applicant's proposed fee earnings.",
          'Detail procedures for maintaining custody of bearer shares.',
        ],
      },
      { text: 'Confirmation from parent Supervisory Authorities of no objection to the applicant being licensed as a Trust Company.' },
      { text: 'Confirmation of consolidated supervision from parent Supervisory Authorities.' },
      {
        text: "Names and addresses of all subsidiaries as well as a statement of how much of each subsidiary's capital constitute an asset of the applicant.",
      },
      {
        text: 'Names, addresses/country of incorporation and nationality of ultimate beneficial shareholders as well as any shareholder possessing more than 5% of the voting rights or issued share capital.',
      },
      { text: 'Audited statements for the past two years for shareholders that are a company.' },
      { text: 'Proof of paid-up capital (minimum of US$20,000 for Restricted Trust Companies).' },
      { text: "Confirmation from the applicant's bank or auditors of the capital that has been paid in (a copy of the applicant's balance sheet)." },
      {
        text: 'A letter of consent from an Auditor, approved by the Authority, stating that they are aware of their obligations under the Bank and Trust Companies Act.',
      },
      { text: "The applicant's financial year end." },
      { text: 'Certified copy of the Memorandum and Articles of Association.' },
      { text: 'Original certified copy of Certificate of Incorporation.' },
      { text: 'Application fee.' },
      { text: 'Annual fee (due upon receipt of approval for the issue of a Unrestricted Trust Licence).' },
      { text: 'An undertaking signed by the Applicant that the information supplied in the application is true and correct.' },
      {
        text: 'An undertaking signed by directors to inform the Authority of any changes to the information supplied in this application should a Licence be granted.',
      },
    ],
    notes: [
      'In the event that the applicant is involved in business activities subject to regulation in another jurisdiction, please attach confirmation of good standing and a letter of no objection from the relevant regulatory authority as well as a copy of the last years audited financial statements.',
      'In the interest of expeditious processing of an application, please submit only complete applications. Incomplete applications will be returned by mail to the sender.',
      'Applications for an Restricted Trust Licence under the Banks and Trust Companies Act (as revised) should meet all the criteria as itemized above.',
    ],
  },
  {
    id: 'nominee-trust',
    title: 'Requirements on Application for Nominee (Trust) Licence',
    description: 'Requirements for entities act solely as a nominee trust.',
    requirements: [
      { text: 'The address of its principal/registered office.' },
      {
        text: 'Please submit the following in respect of all proposed Directors, Shareholders, Managers, Officers and Controllers:',
        subItems: [
          'Personal Questionnaire',
          'Two character references',
          'Police clearance certificates',
          'Financial reference from a bank/trust company',
          'Evidence of two directors actively engaged in the business',
          'Evidence of relevant experience of the directors',
        ],
      },
      {
        text: 'Business Plan/Objectives of company.',
        subItems: [
          'Give reasons for applying for a Nominee Trust Licence.',
          "If not a newly formed company details of the company's current business activities accompanied by the audited statements for the past two years.",
          'Range of applicants proposed services.',
          'Details of management structure, personnel and responsibilities.',
          "Details of the applicant's proposed fee earnings.",
        ],
      },
      {
        text: 'A guarantee with respect to the liabilities of the Company up to US$200,000 in the prescribed format, pursuant to Section 8 (3) of the Bank and Trust Companies Act.',
      },
      {
        text: 'A letter of consent from an Auditor, approved by the Authority, stating that they are aware of their obligations under the Bank and Trust Companies Act.',
      },
      { text: "The applicant's financial year end." },
      { text: 'Certified copy of the Memorandum and Articles of Association.' },
      { text: 'Original Certified copy of Certificate of Incorporation.' },
      { text: 'Application fee.' },
      { text: 'Annual fee (due upon receipt of approval for the issue of a Nominee (Trust) Licence).' },
      { text: 'An undertaking signed by the Applicant that the information supplied in the application is true and correct.' },
      {
        text: 'An undertaking signed by directors to inform the Authority of any changes to the information supplied in this application should a Licence be granted.',
      },
    ],
    notes: [
      'In the interest of expeditious processing of an application, please submit only complete applications. Incomplete applications will be returned by mail to the sender.',
      'Applications for a Nominee Trust Licence under the Banks and Trust Companies Act (as revised) should meet all the criteria as itemized above.',
    ],
  },
  {
    id: 'cancellation',
    title: 'Requirements for Cancellation of Licences',
    description: 'Statutory requirements for surrendering existing licences.',
    preface:
      'The requirements for surrendering licences granted under the Bank and Trust Companies Act are set out in Section 20 of the Act. A licensee which has ceased to carry on the business in respect of which the licence was granted may apply to the Governor to surrender its licence if it:',
    requirements: [
      {
        text: 'has ceased to carry on such business and produces evidence that it has repaid all deposits held by it and has transferred all trust assets held or administered by it; or',
      },
      {
        text: 'is being wound up voluntarily and produces evidence that it is solvent and able forthwith to repay all deposits held by it and all its other creditors and has transferred all trust assets held or administered by it.',
      },
      { text: 'External Auditors confirmation is the usual form of evidence that the Authority requires for the surrendering of licences.' },
    ],
  },
];
