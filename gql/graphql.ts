/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  JSON: any;
};

export type Acknowledgment = {
  __typename?: 'Acknowledgment';
  acknowledger_reference: Scalars['String'];
  acknowledger_source: Scalars['String'];
  acknowledger_type: Scalars['String'];
  acknowledgment_for: Scalars['String'];
  created_at: Scalars['String'];
  id: Scalars['ID'];
};

export type Address = {
  __typename?: 'Address';
  city: Scalars['String'];
  country: Scalars['String'];
  line1: Scalars['String'];
  line2?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  postcode: Scalars['String'];
  state?: Maybe<Scalars['String']>;
};

export type AddressInput = {
  city: Scalars['String'];
  country: Scalars['String'];
  line1: Scalars['String'];
  line2?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  postcode: Scalars['String'];
  state?: InputMaybe<Scalars['String']>;
};

export type AnalysisJob = {
  __typename?: 'AnalysisJob';
  booked_in_at?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['String']>;
  escalations: Array<Maybe<Escalation>>;
  id: Scalars['ID'];
  lab?: Maybe<Lab>;
  lab_assigned_at?: Maybe<Scalars['String']>;
  lab_code?: Maybe<Scalars['String']>;
  materialized_result_set?: Maybe<MaterializedResultSet>;
  materialized_result_set_id?: Maybe<Scalars['String']>;
  organization_key: Scalars['String'];
  partial_results_received_at?: Maybe<Scalars['String']>;
  processed_at?: Maybe<Scalars['String']>;
  request_submitted_at?: Maybe<Scalars['String']>;
  requested_lab_code?: Maybe<Scalars['String']>;
  result_set_ids: Array<Scalars['String']>;
  result_sets: Array<ResultSet>;
  results_received_at?: Maybe<Scalars['String']>;
  sample_received_at?: Maybe<Scalars['String']>;
  sample_reference?: Maybe<Scalars['String']>;
  sample_taken_at?: Maybe<Scalars['String']>;
  status: Scalars['String'];
  subject?: Maybe<Subject>;
  test_profiles: Array<TestProfile>;
  updated_at?: Maybe<Scalars['String']>;
};

export type AnalysisJobMutation = {
  __typename?: 'AnalysisJobMutation';
  sendLabRequest?: Maybe<SuccessfulResponse>;
};

export type Biomarker = {
  __typename?: 'Biomarker';
  code: Scalars['String'];
  code_aliases: Array<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  name: Scalars['String'];
  result_type: Scalars['String'];
  sex_specific: Scalars['String'];
  speciality?: Maybe<Scalars['String']>;
  units?: Maybe<Scalars['String']>;
};

export type BiomarkerResult = {
  __typename?: 'BiomarkerResult';
  abnormal_flag?: Maybe<Scalars['String']>;
  code: Scalars['String'];
  escalation_level: Scalars['String'];
  failure_reason?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  reference_ranges: Array<ReferenceRange>;
  result_type?: Maybe<Scalars['String']>;
  result_unit?: Maybe<Scalars['String']>;
  result_value?: Maybe<Scalars['String']>;
  successful: Scalars['Boolean'];
};

export type BulkOrder = {
  __typename?: 'BulkOrder';
  anonymous_subjects: Scalars['Boolean'];
  created_at: Scalars['String'];
  id: Scalars['ID'];
  organization_key: Scalars['String'];
  requested_lab: Scalars['String'];
  requested_test_profiles: Array<Scalars['String']>;
  sku: Scalars['String'];
  status: Scalars['String'];
  test_count: Scalars['Int'];
  test_ids?: Maybe<Array<Maybe<Scalars['String']>>>;
  test_sample_references?: Maybe<Array<Maybe<Scalars['String']>>>;
  tests?: Maybe<Array<Maybe<Test>>>;
  updated_at: Scalars['String'];
};

export type BulkOrdersFilter = {
  ids?: InputMaybe<Array<Scalars['String']>>;
};

