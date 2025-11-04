/**
 * @summary
 * Contact business logic (in-memory implementation)
 *
 * @module services/contact/contactLogic
 */

import { Contact, ContactCreateRequest, ContactCreateResponse } from './contactTypes';
import { validateRequiredParam } from '@/utils/validation';

/**
 * @remarks
 * In-memory storage for contacts
 */
const contactStore: Contact[] = [];
let nextId = 1;

/**
 * @summary
 * Creates a new contact form submission
 *
 * @function contactCreate
 * @module services/contact/contactLogic
 *
 * @param {ContactCreateRequest} params - Contact data
 *
 * @returns {Promise<ContactCreateResponse>} Created contact ID
 *
 * @throws {Error} When validation fails
 */
export async function contactCreate(params: ContactCreateRequest): Promise<ContactCreateResponse> {
  const { name, email, phone, interestType, idClass, message, privacyAccepted } = params;

  /**
   * @validation Validate required parameters
   */
  validateRequiredParam(name, 'name');
  validateRequiredParam(email, 'email');
  validateRequiredParam(phone, 'phone');
  validateRequiredParam(message, 'message');

  if (!privacyAccepted) {
    throw new Error('privacyAcceptanceRequired');
  }

  const contact: Contact = {
    idContact: nextId++,
    name,
    email,
    phone,
    interestType,
    idClass,
    message,
    privacyAccepted,
    status: 'pending',
    dateCreated: new Date(),
  };

  contactStore.push(contact);

  return { idContact: contact.idContact };
}
