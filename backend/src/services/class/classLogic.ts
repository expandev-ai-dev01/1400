/**
 * @summary
 * Class business logic (in-memory implementation)
 *
 * @module services/class/classLogic
 */

import { Class, ClassDetail, ClassListRequest, ClassGetRequest } from './classTypes';

/**
 * @remarks
 * In-memory storage for classes
 */
const classStore: ClassDetail[] = [
  {
    idClass: 1,
    name: 'Inglês Básico - Manhã',
    level: 'basic',
    targetAudience: 'adults',
    schedule: 'Segunda a Sexta, 08:00 - 10:00',
    weekDays: 'Segunda a Sexta',
    price: 450.0,
    availableSlots: 5,
    totalSlots: 15,
    description: 'Curso básico de inglês para adultos iniciantes',
    syllabus: 'Gramática básica, vocabulário essencial, conversação inicial',
    duration: '6 meses',
    materials: 'Livro didático, caderno de exercícios',
  },
  {
    idClass: 2,
    name: 'Inglês Intermediário - Tarde',
    level: 'intermediate',
    targetAudience: 'teenagers',
    schedule: 'Terça e Quinta, 14:00 - 16:00',
    weekDays: 'Terça e Quinta',
    price: 520.0,
    availableSlots: 2,
    totalSlots: 12,
    description: 'Curso intermediário para adolescentes',
    syllabus: 'Gramática intermediária, conversação avançada, escrita',
    duration: '8 meses',
    materials: 'Livro didático, material online',
  },
];

/**
 * @summary
 * Lists classes with optional filters
 *
 * @function classList
 * @module services/class/classLogic
 *
 * @param {ClassListRequest} params - Filter parameters
 *
 * @returns {Promise<Class[]>} List of classes
 */
export async function classList(params: ClassListRequest): Promise<Class[]> {
  const { level, targetAudience, schedule } = params;

  let filtered = classStore;

  if (level) {
    filtered = filtered.filter((cls) => cls.level === level);
  }

  if (targetAudience) {
    filtered = filtered.filter((cls) => cls.targetAudience === targetAudience);
  }

  if (schedule) {
    filtered = filtered.filter((cls) =>
      cls.schedule.toLowerCase().includes(schedule.toLowerCase())
    );
  }

  return filtered.map((cls) => ({
    idClass: cls.idClass,
    name: cls.name,
    level: cls.level,
    targetAudience: cls.targetAudience,
    schedule: cls.schedule,
    weekDays: cls.weekDays,
    price: cls.price,
    availableSlots: cls.availableSlots,
    totalSlots: cls.totalSlots,
    isNew: false,
    hasLimitedSlots: cls.availableSlots < 3 && cls.availableSlots > 0,
  }));
}

/**
 * @summary
 * Gets detailed class information
 *
 * @function classGet
 * @module services/class/classLogic
 *
 * @param {ClassGetRequest} params - Request parameters
 *
 * @returns {Promise<ClassDetail>} Class details
 *
 * @throws {Error} When class not found
 */
export async function classGet(params: ClassGetRequest): Promise<ClassDetail> {
  const { idClass } = params;

  const cls = classStore.find((c) => c.idClass === idClass);

  if (!cls) {
    throw new Error('classNotFound');
  }

  return cls;
}