export enum CollectionMethods {
  Container = 'container',
  FingerPrick = 'finger_prick',
  Swab = 'swab',
  Venous = 'venous'
}

export enum CollectionTubeVariant {
  Edta = 'edta',
  FluorideOxalate = 'fluoride_oxalate',
  GenitalSwab = 'genital_swab',
  OralSwab = 'oral_swab',
  RectalSwab = 'rectal_swab',
  SerumClotActivator = 'serum_clot_activator',
  SerumSeparator = 'serum_separator',
  UrineTube = 'urine_tube',
  UrineTubeWithoutMedium = 'urine_tube_without_medium'
}

export type Component = {
  __typename?: 'Component';
  code: Scalars['String'];
  created_at: Scalars['String'];
  id: Scalars['ID'];
  updated_at: Scalars['String'];
};

export type ContactInput = {
  email?: InputMaybe<Scalars['String']>;
  first_name: Scalars['String'];
  last_name: Scalars['String'];
};

export type CreateAcknowledgmentResponse = Escalation | JsonApiErrorResponse;

export type CreateNoteRequest = {
  admin_email: Scalars['String'];
  text: Scalars['String'];
};

export type CreateNoteResponse = EscalationNote | JsonApiErrorResponse;

export type ErrorContainerFile = {
  __typename?: 'ErrorContainerFile';
  error_type: Scalars['String'];
  filename: Scalars['String'];
  last_modified_at: Scalars['String'];
};

export type ErrorContainerFilesResponse = {
  __typename?: 'ErrorContainerFilesResponse';
  data: Array<Maybe<ErrorContainerFile>>;
  meta: ErrorContainerMeta;
};

export type ErrorContainerMeta = {
  __typename?: 'ErrorContainerMeta';
  next_continuation_token?: Maybe<Scalars['String']>;
};

export type Escalation = {
  __typename?: 'Escalation';
  acknowledgment_due_by?: Maybe<Scalars['String']>;
  acknowledgment_required_by: Array<Maybe<Scalars['String']>>;
  acknowledgments: Array<Maybe<Acknowledgment>>;
  analysis_job: AnalysisJob;
  archived_at?: Maybe<Scalars['String']>;
  completed_at?: Maybe<Scalars['String']>;
  configuration: EscalationConfiguration;
  created_at: Scalars['String'];
  escalation_notification_policy_key?: Maybe<Scalars['String']>;
  escalation_notification_step?: Maybe<Scalars['Int']>;
  escalation_reasons: Scalars['JSON'];
  fully_acknowledged_at?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  next_notification_at?: Maybe<Scalars['String']>;
  notes: Array<Maybe<EscalationNote>>;
  notes_count: Scalars['Int'];
  notification_level: Scalars['String'];
  notifications: Array<Maybe<Notification>>;
  result_set: ResultSet;
  result_set_id: Scalars['String'];
  status: Scalars['String'];
};

export type EscalationConfiguration = {
  __typename?: 'EscalationConfiguration';
  calculator_used: Scalars['String'];
  calculator_version: Scalars['String'];
};

export type EscalationNote = {
  __typename?: 'EscalationNote';
  admin_email: Scalars['String'];
  admin_id: Scalars['String'];
  created_at: Scalars['String'];
  id: Scalars['ID'];
  text: Scalars['String'];
  updated_at: Scalars['String'];
};

export type EscalationsFilters = {
  acknowledgmentStates?: InputMaybe<Array<Scalars['String']>>;
  notificationLevels?: InputMaybe<Array<Scalars['String']>>;
  statuses?: InputMaybe<Array<Scalars['String']>>;
};

export enum ForceMatchType {
  SubjectMismatch = 'subject_mismatch'
}

export type FulfillmentOrder = {
  __typename?: 'FulfillmentOrder';
  completed_at?: Maybe<Scalars['String']>;
  dispatched_at?: Maybe<Scalars['String']>;
  fulfillment_partner_id?: Maybe<Scalars['String']>;
  fulfillment_partner_job_key?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  placed_at: Scalars['String'];
  status: Scalars['String'];
  subject?: Maybe<Subject>;
  subject_key?: Maybe<Scalars['String']>;
};

