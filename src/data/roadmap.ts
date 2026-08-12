/**
 * Single source of roadmap content.
 *
 * Updating the roadmap is a content edit here, not a code change. Every piece
 * of display text is language-keyed so Welsh and English are both supported.
 * Welsh values are left empty for now; the UI falls back to English when a
 * Welsh string is empty (see src/lib/i18n.ts).
 */

export type Horizon = 'now' | 'next' | 'later';
export type ItemStatus = 'exploring' | 'in-progress' | 'shipped';

/** Every piece of display text is language-keyed. */
export interface Localised {
  cy: string; // Welsh
  en: string; // English
}

export interface Category {
  id: string;
  name: Localised;
  headline: Localised;
  description: Localised;
  accent: string;
}

export interface RoadmapItem {
  id: string;
  title: Localised;
  summary: Localised;
  categoryId: string;
  horizon: Horizon;
  status: ItemStatus;
  phase?: string;
  phaseKind?: 'discovery';
  outcome?: string;
  metric?: string;
  capabilities?: { label: string; items: string[] };
  services?: string[];
  updated: string;
}

/**
 * A single item in a delivered work section.
 * Items are populated by Joshua from real delivery records only.
 */
export interface DeliveredItem {
  id: string;
  title: Localised;
  summary: Localised;
  metric?: string;
  capabilities?: { label: string; items: string[] };
}

/**
 * A delivered work section (Recently delivered / Other work this year).
 * Items must come from a real delivery source. Leave items empty and
 * use the placeholder text until Joshua confirms the content.
 */
export interface DeliveredSectionData {
  id: string;
  heading: Localised;
  description: Localised;
  /** Visible on-page placeholder shown when items is empty. */
  placeholder: Localised;
  items: DeliveredItem[];
}

export interface RoadmapMeta {
  title: Localised;
  /**
   * Agreed verbatim wording — do not edit.
   * Stored here so it is language-keyed alongside all other copy.
   */
  vision: Localised;
  /**
   * Agreed verbatim wording — do not edit.
   * Stored here so it is language-keyed alongside all other copy.
   */
  serviceDescription: Localised;
  intro: Localised;
  horizonNote: Localised;
  owner: string;
  lastUpdated: string;
  reviewNote: Localised;
  statusLabel: string;
  /** Short explainer of the public beta and our longer-term goal. */
  betaNote: Localised;
}

export interface Roadmap {
  meta: RoadmapMeta;
  horizons: { id: Horizon; label: Localised; definition: Localised }[];
  categories: Category[];
  items: RoadmapItem[];
  recentlyDelivered: DeliveredSectionData;
  otherDelivered: DeliveredSectionData;
  notDoingNow: DeliveredSectionData;
}

const TODO_CY = '';
const UPDATED_AT = '2026-08-12';
const CATEGORY_ID = 'general-medical-services';

const localised = (en: string): Localised => ({ cy: TODO_CY, en });

