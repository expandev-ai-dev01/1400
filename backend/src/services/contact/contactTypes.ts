/**
 * @summary
 * Type definitions for contact service
 *
 * @module services/contact/contactTypes
 */

export interface Contact {
  idContact: number;
  name: string;
  email: string;
  phone: string;
  interestType: string;
  idClass?: number;
  message: string;
  privacyAccepted: boolean;
  status: string;
  dateCreated: Date;
}

export interface ContactCreateRequest {
  name: string;
  email: string;
  phone: string;
  interestType: string;
  idClass?: number;
  message: string;
  privacyAccepted: boolean;
}

export interface ContactCreateResponse {
  idContact: number;
}