export type Hl7File = {
  __typename?: 'HL7File';
  account_name?: Maybe<Scalars['String']>;
  analysis_job?: Maybe<AnalysisJob>;
  date_of_birth?: Maybe<Scalars['String']>;
  first_name?: Maybe<Scalars['String']>;
  hl7: Array<Maybe<Scalars['String']>>;
  hl7_redacted: Scalars['Boolean'];
  lab_name?: Maybe<Scalars['String']>;
  last_name?: Maybe<Scalars['String']>;
  processed_at?: Maybe<Scalars['String']>;
  sample_reference?: Maybe<Scalars['String']>;
  sample_taken_at?: Maybe<Scalars['String']>;
  sex?: Maybe<Scalars['String']>;
};

export type JsonApiError = {
  __typename?: 'JSONApiError';
  detail: Scalars['String'];
  source: JsonApiErrorSource;
  title: Scalars['String'];
};

export type JsonApiErrorResponse = {
  __typename?: 'JSONApiErrorResponse';
  errors: Array<JsonApiError>;
};

export type JsonApiErrorSource = {
  __typename?: 'JSONApiErrorSource';
  pointer: Scalars['String'];
};

export type Kit = {
  __typename?: 'Kit';
  anonymous: Scalars['Boolean'];
  created_at: Scalars['String'];
  id: Scalars['ID'];
  kit_components: Array<KitComponent>;
  priority: Scalars['Int'];
  sku: Scalars['String'];
  updated_at: Scalars['String'];
};

export type KitComponent = {
  __typename?: 'KitComponent';
  component: Component;
  created_at: Scalars['String'];
  id: Scalars['ID'];
  quantity: Scalars['Int'];
  updated_at: Scalars['String'];
};

export type KitComponentsCreateInput = {
  component_id: Scalars['String'];
  quantity: Scalars['Int'];
};

export type KitComponentsUpdateInput = {
  _destroy?: InputMaybe<Scalars['Boolean']>;
  component_id?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  quantity?: InputMaybe<Scalars['Int']>;
};

export type KitCreateInput = {
  anonymous?: InputMaybe<Scalars['Boolean']>;
  kit_components: Array<KitComponentsCreateInput>;
  priority?: InputMaybe<Scalars['Int']>;
  sku: Scalars['String'];
};

export type KitUpdateInput = {
  anonymous?: InputMaybe<Scalars['Boolean']>;
  kit_components?: InputMaybe<Array<KitComponentsUpdateInput>>;
  priority?: InputMaybe<Scalars['Int']>;
  sku?: InputMaybe<Scalars['String']>;
};

export type Lab = {
  __typename?: 'Lab';
  containers: LabContainers;
  error_containers: LabErrorContainers;
  id: Scalars['ID'];
  lab_capabilities?: Maybe<Array<Maybe<LabCapability>>>;
  name: Scalars['String'];
  status: Scalars['String'];
  total_container_errors: Scalars['Int'];
};

export type LabCapability = {
  __typename?: 'LabCapability';
  active: Scalars['String'];
  alias?: Maybe<Scalars['String']>;
  code: Scalars['String'];
};

export type LabContainers = {
  __typename?: 'LabContainers';
  pending_receipts: Scalars['Int'];
  pending_results: Scalars['Int'];
};

export type LabErrorContainers = {
  __typename?: 'LabErrorContainers';
  analysis_job_already_complete: Scalars['String'];
  analysis_job_not_found: Scalars['String'];
  invalid_hl7: Scalars['String'];
  missing_biomarkers: Scalars['String'];
  subject_mismatch: Scalars['String'];
  subject_not_found: Scalars['String'];
  unknown_error: Scalars['String'];
};

export type MaterializedResultSet = {
  __typename?: 'MaterializedResultSet';
  biomarker_results: Array<BiomarkerResult>;
  id: Scalars['ID'];
  test_profiles: Array<TestProfile>;
};

