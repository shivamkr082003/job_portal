import supabaseClient from "@/utils/supabase";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
export async function getCompanies(token) {
    const supabase = await supabaseClient(token);
    const { data, error } = await supabase.from("companies").select("*");
  
    if (error) {
      console.error("Error fetching Companies:", error);
      return null;
    }
  
    return data;
  }

  export async function addNewCompany(token, _, companyData) {
    const supabase = await supabaseClient(token);
  
    const {
      name,
      logo,
      user_id, // make sure this is passed in
    } = companyData;
  
    const random = Math.floor(Math.random() * 90000);
    const fileName = `logo-${random}-${name}`;
  
    // Upload logo to Supabase Storage
    const { error: storageError } = await supabase.storage
      .from("company-logo")
      .upload(fileName, logo);
  
    if (storageError) {
      console.error("❌ Storage error:", storageError);
      throw new Error("Logo Upload Failed");
    }
  
    const logo_url = `${import.meta.env.VITE_SUPABASE_URL}/storage/v1/object/public/company-logo/${fileName}`;
  
    const { data, error: insertError } = await supabase
      .from("companies")
      .insert([{ name, logo_url, user_id }])
      .select();
  
    if (insertError) {
      console.error("❌ Insert error:", insertError);
      throw new Error("Insert Failed: " + insertError.message);
    }
  
    return data;
  }
  