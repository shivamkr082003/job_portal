import supabaseClient, { supabaseUrl } from "@/utils/supabase";

// Fetch Companies
export async function getCompanies(token) {
  const supabase = await supabaseClient(token);
  const { data, error } = await supabase.from("companies").select("*");

  if (error) {
    console.error("Error fetching Companies:", error);
    return null;
  }

  return data;
}

// Add Company
export async function addNewCompany(token, _, companyData) {


  console.log(companyData);
  const supabase = await supabaseClient(token);

  const random = Math.floor(Math.random() * 90000);
  const fileName = `logo-${random}-${companyData.name}`;


  const { error: storageError } = await supabase.storage
    .from("company-logo")
    .upload(fileName, companyData.logo);
  
    // console.log("hjey");

  if (storageError) throw new Error("Error uploading Company Logo");

  const logo_url = `${supabaseUrl}/storage/v1/object/public/company-logo//${fileName}`;

  console.log(logo_url);
  if(!logo_url){
    console.log("error in logo_url");
  }
  if(!companyData?.name){
    console.log("company nam error");
    
  }

  console.log(typeof(logo_url),typeof(companyData?.name));
  

  // console.log(companyData);
  // console.log(companyData?.user_id);
  // console.log(typeof(companyData?.user_id));
  
  
  const cleanUserId = String(companyData?.user_id).trim();

  console.log("Final user_id to insert:", cleanUserId, typeof(cleanUserId));
  console.log(logo_url);
  

  const { data, error } = await supabase
    .from("companies")
    .insert([
        {
          name: companyData?.name,
          logo_url: logo_url,
          user_id: cleanUserId,
        },
      ]
    )
    .select();

  if (error) {
    console.log(error);
    throw new Error(error);
  }

  return data;
}