export type Mutation = {
  __typename?: 'Mutation';
  analysisJob?: Maybe<AnalysisJobMutation>;
  createEscalationAcknowledgment: CreateAcknowledgmentResponse;
  createEscalationNote: CreateNoteResponse;
  createKit: Kit;
  createOrder: Order;
  deleteErrorContainerFile: Scalars['Boolean'];
  forceMatch: ProcessingLog;
  updateEscalationNotificationLevel: UpdateEscalationNotificationLevelResponse;
  updateKit: Kit;
};


export type MutationAnalysisJobArgs = {
  id: Scalars['ID'];
};


export type MutationCreateEscalationAcknowledgmentArgs = {
  acknowledgmentFor: Scalars['String'];
  escalationId: Scalars['ID'];
};


export type MutationCreateEscalationNoteArgs = {
  escalationId: Scalars['ID'];
  noteBody: CreateNoteRequest;
};


export type MutationCreateKitArgs = {
  input: KitCreateInput;
};


export type MutationCreateOrderArgs = {
  input: OrderCreateInput;
};


export type MutationDeleteErrorContainerFileArgs = {
  filename: Scalars['String'];
  labCode: Scalars['String'];
};


export type MutationForceMatchArgs = {
  filename: Scalars['String'];
  labCode: Scalars['String'];
  type: ForceMatchType;
};


export type MutationUpdateEscalationNotificationLevelArgs = {
  escalation_id: Scalars['ID'];
  notification_level: Scalars['String'];
};


export type MutationUpdateKitArgs = {
  id: Scalars['String'];
  input: KitUpdateInput;
};

export type Notification = {
  __typename?: 'Notification';
  external_reference_key?: Maybe<Scalars['String']>;
  failed_at?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  notification_recipient: Scalars['String'];
  notification_type: Scalars['String'];
  sent_at?: Maybe<Scalars['String']>;
  status: Scalars['String'];
};

export type Order = {
  __typename?: 'Order';
  created_at: Scalars['String'];
  delivery_address?: Maybe<Address>;
  delivery_address_key?: Maybe<Scalars['String']>;
  fulfillment_order_keys?: Maybe<Array<Scalars['String']>>;
  fulfillment_orders?: Maybe<Array<FulfillmentOrder>>;
  id: Scalars['ID'];
  organization_key: Scalars['String'];
  outbound_tracking_code?: Maybe<Scalars['String']>;
  test_count?: Maybe<Scalars['Int']>;
  test_ids?: Maybe<Array<Scalars['String']>>;
  tests?: Maybe<Array<Test>>;
  updated_at: Scalars['String'];
};

export type OrderCreateInput = {
  delivery_address?: InputMaybe<AddressInput>;
  organization_key: Scalars['String'];
  requires_fulfillment?: InputMaybe<Scalars['Boolean']>;
  tests: Array<TestInput>;
};

export type OrdersFilter = {
  search?: InputMaybe<Array<Scalars['String']>>;
};

export type PaginatedAnalysisJobsResponse = {
  __typename?: 'PaginatedAnalysisJobsResponse';
  data?: Maybe<Array<AnalysisJob>>;
  pagination: PaginationMeta;
};

export type PaginatedBiomarkersResponse = {
  __typename?: 'PaginatedBiomarkersResponse';
  data: Array<Maybe<Biomarker>>;
  pagination?: Maybe<PaginationMeta>;
};

export type PaginatedBulkOrdersResponse = {
  __typename?: 'PaginatedBulkOrdersResponse';
  data?: Maybe<Array<BulkOrder>>;
  pagination?: Maybe<PaginationMeta>;
};

export type PaginatedComponentsResponse = {
  __typename?: 'PaginatedComponentsResponse';
  data?: Maybe<Array<Component>>;
  pagination?: Maybe<PaginationMeta>;
};

export type PaginatedEscalationResponse = {
  __typename?: 'PaginatedEscalationResponse';
  data: Array<Maybe<Escalation>>;
  pagination: PaginationMeta;
};

