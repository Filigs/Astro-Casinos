import React, { useEffect, useState } from "react";
import { useSupabaseClient } from "@supabase/auth-helpers-react";

export default function NewsFormBanner({ uid, url, onUpload }) {
  const supabase = useSupabaseClient();
  const [bannerUrl, setBannerUrl] = useState(null);
  const [uploading, setUploading] = useState(false);

  useEffect(() => {
    if (url) downloadImage(url);
  }, [url]);

  async function downloadImage(path) {
    try {
      const { data, error } = await supabase.storage
        .from("news-images")
        .download(path);
      if (error) {
        throw error;
      }
      const url = URL.createObjectURL(data);
      setBannerUrl(url);
    } catch (error) {
      console.log("Error downloading image: ", error);
    }
  }

  const uploadBanner = async (event) => {
    try {
      setUploading(true);

      if (!event.target.files || event.target.files.length === 0) {
        throw new Error("You must select an image to upload.");
      }

      const file = event.target.files[0];
      const fileExt = file.name.split(".").pop();
      const fileName = `${uid}.${fileExt}`;
      const filePath = `${fileName}`;

      let { error: uploadError } = await supabase.storage
        .from("news-images")
        .upload(filePath, file, { upsert: false });

      if (uploadError) {
        throw uploadError;
      }

      onUpload(filePath);
    } catch (error) {
      alert("Error uploading banner!");
      console.log(error);
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="items-center block text-center ">
      {bannerUrl ? (
        <>
          {"Banner has been uploaded successfully. "} {bannerUrl}
        </>
      ) : (
        <div />
      )}
      <div>
        <label>{"Banner"}</label>
        <div className="block md:flex ">
          <input
            className="file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-borderLight dark:file:bg-borderDark file:text-dark dark:file:text-light hover:file:bg-slate-200 dark:hover:file:bg-slate-600"
            type="file"
            id="single"
            accept="image/*"
            onChange={uploadBanner}
            disabled={uploading}
          />
        </div>
      </div>
    </div>
  );
}