export const roadmap: Roadmap = {
  meta: {
    title: localised('General Medical Services roadmap'),
    vision: localised(
      'General Practice in Wales is supported by safe, reliable and user-centred digital services that enable high-quality patient care.',
    ),
    serviceDescription: localised(
      'Digital services that enable General Practice systems across Wales to securely exchange information with NHS Wales services, supporting safe, efficient patient care.',
    ),
    intro: localised(
      "This roadmap shows what we're working on now, what's coming next and the direction we expect to take later.",
    ),
    horizonNote: localised(
      "Now is what we are actively working on. Next is what we expect to pick up. Later is the direction we're setting. The further out the work, the more it may change. We don't put dates on this work, and Next and Later are not commitments to deliver by a particular time.",
    ),
    owner: 'General Medical Services team, DHCW',
    lastUpdated: UPDATED_AT,
    reviewNote: localised(
      'We update this roadmap as plans develop and we learn from delivery.',
    ),
    statusLabel: 'Draft for Discussion',
    betaNote: localised(
      'This roadmap sets out the direction of travel for General Medical Services. It is a working draft for discussion and will be updated as priorities develop.',
    ),
  },

  horizons: [
    {
      id: 'now',
      label: localised('Now'),
      definition: localised(
        'Work that is underway now and shaping the next changes to the service.',
      ),
    },
    {
      id: 'next',
      label: localised('Next'),
      definition: localised(
        'Work we expect to pick up next as current delivery moves forward.',
      ),
    },
    {
      id: 'later',
      label: localised('Later'),
      definition: localised(
        'Longer-term direction that will keep evolving as we learn more.',
      ),
    },
  ],

  categories: [
    {
      id: CATEGORY_ID,
      name: localised('General Medical Services'),
      headline: localised('Now, Next and Later for General Medical Services'),
      description: localised(
        'Digital services that enable General Practice systems across Wales to securely exchange information with NHS Wales services, supporting safe, efficient patient care.',
      ),
      accent: '#325083',
    },
  ],

  items: [
    {
      id: 'gms-discovery-roadmap',
      title: localised('Completing GP discovery and shaping a co-designed digital roadmap'),
      summary: localised(
        'Completing GP discovery and shaping a co-designed digital roadmap so the team has a clearer evidence base for future product direction and can prioritise work with greater confidence.',
      ),
      categoryId: CATEGORY_ID,
      horizon: 'now',
      status: 'in-progress',
      outcome: 'The team has a clearer evidence base for future product direction and can prioritise work with greater confidence.',
      updated: UPDATED_AT,
    },
    {
      id: 'wccg-gptr-technology-deep-dive',
      title: localised('Progressing the WCCG and GPTR technology deep dive across architecture, integrations, hosting, technical debt and operational risks'),
      summary: localised(
        'Progressing the WCCG and GPTR technology deep dive across architecture, integrations, hosting, technical debt and operational risks so modernisation opportunities and service resilience needs are better understood.',
      ),
      categoryId: CATEGORY_ID,
      horizon: 'now',
      status: 'in-progress',
      outcome: 'Modernisation opportunities and service resilience needs are better understood.',
      updated: UPDATED_AT,
    },
    {
      id: 'wccg-upgrade-decision',
      title: localised('Working through the WCCG upgrade decision, including plan, cost and product direction'),
      summary: localised(
        'Working through the WCCG upgrade decision, including plan, cost and product direction.',
      ),
      categoryId: CATEGORY_ID,
      horizon: 'now',
      status: 'in-progress',
      outcome: 'An options appraisal is produced and future investment and enhancement choices are better informed.',
      updated: UPDATED_AT,
    },
    {
      id: 'archive-retention-requirements',
      title: localised('Defining archive database retention requirements'),
      summary: localised(
        'Defining archive database retention requirements.',
      ),
      categoryId: CATEGORY_ID,
      horizon: 'now',
      status: 'in-progress',
      outcome: 'Disk space, service stability and compliance needs are managed more effectively.',
      updated: UPDATED_AT,
    },
    {
      id: 'user-discovery-gptr-wccg-gp-portal-gp-links',
      title: localised('Running user discovery and user research across GPTR, WCCG, GP Portal and GP Links'),
      summary: localised(
        'Running user discovery and user research across GPTR, WCCG, GP Portal and GP Links.',
      ),
      categoryId: CATEGORY_ID,
      horizon: 'now',
      status: 'in-progress',
      outcome: 'Strategic directions for the products are shaped by service evidence and user need.',
      updated: UPDATED_AT,
    },
    {
      id: 'gms-delivery-priorities',
      title: localised('Supporting active GMS delivery priorities'),
      summary: localised(
        'Supporting active GMS delivery priorities including AVT procurement, GMS Show and Tell, the GMS Resource Hub, One Advanced Exit, SNOMED support and cluster pilots so key service, procurement and engagement priorities keep moving while discovery work progresses.',
      ),
      categoryId: CATEGORY_ID,
      horizon: 'now',
      status: 'in-progress',      outcome: 'Key service, procurement and engagement priorities keep moving while discovery work progresses.',      updated: UPDATED_AT,
    },
    {
      id: 'nhs-wales-app-immunisations-problems-results',
      title: localised('Enabling access to immunisations, problems and test results through NHS Wales App options'),
      summary: localised(
        'Enabling access to immunisations, problems and test results through NHS Wales App options.',
      ),
      categoryId: CATEGORY_ID,
      horizon: 'next',
      status: 'exploring',
      outcome: 'Contract reform priorities can progress with Optum and patients can benefit from broader digital access to GP-held information.',
      updated: UPDATED_AT,
    },
    {
      id: 'avt-framework-call-off',
      title: localised('Moving AVT from procurement into a framework and call-off process'),
      summary: localised(
        'Moving AVT from procurement into a framework and call-off process, supported by T-Pro and Dragon Co-Pilot evaluation outputs, so organisations have a clearer route to adopt approved voice technology options.',
      ),
      categoryId: CATEGORY_ID,
      horizon: 'next',
      status: 'exploring',      outcome: 'Organisations have a clearer route to adopt approved voice technology options.',      updated: UPDATED_AT,
    },
    {
      id: 'national-emis-clinical-services-integrations',
      title: localised('Progressing national EMIS Clinical Services integrations and cluster evaluation work'),
      summary: localised(
        'Progressing national EMIS Clinical Services integrations and cluster evaluation work.',
      ),
      categoryId: CATEGORY_ID,
      horizon: 'next',
      status: 'exploring',
      outcome: 'The team can understand how cluster models should be configured, assured and supported.',
      updated: UPDATED_AT,
    },
    {
      id: 'national-cluster-digital-service-blueprint',
      title: localised('Developing the national cluster digital service blueprint'),
      summary: localised(
        'Developing the national cluster digital service blueprint.',
      ),
      categoryId: CATEGORY_ID,
      horizon: 'next',
      status: 'exploring',
      outcome: 'Roles, pathways, configuration and onboarding are clearer for delivery teams and stakeholders.',
      updated: UPDATED_AT,
    },
    {
      id: 'wccg-gptr-migration-work',
      title: localised('Progressing WCCG and GPTR migration work'),
      summary: localised(
        'Progressing WCCG and GPTR migration work, including VCF migration, UAT and production cloud migration planning.',
      ),
      categoryId: CATEGORY_ID,
      horizon: 'next',
      status: 'exploring',
      outcome: 'Migration activity is better sequenced, risk-managed and ready for delivery.',
      updated: UPDATED_AT,
    },
    {
      id: 'wccg-enhancements-preparation',
      title: localised('Assessing and preparing WCCG enhancements'),
      summary: localised(
        'Assessing and preparing WCCG enhancements including clinical notes, BCU ePOC replacement, SBU ECHO reports, Velindre hospital-initiated referrals and fixed manual referral fields so high-value enhancements are understood, prioritised and prepared for delivery decisions.',
      ),
      categoryId: CATEGORY_ID,
      horizon: 'next',
      status: 'exploring',      outcome: 'High-value enhancements are understood, prioritised and prepared for delivery decisions.',      updated: UPDATED_AT,
    },
    {
      id: 'resource-publisher',
      title: localised('Making Resource Publisher available to practices'),
      summary: localised(
        'Making Resource Publisher available to practices.',
      ),
      categoryId: CATEGORY_ID,
      horizon: 'next',
      status: 'exploring',
      outcome: 'Template publishing and future service use can be better supported at practice level.',
      updated: UPDATED_AT,
    },
    {
      id: 'gptr-improvements',
      title: localised('Progressing GPTR improvements such as editable pathology requests before sample collection'),
      summary: localised(
        'Progressing GPTR improvements such as editable pathology requests before sample collection so users have more flexibility to correct requests earlier and reduce avoidable rework.',
      ),
      categoryId: CATEGORY_ID,
      horizon: 'next',
      status: 'exploring',      outcome: 'Users have more flexibility to correct requests earlier and reduce avoidable rework.',      updated: UPDATED_AT,
    },
    {
      id: 'eps-improvement-work',
      title: localised('Continuing EPS improvement work'),
      summary: localised(
        'Continuing EPS improvement work, including bulk signing and related priorities where funding and impact assessment activity allow, so prescribing workflows become safer, more efficient and better aligned to future service needs.',
      ),
      categoryId: CATEGORY_ID,
      horizon: 'next',
      status: 'exploring',      outcome: 'Prescribing workflows become safer, more efficient and better aligned to future service needs.',      updated: UPDATED_AT,
    },
    {
      id: 'gp2gp-cross-border-discovery',
      title: localised('Exploring GP2GP cross-border discovery'),
      summary: localised(
        'Exploring GP2GP cross-border discovery.',
      ),
      categoryId: CATEGORY_ID,
      horizon: 'later',
      status: 'exploring',
      outcome: 'The team can understand options for improving electronic transfer of GP patient records.',
      updated: UPDATED_AT,
    },
    {
      id: 'emis-web-optum-roadmap-items',
      title: localised('Considering future EMIS Web and Optum roadmap items'),
      summary: localised(
        'Considering future EMIS Web and Optum roadmap items such as EMIS-X Browser, EMIS-X Companion App, Desktop Integration API, Dynamic Templates, Ardens, COLOFIT, ENOIDS and Structured Medicine Dosage Syntax so potential supplier-led changes are understood early and can be assessed against Welsh priorities.',
      ),
      categoryId: CATEGORY_ID,
      horizon: 'later',
      status: 'exploring',      outcome: 'Potential supplier-led changes are understood early and can be assessed against Welsh priorities.',      updated: UPDATED_AT,
    },
    {
      id: 'nhs-wales-app-enhancements',
      title: localised('Exploring future NHS Wales App enhancements'),
      summary: localised(
        'Exploring future NHS Wales App enhancements, including proxy enhancements and GP IT registration, where these align to wider product direction, so future app opportunities are assessed against user need, strategic fit and delivery readiness.',
      ),
      categoryId: CATEGORY_ID,
      horizon: 'later',
      status: 'exploring',      outcome: 'Future app opportunities are assessed against user need, strategic fit and delivery readiness.',      updated: UPDATED_AT,
    },
    {
      id: 'safety-and-resilience-items',
      title: localised('Considering future safety and resilience items'),
      summary: localised(
        'Considering future safety and resilience items including National Record Locator, Panic Button 2.0, reasonable adjustment patient flags and GP2GP transport or failure rate improvements so future resilience and safety improvements can be assessed and sequenced in line with service risk.',
      ),
      categoryId: CATEGORY_ID,
      horizon: 'later',
      status: 'exploring',      outcome: 'Future resilience and safety improvements can be assessed and sequenced in line with service risk.',      updated: UPDATED_AT,
    },
    {
      id: 'future-eps-priorities',
      title: localised('Continuing to review future electronic prescribing priorities'),
      summary: localised(
        'Continuing to review future electronic prescribing priorities such as post-dated scripts, CIS2 phase 2 and other EPS priorities where dependencies, funding and strategic fit are clear, so future EPS work is considered in a way that balances value, readiness and delivery constraints.',
      ),
      categoryId: CATEGORY_ID,
      horizon: 'later',
      status: 'exploring',      outcome: 'Future EPS work is considered in a way that balances value, readiness and delivery constraints.',      updated: UPDATED_AT,
    },
  ],

  recentlyDelivered: {
    id: 'recently-delivered',
    heading: localised('Recently delivered'),
    description: localised(
      'Work we have completed recently and that is now live in the service.',
    ),
    placeholder: localised(
      'Content to be confirmed. This section will list recently delivered work once reviewed and agreed with the service team.',
    ),
    items: [
      {
        id: 'aws-pilot-2-completion',
        title: localised('AWS Pilot 2 completion'),
        summary: localised(
          'AWS Pilot 2 completion, supporting the wider move towards modernised hosting foundations.',
        ),
      },
      {
        id: 'eps-sha-256-signing-test-work',
        title: localised('EPS SHA-256 signing test work completed'),
        summary: localised(
          'EPS SHA-256 signing test work completed, supporting safer electronic prescribing foundations.',
        ),
      },
      {
        id: 'avt-procurement-documentation-milestones',
        title: localised('AVT procurement documentation milestones'),
        summary: localised(
          'AVT procurement documentation milestones, including ITT requirements approval, final documentation approval and contract briefing paper progression.',
        ),
      },
      {
        id: 'sql-server-2019-upgrade-activity',
        title: localised('Completed SQL Server 2019 upgrade activity for WCCG, GP Links and GPTR'),
        summary: localised(
          'Completed SQL Server 2019 upgrade activity for WCCG, GP Links and GPTR so production infrastructure remains supported, secure and capable of meeting operational needs.',
        ),
      },
      {
        id: 'menb-writeback-to-emis',
        title: localised('MenB writeback to EMIS successfully implemented'),
        summary: localised(
          'MenB writeback to EMIS successfully implemented, supporting immunisation writeback activity.',
        ),
      },
    ],
  },

  otherDelivered: {
    id: 'other-delivered',
    heading: localised('Other work delivered this year'),
    description: localised(
      'A broader view of the delivery this year that sits outside the main roadmap horizons.',
    ),
    placeholder: localised(
      'Content to be confirmed. This section will capture wider delivery this year once reviewed and agreed with the service team.',
    ),
    items: [
      {
        id: 'laboratory-messaging-radis-risp',
        title: localised('Successfully completed the migration of laboratory messaging from RADIS to RISP across all health boards'),
        summary: localised(
          'Successfully completed the migration of laboratory messaging from RADIS to RISP across all health boards, with the final health board going live on 20/21 June, helping to modernise the service, improve resilience, and support a single national platform for pathology messaging.',
        ),
      },
    ],
  },

  notDoingNow: {
    id: 'not-doing-now',
    heading: localised('Not now'),
    description: localised(
      'Being clear about what we are not doing keeps the focus where it matters.',
    ),
    placeholder: localised(
      'Content to be confirmed. This section will explain what is out of scope for now once reviewed and agreed with the service team.',
    ),
    items: [],
  },
};
