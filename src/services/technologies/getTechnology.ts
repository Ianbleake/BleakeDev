// features/technologies/services/getTechnology.ts

import { supabaseBrowser } from "@/supabase/client";
import { handleError } from "@/utils/errorHandler";

export async function getTechnology(ids: (string | null)[]) {
  try {
    const cleanIds = ids.filter(Boolean) as string[];

    if (cleanIds.length === 0) return [];

    const { data, error } = await supabaseBrowser
      .from("technologies")
      .select("*")
      .in("id", cleanIds);

    if (error) throw error;

    return data;
    
  } catch (error) {
    handleError(error, "getTechnology");
  }
}