export type PaginatedFulfillmentOrdersResponse = {
  __typename?: 'PaginatedFulfillmentOrdersResponse';
  data?: Maybe<Array<FulfillmentOrder>>;
  pagination?: Maybe<PaginationMeta>;
};

export type PaginatedKitsResponse = {
  __typename?: 'PaginatedKitsResponse';
  data?: Maybe<Array<Kit>>;
  pagination?: Maybe<PaginationMeta>;
};

export type PaginatedLabsResponse = {
  __typename?: 'PaginatedLabsResponse';
  data?: Maybe<Array<Lab>>;
  pagination?: Maybe<PaginationMeta>;
};

export type PaginatedOrdersResponse = {
  __typename?: 'PaginatedOrdersResponse';
  data?: Maybe<Array<Order>>;
  pagination?: Maybe<PaginationMeta>;
};

export type PaginatedProcessingLogsResponse = {
  __typename?: 'PaginatedProcessingLogsResponse';
  data: Array<Maybe<ProcessingLog>>;
  pagination?: Maybe<PaginationMeta>;
};

export type PaginatedTestProfilesResponse = {
  __typename?: 'PaginatedTestProfilesResponse';
  data?: Maybe<Array<TestProfile>>;
  pagination?: Maybe<PaginationMeta>;
};

export type PaginatedTestsResponse = {
  __typename?: 'PaginatedTestsResponse';
  data?: Maybe<Array<Test>>;
  pagination?: Maybe<PaginationMeta>;
};

export type PaginationMeta = {
  __typename?: 'PaginationMeta';
  current?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  next?: Maybe<Scalars['Int']>;
  prev?: Maybe<Scalars['Int']>;
  records?: Maybe<Scalars['Int']>;
};

export type ProcessingLog = {
  __typename?: 'ProcessingLog';
  action_type?: Maybe<Scalars['String']>;
  admin_id?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['String']>;
  error_category?: Maybe<Scalars['String']>;
  error_details?: Maybe<Scalars['JSON']>;
  file_archive_location?: Maybe<Scalars['String']>;
  file_uri?: Maybe<Scalars['String']>;
  processed_successfully?: Maybe<Scalars['Boolean']>;
  result_type?: Maybe<Scalars['String']>;
  sample_reference?: Maybe<Scalars['String']>;
};

