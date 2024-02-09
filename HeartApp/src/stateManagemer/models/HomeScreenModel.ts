export interface Questions {
  code: number;
  message: string;
  response: Response[];
}

export interface Response {
  id: number;
  isActive: number;
  isAllow: number;
  nameEn: string;
  nameHi: string;
  type: number;
}

export interface Answers {
  code: number;
  response: AnswersResponse[];
  message: string;
}

export interface AnswersResponse {
  id: number;
  name_en: string;
  name_hi: string;
  isActive: number;
  questionsID: number;
}
