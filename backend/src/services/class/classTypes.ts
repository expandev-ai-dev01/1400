/**
 * @summary
 * Type definitions for class service
 *
 * @module services/class/classTypes
 */

export interface Class {
  idClass: number;
  name: string;
  level: 'basic' | 'intermediate' | 'advanced';
  targetAudience: 'children' | 'teenagers' | 'adults';
  schedule: string;
  weekDays: string;
  price: number;
  availableSlots: number;
  totalSlots: number;
  isNew?: boolean;
  hasLimitedSlots?: boolean;
}

export interface ClassDetail extends Class {
  description: string;
  syllabus: string;
  duration: string;
  materials: string;
}

export interface ClassListRequest {
  level?: string;
  targetAudience?: string;
  schedule?: string;
}

export interface ClassGetRequest {
  idClass: number;
}