export type ProcessingLogFilters = {
  analysisJobReferenceIds?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  labCodes?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sampleReferences?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type Query = {
  __typename?: 'Query';
  _empty?: Maybe<Scalars['String']>;
  analysisJob?: Maybe<AnalysisJob>;
  analysisJobs: PaginatedAnalysisJobsResponse;
  biomarker: Biomarker;
  biomarkers: PaginatedBiomarkersResponse;
  bulkOrder?: Maybe<BulkOrder>;
  bulkOrders: PaginatedBulkOrdersResponse;
  components: PaginatedComponentsResponse;
  errorContainerFile: Hl7File;
  errorContainerFiles?: Maybe<ErrorContainerFilesResponse>;
  escalation?: Maybe<Escalation>;
  escalations?: Maybe<PaginatedEscalationResponse>;
  fulfillmentOrder?: Maybe<FulfillmentOrder>;
  fulfillmentOrders: PaginatedFulfillmentOrdersResponse;
  kit?: Maybe<Kit>;
  kits: PaginatedKitsResponse;
  lab?: Maybe<Lab>;
  labs: PaginatedLabsResponse;
  order?: Maybe<Order>;
  orders: PaginatedOrdersResponse;
  ping: Scalars['Boolean'];
  processingLogs?: Maybe<PaginatedProcessingLogsResponse>;
  subject?: Maybe<Subject>;
  test?: Maybe<Test>;
  testProfile?: Maybe<TestProfile>;
  testProfiles: PaginatedTestProfilesResponse;
  tests: PaginatedTestsResponse;
};


export type QueryAnalysisJobArgs = {
  id: Scalars['ID'];
};


export type QueryAnalysisJobsArgs = {
  page?: InputMaybe<Scalars['Int']>;
  pageSize?: InputMaybe<Scalars['Int']>;
};


export type QueryBiomarkerArgs = {
  id: Scalars['String'];
};


export type QueryBiomarkersArgs = {
  page?: InputMaybe<Scalars['Int']>;
  pageSize?: InputMaybe<Scalars['Int']>;
};


export type QueryBulkOrderArgs = {
  id?: InputMaybe<Scalars['String']>;
};


export type QueryBulkOrdersArgs = {
  filter?: InputMaybe<BulkOrdersFilter>;
  page?: InputMaybe<Scalars['Int']>;
  pageSize?: InputMaybe<Scalars['Int']>;
};


export type QueryComponentsArgs = {
  page?: InputMaybe<Scalars['Int']>;
  pageSize?: InputMaybe<Scalars['Int']>;
};


export type QueryErrorContainerFileArgs = {
  filename: Scalars['String'];
  labCode: Scalars['String'];
};


export type QueryErrorContainerFilesArgs = {
  continuationToken?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<Scalars['String']>;
  labCode: Scalars['String'];
};


export type QueryEscalationArgs = {
  id: Scalars['ID'];
};


export type QueryEscalationsArgs = {
  filters?: InputMaybe<EscalationsFilters>;
  page?: InputMaybe<Scalars['Int']>;
  pageSize?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
};


export type QueryFulfillmentOrderArgs = {
  id?: InputMaybe<Scalars['String']>;
};


export type QueryFulfillmentOrdersArgs = {
  page?: InputMaybe<Scalars['Int']>;
  pageSize?: InputMaybe<Scalars['Int']>;
};


export type QueryKitArgs = {
  id: Scalars['String'];
};


export type QueryKitsArgs = {
  page?: InputMaybe<Scalars['Int']>;
  pageSize?: InputMaybe<Scalars['Int']>;
};


export type QueryLabArgs = {
  id?: InputMaybe<Scalars['String']>;
};


export type QueryLabsArgs = {
  page?: InputMaybe<Scalars['Int']>;
  pageSize?: InputMaybe<Scalars['Int']>;
};


export type QueryOrderArgs = {
  id?: InputMaybe<Scalars['String']>;
};


export type QueryOrdersArgs = {
  filter?: InputMaybe<OrdersFilter>;
  page?: InputMaybe<Scalars['Int']>;
  pageSize?: InputMaybe<Scalars['Int']>;
};


export type QueryProcessingLogsArgs = {
  filters?: InputMaybe<ProcessingLogFilters>;
  page?: InputMaybe<Scalars['Int']>;
  pageSize?: InputMaybe<Scalars['Int']>;
};


export type QuerySubjectArgs = {
  id?: InputMaybe<Scalars['String']>;
};


export type QueryTestArgs = {
  id?: InputMaybe<Scalars['String']>;
};


export type QueryTestProfileArgs = {
  id?: InputMaybe<Scalars['String']>;
};


export type QueryTestProfilesArgs = {
  page?: InputMaybe<Scalars['Int']>;
  pageSize?: InputMaybe<Scalars['Int']>;
};


export type QueryTestsArgs = {
  filter?: InputMaybe<TestsFilter>;
  page?: InputMaybe<Scalars['Int']>;
  pageSize?: InputMaybe<Scalars['Int']>;
};

export type ReferenceRange = {
  __typename?: 'ReferenceRange';
  lower_bound?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  operator?: Maybe<Scalars['String']>;
  upper_bound?: Maybe<Scalars['String']>;
};

export type ResultSet = {
  __typename?: 'ResultSet';
  biomarker_results: Array<BiomarkerResult>;
  id: Scalars['ID'];
  test_profiles: Array<TestProfile>;
};

export type SampleCollectionInput = {
  collection_method: Scalars['String'];
  type: Scalars['String'];
};

export enum SampleTypes {
  Blood = 'blood',
  Genital = 'genital',
  Oral = 'oral',
  Rectal = 'rectal',
  Saliva = 'saliva',
  Urine = 'urine'
}

export type Subject = {
  __typename?: 'Subject';
  address?: Maybe<Address>;
  anonymity_type?: Maybe<Scalars['String']>;
  date_of_birth?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  first_name?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  last_name?: Maybe<Scalars['String']>;
  mobile_phone_number?: Maybe<Scalars['String']>;
  sex?: Maybe<Scalars['String']>;
};

export type SubjectInput = {
  anonymity_type: Scalars['String'];
  contact?: InputMaybe<ContactInput>;
  date_of_birth?: InputMaybe<Scalars['String']>;
  sex?: InputMaybe<Scalars['String']>;
};

export type SuccessfulResponse = {
  __typename?: 'SuccessfulResponse';
  status?: Maybe<Scalars['String']>;
};

export type Test = {
  __typename?: 'Test';
  analysis_job?: Maybe<AnalysisJob>;
  analysis_job_key?: Maybe<Scalars['String']>;
  bulk_order?: Maybe<BulkOrder>;
  bulk_order_key?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['String']>;
  delivery_address?: Maybe<Address>;
  delivery_address_key?: Maybe<Scalars['String']>;
  failure_cause?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  inbound_tracking_code?: Maybe<Scalars['String']>;
  order?: Maybe<Order>;
  order_key?: Maybe<Scalars['String']>;
  organization_key: Scalars['String'];
  result_set_key?: Maybe<Scalars['String']>;
  sample_reference?: Maybe<Scalars['String']>;
  status: Scalars['String'];
  subject?: Maybe<Subject>;
  subject_key?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['String']>;
};

export type TestAnalysisInput = {
  lab?: InputMaybe<Scalars['String']>;
  required: Scalars['Boolean'];
};

export type TestInput = {
  analysis: TestAnalysisInput;
  sample?: InputMaybe<SampleCollectionInput>;
  subject: SubjectInput;
  test_profiles?: InputMaybe<Array<Scalars['String']>>;
};

export type TestProfile = {
  __typename?: 'TestProfile';
  biomarkers: Array<Biomarker>;
  collection_methods: Array<CollectionMethods>;
  collection_tube_variant?: Maybe<CollectionTubeVariant>;
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  minimum_collection_volume?: Maybe<Scalars['Int']>;
  name: Scalars['String'];
  sample_processing_time_in_days?: Maybe<Scalars['Int']>;
  sample_type: SampleTypes;
};

export type TestsFilter = {
  collectionMethods?: InputMaybe<Array<CollectionMethods>>;
  search?: InputMaybe<Array<Scalars['String']>>;
  statuses?: InputMaybe<Array<Scalars['String']>>;
};

export type UpdateEscalationNotificationLevelResponse = Escalation | JsonApiErrorResponse;

export type GetTestProfileQueryVariables = Exact<{
  testProfileId?: InputMaybe<Scalars['String']>;
}>;


export type GetTestProfileQuery = { __typename?: 'Query', testProfile?: { __typename?: 'TestProfile', id: string, name: string, description?: string | null, sample_type: SampleTypes, collection_methods: Array<CollectionMethods>, collection_tube_variant?: CollectionTubeVariant | null, minimum_collection_volume?: number | null, sample_processing_time_in_days?: number | null, biomarkers: Array<{ __typename?: 'Biomarker', code: string, name: string }> } | null };

export type GetTestProfilesQueryVariables = Exact<{
  page?: InputMaybe<Scalars['Int']>;
  pageSize?: InputMaybe<Scalars['Int']>;
}>;


export type GetTestProfilesQuery = { __typename?: 'Query', testProfiles: { __typename?: 'PaginatedTestProfilesResponse', data?: Array<{ __typename?: 'TestProfile', id: string, name: string }> | null } };

export type GetTestQueryVariables = Exact<{
  testId?: InputMaybe<Scalars['String']>;
}>;


export type GetTestQuery = { __typename?: 'Query', test?: { __typename?: 'Test', id: string, status: string, order_key?: string | null, bulk_order_key?: string | null, result_set_key?: string | null, failure_cause?: string | null, analysis_job_key?: string | null, subject_key?: string | null, inboundTrackingCode?: string | null, delivery_address?: { __typename?: 'Address', name: string, line1: string, line2?: string | null, city: string, postcode: string, country: string } | null } | null };

export type GetTestsQueryVariables = Exact<{
  page?: InputMaybe<Scalars['Int']>;
  pageSize?: InputMaybe<Scalars['Int']>;
  filter?: InputMaybe<TestsFilter>;
}>;


export type GetTestsQuery = { __typename?: 'Query', tests: { __typename?: 'PaginatedTestsResponse', data?: Array<{ __typename?: 'Test', id: string, bulk_order_key?: string | null, status: string, sampleReference?: string | null, organizationKey: string }> | null } };


export const GetTestProfileDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getTestProfile"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"testProfileId"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"testProfile"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"testProfileId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"biomarkers"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"sample_type"}},{"kind":"Field","name":{"kind":"Name","value":"collection_methods"}},{"kind":"Field","name":{"kind":"Name","value":"collection_tube_variant"}},{"kind":"Field","name":{"kind":"Name","value":"minimum_collection_volume"}},{"kind":"Field","name":{"kind":"Name","value":"sample_processing_time_in_days"}}]}}]}}]} as unknown as DocumentNode<GetTestProfileQuery, GetTestProfileQueryVariables>;
export const GetTestProfilesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getTestProfiles"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"page"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"pageSize"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"testProfiles"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"page"},"value":{"kind":"Variable","name":{"kind":"Name","value":"page"}}},{"kind":"Argument","name":{"kind":"Name","value":"pageSize"},"value":{"kind":"Variable","name":{"kind":"Name","value":"pageSize"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]} as unknown as DocumentNode<GetTestProfilesQuery, GetTestProfilesQueryVariables>;
export const GetTestDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getTest"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"testId"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"test"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"testId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"order_key"}},{"kind":"Field","name":{"kind":"Name","value":"bulk_order_key"}},{"kind":"Field","name":{"kind":"Name","value":"result_set_key"}},{"kind":"Field","name":{"kind":"Name","value":"failure_cause"}},{"kind":"Field","name":{"kind":"Name","value":"delivery_address"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"line1"}},{"kind":"Field","name":{"kind":"Name","value":"line2"}},{"kind":"Field","name":{"kind":"Name","value":"city"}},{"kind":"Field","name":{"kind":"Name","value":"postcode"}},{"kind":"Field","name":{"kind":"Name","value":"country"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"inboundTrackingCode"},"name":{"kind":"Name","value":"inbound_tracking_code"}},{"kind":"Field","name":{"kind":"Name","value":"analysis_job_key"}},{"kind":"Field","name":{"kind":"Name","value":"subject_key"}}]}}]}}]} as unknown as DocumentNode<GetTestQuery, GetTestQueryVariables>;
export const GetTestsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getTests"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"page"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"pageSize"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"filter"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"TestsFilter"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"tests"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"page"},"value":{"kind":"Variable","name":{"kind":"Name","value":"page"}}},{"kind":"Argument","name":{"kind":"Name","value":"pageSize"},"value":{"kind":"Variable","name":{"kind":"Name","value":"pageSize"}}},{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"Variable","name":{"kind":"Name","value":"filter"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"bulk_order_key"}},{"kind":"Field","alias":{"kind":"Name","value":"sampleReference"},"name":{"kind":"Name","value":"sample_reference"}},{"kind":"Field","alias":{"kind":"Name","value":"organizationKey"},"name":{"kind":"Name","value":"organization_key"}},{"kind":"Field","name":{"kind":"Name","value":"status"}}]}}]}}]}}]} as unknown as DocumentNode<GetTestsQuery, GetTestsQueryVariables>;