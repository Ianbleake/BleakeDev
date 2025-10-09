import { PostgrestError } from "@supabase/supabase-js";

export type AppErrorShape = {
  code: number;
  message: string;
  origin: string;
};

// Códigos internos
export const ERROR_CODES = {
  UNKNOWN: 1000,
  NETWORK: 1001,
  SUPABASE: 1002,
  VALIDATION: 1003,
  UNAUTHORIZED: 1004,
  NOT_FOUND: 1005,
  CONFLICT: 1006,
  FORBIDDEN: 1007,
  INTERNAL: 1008,
};

export function handleError(error: unknown, origin: string): never {
  // 🔹 Caso 1: Error de Supabase
  if (isSupabaseError(error)) {
    const formatted = formatSupabaseError(error, origin);
    throw formatted;
  }

  // 🔹 Caso 2: Error nativo (fetch, JS, etc.)
  if (error instanceof Error) {
    throw {
      code: ERROR_CODES.UNKNOWN,
      message: error.message || "Error desconocido",
      origin,
    } satisfies AppErrorShape;
  }

  // 🔹 Caso 3: Error plano con campo message
  if (isPlainErrorWithMessage(error)) {
    throw {
      code: ERROR_CODES.UNKNOWN,
      message: error.message,
      origin,
    } satisfies AppErrorShape;
  }

  // 🔹 Caso 4: Error totalmente inesperado
  throw {
    code: ERROR_CODES.UNKNOWN,
    message: "Ha ocurrido un error inesperado.",
    origin,
  } satisfies AppErrorShape;
}

// ✅ Type guard para errores Supabase
function isSupabaseError(error: unknown): error is PostgrestError {
  return (
    typeof error === "object" &&
    error !== null &&
    "message" in error &&
    "code" in error &&
    typeof (error as { message: unknown }).message === "string" &&
    typeof (error as { code: unknown }).code === "string"
  );
}

// ✅ Type guard para objetos planos con `message`
function isPlainErrorWithMessage(error: unknown): error is { message: string } {
  return (
    typeof error === "object" &&
    error !== null &&
    "message" in error &&
    typeof (error as { message: unknown }).message === "string"
  );
}

// ✅ Formateador de errores Supabase/Postgres
function formatSupabaseError(error: PostgrestError, origin: string): AppErrorShape {
  let message = error.message;
  let code = ERROR_CODES.SUPABASE;

  switch (error.code) {
    case "PGRST116":
      message = "El recurso solicitado no existe.";
      code = ERROR_CODES.NOT_FOUND;
      break;
    case "42501":
      message = "No tienes permisos para realizar esta acción.";
      code = ERROR_CODES.UNAUTHORIZED;
      break;
    case "PGRST301":
      message = "Petición inválida o malformada.";
      code = ERROR_CODES.VALIDATION;
      break;
    case "23505":
      message = "Este registro ya existe (violación de restricción única).";
      code = ERROR_CODES.CONFLICT;
      break;
    case "23503":
      message = "La referencia a otro registro no es válida (violación de llave foránea).";
      code = ERROR_CODES.VALIDATION;
      break;
    case "22P02":
      message = "El formato de los datos enviados no es válido.";
      code = ERROR_CODES.VALIDATION;
      break;
    case "42703":
      message = "La columna especificada no existe.";
      code = ERROR_CODES.INTERNAL;
      break;
    case "42P01":
      message = "La tabla o vista especificada no existe.";
      code = ERROR_CODES.INTERNAL;
      break;
    case "401":
      message = "Sesión inválida o token expirado.";
      code = ERROR_CODES.UNAUTHORIZED;
      break;
    default:
      message = error.message || "Error desconocido en la base de datos.";
      code = ERROR_CODES.SUPABASE;
      break;
  }

  return { code, message, origin };
}
