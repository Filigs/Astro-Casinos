export default async function InputNewsBanner() {
  const avatarFile = event.target.files[0];
  const { data, error } = await supabase.storage
    .from("avatars")
    .upload("public/avatar1.png", avatarFile);

  return;
}
